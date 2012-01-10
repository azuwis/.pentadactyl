/* use strict */
XML.ignoreWhitespace = false;
XML.prettyPrinting = false;
var INFO =
<plugin name="flashblock" version="1.1"
        href="http://dactyl.sf.net/pentadactyl/plugins#flashblock-plugin"
        summary="Flash Blocker"
        xmlns={NS}>
    <author email="maglione.k@gmail.com">Kris Maglione</author>
    <license href="http://opensource.org/licenses/mit-license.php">MIT</license>
    <project name="Pentadactyl" min-version="1.0"/>
    <p>
        This plugin provides the same features as the ever popular FlashBlock
        Firefox add-on. Place holders are substituted for flash animations and
        embedded videos. When clicked, the original embedded content is
        restored. Additionally, this plugin provides options to control which
        sites can play animations without restrictions and triggers to toggle
        the playing of animations on the current page.
    </p>
    <item>
        <tags>'fb' 'flashblock'</tags>
        <spec>'flashblock' 'fb'</spec>
        <type>boolean</type>
        <default>true</default>
        <description>
            <p>
                Controls the blocking of flash animations. When true, place
                holders are substituted for flash animations on untrusted sites.
            </p>
        </description>
    </item>
    <item>
        <tags>'fbw' 'fbwhitelist'</tags>
        <spec>'fbwhitelist' 'fbw'</spec>
        <type>sitelist</type>
        <default></default>
        <description>
            <p>
                Controls which sites may play flash animations without user
                intervention. See <ex>:mk{config.name.toLowerCase()}rc</ex>.
            </p>
        </description>
    </item>
    <item>
        <tags>:flashplay :flp</tags>
        <strut/>
        <spec>:flashplay</spec>
        <description>
            <p>
                Plays any blocked flash animations on the current page.
            </p>
        </description>
    </item>
    <item>
        <tags>:flashstop :fls</tags>
        <strut/>
        <spec>:flashstop</spec>
        <description>
            <p>
                Stops any currently playing flash animations on the current
                page.
            </p>
        </description>
    </item>
    <item>
        <tags>:flashtoggle :flt</tags>
        <strut/>
        <spec>:flashtoggle</spec>
        <description>
            <p>
                Toggles the playing of all animations on the current page. If
                any flash animations are currently blocked, all may begin
                playing. Otherwise, all animations are stopped.
            </p>
            <example><ex>:map</ex> -silent <k name="A-p" link="false"/> <ex>:flashtoggle</ex><k name="CR"/></example>
        </description>
    </item>
</plugin>;

if ("noscriptOverlay" in window)
    noscriptOverlay.safeAllow("dactyl:", true, false);

group.options.add(["flashblock", "fb"],
    "Enable blocking of flash animations",
    "boolean", true,
    { setter: reload });
group.options.add(["fbwhitelist", "fbw"],
    "Sites which may run flash animations without prompting",
    "sitelist", "",
    {
        completer: function (context) completion.visibleHosts(context),
        privateData: true,
        setter: reload,
        validator: function () true
    });

["Play", "Stop"].forEach(function (action)
    group.commands.add(["flash" + action, "fl" + action[0]].map(String.toLowerCase),
        action + " all flash animations on the current page",
        function () { postMessage(content, "flashblock" + action) },
        { argCount: "0" }, true));
group.commands.add(["flashtoggle", "flt"],
    "Toggle playing of flash animations on the current page",
    function () {
        if (buffer.allFrames().some(function (w) DOM("pseudoembed", w.document).length))
            commands.get("flashplay").action();
        else
            commands.get("flashstop").action();
    },
    { argCount: "0" }, true);

group.mappings.add([modes.NORMAL], ["<Leader>fbwhitelist"],
    "Add the current site to the flash whitelist",
    function () { whitelist.op("+", whitelist.parse(content.location.hostname)) });
group.mappings.add([modes.NORMAL], ["<Leader>fbWhitelist"],
    "Toggle the current site in the flash whitelist",
    function () {
        let host = content.location.hostname;
        if (!removeHost(host))
            whitelist.op("+", whitelist.parse(host));
    });

var enabled = options.get("flashblock");
var whitelist = options.get("fbwhitelist");
function postMessage(content, message) {
    buffer.allFrames(content).forEach(function (f) f.postMessage(message, "*"));
}
function reload(values) {
    //for (let [,t] in tabs.browsers)
    //    t.contentWindow.postMessage("flashblockReload", "*");
    postMessage(window.content, "flashblockReload");
    return values;
}

function removeHost(host) {
    let len = whitelist.value.length;
    let uri = util.createURI(host);
    whitelist.value = whitelist.value.filter(function (f) !f(uri));
    return whitelist.value.length != len;
}

function onUnload() {
    group.events.unlisten(null);
}
group.events.listen(window, "flashblockCheckLoad",
    function checkLoadFlash(event) {
        if(!enabled.value || whitelist.getKey(event.target.documentURIObject))
            event.preventDefault();
        event.stopPropagation();
    }, true, true);

XML.ignoreWhitespace = true;
XML.prettyPrinting = false;
var data = {
    bindings: "dactyl://data/text/xml," + encodeURIComponent('<?xml version="1.0"?>' +
      <e4x>
        <bindings
           xmlns="http://www.mozilla.org/xbl"
           xmlns:xbl="http://www.mozilla.org/xbl"
           xmlns:html="http://www.w3.org/1999/xhtml">

          <binding id="flash">
            <implementation>
              <constructor>
                <![CDATA[
                    var myDocument = XPCNativeWrapper(document);
                    var myWindow = XPCNativeWrapper(window);

                    function copyAttribs(to, from) {
                        Array.map(from.attributes, function(attrib) {
                            to.setAttribute(attrib.name, attrib.value);
                        });
                    }
                    function capitalize(str) { return str[0].toUpperCase() + str.substr(1) };

                    function Placeholder(embed) {
                        var self = this;
                        this.embed = embed;

                        if (!document.flashblockStyle) {
                            var head = document.getElementsByTagName("head")[0];
                            var node = document.createElement("style");
                            node.setAttribute("type", "text/css");
                            head.insertBefore(node, head.firstChild);
                            document.flashblockStyle = document.styleSheets[0];
                        }

                        document.flashblockIdx = (document.flashblockIdx || 0) + 1;
                        this.idx = document.flashblockIdx;
                        embed.setAttribute("flashblock", this.idx);

                        document.flashblockStyle.insertRule("pseudoembed[flashblock='" + this.idx + "'] {}", 0);
                        this.style = document.flashblockStyle.cssRules[0].style;

                        this.div = myDocument.createElement('pseudoembed');
                        this.div.addEventListener("click", function() { self.showEmbed(true) }, true);
                        this.div.flashblockEmbed = embed;
                    }
                    Placeholder.prototype = {
                        showEmbed: function(clicked) {
                            this.embed.clicked = clicked;
                            if (this.embed.parentNode)
                                return;
                            copyAttribs(this.embed, this.div);
                            this.div.parentNode.replaceChild(this.embed, this.div);
                        },
                        hideEmbed: function() {
                            let parent = this.embed.parentNode;
                            if (!parent)
                                return;

                            this.div.setAttribute("embedtype", this.embed.localName);
                            copyAttribs(this.div, this.embed);

                            ['width', 'height'].forEach(function(dimen) {
                                this.style[dimen] = "";
                                if (this.embed[dimen])
                                    if (/%$/.test(this.embed[dimen]))
                                        this.style[dimen] = this.embed[dimen];
                                    else
                                        this.style[dimen] = parseInt(this.embed[dimen]) + "px";
                            }, this);

                            let style = myWindow.getComputedStyle(parent, "");
                            if (style.getPropertyValue("text-align") == "center") {
                                this.style.marginRight = "auto";
                                this.style.marginLeft = "auto";
                            }

                            parent.replaceChild(this.div, this.embed);
                        }
                    }

                    var parent = this.parentNode
                    var self = this;
                    if (!this.getAttribute("flashblock"))
                        this.setAttribute("flashblock", true);
                    if (this.placeholder || parent.placeholder)
                        return;
                    var objectHeight = this.getAttribute("height");
                    if ((!objectHeight || objectHeight <= 20) && !this.style.height)
                        return;
                    this.placeholder = new Placeholder(self);

                    function checkReplace(e) {
                        if (!e || e.data == "flashblockReload") {
                            if (self.clicked)
                                return;
                            let event = myDocument.createEvent("UIEvents");
                            event.initEvent("flashblockCheckLoad", true, true);
                            myDocument.dispatchEvent(event);
                            if (event.getPreventDefault())
                                self.placeholder.showEmbed();
                            else
                                self.placeholder.hideEmbed();
                          }
                          else if (e.data == "flashblockPlay")
                              self.placeholder.showEmbed(true);
                          else if (e.data == "flashblockStop")
                              self.placeholder.hideEmbed();
                    }
                    checkReplace();
                    myWindow.addEventListener("message", checkReplace, false);

                    if(this.src == this.ownerDocument.location)
                        myWindow.location = 'dactyl://data/application/xhtml+xml,' + encodeURIComponent('<?xml version="1.0" encoding="UTF-8"?>' +
                                            '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">' +
                            <html xmlns="http://www.w3.org/1999/xhtml">
                                <head><title></title></head>
                                <body>{new XML(parent.innerHTML)}</body>
                            </html>);
                ]]>
              </constructor>
            </implementation>
          </binding>
        </bindings>
      </e4x>.*.toXMLString()),
    flash: <![CDATA[data:image/png;base64,
        iVBORw0KGgoAAAANSUhEUgAAAIAAAABQCAYAAADRAH3kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ
        bWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp
        bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6
        eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEz
        NDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo
        dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw
        dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv
        IiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS
        ZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD
        cmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNl
        SUQ9InhtcC5paWQ6MjAwQjUzNDRBOTBBMTFFMDlDMzRGM0VCMEZDNzBFNjkiIHhtcE1NOkRvY3Vt
        ZW50SUQ9InhtcC5kaWQ6MjAwQjUzNDVBOTBBMTFFMDlDMzRGM0VCMEZDNzBFNjkiPiA8eG1wTU06
        RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMDBCNTM0MkE5MEExMUUwOUMz
        NEYzRUIwRkM3MEU2OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMDBCNTM0M0E5MEExMUUw
        OUMzNEYzRUIwRkM3MEU2OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1w
        bWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgATDP0AAAQqSURBVHja7JwxSBtRGMdN0RBsRBIJ4hRo
        AqIdHKqFipFsFelSHZSCZImO3SrUpXSxYAehowZUhGIcLIJIuwkRW6qLQ7RCMrjUIZgisRDiYPMf
        rhyPl8slXnK58/+b9JF730veL+++e/ddHLe3t03k/vKAHwEFIBSAUABCAQgFIBSAUABCAQgFIBSA
        UABCAQgFIBSAUABCAQgFIBSAUABCAQgFIBan2cqDdzgcul+7tLT0uKOj45XX633q8Xj8bW1tHvE1
        uVzuT5HzbDb78/Ly8vPMzExSb/9WLa93WPm5AD0CrK2tvQwEArNdXV3BSvu/uLhIpdPphUgk8oUC
        WEwAfON7e3tj1Uy8TISTk5Oo1opAARpIgI2NjTd9fX2vnU6ny6hYhUIhf3x8/GlycvIjBWhgATD5
        AwMDs1rHnZ2dZVKp1NX19fWN0uZ2u1uCwWB7d3e3T+vYw8PDBZkEFKABBNCa/GJi93draysdi8XO
        M5nMTak+fT5fSzQa9Y+Pjz8qJotuvRJQAJMF0Jr8eDx+Ojc3d1pp//Pz8z0TExM9eiSgACYKgIQv
        FAp9Fc/5+Xy+MD09nTg4OLiqNsbg4GD78vJyyOVyOcWcIJFIjCiJoVU/R1tsBCHbr8XkAxyPftCf
        uh3xENfqn53lBcB1vuxSz4jJFyUQ2xEX8SmAiWCTR3bON2ry1RKgXz3xKUCdwLlf/PYj2y+V8O3u
        7oaSyeQLJHfI9iuNh37Rv7gKYBwUwASwty+2ra6u/tI6BskcMvu9vb3n1YiAS0k946AAdQA3dsS2
        zc3N33qOFUUo0qrnOOwj6BkHBagDuKun/h87fFqbPFoi7OzsjKysrDwpJwL6RxytcVCAOiHe0sX2
        7l36Gx4e9usRQYwju7VMAUxAvbdfSxGMitMINDcRTRE6OztbR0dHE3Z9jywJKwF2/nDdH4lEftj5
        fdpqBcAtXSMmfnt7O724uJgqlVAaEYcCGABq+NQJGO7n13LiS8XBOCiACaCAUy0AijmwsVPJpWAl
        Ew/Qv1g0gnEwBzABVO+KbSjmqOQcHw6Hv2GLV680sv5l46AAdQCl22Lb2NhYoBYTr9W/bBxWwfIF
        Ifv7+9/FG0LVVgCVQ1YhhIrhoaGhZywIMQnU7YttmCRU8hgZB/3JysNk8bkC1HEFALJVwKiKIGXy
        ZWVhyrcff3MFMBE8tIEaPXUbJguTdteVQKsmEHGt/tnZpip4fX09WpysD7LX1aIquLiyvJ2amvpf
        E8iqYJMFAEY+F4Bs3+v1PpS9hs8FNKgA5SRQ4JNBNhZAOR309/e/M/rZwKOjo/fqZZ8CNKgAgE8H
        33MBFPj7APdcAPWKwF8IsZkA5O6wIogCEApAKAChAIQCEApAKAChAIQCEApAKAChAIQCEApAKACh
        AIQCEApAKAChAMQG/BNgAEl7ti/J4yGiAAAAAElFTkSuQmCC
    ]]>,
    play: <![CDATA[data:image/png;base64,
        iVBORw0KGgoAAAANSUhEUgAAAIAAAABQCAYAAADRAH3kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ
        bWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp
        bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6
        eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEz
        NDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo
        dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw
        dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv
        IiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS
        ZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD
        cmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNl
        SUQ9InhtcC5paWQ6MjAwQjUzM0NBOTBBMTFFMDlDMzRGM0VCMEZDNzBFNjkiIHhtcE1NOkRvY3Vt
        ZW50SUQ9InhtcC5kaWQ6MjAwQjUzM0RBOTBBMTFFMDlDMzRGM0VCMEZDNzBFNjkiPiA8eG1wTU06
        RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNDNBMzREN0E5MDcxMUUwOUMz
        NEYzRUIwRkM3MEU2OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNDNBMzREOEE5MDcxMUUw
        OUMzNEYzRUIwRkM3MEU2OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1w
        bWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr4XSnoAAAQlSURBVHja7JyxSxtRHMebEnKEJIpdqoip
        tJZWhIBjS3G6Wzq1y3UQxLbSpUPXglKkKHQtQZBiUxEcqg6ZuiST9i+wg0KlmATRLooaCQmCve9w
        cH28nJd4yeXi9zOZI/d+z/t97t27d79L4OLi4ga5vtzkIaAAhAIQCkAoAKEAhAIQCkAoAKEAhAIQ
        CkAoAKEAhAIQCkAoAKEAhAIQCkAoAKEAxOcE/dz5QCDg+LsLCwt3Ojs7tWg0mohEInFFUW6J3ymX
        y4dnZ2f5YrG4eXx8nJmYmMg5bd+v5fUBP78X4ESApaWlJz09PS87Ojru19r+ycnJ7/39/W9jY2M/
        KYDPBMAZb/ChnsTLRMjlch/tRgQK0EICrKysvOjt7X0VDAbDbsU6Pz8v7e3tpXRd/04BWlgAJN84
        89/a7ZfP5/8WCoWjUqlUMbeFw+FQX19fVzwev223rzESzMkkoAAtIIBd8k9PT4vZbHZ7cXHxz8HB
        QaVam93d3aHx8fG7mqY9MCaMMacSUACPBbBLvpH4zcnJyc1a25+dnU2oqppwIgEF8FAATPgGBwe/
        iNd847auMjU1lVlfXz+qN8bIyEiXIYIaCoUUcU6wtbX1xpwY+vU4tsVCEGb7jUg+wP7G6JGtVCrl
        /xZQjHiI6/dj53sBcJ8vu9VzI/miBOJ2xEV8CuAhWOSRXfPdSr5VArTrJD4FaBK49otnP2b71SZ8
        q6urmpFIHZM7zPZrjYd20b44CqAfFMADsLYvbkun07/s9lEUJYSZvXHX8KweEXAr6aQfFKAJ4MGO
        uG1tba3gZF9RhKGhoYiT/bCO4KQfFKAJ4Kme9TNW+OwWeexESKVSz+fn5x9dJgLaRxy7flCAJiE+
        0sXy7lXaGx4evudEBDGO7NEyBfAA69p+I0VwKw4FaHEgwvT09ON2/h+DTLMcrCRubGxsJ5PJbQrg
        E/BI183EV5tQuhGHArhzlh5aJ2B4nt/IxFeLg35QAA9AAadVABRzYGGnllvBWhIP0L5YNIJ+cBLo
        AajeFbehmMNp4rG2r+t6Gku8TqWRtS/rBwVoAijdFrepqvqwEYm3a1/WD7/g+4KQTCbzVXwgVG8F
        0GXIKoRQMaxp2msWhHgE6vYlZ2kClTxuxkF7svIwWXyOAE0cAYBsFHCrIshM/szMjIbnBrKzH39z
        BPAQvLSBGj3rNiQLSbvqSFAt+YiHuH4/dm1TFby8vPx0YGDgvex7jagK3tnZ+TQ6OvrD/MyqYI8F
        AG6+F4DZfiwWi1YZcfheQCsKcJkEJnwzqI0FMC8H/f3979x+N3B3d/ezddinAC0qAODbwddcABP+
        PsA1F8A6IvAXQtpMAHJ1WBJGAQgFIBSAUABCAQgFIBSAUABCAQgFIBSAUABCAQgFIBSAUABCAQgF
        IBSAUADSBvwTYAAxaLWDVFEdLgAAAABJRU5ErkJggg==
    ]]>,
};

var CSS = <![CDATA[ /* <css> */
    /*
     * Flash Click to View by Ted Mielczarek (luser_mozilla@perilith.com)
     * Original code by Jesse Ruderman (jruderman@hmc.edu)
     * taken from http://www.squarefree.com/userstyles/xbl.html
     *
     * Change XBL binding for <object> tags, click to view flash
     */

    pseudoembed {
            display: inline-block;
            min-width: 32px !important;
            min-height: 32px !important;
            border: 1px solid #dfdfdf;
            cursor: pointer;
            overflow: hidden;
            -moz-box-sizing: border-box;
            background: url("{play}") no-repeat center;
    }
    pseudoembed:hover {
            background-image: url("{flash}");
    }

    video,
    object[classid*=":D27CDB6E-AE6D-11cf-96B8-444553540000"],
    object[codebase*="swflash.cab"],
    object[data*=".swf"],
    embed[type="application/x-shockwave-flash"],
    embed[src*=".swf"],
    object[type="application/x-shockwave-flash"],
    object[src*=".swf"] {
            -moz-binding: url("{bindings}") !important;
    }

    /* TODO: Could do better. */
    /*
     * NoScript is incredibly annoying. The binding can't execute JS on
     * untrusted sites.
     */
    video:not([flashblock]),
    object[classid*=":D27CDB6E-AE6D-11cf-96B8-444553540000"]:not([flashblock]),
    object[codebase*="swflash.cab"]:not([flashblock]),
    object[data*=".swf"]:not([flashblock]),
    embed[type="application/x-shockwave-flash"]:not([flashblock]),
    embed[src*=".swf"]:not([flashblock]),
    object[type="application/x-shockwave-flash"]:not([flashblock]),
    object[src*=".swf"]:not([flashblock]) {
        display: none !important;
    }

    /*
     * Java identifiers.
     * TODO: Make this work.
    applet,
    object[classid*=":8AD9C840-044E-11D1-B3E9-00805F499D93"],
    object[classid^="clsid:CAFEEFAC-"],
    object[classid^="java:"],
    object[type="application/x-java-applet"],
    embed[classid*=":8AD9C840-044E-11D1-B3E9-00805F499D93"],
    embed[classid^="clsid:CAFEEFAC-"],
    embed[classid^="java:"],
    embed[type="application/x-java-applet"]
    {
         -moz-binding: url("{bindings}") !important;
    }
     */
]]>.toString().replace(/\{(\w+)\}/g, function($0, $1) String(data[$1]).replace(/\s+/g, ""));

styles.system.add("flashblock", "*", CSS);
data = null;
CSS = null;

/* vim:se sts=4 sw=4 et: */

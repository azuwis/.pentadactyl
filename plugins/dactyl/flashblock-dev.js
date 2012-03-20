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
                    var styleHeight = this.style.height;
                    if ((!objectHeight || objectHeight <= 30) && (!styleHeight || parseInt(styleHeight) <= 20))
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
        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
    ]]>,
    play: <![CDATA[data:image/png;base64,
        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
        iFQ+O5AHPAAAAABJRU5ErkJggg==
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

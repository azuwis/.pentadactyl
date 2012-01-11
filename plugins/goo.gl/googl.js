var INFO =
<plugin name="goo.gl url shorter" version="0.1"
        href="http://"
        summary="goo.gl url shorter">
    <author email="rharding@mitechie.com" href="http://blog.mitechie.com">Rick Harding</author>
    <license href="http://opensource.org/licenses/mit-license.php">MIT</license>
    <project name="Pentadactyl" minVersion="1.0b2" maxVersion="1.0"/>
    <description>
        Goo.gl an url and copy it to clipboard
        <ul>
            <li>:gg  - shorten url and copy to clipboard</li>
        </ul>
    </description>
</plugin>;

/**
 * This was just yanked from the ticket: http://code.google.com/p/vimperator-labs/issues/detail?id=262
 *
 * I'm forking it off into my github repo because there seemed to be isues based
 * on the comments and I couldn't make sense of what was going on. I wanted to
 * set it up in Pentadactyl so I could use it and will look at perhaps advancing
 * it some going forward.
 *
 * It seems he copied this from the tr.im plugin and adjusted it for goo.gl
 *
 * -------- Previous attrib ---------------
 * Плагин основан на tr.im script (http://goo.gl/PPKQ) и статье с хабра (http://goo.gl/qI9N).
 *
 * Благодарности:
 * _GaSh_     - http://linsovet.com/blogs/gash
 * о_О Тынц   - http://o-o-tync.livejournal.com/
 *
 *     <author email="angel2s2ru@gmail.com" href="http://angel2s2.blogspot.com/">Roman (Angel2S2) Shagrov</author>
 *     <license href="http://opensource.org/licenses/mit-license.php">MIT</license>
 *     <project name="Vimperator" minVersion="2.0" maxVersion="2.2"/>
 * -------------------------------------------
 *
*/

group.commands.add(["googl", "gg"], "Goo.gl an url and copy it to clipboard", function (args) {

    var url, post_data, req_url, json_resp, httpPost;

    /**
     * I need a httpPost method for this so I ripped out the GET code and making it
     * perform a post
     *
     * Sends a synchronous HTTP request to <b>url</b> and returns the
     * XMLHttpRequest object. If <b>callback</b> is specified the request is
     * asynchronous and the <b>callback</b> is invoked with the object as its
     * argument.
     *
     * @param {string} url
     * @param {function(XMLHttpRequest)} callback
     * @returns {XMLHttpRequest}
     */
    httpPost = function (url, data, callback) {
        try {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.mozBackgroundRequest = true;

            if (callback) {
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == 4) {
                        callback(xmlhttp);
                    }
                };
            }

            xmlhttp.open("POST", url, !!callback);

            //Send the proper header information along with the request
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.setRequestHeader("Content-length", data.length);
            xmlhttp.setRequestHeader("Connection", "close");

            xmlhttp.send(data);
            return xmlhttp;
        }
        catch (e) {
            liberator.echo("Error opening " + url + ": " + e, 1);
        }
    };

    // for some reason util.copyToClipboard is undefined so hack away
    var copyToClipboard = function (str, verbose) {
        const clipboardHelper = Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Ci.nsIClipboardHelper);
        clipboardHelper.copyString(str);

        if (verbose) {
            liberator.echo("Yanked " + str, commandline.FORCE_SINGLELINE);
        }
    };

    post_data = 'url=';
    req_url = "http://goo.gl/api/shorten";
    if (args[0] && args[0] != '') {
        url = args[0];
    } else {
        url = buffer.URL;
    }

    post_data = post_data + encodeURIComponent(url);

    httpPost(req_url, post_data, function (req) {

        // getting back a 201 status in testing
        if (req.status == 200 || req.status==201) {
            var json_resp = eval('(' + req.responseText + ')');

            copyToClipboard('harding', true);
            copyToClipboard(json_resp.short_url, true);
        } else {
            liberator.echo("Error contacting goo.gl!\n");
        }
    });
});

/* vim:se sts=4 sw=4 et: */

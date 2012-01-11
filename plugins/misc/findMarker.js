(function() {
    function executeScroll(marker, body) { 
        var str = marker.style.top; 
        var markerTop = str.slice(0, str.length - 2);
        var body = window._content.document.body ||
                           content.window.document.activeElement.lastChild;//fix pentadactyl help page;
        var absTop = markerTop * (body.parentNode.scrollHeight / 100.0);  
        absTop = Math.round(absTop);
        window._content.scrollTo(0, absTop);
    }

    var SearchMarker = {
	    CONTAINER_STYLE : "position:fixed; right:0; top:0; height:100%; width:10px; z-index:999999; background:#eee;", 
	
	    MARKER_STYLE    : "position:absolute; background:#33f; width:12px; height:1px; border-top:1px solid #69f; border-bottom:1px solid #036; background:#3ff; border:1px solid #69f; cursor:pointer; ",

        markerStr: "SearchMarker.setMarkers(false);",
        highlightMarkerStr: "SearchMarker.setMarkers(true);",
        markClearStr: "SearchMarker.clearMarkers();",

	    setMarkers : function(highlight) {
		    this.clearMarkers();

		    try {
			    var body = window._content.document.body ||
                           content.window.document.activeElement.lastChild;//fix pentadactyl help page

			    // use container to store markers so it can be styled
			    var markerDiv = document.createElement("div");
			    markerDiv.setAttribute("id", "__searchMarkerContainer");
			    markerDiv.setAttribute("style", this.CONTAINER_STYLE);
			    body.appendChild(markerDiv);

			    // for aesthetics, offset is the space taken by scrollbar buttons
			    // we don't want to display a marker where the user can't scroll to
			    var scrollBarOffset = self.innerWidth - body.parentNode.clientWidth;

			    markerDiv.style.top = scrollBarOffset + "px !important";
			    markerDiv.style.bottom = scrollBarOffset + "px !important";
			
			    var controller = gFindBar._getSelectionController(window.content);
			    var selection = controller.getSelection(highlight? gFindBar.nsISelectionController.SELECTION_FIND: gFindBar.nsISelectionController.SELECTION_NORMAL);
			    for(var k = 0; k < selection.rangeCount; k++){
                    var range = selection.getRangeAt(k);
                    var searchResult = range.startContainer;
                    if(searchResult.previousSibling != null) {
                        refNode = searchResult.previousSibling;
                    }else {
                        refNode = searchResult.parentNode;
                    }

				    var absoluteTop = this.getAbsoluteTop(refNode);
				    // get the y location as a percentage
				    var markerTop = absoluteTop / (body.parentNode.scrollHeight / 100.0);

				    // add marker to container
				    var marker = document.createElement("div");
			        marker.onclick = function() { 
						executeScroll(this); 
			        } 
				
				    marker.setAttribute("style", this.MARKER_STYLE + "top:" + markerTop + "% !important");

				    markerDiv.appendChild(marker);
			    }
            } catch(e) {}
	    },

	    // recursively add the relative top of the parent element
	    getAbsoluteTop : function(element) {
		    return element == null ? 0 : this.getAbsoluteTop(element.offsetParent) + element.offsetTop;
	    },

	    clearMarkers : function() {
		    try {
			    var markerDiv = window._content.document.getElementById("__searchMarkerContainer");
			    if(markerDiv) {
				    markerDiv.parentNode.removeChild(markerDiv);
			    }
		    } catch(e) { }
 	    }
    };

    window.SearchMarker = SearchMarker;

    var Util = {
        extractFuncBody: function(funcStr) {
            return funcStr.substring(funcStr.indexOf("{") + 1, funcStr.lastIndexOf("}"));
        },
    };

    var FindMarker = {
        highlight: function() {
            dactyl.execute("set hlf!");
            if(options["findmarker"].toString() == "0") {
                if(options.hlfind) {
                    SearchMarker.setMarkers(true);
                } else {
                    SearchMarker.clearMarkers();
                }   
            }
        },

        attachHighlightMarker: function() {
            var submitStr = rangefinder.onSubmit.toString();
            if(submitStr.indexOf(SearchMarker.highlightMarkerStr) == -1) {
                if(!rangefinder.onSubmitBack) {
                    rangefinder.onSubmitBack = rangefinder.onSubmit;
                }
                eval("rangefinder.onSubmit = " + rangefinder.findAgain.toString().replace(/this\.highlight\(\);/, "{$&"+SearchMarker.highlightMarkerStr+"}"));
            }

            var findAgainStr = rangefinder.findAgain.toString();
            if(findAgainStr.indexOf(SearchMarker.highlightMarkerStr) == -1) {
                if(!rangefinder.findAgainBack) {
                    rangefinder.findAgainBack = rangefinder.findAgain;
                } 
                eval("rangefinder.findAgain = " + rangefinder.findAgain.toString().replace(/this\.highlight\(\);/, "{$&"+SearchMarker.highlightMarkerStr+"}"));
            }

            SearchMarker.setMarkers(true);
        },

        attachFindMarker: function() {
            var findStr = rangefinder.find.toString();
            if(findStr.indexOf(SearchMarker.markerStr) == -1) {
                findStr = Util.extractFuncBody(findStr).replace(/return/, " else { " + SearchMarker.markerStr + "}$&");
                if(!rangefinder.findBack) {
                    rangefinder.findBack = rangefinder.find;
                }
                rangefinder.find = new Function("pattern", "backwards", findStr);
            }

            var findAgainStr = rangefinder.findAgain.toString();
            if(findAgainStr.indexOf(SearchMarker.markerStr) == -1) {
                if(!rangefinder.findAgainBack) {
                    rangefinder.findAgainBack = rangefinder.findAgain;
                } 
                eval("rangefinder.findAgain = " + rangefinder.findAgain.toString().replace(/}$/, SearchMarker.markerStr+"$&"));
            }

            SearchMarker.setMarkers(false);
        },

        detachMarker: function() {
            if(rangefinder.onSubmitBack) {
                rangefinder.onSubmit = rangefinder.onSubmitBack;
                delete rangefinder.onSubmitBack;
            }

            if(rangefinder.findBack) {
                rangefinder.find = rangefinder.findBack;
                delete rangefinder.findBack;
            }

            if(rangefinder.findAgainBack) {
                rangefinder.findAgain = rangefinder.findAgainBack;
                delete rangefinder.findAgainBack;
            }
        },

        detachAll: function() {
            this.detachMarker();
        },
    };

    group.commands.add(["hl"],
        "Highlight finds",
        FindMarker.highlight,
        {
            argCount: "0",
        }
    );

    group.options.add(["findmarker", "fm"],
        "Find Marker options",
        "number",
        0,
        {
            completer: function(context) [
                ["0", "Mark all finds in highlight mode."],
                ["1", "Only mark current find."],
            //    ["2", "Mark finds in all cases."]
            ],
            
            validator: function(val) {
                let iter = array.iterValues(options.get("findmarker").completer());
                for each (let i in Iterator(iter)) {
                    if(val == i[0]) {
                        return true;
                    }
                }
                return false;
            },

            setter: function(value) {
                FindMarker.detachAll();
                SearchMarker.clearMarkers();

                switch(value) {
                case 0:
                    FindMarker.attachHighlightMarker();
                    break;
                case 1:
                    FindMarker.attachFindMarker(); 
                    break;
                case 2:
                    break;
                }
                
                return value;
            },
        });
})();
/*use strict*/
XML.ignoreWhitespace = false;
XML.prettyPrinting = false;
var INFO =
<plugin name="findMarker" version="0.0.1" href="http://www.slimeden.com/2011/04/firefox/findhere" summary="Mark the positions of find results at the vertical scrollbar." xmlns={NS}>
    <author email="wuxiaoshan@gmail.com">Xiao Shan</author>
    <license href="http://people.freebsd.org/~phk/">BEER-WARE</license>
    <project name="Pentadactyl" minVersion="1.0"/>
    <p>
        Provide an ex command to make "toggle find highlight" convenient.
    </p>
    <item>
        <tags>'hl'</tags>
        <spec>:hl</spec>
        <description>
            <p>Toggle the highlight to all finds</p>
        </description>
    </item>
    <p>
        Adds an option to enable drawing a marker at the vertical scrollbar to indicate the position of find.
    </p> 
    <item>
        <tags>'fm' 'findmarker'</tags>
        <spec>'findmarker' 'fm'</spec>
        <type>number</type>
        <default>{options.get("findmarker").defaultValue}</default>
        <description>
            <p>Control how to draw markers for finds' positions.</p>
            <dl>
            { template.map(options.get("findmarker").completer(), function([k,v])
                    <><dt>{k}</dt> <dd>{v}</dd></>) }
            </dl>
        </description>
    </item>
</plugin>;

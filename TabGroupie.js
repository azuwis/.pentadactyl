/* "use strict"; */
XML.ignoreWhitespace = false;
XML.prettyPrinting   = false;
var INFO =
<plugin name="TapGroupie" version="0.9"
        href="https://github.com/eri451/TabGroupie"
        summary="TabGroupie Plugin"
        xmlns={NS}>
    <author email="hans.orter@gmx.de">Eri!</author>
    <license href="http://opensource.org/licenses/mit-license.php">MIT</license>
    <project name="Pentadactyl" min-version="1.0b7.2"/>
    <p>
        This plugin allows you to create tabgroups,
        rename or delete them and move the currently use tab from group to group
        with pentadactyl.
    </p>
    <item>
        <tags>:tgt :tgroup-title </tags>
        <spec>:tgroup-title <oa>newName</oa></spec>
        <description>
            Sets a new title to the currently used group
        </description>
    </item>
    <item>
       <tags>:tgn :tgroup-new</tags>
       <spec>:tgroup-new <oa>newGroupname</oa></spec>
       <description>
            Create a new tabgroup.
       </description>
    </item>
    <item>
        <tags>:tgc :tgroup-change</tags>
        <spec>:tgroup-change <oa>targetGroup</oa></spec>
        <description>
            <p>
                Changes the specified group for the tab that is
                open at this moment.
            </p>
            <p>
                A groupname, that is not listed, will be handled as a new group
                with a new name assumed you confirm the prompt.
                [Y/n/b] is for yes(default), no and background.
            </p>
        </description>    
    </item>
    <item>
        <tags>:tgd :tgroup-delete</tags>
        <spec>:tgroup-delete <oa>GroupName</oa></spec>
        <description>
            This is deleting the given tabgroup incl. its items.
        </description>    
    </item>
</plugin>;



let TabGroupie = {
    init: function init(){
        try{
            if (!("_groups" in tabs)){
                if (window.TabView && TabView._initFrame)
                    TabView._initFrame();

                let iframe = document.getElementById("tab-view");
                tabs._groups = iframe ? iframe.contentWindow : null;
                if (tabs._groups){
                    util.waitFor(function () tabs._groups.TabItems, tabs);
                }
            }
            
            this.TabGroups = new Array();
            for (let x in tabs._groups.GroupItems.groupItems){
                if (tabs._groups.GroupItems.groupItems[x]._children.length === 0){
                    tabs._groups.GroupItems.groupItems[x].close();
                    continue;
                }
                let group = {"id":    tabs._groups.GroupItems.groupItems[x].id,
                             "title": tabs._groups.GroupItems.groupItems[x].getTitle()
                            };
                this.TabGroups.push(group);
            }
        }
        catch(err){
            dactyl.echoerr("FATAL - Init failed");
        }    
    },
    
    
    getIdByTitle: function getIdByTitle(pattern){
        for (let i in this.TabGroups){
            if (this.TabGroups[i].title === pattern)
                return this.TabGroups[i].id;
        }
        
        commandline.input("Group does not exist. Create? [Y/n/b] ", check, {argCount: "1"});

        function check(args){
            if (args.length === 0 
                || "" + args[0] === "y"
                || "" + args[0] === "Y"
                || "" + args[0] === "b" ){
                TabView.moveTabTo(window.gBrowser.selectedTab
                                 ,TabGroupie.createGroup(pattern));
                TabView.hide();
                if ("" + args[0] === "b")
                    return null;

                tabs.selectAlternateTab();
            }
        }
        return null;
    },


    changeGroup: function changeGroup(TargetGroupTitle){
        let activeTab = window.gBrowser.selectedTab;
        let targetGroupId = this.getIdByTitle(TargetGroupTitle);

        function ask(args){
            if (args.length === 0
                || "" + args[0] === "y"
                || "" + args[0] === "Y"){ tabs.selectAlternateTab();}
        }

        if (targetGroupId != null){
            if (activeTab._tabViewTabItem.parent._children.length > 1){
                TabView.moveTabTo(activeTab, targetGroupId);
                TabView.hide();
                commandline.input("Switch to that Group? [Y/n] ", ask, {argCount: "1"})
            }
            else{
                TabView.moveTabTo(activeTab, targetGroupId);
                TabView.hide();
                tabs.selectAlternateTab();
            }
        }
   },


    changeTitle: function changeTitle(newTitle){
        window.gBrowser.selectedTab._tabViewTabItem.parent.setTitle(newTitle);
    },


    newTabGroup: function newTabGroup(title){
        let tab = window.gBrowser.addTab(prefs.get("browser.startup.homepage"));
        TabView.moveTabTo(tab, this.createGroup(title));
        TabView.hide();

    },


    createGroup: function createGroup(title){
        let newGroup = tabs._groups.GroupItems.newGroup();
        newGroup.setTitle(title);
        return newGroup.id;
    },
    
    
    deleter: function deleter(title){
        for (let i in tabs._groups.GroupItems.groupItems){
            if (tabs._groups.GroupItems.groupItems[i].id === this.getIdByTitle(title)){
                for (let x in tabs._groups.GroupItems.groupItems[i]._children){
                    tabs._groups.GroupItems.groupItems[i]._children[x].close();
                }
            tabs._groups.GroupItems.groupItems[i].close();
            }
        }
    },
    
}

try{
    TabGroupie.init();
}
catch (err){
    dactyl.echoerr("FATAL - Init failed");
}

group.commands.add(["tgroup-c[hange]", "tgc"],
                    "Change current tab to another group.",
                    function (args){
                        TabGroupie.changeGroup("" + args[0]);
                        TabGroupie.init();
                    },
                    {
                        argCount: "1",
                        completer: function (context) {   //thanks to Kris Maglione
                            context.keys = { text: "title", description: "id"};
                            context.completions = TabGroupie.TabGroups;
                        }
                    });
                    
group.commands.add(["tgroup-t[itle]", "tgt"],
                    "Change the title of the current group",
                    function (args){
						if (args.lenght===0){
							alert("you're into it");
							alert(window.gBrowser.selectedTab._tabViewTabItem.parent.getTitle());
						}
						alert(args);
                        TabGroupie.changeTitle("" + args[0]);
                        TabGroupie.init();
                    },
                    {
                        argCount: "0",
                    });

group.commands.add(["tgroup-n[ew]", "tgn"],
                    "add a new tabgroup",
                    function (args){
                        TabGroupie.newTabGroup( "" + args[0]);
                        window.gBrowser.selectedTab = 
                                    tabs.allTabs[tabs.allTabs.length - 1];
                        TabGroupie.init();
                    },
                    {
                        argCount: "1",
                    });
                    
group.commands.add(["tgroup-d[elete]", "tgd"],
                    "delete a tabgroup incl. its items",
                    function (args) {
                        TabGroupie.deleter("" + args[0]);
                        TabGroupie.init();
                    },
                    {
                        argCount: "1",
                        completer: function (context) {   //thanks to Kris Maglione
                            context.keys = { text: "title", description: "id" };
                            context.completions = TabGroupie.TabGroups;
                        }
                    });

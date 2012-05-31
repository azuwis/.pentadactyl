/* "use strict"; */
XML.ignoreWhitespace = false;
XML.prettyPrinting   = false;
var INFO =
<plugin name="TabGroupie" version="0.9"
        href="https://github.com/eri451/TabGroupie"
        summary="TabGroupie Plugin"
        xmlns={NS}>
    <author email="hans.orter@gmx.de">Eri!</author>
    <license href="http://opensource.org/licenses/mit-license.php">MIT</license>
    <project name="Pentadactyl" min-version="1.0b7.2"/>
    <p>
        This plugin allows you to create tabgroups,
        rename or delete them and move the currently use tab from group to group.
    </p>
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
                [Y/n/b] for yes(default), no and background.
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
    <item>
        <tags>:tgg :tgroup-get</tags>
        <spec>:tgroup-get <oa>TabIndex</oa></spec>
        <description>
            This moves a tab to the current group.
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
        <tags>:tgs :tgroup-switch </tags>
        <spec>:tgroup-switch <oa>targetGroup</oa></spec>
        <description>
            switch to last viewed tab of a specified group
        </description>
    </item>
    <item>
        <tags>:tgt :tgroup-title </tags>
        <spec>:tgroup-title <oa>newName</oa></spec>
        <description>
            Sets a new title to the currently used group
        </description>
    </item>
</plugin>;



let TabGroupie = {
    init: function init(){  // gets called to refresh the list too
        let tabGroups = this.TabGroups = new Array();
        tabs.getGroups( function ({ GroupItems }) {
            let items = GroupItems.groupItems;
            for(let x = 0; x < items.length; x+=1) {
                let id = items[x].id;
                let title = items[x].getTitle();
                tabGroups.push({
                    "id":    id,
                    "title": (title === "") ? "" + id : title,
                });
            }
        });
    },


    getIdByTitle: function getIdByTitle(pattern){
         for (let i = 0; i < this.TabGroups.length; i+=1){
            if (this.TabGroups[i].title === pattern)
                return this.TabGroups[i].id;
        }

        commandline.input("Group does not exist. Create? [Y/n/b] ", check, {argCount: "1"});

        function check(args){
            if ( args.length === 0
                || "" + args[0] === "y"
                || "" + args[0] === "Y"
                || "" + args[0] === "b" ) {
                TabGroupie.newTabGroup(pattern, window.gBrowser.selectedTab, function () {
                    if ("" + args[0] !== "b")
                        tabs.selectAlternateTab();
                });
            }
            return null;
        }
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
            if (tabs.visibleTabs.length > 1){
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
        tabs.getGroups( function ({ GroupItems }) {
            let activeGroup = GroupItems.getActiveGroupItem();
            activeGroup.setTitle(newTitle);
        });
    },


    newTabGroup: function newTabGroup(title, tab, callback){
        this.createGroup(title, function ({ id }) {
            tab = tab || window.gBrowser.addTab(prefs.get("browser.startup.homepage"));
            TabView.moveTabTo(tab, id);
            TabView.hide();
            if (callback) callback(tab);
        });

    },


    createGroup: function createGroup(title, callback){
        tabs.getGroups( function ({ GroupItems }) {
            let newGroup = GroupItems.newGroup();
            newGroup.setTitle(title);
            if (callback) callback(newGroup);
        });
    },


    deleter: function deleter(title){
        tabs.getGroups( function ({ GroupItems }) {
            let items = GroupItems.groupItems;
            for (let i = 0; i < items.length; i+=1) {
                let item = items[i];
                if (item.id === TabGroupie.getIdByTitle(title)){
                    item.closeAll();
                    break;
                }
            }
        });
    },

    switchto: function switchto(title){
        tabs.getGroups( function ({ GroupItems }) {
            let items = GroupItems.groupItems;
            for (let i = 0; i < items.length; i+=1) {
                let item = items[i];
                if (item.id === TabGroupie.getIdByTitle(title)){
                    let activeTab = item.getActiveTab();
                    let index = tabs.allTabs.indexOf(activeTab.tab);
                    config.tabbrowser.mTabContainer.selectedIndex = index;
                    break;
                }
            }
        });
    },

    getTab: function getTab(index){
        tabs.getGroups( function ({ GroupItems }) {
            let activeGroup = GroupItems.getActiveGroupItem();
            let tab = tabs.getTab(index - 1,false);  // cause we count from 0

            TabView.moveTabTo(tab, activeGroup.id);
            let tabIndex = tabs.allTabs.indexOf(tab);
            config.tabbrowser.mTabContainer.selectedIndex = tabIndex;
        });
    },
}

try{
    TabGroupie.init();
}
catch (err){
    dactyl.echoerr("Tabgroupie.init() failed");
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
                        TabGroupie.changeTitle("" + args[0]);
                        TabGroupie.init();
                    },
                    {
                        argCount: "1",
                    });

group.commands.add(["tgroup-n[ew]", "tgn"],
                    "add a new tabgroup",
                    function (args){
                        TabGroupie.newTabGroup( "" + args[0], null, function (tab) {
                            window.gBrowser.selectedTab = tab;
                        });
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

group.commands.add(["tgroup-s[witch]", "tgs"],
                    "switch to last viewed tab of a specified group",
                    function (args){
                        TabGroupie.switchto("" + args[0]);
                        TabGroupie.init();
                    },
                    {
                        argCount: "1",
                        completer: function (context) {   //thanks to Kris Maglione
                            context.keys = { text: "title", description: "id" };
                            context.completions = TabGroupie.TabGroups;
                        }
                    });

group.commands.add(["tgroup-g[et]", "tgg"],
                    "get a tab to the current group",
                    function (args){
                        TabGroupie.getTab(args[0]);
                        TabGroupie.init();
                    },
                    {
                        argCount: "1",
                        completer: function (context) {
                            completion.buffer(context);
                        }
                    });

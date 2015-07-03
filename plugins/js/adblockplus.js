// Save/load adblockplus setting
let abp_json = IO.runtimePath + '/adblockplus.json';
let getAbp = function () {
    if ("@adblockplus.org/abp/public;1" in Components.classes) {
        let abpURL = Components.classes["@adblockplus.org/abp/public;1"]
            .getService(Components.interfaces.nsIURI);
        return Components.utils.import(abpURL.spec, null).AdblockPlus;
    } else {
        return null;
    }
};
let abpSave = function () {
    let abp = getAbp();
    if (abp) {
        let setting = {"subscriptions": [], "patterns": []};
        for (let i = 0; i < abp.subscriptionCount; i++) {
            let subscription = abp.getSubscriptionAt(i);
            if (subscription.title === 'Ad Blocking Rules' || subscription.title === 'Element Hiding Rules') {
                setting.patterns = subscription.getPatterns().concat(setting.patterns);
            } else {
                setting.subscriptions.push([subscription.title, subscription.url]);
            }
        }
        setting.subscriptions = setting.subscriptions.sort();
        setting.patterns = setting.patterns.sort();
        let json = io.File(abp_json);
        json.write(JSON.stringify(setting, null, '  ') + "\n");
    }
};
let abpLoad = function () {
    let abp = getAbp();
    if (abp) {
        let setting = JSON.parse(io.File(abp_json).read());
        // subscriptions
        let subscriptions = new Map(setting.subscriptions);
        for (let i = 0; i < abp.subscriptionCount; i++) {
            subscriptions.delete(abp.getSubscriptionAt(i).title);
        }
        subscriptions.forEach(function(url, title) {
            let subscription = {
                url: url,
                title: title,
                disabled: false,
                external: false,
                mainSubscriptionTitle: null,
                mainSubscriptionURL: null
            };
            window.openDialog("chrome://adblockplus/content/ui/subscriptionSelection.xul", "_blank",
                "chrome,centerscreen,resizable,dialog=no", subscription, null);
            });
        // custom patterns
        abp.addPatterns(setting.patterns);
    }
};
group.commands.add(["abpsave"],
    "Save adblockplus setting",
    abpSave, {},
    true);
group.commands.add(["abpload"],
    "Load adblockplus setting",
    abpLoad, {},
    true);

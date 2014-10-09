let reloadPAC = function() {
    Components.classes['@mozilla.org/network/protocol-proxy-service;1'].getService().reloadPAC();
};

group.commands.add(["reloadpac", "rp"],
    "Reload proxy.pac",
    reloadPAC, {},
    true);

let json_file = IO.runtimePath + '/proxy.json';
let pac_file = storage.infoPath.path + '/proxy.pac';

let generatePAC = function(setting) {
    let pac = [
        "function FindProxyForURL(url, host) {",
        "    if (isPlainHostName(host)) {",
        "        return 'DIRECT';",
        "    }",
        ""
    ].join("\n") + "\n";
    pac += "    if (dnsDomainLevels(host) === 1) {\n";
    for (let [proxy, domains] of setting.proxies) {
        pac += "\n        if (false\n";
        for (domain of domains) {
            pac += "        || dnsDomainIs(host, '" + domain + "')\n";
        }
        pac += "        ) {\n            return '" + proxy + "';\n        }\n";
    }
    pac += "\n    }\n\n";
    for (let [proxy, domains] of setting.proxies) {
        pac += "    if (false\n";
        for (domain of domains) {
            pac += "    || dnsDomainIs(host, '." + domain + "')\n";
        }
        pac += "    ) {\n        return '" + proxy + "';\n    }\n\n";
    }
    pac += "    return '" + setting.default + "';" + "\n}\n";
    io.File(pac_file).write(pac);
    reloadPAC();
};

let loadSetting = function () {
    let json = io.File(json_file);
    if (json.exists()) {
        let proxy = JSON.parse(json.read());
        proxy.proxies = new Map(proxy.proxies.map(function (item) {
            return [item[0], new RealSet(item[1])];
        }));
        return proxy;
    } else {
        return {
            'proxies': new Map([
                [ 'SOCKS5 127.0.0.1:7070', new RealSet() ],
                [ 'DIRECT', new RealSet() ]
            ]),
            'default': 'DIRECT'
        };
    }
};

let saveSetting = function (setting) {
    generatePAC(setting);
    new_proxies = [];
    for (let [proxy, domains] of setting.proxies) {
        new_proxies.push([proxy, [domain for (domain of domains)].sort()]);
    }
    setting.proxies = new_proxies;
    let json = io.File(json_file);
    json.write(JSON.stringify(setting, null, '  ') + "\n");
};

let addDomain = function (set, item) {
    set.add(item);
};

let delDomain = function (set, item) {
    set.delete(item);
};

let updateProxy = function (args, func) {
    let target_domains;
    let proxy;
    let domains;
    let setting = loadSetting();
    function getFirst(map) {
        for (let [key, value] of map) {
            return [key, value];
        }
    }
    function defaultDomains() {
        return [util.subdomains(window.content.location.hostname)[0]];
    }
    if (args.length === 0) {
        target_domains = defaultDomains();
        [proxy, domains] = getFirst(setting.proxies);
    } else if (args.length === 1) {
        if (args[0].match(/^(SOCKS[45] |PROXY |DIRECT$)/)) {
            target_domains = defaultDomains();
            proxy = args[0];
            domains = setting.proxies.get(proxy);
        } else {
            target_domains = args;
            [proxy, domains] = getFirst(setting.proxies);
        }
    } else {
        target_domains = args.slice(1);
        proxy = args[0];
        domains = setting.proxies.get(proxy);
    }
    dactyl.echomsg(proxy + ' => ' + target_domains.join(','));
    target_domains.forEach(function (domain) {
        func(domains, domain);
    });
    saveSetting(setting);
};

group.commands.add(["addproxy", "ap"],
    "Add domains to proxy",
    function (args) {
        updateProxy(args, addDomain);
    },{
        argCount: "*",
        completer: function (context, args) {
            if (args.length === 1) {
                let setting = loadSetting();
                context.completions = [[proxy, proxy] for ([proxy, domains] of setting.proxies)];
            } else {
                modules.completion.visibleHosts(context);
            }
        },
    }, true);

group.commands.add(["delproxy", "dp"],
    "Remove domains from proxy",
    function (args) {
        updateProxy(args, delDomain);
    },{
        argCount: "*",
        completer: function (context, args) {
            let setting = loadSetting();
            if (args.length === 1) {
                context.completions = [[proxy, proxy] for ([proxy, domains] of setting.proxies)];
            } else {
                context.completions = [[domain, domain] for (domain of setting.proxies.get(args[0]))];
            }
        },
    }, true);


let proxy_types = [
    ["0", "Direct"],
    ["1", "Manual"],
    ["2", "Proxy.pac"],
    ["3", ""],
    ["4", "Auto"],
    ["5", "System"]
];

group.commands.add(["proxytype", "pt"],
    "Change proxy type",
    function (args) {
        let type = 5;
        if (args.length) {
            type = parseInt(args);
        } else {
            let cur_type = prefs.get("network.proxy.type");
            if (cur_type === 2) {
                type = 1;
            } else if (cur_type === 1) {
                type = 2;
            } else {
                type = cur_type;
            }
        }
        if (type === 1) {
            let setting = loadSetting();
            for ([proxy, domains] of setting.proxies) {
                let m = proxy.match(/^SOCKS[45] ([^:]+):(\d+)/);
                if (m) {
                    prefs.set("network.proxy.socks", m[1]);
                    prefs.set("network.proxy.socks_port", parseInt(m[2]));
                    break;
                }
            }
        } else if (type === 2) {
            prefs.set("network.proxy.autoconfig_url", "file://" + pac_file);
        }
        dactyl.echo("Proxy type: " + proxy_types[type][1]);
        prefs.set("network.proxy.type", type);
    }, {
        argCount: "?",
        completer: function (context) {
            context.title = "Proxy type";
            context.completions = proxy_types.filter((item, index) => index !== 3);
        }
    }, true);

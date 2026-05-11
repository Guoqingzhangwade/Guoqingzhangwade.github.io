(function () {
    var analyticsConfig = window.portfolioAnalytics || {};
    var rawSite = typeof analyticsConfig.goatcounterSite === "string"
        ? analyticsConfig.goatcounterSite.trim()
        : "";

    if (!rawSite) {
        return;
    }

    function buildEndpoint(siteValue) {
        var endpoint = siteValue;

        if (!/^https?:\/\//i.test(endpoint)) {
            endpoint = endpoint.indexOf(".") === -1
                ? "https://" + endpoint + ".goatcounter.com"
                : "https://" + endpoint;
        }

        endpoint = endpoint.replace(/\/+$/, "");

        if (!/\/count$/i.test(endpoint)) {
            endpoint += "/count";
        }

        return endpoint;
    }

    window.goatcounter = window.goatcounter || {};
    window.goatcounter.endpoint = window.goatcounter.endpoint || buildEndpoint(rawSite);

    if (typeof window.goatcounter.allow_local === "undefined") {
        window.goatcounter.allow_local = Boolean(analyticsConfig.allowLocal);
    }

    var script = document.createElement("script");
    script.async = true;
    script.src = "https://gc.zgo.at/count.js";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
})();

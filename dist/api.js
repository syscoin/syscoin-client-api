"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var configuration_1 = require("./configuration");
var url = require("url");
var isomorphicFetch = require("isomorphic-fetch");
var assign = require("core-js/library/fn/object/assign");
var BASE_PATH = "http://localhost:8001".replace(/\/+$/, "");
var BaseAPI = /** @class */ (function () {
    function BaseAPI(fetch, basePath, configuration) {
        if (fetch === void 0) { fetch = isomorphicFetch; }
        if (basePath === void 0) { basePath = BASE_PATH; }
        if (configuration === void 0) { configuration = new configuration_1.Configuration(); }
        this.basePath = basePath;
        this.fetch = fetch;
        this.configuration = configuration;
    }
    return BaseAPI;
}());
exports.BaseAPI = BaseAPI;
;
/**
 * AliasesApi - fetch parameter creator
 */
exports.AliasesApiFetchParamCreator = {
    /**
     * Add redeemscript to local wallet for signing smart contract based alias transactions.
     * @param redeemscript
     */
    aliasaddscript: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "redeemscript" is set
        if (params["redeemscript"] == null) {
            throw new Error("Missing required parameter redeemscript when calling aliasaddscript");
        }
        var baseUrl = "/aliasaddscript";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "redeemscript": params["redeemscript"],
        });
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns the total amount received by the given alias in transactions with at least 1 confirmation.
     * @param alias The syscoin alias to get balance for
     */
    aliasbalance: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "alias" is set
        if (params["alias"] == null) {
            throw new Error("Missing required parameter alias when calling aliasbalance");
        }
        var baseUrl = "/aliasbalance";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "alias": params["alias"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Clear your whitelist(controls who can resell).
     * @param owneralias
     * @param witness
     */
    aliasclearwhitelist: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "owneralias" is set
        if (params["owneralias"] == null) {
            throw new Error("Missing required parameter owneralias when calling aliasclearwhitelist");
        }
        var baseUrl = "/aliasclearwhitelist";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "owneralias": params["owneralias"],
            "witness": params["witness"],
        });
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * scan and filter aliases
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    aliasfilter: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "query" is set
        if (params["query"] == null) {
            throw new Error("Missing required parameter query when calling aliasfilter");
        }
        var baseUrl = "/aliasfilter";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "query": params["query"],
            "count": params["count"],
            "from": params["from"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * List all stored values of an alias.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    aliashistory: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "query" is set
        if (params["query"] == null) {
            throw new Error("Missing required parameter query when calling aliashistory");
        }
        var baseUrl = "/aliashistory";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "query": params["query"],
            "count": params["count"],
            "from": params["from"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Show values of an alias.
     * @param aliasname
     */
    aliasinfo: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "aliasname" is set
        if (params["aliasname"] == null) {
            throw new Error("Missing required parameter aliasname when calling aliasinfo");
        }
        var baseUrl = "/aliasinfo";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "aliasname": params["aliasname"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Creates a new Syscoin Alias. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    aliasnew: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling aliasnew");
        }
        var baseUrl = "/aliasnew";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Send multiple times from an alias. Amounts are double-precision floating point numbers.
     * @param request
     */
    aliaspay: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling aliaspay");
        }
        var baseUrl = "/aliaspay";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * List all stored transactions related to an alias.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    aliastxhistory: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "query" is set
        if (params["query"] == null) {
            throw new Error("Missing required parameter query when calling aliastxhistory");
        }
        var baseUrl = "/aliastxhistory";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "query": params["query"],
            "count": params["count"],
            "from": params["from"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Update and possibly transfer an alias. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    aliasupdate: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling aliasupdate");
        }
        var baseUrl = "/aliasupdate";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Update to the whitelist(controls who can resell). Array of whitelist entries in parameter 1.
     * @param request
     */
    aliasupdatewhitelist: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling aliasupdatewhitelist");
        }
        var baseUrl = "/aliasupdatewhitelist";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * List all affiliates for this alias.
     * @param alias
     * @param witness
     */
    aliaswhitelist: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "alias" is set
        if (params["alias"] == null) {
            throw new Error("Missing required parameter alias when calling aliaswhitelist");
        }
        var baseUrl = "/aliaswhitelist";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "alias": params["alias"],
            "witness": params["witness"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Clean expired Syscoin services from indexer and internal database.
     */
    prunesyscoinservices: function (configuration, options) {
        if (options === void 0) { options = {}; }
        var baseUrl = "/prunesyscoinservices";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Query the indexer for information in a collection.
     * @param collection Collection name, either \\\&quot;alias\\\&quot;, \\\&quot;aliashistory\\\&quot;, \\\&quot;aliastxhistory\\\&quot;, \\\&quot;cert\\\&quot;,  \\\&quot;certhistory\\\&quot;, \\\&quot;offer\\\&quot;, \\\&quot;offerhistory\\\&quot;, \\\&quot;feedback\\\&quot;, \\\&quot;escrow\\\&quot;, \\\&quot;escrowbid\\\&quot;
     * @param query JSON query on the collection to retrieve a set of documents
     * @param options JSON option arguments into the query. Based on mongoc_collection_find_with_opts.
     */
    syscoinquery: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "collection" is set
        if (params["collection"] == null) {
            throw new Error("Missing required parameter collection when calling syscoinquery");
        }
        // verify required parameter "query" is set
        if (params["query"] == null) {
            throw new Error("Missing required parameter query when calling syscoinquery");
        }
        var baseUrl = "/syscoinquery";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "collection": params["collection"],
            "query": params["query"],
            "options": params["options"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
};
/**
 * AliasesApi - functional programming interface
 */
exports.AliasesApiFp = {
    /**
     * Add redeemscript to local wallet for signing smart contract based alias transactions.
     * @param redeemscript
     */
    aliasaddscript: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.AliasesApiFetchParamCreator.aliasaddscript(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns the total amount received by the given alias in transactions with at least 1 confirmation.
     * @param alias The syscoin alias to get balance for
     */
    aliasbalance: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.AliasesApiFetchParamCreator.aliasbalance(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Clear your whitelist(controls who can resell).
     * @param owneralias
     * @param witness
     */
    aliasclearwhitelist: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.AliasesApiFetchParamCreator.aliasclearwhitelist(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * scan and filter aliases
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    aliasfilter: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.AliasesApiFetchParamCreator.aliasfilter(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * List all stored values of an alias.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    aliashistory: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.AliasesApiFetchParamCreator.aliashistory(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Show values of an alias.
     * @param aliasname
     */
    aliasinfo: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.AliasesApiFetchParamCreator.aliasinfo(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Creates a new Syscoin Alias. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    aliasnew: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.AliasesApiFetchParamCreator.aliasnew(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Send multiple times from an alias. Amounts are double-precision floating point numbers.
     * @param request
     */
    aliaspay: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.AliasesApiFetchParamCreator.aliaspay(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * List all stored transactions related to an alias.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    aliastxhistory: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.AliasesApiFetchParamCreator.aliastxhistory(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Update and possibly transfer an alias. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    aliasupdate: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.AliasesApiFetchParamCreator.aliasupdate(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Update to the whitelist(controls who can resell). Array of whitelist entries in parameter 1.
     * @param request
     */
    aliasupdatewhitelist: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.AliasesApiFetchParamCreator.aliasupdatewhitelist(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * List all affiliates for this alias.
     * @param alias
     * @param witness
     */
    aliaswhitelist: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.AliasesApiFetchParamCreator.aliaswhitelist(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Clean expired Syscoin services from indexer and internal database.
     */
    prunesyscoinservices: function (configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.AliasesApiFetchParamCreator.prunesyscoinservices(configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Query the indexer for information in a collection.
     * @param collection Collection name, either \\\&quot;alias\\\&quot;, \\\&quot;aliashistory\\\&quot;, \\\&quot;aliastxhistory\\\&quot;, \\\&quot;cert\\\&quot;,  \\\&quot;certhistory\\\&quot;, \\\&quot;offer\\\&quot;, \\\&quot;offerhistory\\\&quot;, \\\&quot;feedback\\\&quot;, \\\&quot;escrow\\\&quot;, \\\&quot;escrowbid\\\&quot;
     * @param query JSON query on the collection to retrieve a set of documents
     * @param options JSON option arguments into the query. Based on mongoc_collection_find_with_opts.
     */
    syscoinquery: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.AliasesApiFetchParamCreator.syscoinquery(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
};
/**
 * AliasesApi - object-oriented interface
 */
var AliasesApi = /** @class */ (function (_super) {
    tslib_1.__extends(AliasesApi, _super);
    function AliasesApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Add redeemscript to local wallet for signing smart contract based alias transactions.
     * @param redeemscript
     */
    AliasesApi.prototype.aliasaddscript = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.AliasesApiFp.aliasaddscript(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Returns the total amount received by the given alias in transactions with at least 1 confirmation.
     * @param alias The syscoin alias to get balance for
     */
    AliasesApi.prototype.aliasbalance = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.AliasesApiFp.aliasbalance(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Clear your whitelist(controls who can resell).
     * @param owneralias
     * @param witness
     */
    AliasesApi.prototype.aliasclearwhitelist = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.AliasesApiFp.aliasclearwhitelist(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * scan and filter aliases
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    AliasesApi.prototype.aliasfilter = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.AliasesApiFp.aliasfilter(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * List all stored values of an alias.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    AliasesApi.prototype.aliashistory = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.AliasesApiFp.aliashistory(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Show values of an alias.
     * @param aliasname
     */
    AliasesApi.prototype.aliasinfo = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.AliasesApiFp.aliasinfo(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Creates a new Syscoin Alias. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    AliasesApi.prototype.aliasnew = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.AliasesApiFp.aliasnew(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Send multiple times from an alias. Amounts are double-precision floating point numbers.
     * @param request
     */
    AliasesApi.prototype.aliaspay = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.AliasesApiFp.aliaspay(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * List all stored transactions related to an alias.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    AliasesApi.prototype.aliastxhistory = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.AliasesApiFp.aliastxhistory(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Update and possibly transfer an alias. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    AliasesApi.prototype.aliasupdate = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.AliasesApiFp.aliasupdate(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Update to the whitelist(controls who can resell). Array of whitelist entries in parameter 1.
     * @param request
     */
    AliasesApi.prototype.aliasupdatewhitelist = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.AliasesApiFp.aliasupdatewhitelist(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * List all affiliates for this alias.
     * @param alias
     * @param witness
     */
    AliasesApi.prototype.aliaswhitelist = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.AliasesApiFp.aliaswhitelist(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Clean expired Syscoin services from indexer and internal database.
     */
    AliasesApi.prototype.prunesyscoinservices = function (options) {
        if (options === void 0) { options = {}; }
        return exports.AliasesApiFp.prunesyscoinservices(this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Query the indexer for information in a collection.
     * @param collection Collection name, either \\\&quot;alias\\\&quot;, \\\&quot;aliashistory\\\&quot;, \\\&quot;aliastxhistory\\\&quot;, \\\&quot;cert\\\&quot;,  \\\&quot;certhistory\\\&quot;, \\\&quot;offer\\\&quot;, \\\&quot;offerhistory\\\&quot;, \\\&quot;feedback\\\&quot;, \\\&quot;escrow\\\&quot;, \\\&quot;escrowbid\\\&quot;
     * @param query JSON query on the collection to retrieve a set of documents
     * @param options JSON option arguments into the query. Based on mongoc_collection_find_with_opts.
     */
    AliasesApi.prototype.syscoinquery = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.AliasesApiFp.syscoinquery(params, this.configuration, options)(this.fetch, this.basePath);
    };
    return AliasesApi;
}(BaseAPI));
exports.AliasesApi = AliasesApi;
;
/**
 * AliasesApi - factory interface
 */
exports.AliasesApiFactory = function (fetch, basePath) {
    return {
        /**
         * Add redeemscript to local wallet for signing smart contract based alias transactions.
         * @param redeemscript
         */
        aliasaddscript: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.AliasesApiFp.aliasaddscript(params, configuration, options)(fetch, basePath);
        },
        /**
         * Returns the total amount received by the given alias in transactions with at least 1 confirmation.
         * @param alias The syscoin alias to get balance for
         */
        aliasbalance: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.AliasesApiFp.aliasbalance(params, configuration, options)(fetch, basePath);
        },
        /**
         * Clear your whitelist(controls who can resell).
         * @param owneralias
         * @param witness
         */
        aliasclearwhitelist: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.AliasesApiFp.aliasclearwhitelist(params, configuration, options)(fetch, basePath);
        },
        /**
         * scan and filter aliases
         * @param query Generic filter query to pass into syscoinquery
         * @param count The number of results to return
         * @param from Show results from this GUID [from], empty means first
         */
        aliasfilter: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.AliasesApiFp.aliasfilter(params, configuration, options)(fetch, basePath);
        },
        /**
         * List all stored values of an alias.
         * @param query Generic filter query to pass into syscoinquery
         * @param count The number of results to return
         * @param from Show results from this GUID [from], empty means first
         */
        aliashistory: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.AliasesApiFp.aliashistory(params, configuration, options)(fetch, basePath);
        },
        /**
         * Show values of an alias.
         * @param aliasname
         */
        aliasinfo: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.AliasesApiFp.aliasinfo(params, configuration, options)(fetch, basePath);
        },
        /**
         * Creates a new Syscoin Alias. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        aliasnew: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.AliasesApiFp.aliasnew(params, configuration, options)(fetch, basePath);
        },
        /**
         * Send multiple times from an alias. Amounts are double-precision floating point numbers.
         * @param request
         */
        aliaspay: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.AliasesApiFp.aliaspay(params, configuration, options)(fetch, basePath);
        },
        /**
         * List all stored transactions related to an alias.
         * @param query Generic filter query to pass into syscoinquery
         * @param count The number of results to return
         * @param from Show results from this GUID [from], empty means first
         */
        aliastxhistory: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.AliasesApiFp.aliastxhistory(params, configuration, options)(fetch, basePath);
        },
        /**
         * Update and possibly transfer an alias. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        aliasupdate: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.AliasesApiFp.aliasupdate(params, configuration, options)(fetch, basePath);
        },
        /**
         * Update to the whitelist(controls who can resell). Array of whitelist entries in parameter 1.
         * @param request
         */
        aliasupdatewhitelist: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.AliasesApiFp.aliasupdatewhitelist(params, configuration, options)(fetch, basePath);
        },
        /**
         * List all affiliates for this alias.
         * @param alias
         * @param witness
         */
        aliaswhitelist: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.AliasesApiFp.aliaswhitelist(params, configuration, options)(fetch, basePath);
        },
        /**
         * Clean expired Syscoin services from indexer and internal database.
         */
        prunesyscoinservices: function (configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.AliasesApiFp.prunesyscoinservices(configuration, options)(fetch, basePath);
        },
        /**
         * Query the indexer for information in a collection.
         * @param collection Collection name, either \\\&quot;alias\\\&quot;, \\\&quot;aliashistory\\\&quot;, \\\&quot;aliastxhistory\\\&quot;, \\\&quot;cert\\\&quot;,  \\\&quot;certhistory\\\&quot;, \\\&quot;offer\\\&quot;, \\\&quot;offerhistory\\\&quot;, \\\&quot;feedback\\\&quot;, \\\&quot;escrow\\\&quot;, \\\&quot;escrowbid\\\&quot;
         * @param query JSON query on the collection to retrieve a set of documents
         * @param options JSON option arguments into the query. Based on mongoc_collection_find_with_opts.
         */
        syscoinquery: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.AliasesApiFp.syscoinquery(params, configuration, options)(fetch, basePath);
        },
    };
};
/**
 * BlockmarketApi - fetch parameter creator
 */
exports.BlockmarketApiFetchParamCreator = {
    /**
     * Returns a session token for use with subsquent protected calls.
     * @param auth SHA1 hash of the user&#39;s authentication information- usernamepassword.
     */
    login: function (params, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "auth" is set
        if (params["auth"] == null) {
            throw new Error("Missing required parameter auth when calling login");
        }
        var baseUrl = "/login";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "auth": params["auth"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Store an arbitrary piece of data on a decentralized network of data storage warehouses and return the client an array of URLs through which the data can be accessed.
     * @param request
     */
    storedata: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling storedata");
        }
        var baseUrl = "/storedata";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
};
/**
 * BlockmarketApi - functional programming interface
 */
exports.BlockmarketApiFp = {
    /**
     * Returns a session token for use with subsquent protected calls.
     * @param auth SHA1 hash of the user&#39;s authentication information- usernamepassword.
     */
    login: function (params, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.BlockmarketApiFetchParamCreator.login(params, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Store an arbitrary piece of data on a decentralized network of data storage warehouses and return the client an array of URLs through which the data can be accessed.
     * @param request
     */
    storedata: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.BlockmarketApiFetchParamCreator.storedata(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
};
/**
 * BlockmarketApi - object-oriented interface
 */
var BlockmarketApi = /** @class */ (function (_super) {
    tslib_1.__extends(BlockmarketApi, _super);
    function BlockmarketApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a session token for use with subsquent protected calls.
     * @param auth SHA1 hash of the user&#39;s authentication information- usernamepassword.
     */
    BlockmarketApi.prototype.login = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.BlockmarketApiFp.login(params, options)(this.fetch, this.basePath);
    };
    /**
     * Store an arbitrary piece of data on a decentralized network of data storage warehouses and return the client an array of URLs through which the data can be accessed.
     * @param request
     */
    BlockmarketApi.prototype.storedata = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.BlockmarketApiFp.storedata(params, this.configuration, options)(this.fetch, this.basePath);
    };
    return BlockmarketApi;
}(BaseAPI));
exports.BlockmarketApi = BlockmarketApi;
;
/**
 * BlockmarketApi - factory interface
 */
exports.BlockmarketApiFactory = function (fetch, basePath) {
    return {
        /**
         * Returns a session token for use with subsquent protected calls.
         * @param auth SHA1 hash of the user&#39;s authentication information- usernamepassword.
         */
        login: function (params, options) {
            if (options === void 0) { options = {}; }
            return exports.BlockmarketApiFp.login(params, options)(fetch, basePath);
        },
        /**
         * Store an arbitrary piece of data on a decentralized network of data storage warehouses and return the client an array of URLs through which the data can be accessed.
         * @param request
         */
        storedata: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.BlockmarketApiFp.storedata(params, configuration, options)(fetch, basePath);
        },
    };
};
/**
 * CertificatesApi - fetch parameter creator
 */
exports.CertificatesApiFetchParamCreator = {
    /**
     * scan and filter certs
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    certfilter: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "query" is set
        if (params["query"] == null) {
            throw new Error("Missing required parameter query when calling certfilter");
        }
        var baseUrl = "/certfilter";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "query": params["query"],
            "count": params["count"],
            "from": params["from"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * List all stored values of an cert.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    certhistory: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "query" is set
        if (params["query"] == null) {
            throw new Error("Missing required parameter query when calling certhistory");
        }
        var baseUrl = "/certhistory";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "query": params["query"],
            "count": params["count"],
            "from": params["from"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Show stored values of a single certificate.
     * @param guid
     */
    certinfo: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "guid" is set
        if (params["guid"] == null) {
            throw new Error("Missing required parameter guid when calling certinfo");
        }
        var baseUrl = "/certinfo";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "guid": params["guid"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Create a new Syscoin Certificate. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    certnew: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling certnew");
        }
        var baseUrl = "/certnew";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Transfer certificate from one user to another. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    certtransfer: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling certtransfer");
        }
        var baseUrl = "/certtransfer";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Perform an update on an certificate you control. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    certupdate: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling certupdate");
        }
        var baseUrl = "/certupdate";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
};
/**
 * CertificatesApi - functional programming interface
 */
exports.CertificatesApiFp = {
    /**
     * scan and filter certs
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    certfilter: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.CertificatesApiFetchParamCreator.certfilter(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * List all stored values of an cert.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    certhistory: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.CertificatesApiFetchParamCreator.certhistory(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Show stored values of a single certificate.
     * @param guid
     */
    certinfo: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.CertificatesApiFetchParamCreator.certinfo(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Create a new Syscoin Certificate. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    certnew: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.CertificatesApiFetchParamCreator.certnew(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Transfer certificate from one user to another. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    certtransfer: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.CertificatesApiFetchParamCreator.certtransfer(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Perform an update on an certificate you control. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    certupdate: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.CertificatesApiFetchParamCreator.certupdate(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
};
/**
 * CertificatesApi - object-oriented interface
 */
var CertificatesApi = /** @class */ (function (_super) {
    tslib_1.__extends(CertificatesApi, _super);
    function CertificatesApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * scan and filter certs
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    CertificatesApi.prototype.certfilter = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.CertificatesApiFp.certfilter(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * List all stored values of an cert.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    CertificatesApi.prototype.certhistory = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.CertificatesApiFp.certhistory(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Show stored values of a single certificate.
     * @param guid
     */
    CertificatesApi.prototype.certinfo = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.CertificatesApiFp.certinfo(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Create a new Syscoin Certificate. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    CertificatesApi.prototype.certnew = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.CertificatesApiFp.certnew(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Transfer certificate from one user to another. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    CertificatesApi.prototype.certtransfer = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.CertificatesApiFp.certtransfer(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Perform an update on an certificate you control. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    CertificatesApi.prototype.certupdate = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.CertificatesApiFp.certupdate(params, this.configuration, options)(this.fetch, this.basePath);
    };
    return CertificatesApi;
}(BaseAPI));
exports.CertificatesApi = CertificatesApi;
;
/**
 * CertificatesApi - factory interface
 */
exports.CertificatesApiFactory = function (fetch, basePath) {
    return {
        /**
         * scan and filter certs
         * @param query Generic filter query to pass into syscoinquery
         * @param count The number of results to return
         * @param from Show results from this GUID [from], empty means first
         */
        certfilter: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.CertificatesApiFp.certfilter(params, configuration, options)(fetch, basePath);
        },
        /**
         * List all stored values of an cert.
         * @param query Generic filter query to pass into syscoinquery
         * @param count The number of results to return
         * @param from Show results from this GUID [from], empty means first
         */
        certhistory: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.CertificatesApiFp.certhistory(params, configuration, options)(fetch, basePath);
        },
        /**
         * Show stored values of a single certificate.
         * @param guid
         */
        certinfo: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.CertificatesApiFp.certinfo(params, configuration, options)(fetch, basePath);
        },
        /**
         * Create a new Syscoin Certificate. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        certnew: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.CertificatesApiFp.certnew(params, configuration, options)(fetch, basePath);
        },
        /**
         * Transfer certificate from one user to another. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        certtransfer: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.CertificatesApiFp.certtransfer(params, configuration, options)(fetch, basePath);
        },
        /**
         * Perform an update on an certificate you control. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        certupdate: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.CertificatesApiFp.certupdate(params, configuration, options)(fetch, basePath);
        },
    };
};
/**
 * EscrowApi - fetch parameter creator
 */
exports.EscrowApiFetchParamCreator = {
    /**
     * Acknowledge escrow payment as seller of offer. Deducts qty of offer and increases number of sold inventory.
     * @param escrowguid
     * @param witness
     */
    escrowacknowledge: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "escrowguid" is set
        if (params["escrowguid"] == null) {
            throw new Error("Missing required parameter escrowguid when calling escrowacknowledge");
        }
        var baseUrl = "/escrowacknowledge";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "escrowguid": params["escrowguid"],
            "witness": params["witness"],
        });
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Add shipping to an escrow.
     * @param escrow GUID of escrow
     * @param shipping Amount to add to shipping for merchant. Amount is in payment option currency. Example, If merchant requests 0.1 BTC for shipping and escrow is paid in BTC, enter 0.1 here.
     * @param witness Witness alias name that will sign for web-of-trust notarization of this transaction.
     */
    escrowaddshipping: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "escrow" is set
        if (params["escrow"] == null) {
            throw new Error("Missing required parameter escrow when calling escrowaddshipping");
        }
        // verify required parameter "shipping" is set
        if (params["shipping"] == null) {
            throw new Error("Missing required parameter shipping when calling escrowaddshipping");
        }
        var baseUrl = "/escrowaddshipping";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "escrow": params["escrow"],
            "shipping": params["shipping"],
            "witness": params["witness"],
        });
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Bid on an auction.
     * @param request
     */
    escrowbid: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling escrowbid");
        }
        var baseUrl = "/escrowbid";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * scan and filter bids on escrow contracts
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    escrowbidhistory: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "query" is set
        if (params["query"] == null) {
            throw new Error("Missing required parameter query when calling escrowbidhistory");
        }
        var baseUrl = "/escrowbidhistory";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "query": params["query"],
            "count": params["count"],
            "from": params["from"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Completes an escrow refund by creating the escrow complete refund transaction on syscoin blockchain.
     * @param request
     */
    escrowcompleterefund: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling escrowcompleterefund");
        }
        var baseUrl = "/escrowcompleterefund";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Completes an escrow release by creating the escrow complete release transaction on syscoin blockchain.
     * @param request
     */
    escrowcompleterelease: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling escrowcompleterelease");
        }
        var baseUrl = "/escrowcompleterelease";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Creates raw transaction for escrow refund or release, sign the output raw transaction and pass it via the rawtx parameter to escrowrelease. Type is 'refund' or 'release'. Third parameter is array of input (txid, vout, amount) pairs to be used to fund escrow payment. User role represents either 'seller', 'buyer' or 'arbiter', represents who signed for the payment of the escrow. 'seller' or 'arbiter' is valid for type 'refund', while 'buyer' or 'arbiter' is valid for type 'release'. You only need to provide this parameter when calling escrowrelease or escrowrefund.
     * @param request
     */
    escrowcreaterawtransaction: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling escrowcreaterawtransaction");
        }
        var baseUrl = "/escrowcreaterawtransaction";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Send feedback for primary and secondary users in escrow, depending on who you are. Ratings are numbers from 1 to 5. User From and User To is either 'buyer', 'seller', 'reseller', or 'arbiter'.
     * @param request
     */
    escrowfeedback: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling escrowfeedback");
        }
        var baseUrl = "/escrowfeedback";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * scan and filter feedbacks and ratings
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    escrowfeedbackhistory: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "query" is set
        if (params["query"] == null) {
            throw new Error("Missing required parameter query when calling escrowfeedbackhistory");
        }
        var baseUrl = "/escrowfeedbackhistory";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "query": params["query"],
            "count": params["count"],
            "from": params["from"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * scan and filter escrows
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    escrowfilter: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "query" is set
        if (params["query"] == null) {
            throw new Error("Missing required parameter query when calling escrowfilter");
        }
        var baseUrl = "/escrowfilter";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "query": params["query"],
            "count": params["count"],
            "from": params["from"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Show stored values of a single escrow
     * @param escrow GUID of escrow
     */
    escrowinfo: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "escrow" is set
        if (params["escrow"] == null) {
            throw new Error("Missing required parameter escrow when calling escrowinfo");
        }
        var baseUrl = "/escrowinfo";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "escrow": params["escrow"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Create new arbitrated Syscoin escrow.
     * @param request
     */
    escrownew: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling escrownew");
        }
        var baseUrl = "/escrownew";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Refunds escrow funds back to buyer, buyer needs to sign the output transaction and send to the network. User role represents either 'seller' or 'arbiter'. Enter in rawTx if this is an external payment refund.
     * @param request
     */
    escrowrefund: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling escrowrefund");
        }
        var baseUrl = "/escrowrefund";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Releases escrow funds to seller, seller needs to sign the output transaction and send to the network. User role represents either 'buyer' or 'arbiter'. Enter in rawTx if this is an external payment release.
     * @param request
     */
    escrowrelease: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling escrowrelease");
        }
        var baseUrl = "/escrowrelease";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
};
/**
 * EscrowApi - functional programming interface
 */
exports.EscrowApiFp = {
    /**
     * Acknowledge escrow payment as seller of offer. Deducts qty of offer and increases number of sold inventory.
     * @param escrowguid
     * @param witness
     */
    escrowacknowledge: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.EscrowApiFetchParamCreator.escrowacknowledge(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Add shipping to an escrow.
     * @param escrow GUID of escrow
     * @param shipping Amount to add to shipping for merchant. Amount is in payment option currency. Example, If merchant requests 0.1 BTC for shipping and escrow is paid in BTC, enter 0.1 here.
     * @param witness Witness alias name that will sign for web-of-trust notarization of this transaction.
     */
    escrowaddshipping: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.EscrowApiFetchParamCreator.escrowaddshipping(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Bid on an auction.
     * @param request
     */
    escrowbid: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.EscrowApiFetchParamCreator.escrowbid(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * scan and filter bids on escrow contracts
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    escrowbidhistory: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.EscrowApiFetchParamCreator.escrowbidhistory(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Completes an escrow refund by creating the escrow complete refund transaction on syscoin blockchain.
     * @param request
     */
    escrowcompleterefund: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.EscrowApiFetchParamCreator.escrowcompleterefund(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Completes an escrow release by creating the escrow complete release transaction on syscoin blockchain.
     * @param request
     */
    escrowcompleterelease: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.EscrowApiFetchParamCreator.escrowcompleterelease(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Creates raw transaction for escrow refund or release, sign the output raw transaction and pass it via the rawtx parameter to escrowrelease. Type is 'refund' or 'release'. Third parameter is array of input (txid, vout, amount) pairs to be used to fund escrow payment. User role represents either 'seller', 'buyer' or 'arbiter', represents who signed for the payment of the escrow. 'seller' or 'arbiter' is valid for type 'refund', while 'buyer' or 'arbiter' is valid for type 'release'. You only need to provide this parameter when calling escrowrelease or escrowrefund.
     * @param request
     */
    escrowcreaterawtransaction: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.EscrowApiFetchParamCreator.escrowcreaterawtransaction(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Send feedback for primary and secondary users in escrow, depending on who you are. Ratings are numbers from 1 to 5. User From and User To is either 'buyer', 'seller', 'reseller', or 'arbiter'.
     * @param request
     */
    escrowfeedback: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.EscrowApiFetchParamCreator.escrowfeedback(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * scan and filter feedbacks and ratings
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    escrowfeedbackhistory: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.EscrowApiFetchParamCreator.escrowfeedbackhistory(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * scan and filter escrows
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    escrowfilter: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.EscrowApiFetchParamCreator.escrowfilter(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Show stored values of a single escrow
     * @param escrow GUID of escrow
     */
    escrowinfo: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.EscrowApiFetchParamCreator.escrowinfo(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Create new arbitrated Syscoin escrow.
     * @param request
     */
    escrownew: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.EscrowApiFetchParamCreator.escrownew(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Refunds escrow funds back to buyer, buyer needs to sign the output transaction and send to the network. User role represents either 'seller' or 'arbiter'. Enter in rawTx if this is an external payment refund.
     * @param request
     */
    escrowrefund: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.EscrowApiFetchParamCreator.escrowrefund(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Releases escrow funds to seller, seller needs to sign the output transaction and send to the network. User role represents either 'buyer' or 'arbiter'. Enter in rawTx if this is an external payment release.
     * @param request
     */
    escrowrelease: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.EscrowApiFetchParamCreator.escrowrelease(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
};
/**
 * EscrowApi - object-oriented interface
 */
var EscrowApi = /** @class */ (function (_super) {
    tslib_1.__extends(EscrowApi, _super);
    function EscrowApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Acknowledge escrow payment as seller of offer. Deducts qty of offer and increases number of sold inventory.
     * @param escrowguid
     * @param witness
     */
    EscrowApi.prototype.escrowacknowledge = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.EscrowApiFp.escrowacknowledge(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Add shipping to an escrow.
     * @param escrow GUID of escrow
     * @param shipping Amount to add to shipping for merchant. Amount is in payment option currency. Example, If merchant requests 0.1 BTC for shipping and escrow is paid in BTC, enter 0.1 here.
     * @param witness Witness alias name that will sign for web-of-trust notarization of this transaction.
     */
    EscrowApi.prototype.escrowaddshipping = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.EscrowApiFp.escrowaddshipping(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Bid on an auction.
     * @param request
     */
    EscrowApi.prototype.escrowbid = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.EscrowApiFp.escrowbid(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * scan and filter bids on escrow contracts
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    EscrowApi.prototype.escrowbidhistory = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.EscrowApiFp.escrowbidhistory(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Completes an escrow refund by creating the escrow complete refund transaction on syscoin blockchain.
     * @param request
     */
    EscrowApi.prototype.escrowcompleterefund = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.EscrowApiFp.escrowcompleterefund(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Completes an escrow release by creating the escrow complete release transaction on syscoin blockchain.
     * @param request
     */
    EscrowApi.prototype.escrowcompleterelease = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.EscrowApiFp.escrowcompleterelease(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Creates raw transaction for escrow refund or release, sign the output raw transaction and pass it via the rawtx parameter to escrowrelease. Type is 'refund' or 'release'. Third parameter is array of input (txid, vout, amount) pairs to be used to fund escrow payment. User role represents either 'seller', 'buyer' or 'arbiter', represents who signed for the payment of the escrow. 'seller' or 'arbiter' is valid for type 'refund', while 'buyer' or 'arbiter' is valid for type 'release'. You only need to provide this parameter when calling escrowrelease or escrowrefund.
     * @param request
     */
    EscrowApi.prototype.escrowcreaterawtransaction = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.EscrowApiFp.escrowcreaterawtransaction(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Send feedback for primary and secondary users in escrow, depending on who you are. Ratings are numbers from 1 to 5. User From and User To is either 'buyer', 'seller', 'reseller', or 'arbiter'.
     * @param request
     */
    EscrowApi.prototype.escrowfeedback = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.EscrowApiFp.escrowfeedback(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * scan and filter feedbacks and ratings
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    EscrowApi.prototype.escrowfeedbackhistory = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.EscrowApiFp.escrowfeedbackhistory(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * scan and filter escrows
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    EscrowApi.prototype.escrowfilter = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.EscrowApiFp.escrowfilter(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Show stored values of a single escrow
     * @param escrow GUID of escrow
     */
    EscrowApi.prototype.escrowinfo = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.EscrowApiFp.escrowinfo(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Create new arbitrated Syscoin escrow.
     * @param request
     */
    EscrowApi.prototype.escrownew = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.EscrowApiFp.escrownew(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Refunds escrow funds back to buyer, buyer needs to sign the output transaction and send to the network. User role represents either 'seller' or 'arbiter'. Enter in rawTx if this is an external payment refund.
     * @param request
     */
    EscrowApi.prototype.escrowrefund = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.EscrowApiFp.escrowrefund(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Releases escrow funds to seller, seller needs to sign the output transaction and send to the network. User role represents either 'buyer' or 'arbiter'. Enter in rawTx if this is an external payment release.
     * @param request
     */
    EscrowApi.prototype.escrowrelease = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.EscrowApiFp.escrowrelease(params, this.configuration, options)(this.fetch, this.basePath);
    };
    return EscrowApi;
}(BaseAPI));
exports.EscrowApi = EscrowApi;
;
/**
 * EscrowApi - factory interface
 */
exports.EscrowApiFactory = function (fetch, basePath) {
    return {
        /**
         * Acknowledge escrow payment as seller of offer. Deducts qty of offer and increases number of sold inventory.
         * @param escrowguid
         * @param witness
         */
        escrowacknowledge: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.EscrowApiFp.escrowacknowledge(params, configuration, options)(fetch, basePath);
        },
        /**
         * Add shipping to an escrow.
         * @param escrow GUID of escrow
         * @param shipping Amount to add to shipping for merchant. Amount is in payment option currency. Example, If merchant requests 0.1 BTC for shipping and escrow is paid in BTC, enter 0.1 here.
         * @param witness Witness alias name that will sign for web-of-trust notarization of this transaction.
         */
        escrowaddshipping: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.EscrowApiFp.escrowaddshipping(params, configuration, options)(fetch, basePath);
        },
        /**
         * Bid on an auction.
         * @param request
         */
        escrowbid: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.EscrowApiFp.escrowbid(params, configuration, options)(fetch, basePath);
        },
        /**
         * scan and filter bids on escrow contracts
         * @param query Generic filter query to pass into syscoinquery
         * @param count The number of results to return
         * @param from Show results from this GUID [from], empty means first
         */
        escrowbidhistory: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.EscrowApiFp.escrowbidhistory(params, configuration, options)(fetch, basePath);
        },
        /**
         * Completes an escrow refund by creating the escrow complete refund transaction on syscoin blockchain.
         * @param request
         */
        escrowcompleterefund: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.EscrowApiFp.escrowcompleterefund(params, configuration, options)(fetch, basePath);
        },
        /**
         * Completes an escrow release by creating the escrow complete release transaction on syscoin blockchain.
         * @param request
         */
        escrowcompleterelease: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.EscrowApiFp.escrowcompleterelease(params, configuration, options)(fetch, basePath);
        },
        /**
         * Creates raw transaction for escrow refund or release, sign the output raw transaction and pass it via the rawtx parameter to escrowrelease. Type is 'refund' or 'release'. Third parameter is array of input (txid, vout, amount) pairs to be used to fund escrow payment. User role represents either 'seller', 'buyer' or 'arbiter', represents who signed for the payment of the escrow. 'seller' or 'arbiter' is valid for type 'refund', while 'buyer' or 'arbiter' is valid for type 'release'. You only need to provide this parameter when calling escrowrelease or escrowrefund.
         * @param request
         */
        escrowcreaterawtransaction: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.EscrowApiFp.escrowcreaterawtransaction(params, configuration, options)(fetch, basePath);
        },
        /**
         * Send feedback for primary and secondary users in escrow, depending on who you are. Ratings are numbers from 1 to 5. User From and User To is either 'buyer', 'seller', 'reseller', or 'arbiter'.
         * @param request
         */
        escrowfeedback: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.EscrowApiFp.escrowfeedback(params, configuration, options)(fetch, basePath);
        },
        /**
         * scan and filter feedbacks and ratings
         * @param query Generic filter query to pass into syscoinquery
         * @param count The number of results to return
         * @param from Show results from this GUID [from], empty means first
         */
        escrowfeedbackhistory: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.EscrowApiFp.escrowfeedbackhistory(params, configuration, options)(fetch, basePath);
        },
        /**
         * scan and filter escrows
         * @param query Generic filter query to pass into syscoinquery
         * @param count The number of results to return
         * @param from Show results from this GUID [from], empty means first
         */
        escrowfilter: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.EscrowApiFp.escrowfilter(params, configuration, options)(fetch, basePath);
        },
        /**
         * Show stored values of a single escrow
         * @param escrow GUID of escrow
         */
        escrowinfo: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.EscrowApiFp.escrowinfo(params, configuration, options)(fetch, basePath);
        },
        /**
         * Create new arbitrated Syscoin escrow.
         * @param request
         */
        escrownew: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.EscrowApiFp.escrownew(params, configuration, options)(fetch, basePath);
        },
        /**
         * Refunds escrow funds back to buyer, buyer needs to sign the output transaction and send to the network. User role represents either 'seller' or 'arbiter'. Enter in rawTx if this is an external payment refund.
         * @param request
         */
        escrowrefund: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.EscrowApiFp.escrowrefund(params, configuration, options)(fetch, basePath);
        },
        /**
         * Releases escrow funds to seller, seller needs to sign the output transaction and send to the network. User role represents either 'buyer' or 'arbiter'. Enter in rawTx if this is an external payment release.
         * @param request
         */
        escrowrelease: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.EscrowApiFp.escrowrelease(params, configuration, options)(fetch, basePath);
        },
    };
};
/**
 * GeneralApi - fetch parameter creator
 */
exports.GeneralApiFetchParamCreator = {
    /**
     * Add a nrequired-to-sign multisignature address to the wallet. Each key is a Syscoin address or hex-encoded public key. If 'account' is specified (DEPRECATED), assign address to that account.
     * @param request
     */
    addmultisigaddress: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling addmultisigaddress");
        }
        var baseUrl = "/addmultisigaddress";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Reveals the private key corresponding to 'syscoinaddress'. Then the importprivkey can be used with this output.
     * @param address The syscoin address for the private key
     */
    dumpprivkey: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "address" is set
        if (params["address"] == null) {
            throw new Error("Missing required parameter address when calling dumpprivkey");
        }
        var baseUrl = "/dumpprivkey";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "address": params["address"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Dumps all wallet keys in a human-readable format.
     * @param filename The filename
     */
    dumpwallet: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "filename" is set
        if (params["filename"] == null) {
            throw new Error("Missing required parameter filename when calling dumpwallet");
        }
        var baseUrl = "/dumpwallet";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "filename": params["filename"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Encrypts the wallet with 'passphrase'. This is for first time encryption. After this, any calls that interact with private keys such as sending or signing will require the passphrase to be set prior the making these calls. Use the walletpassphrase call for this, and then walletlock call. If the wallet is already encrypted, use the walletpassphrasechange call. Note that this will shutdown the server.
     * @param request
     */
    encryptwallet: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling encryptwallet");
        }
        var baseUrl = "/encryptwallet";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * DEPRECATED. Returns the account associated with the given address.
     * @param syscoinaddress The syscoin address for account lookup.
     */
    getaccount: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "syscoinaddress" is set
        if (params["syscoinaddress"] == null) {
            throw new Error("Missing required parameter syscoinaddress when calling getaccount");
        }
        var baseUrl = "/getaccount";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "syscoinaddress": params["syscoinaddress"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * DEPRECATED. Returns the current Syscoin address for receiving payments to this account.
     * @param account The account name for the address. It can also be set to the empty string \&quot;\&quot; to represent the default account. The account does not need to exist, it will be created and a new address created  if there is no account by the given name.
     */
    getaccountaddress: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "account" is set
        if (params["account"] == null) {
            throw new Error("Missing required parameter account when calling getaccountaddress");
        }
        var baseUrl = "/getaccountaddress";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "account": params["account"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns the balance for addresses or aliases
     * @param addresses
     */
    getaddressbalance: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "addresses" is set
        if (params["addresses"] == null) {
            throw new Error("Missing required parameter addresses when calling getaddressbalance");
        }
        var baseUrl = "/getaddressbalance";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "addresses": params["addresses"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns all unspent outputs for addresses or aliases
     * @param addresses
     */
    getaddressutxos: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "addresses" is set
        if (params["addresses"] == null) {
            throw new Error("Missing required parameter addresses when calling getaddressutxos");
        }
        var baseUrl = "/getaddressutxos";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "addresses": params["addresses"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * If account is not specified, returns the server's total available balance. If account is specified (DEPRECATED), returns the balance in the account. Note that the account \"\" is not the same as leaving the parameter out. The server total may be different to the balance in the default \"\" account.
     * @param account DEPRECATED. The selected account, or \&quot;*\&quot; for entire wallet. It may be the default account using \&quot;\&quot;.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeWatchonly Also include balance in watchonly addresses (see &#39;importaddress&#39;)
     */
    getbalance: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var baseUrl = "/getbalance";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "account": params["account"],
            "minconf": params["minconf"],
            "addlockconf": params["addlockconf"],
            "includeWatchonly": params["includeWatchonly"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * If verbose is false, returns a string that is serialized, hex-encoded data for block 'hash'. If verbose is true, returns an Object with information about block <hash>.
     * @param hash
     * @param verbose
     */
    getblock: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "hash" is set
        if (params["hash"] == null) {
            throw new Error("Missing required parameter hash when calling getblock");
        }
        var baseUrl = "/getblock";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "hash": params["hash"],
            "verbose": params["verbose"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns an object containing various state info regarding block chain processing.
     */
    getblockchaininfo: function (configuration, options) {
        if (options === void 0) { options = {}; }
        var baseUrl = "/getblockchaininfo";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns the number of blocks in the longest block chain.
     */
    getblockcount: function (configuration, options) {
        if (options === void 0) { options = {}; }
        var baseUrl = "/getblockcount";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns an object containing various state info.
     */
    getinfo: function (configuration, options) {
        if (options === void 0) { options = {}; }
        var baseUrl = "/getinfo";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns a json object containing mining-related information.
     */
    getmininginfo: function (configuration, options) {
        if (options === void 0) { options = {}; }
        var baseUrl = "/getmininginfo";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns a json object containing network-related information.
     */
    getnetworkinfo: function (configuration, options) {
        if (options === void 0) { options = {}; }
        var baseUrl = "/getnetworkinfo";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns a new Syscoin address for receiving payments. If 'account' is specified (DEPRECATED), it is added to the address book so payments received with the address will be credited to 'account'.
     * @param request
     */
    getnewaddress: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var baseUrl = "/getnewaddress";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns data about each connected network node as a json array of objects.
     */
    getpeerinfo: function (configuration, options) {
        if (options === void 0) { options = {}; }
        var baseUrl = "/getpeerinfo";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * DEPRECATED. Returns the total amount received by addresses with <account> in transactions with at least [minconf] confirmations.
     * @param account The selected account, may be the default account using \&quot;\&quot;.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     */
    getreceivedbyaccount: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "account" is set
        if (params["account"] == null) {
            throw new Error("Missing required parameter account when calling getreceivedbyaccount");
        }
        var baseUrl = "/getreceivedbyaccount";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "account": params["account"],
            "minconf": params["minconf"],
            "addlockconf": params["addlockconf"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns the total amount received by the given syscoinaddress in transactions with at least minconf confirmations.
     * @param syscoinaddress The syscoin address for transactions.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     */
    getreceivedbyaddress: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "syscoinaddress" is set
        if (params["syscoinaddress"] == null) {
            throw new Error("Missing required parameter syscoinaddress when calling getreceivedbyaddress");
        }
        var baseUrl = "/getreceivedbyaddress";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "syscoinaddress": params["syscoinaddress"],
            "minconf": params["minconf"],
            "addlockconf": params["addlockconf"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Get detailed information about in-wallet transaction <txid>
     * @param txid The transaction id
     * @param includeWatchonly Whether to include watchonly addresses in balance calculation and details[]
     */
    gettransaction: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "txid" is set
        if (params["txid"] == null) {
            throw new Error("Missing required parameter txid when calling gettransaction");
        }
        var baseUrl = "/gettransaction";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "txid": params["txid"],
            "includeWatchonly": params["includeWatchonly"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns the server's total unconfirmed balance
     */
    getunconfirmedbalance: function (configuration, options) {
        if (options === void 0) { options = {}; }
        var baseUrl = "/getunconfirmedbalance";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns wallet balance for all accounts. Does not include watch only accounts.
     */
    getwalletbalance: function (configuration, options) {
        if (options === void 0) { options = {}; }
        var baseUrl = "/getwalletbalance";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns an object containing various wallet state info.
     */
    getwalletinfo: function (configuration, options) {
        if (options === void 0) { options = {}; }
        var baseUrl = "/getwalletinfo";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Adds a script (in hex) or address that can be watched as if it were in your wallet but cannot be used to spend.
     * @param request
     */
    importaddress: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling importaddress");
        }
        var baseUrl = "/importaddress";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Adds a private key (as returned by dumpprivkey) to your wallet.
     * @param request
     */
    importprivkey: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling importprivkey");
        }
        var baseUrl = "/importprivkey";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Adds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend.
     * @param request
     */
    importpubkey: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling importpubkey");
        }
        var baseUrl = "/importpubkey";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Imports keys from a wallet dump file (see dumpwallet).
     * @param request
     */
    importwallet: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling importwallet");
        }
        var baseUrl = "/importwallet";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * DEPRECATED. Returns Object that has account names as keys, account balances as values.
     * @param minconf Only include transactions with at least this many confirmations
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeWatchonly Include balances in watchonly addresses (see &#39;importaddress&#39;)
     */
    listaccounts: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var baseUrl = "/listaccounts";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "minconf": params["minconf"],
            "addlockconf": params["addlockconf"],
            "includeWatchonly": params["includeWatchonly"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Lists groups of addresses which have had their common ownership made public by common use as inputs or as the resulting change in past transactions
     */
    listaddressgroupings: function (configuration, options) {
        if (options === void 0) { options = {}; }
        var baseUrl = "/listaddressgroupings";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * DEPRECATED. List balances by account.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeempty Whether to include accounts that haven&#39;t received any payments.
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     */
    listreceivedbyaccount: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var baseUrl = "/listreceivedbyaccount";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "minconf": params["minconf"],
            "addlockconf": params["addlockconf"],
            "includeempty": params["includeempty"],
            "includeWatchonly": params["includeWatchonly"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * List balances by receiving address.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeempty Whether to include accounts that haven&#39;t received any payments.
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     */
    listreceivedbyaddress: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var baseUrl = "/listreceivedbyaddress";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "minconf": params["minconf"],
            "addlockconf": params["addlockconf"],
            "includeempty": params["includeempty"],
            "includeWatchonly": params["includeWatchonly"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Get all transactions in blocks since block [blockhash], or all transactions if omitted
     * @param blockhash The block hash to list transactions since
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     * @param targetConfirmations
     */
    listsinceblock: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var baseUrl = "/listsinceblock";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "blockhash": params["blockhash"],
            "includeWatchonly": params["includeWatchonly"],
            "target-confirmations": params["targetConfirmations"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Returns up to 'count' most recent transactions skipping the first 'from' transactions for account 'account'.
     * @param account DEPRECATED. The account name. Should be \&quot;*\&quot;.
     * @param count The number of transactions to return
     * @param from The number of transactions to skip
     * @param includeWatchonly Include transactions to watchonly addresses (see &#39;importaddress&#39;)
     */
    listtransactions: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var baseUrl = "/listtransactions";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "account": params["account"],
            "count": params["count"],
            "from": params["from"],
            "includeWatchonly": params["includeWatchonly"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * DEPRECATED (use sendtoaddress). Sent an amount from an account to a syscoin address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    sendfrom: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling sendfrom");
        }
        var baseUrl = "/sendfrom";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Send multiple times. Amounts are double-precision floating point numbers. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    sendmany: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling sendmany");
        }
        var baseUrl = "/sendmany";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Send an amount to a given address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    sendtoaddress: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling sendtoaddress");
        }
        var baseUrl = "/sendtoaddress";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Sign a message with the private key of an address. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    signmessage: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling signmessage");
        }
        var baseUrl = "/signmessage";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Decode raw syscoin transaction (serialized, hex-encoded) and display information pertaining to the service that is included in the transactiion data output(OP_RETURN).
     * @param hexstring
     */
    syscoindecoderawtransaction: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "hexstring" is set
        if (params["hexstring"] == null) {
            throw new Error("Missing required parameter hexstring when calling syscoindecoderawtransaction");
        }
        var baseUrl = "/syscoindecoderawtransaction";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["hexstring"]) {
            fetchOptions.body = JSON.stringify(params["hexstring"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Signed raw transaction (serialized, hex-encoded) sent out to the network.
     * @param hexstring
     */
    syscoinsendrawtransaction: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "hexstring" is set
        if (params["hexstring"] == null) {
            throw new Error("Missing required parameter hexstring when calling syscoinsendrawtransaction");
        }
        var baseUrl = "/syscoinsendrawtransaction";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["hexstring"]) {
            fetchOptions.body = JSON.stringify(params["hexstring"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Return information about the given syscoin address.
     * @param syscoinaddress
     */
    validateaddress: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "syscoinaddress" is set
        if (params["syscoinaddress"] == null) {
            throw new Error("Missing required parameter syscoinaddress when calling validateaddress");
        }
        var baseUrl = "/validateaddress";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "syscoinaddress": params["syscoinaddress"],
        });
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Verify a signed message
     * @param syscoinaddress The syscoin address to use for the signature.
     * @param signature The signature provided by the signer in base 64 encoding (see signmessage).
     * @param message The message that was signed.
     */
    verifymessage: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "syscoinaddress" is set
        if (params["syscoinaddress"] == null) {
            throw new Error("Missing required parameter syscoinaddress when calling verifymessage");
        }
        // verify required parameter "signature" is set
        if (params["signature"] == null) {
            throw new Error("Missing required parameter signature when calling verifymessage");
        }
        // verify required parameter "message" is set
        if (params["message"] == null) {
            throw new Error("Missing required parameter message when calling verifymessage");
        }
        var baseUrl = "/verifymessage";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "syscoinaddress": params["syscoinaddress"],
            "signature": params["signature"],
            "message": params["message"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Removes the wallet encryption key from memory, locking the wallet. After calling this method, you will need to call walletpassphrase again before being able to call any methods which require the wallet to be unlocked.
     */
    walletlock: function (configuration, options) {
        if (options === void 0) { options = {}; }
        var baseUrl = "/walletlock";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Stores the wallet decryption key in memory for 'timeout' seconds. This is needed prior to performing transactions related to private keys such as sending syscoins
     * @param request
     */
    walletpassphrase: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling walletpassphrase");
        }
        var baseUrl = "/walletpassphrase";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Changes the wallet passphrase from 'oldpassphrase' to 'newpassphrase'.
     * @param request
     */
    walletpassphrasechange: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling walletpassphrasechange");
        }
        var baseUrl = "/walletpassphrasechange";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
};
/**
 * GeneralApi - functional programming interface
 */
exports.GeneralApiFp = {
    /**
     * Add a nrequired-to-sign multisignature address to the wallet. Each key is a Syscoin address or hex-encoded public key. If 'account' is specified (DEPRECATED), assign address to that account.
     * @param request
     */
    addmultisigaddress: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.addmultisigaddress(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Reveals the private key corresponding to 'syscoinaddress'. Then the importprivkey can be used with this output.
     * @param address The syscoin address for the private key
     */
    dumpprivkey: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.dumpprivkey(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Dumps all wallet keys in a human-readable format.
     * @param filename The filename
     */
    dumpwallet: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.dumpwallet(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Encrypts the wallet with 'passphrase'. This is for first time encryption. After this, any calls that interact with private keys such as sending or signing will require the passphrase to be set prior the making these calls. Use the walletpassphrase call for this, and then walletlock call. If the wallet is already encrypted, use the walletpassphrasechange call. Note that this will shutdown the server.
     * @param request
     */
    encryptwallet: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.encryptwallet(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * DEPRECATED. Returns the account associated with the given address.
     * @param syscoinaddress The syscoin address for account lookup.
     */
    getaccount: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.getaccount(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * DEPRECATED. Returns the current Syscoin address for receiving payments to this account.
     * @param account The account name for the address. It can also be set to the empty string \&quot;\&quot; to represent the default account. The account does not need to exist, it will be created and a new address created  if there is no account by the given name.
     */
    getaccountaddress: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.getaccountaddress(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns the balance for addresses or aliases
     * @param addresses
     */
    getaddressbalance: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.getaddressbalance(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns all unspent outputs for addresses or aliases
     * @param addresses
     */
    getaddressutxos: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.getaddressutxos(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * If account is not specified, returns the server's total available balance. If account is specified (DEPRECATED), returns the balance in the account. Note that the account \"\" is not the same as leaving the parameter out. The server total may be different to the balance in the default \"\" account.
     * @param account DEPRECATED. The selected account, or \&quot;*\&quot; for entire wallet. It may be the default account using \&quot;\&quot;.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeWatchonly Also include balance in watchonly addresses (see &#39;importaddress&#39;)
     */
    getbalance: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.getbalance(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * If verbose is false, returns a string that is serialized, hex-encoded data for block 'hash'. If verbose is true, returns an Object with information about block <hash>.
     * @param hash
     * @param verbose
     */
    getblock: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.getblock(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns an object containing various state info regarding block chain processing.
     */
    getblockchaininfo: function (configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.getblockchaininfo(configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns the number of blocks in the longest block chain.
     */
    getblockcount: function (configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.getblockcount(configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns an object containing various state info.
     */
    getinfo: function (configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.getinfo(configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns a json object containing mining-related information.
     */
    getmininginfo: function (configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.getmininginfo(configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns a json object containing network-related information.
     */
    getnetworkinfo: function (configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.getnetworkinfo(configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns a new Syscoin address for receiving payments. If 'account' is specified (DEPRECATED), it is added to the address book so payments received with the address will be credited to 'account'.
     * @param request
     */
    getnewaddress: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.getnewaddress(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns data about each connected network node as a json array of objects.
     */
    getpeerinfo: function (configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.getpeerinfo(configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * DEPRECATED. Returns the total amount received by addresses with <account> in transactions with at least [minconf] confirmations.
     * @param account The selected account, may be the default account using \&quot;\&quot;.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     */
    getreceivedbyaccount: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.getreceivedbyaccount(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns the total amount received by the given syscoinaddress in transactions with at least minconf confirmations.
     * @param syscoinaddress The syscoin address for transactions.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     */
    getreceivedbyaddress: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.getreceivedbyaddress(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Get detailed information about in-wallet transaction <txid>
     * @param txid The transaction id
     * @param includeWatchonly Whether to include watchonly addresses in balance calculation and details[]
     */
    gettransaction: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.gettransaction(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns the server's total unconfirmed balance
     */
    getunconfirmedbalance: function (configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.getunconfirmedbalance(configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns wallet balance for all accounts. Does not include watch only accounts.
     */
    getwalletbalance: function (configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.getwalletbalance(configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns an object containing various wallet state info.
     */
    getwalletinfo: function (configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.getwalletinfo(configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Adds a script (in hex) or address that can be watched as if it were in your wallet but cannot be used to spend.
     * @param request
     */
    importaddress: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.importaddress(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Adds a private key (as returned by dumpprivkey) to your wallet.
     * @param request
     */
    importprivkey: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.importprivkey(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Adds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend.
     * @param request
     */
    importpubkey: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.importpubkey(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Imports keys from a wallet dump file (see dumpwallet).
     * @param request
     */
    importwallet: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.importwallet(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * DEPRECATED. Returns Object that has account names as keys, account balances as values.
     * @param minconf Only include transactions with at least this many confirmations
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeWatchonly Include balances in watchonly addresses (see &#39;importaddress&#39;)
     */
    listaccounts: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.listaccounts(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Lists groups of addresses which have had their common ownership made public by common use as inputs or as the resulting change in past transactions
     */
    listaddressgroupings: function (configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.listaddressgroupings(configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * DEPRECATED. List balances by account.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeempty Whether to include accounts that haven&#39;t received any payments.
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     */
    listreceivedbyaccount: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.listreceivedbyaccount(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * List balances by receiving address.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeempty Whether to include accounts that haven&#39;t received any payments.
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     */
    listreceivedbyaddress: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.listreceivedbyaddress(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Get all transactions in blocks since block [blockhash], or all transactions if omitted
     * @param blockhash The block hash to list transactions since
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     * @param targetConfirmations
     */
    listsinceblock: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.listsinceblock(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Returns up to 'count' most recent transactions skipping the first 'from' transactions for account 'account'.
     * @param account DEPRECATED. The account name. Should be \&quot;*\&quot;.
     * @param count The number of transactions to return
     * @param from The number of transactions to skip
     * @param includeWatchonly Include transactions to watchonly addresses (see &#39;importaddress&#39;)
     */
    listtransactions: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.listtransactions(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * DEPRECATED (use sendtoaddress). Sent an amount from an account to a syscoin address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    sendfrom: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.sendfrom(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Send multiple times. Amounts are double-precision floating point numbers. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    sendmany: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.sendmany(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Send an amount to a given address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    sendtoaddress: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.sendtoaddress(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Sign a message with the private key of an address. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    signmessage: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.signmessage(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Decode raw syscoin transaction (serialized, hex-encoded) and display information pertaining to the service that is included in the transactiion data output(OP_RETURN).
     * @param hexstring
     */
    syscoindecoderawtransaction: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.syscoindecoderawtransaction(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Signed raw transaction (serialized, hex-encoded) sent out to the network.
     * @param hexstring
     */
    syscoinsendrawtransaction: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.syscoinsendrawtransaction(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Return information about the given syscoin address.
     * @param syscoinaddress
     */
    validateaddress: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.validateaddress(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Verify a signed message
     * @param syscoinaddress The syscoin address to use for the signature.
     * @param signature The signature provided by the signer in base 64 encoding (see signmessage).
     * @param message The message that was signed.
     */
    verifymessage: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.verifymessage(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Removes the wallet encryption key from memory, locking the wallet. After calling this method, you will need to call walletpassphrase again before being able to call any methods which require the wallet to be unlocked.
     */
    walletlock: function (configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.walletlock(configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Stores the wallet decryption key in memory for 'timeout' seconds. This is needed prior to performing transactions related to private keys such as sending syscoins
     * @param request
     */
    walletpassphrase: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.walletpassphrase(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Changes the wallet passphrase from 'oldpassphrase' to 'newpassphrase'.
     * @param request
     */
    walletpassphrasechange: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.GeneralApiFetchParamCreator.walletpassphrasechange(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
};
/**
 * GeneralApi - object-oriented interface
 */
var GeneralApi = /** @class */ (function (_super) {
    tslib_1.__extends(GeneralApi, _super);
    function GeneralApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Add a nrequired-to-sign multisignature address to the wallet. Each key is a Syscoin address or hex-encoded public key. If 'account' is specified (DEPRECATED), assign address to that account.
     * @param request
     */
    GeneralApi.prototype.addmultisigaddress = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.addmultisigaddress(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Reveals the private key corresponding to 'syscoinaddress'. Then the importprivkey can be used with this output.
     * @param address The syscoin address for the private key
     */
    GeneralApi.prototype.dumpprivkey = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.dumpprivkey(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Dumps all wallet keys in a human-readable format.
     * @param filename The filename
     */
    GeneralApi.prototype.dumpwallet = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.dumpwallet(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Encrypts the wallet with 'passphrase'. This is for first time encryption. After this, any calls that interact with private keys such as sending or signing will require the passphrase to be set prior the making these calls. Use the walletpassphrase call for this, and then walletlock call. If the wallet is already encrypted, use the walletpassphrasechange call. Note that this will shutdown the server.
     * @param request
     */
    GeneralApi.prototype.encryptwallet = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.encryptwallet(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * DEPRECATED. Returns the account associated with the given address.
     * @param syscoinaddress The syscoin address for account lookup.
     */
    GeneralApi.prototype.getaccount = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.getaccount(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * DEPRECATED. Returns the current Syscoin address for receiving payments to this account.
     * @param account The account name for the address. It can also be set to the empty string \&quot;\&quot; to represent the default account. The account does not need to exist, it will be created and a new address created  if there is no account by the given name.
     */
    GeneralApi.prototype.getaccountaddress = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.getaccountaddress(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Returns the balance for addresses or aliases
     * @param addresses
     */
    GeneralApi.prototype.getaddressbalance = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.getaddressbalance(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Returns all unspent outputs for addresses or aliases
     * @param addresses
     */
    GeneralApi.prototype.getaddressutxos = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.getaddressutxos(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * If account is not specified, returns the server's total available balance. If account is specified (DEPRECATED), returns the balance in the account. Note that the account \"\" is not the same as leaving the parameter out. The server total may be different to the balance in the default \"\" account.
     * @param account DEPRECATED. The selected account, or \&quot;*\&quot; for entire wallet. It may be the default account using \&quot;\&quot;.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeWatchonly Also include balance in watchonly addresses (see &#39;importaddress&#39;)
     */
    GeneralApi.prototype.getbalance = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.getbalance(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * If verbose is false, returns a string that is serialized, hex-encoded data for block 'hash'. If verbose is true, returns an Object with information about block <hash>.
     * @param hash
     * @param verbose
     */
    GeneralApi.prototype.getblock = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.getblock(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Returns an object containing various state info regarding block chain processing.
     */
    GeneralApi.prototype.getblockchaininfo = function (options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.getblockchaininfo(this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Returns the number of blocks in the longest block chain.
     */
    GeneralApi.prototype.getblockcount = function (options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.getblockcount(this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Returns an object containing various state info.
     */
    GeneralApi.prototype.getinfo = function (options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.getinfo(this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Returns a json object containing mining-related information.
     */
    GeneralApi.prototype.getmininginfo = function (options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.getmininginfo(this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Returns a json object containing network-related information.
     */
    GeneralApi.prototype.getnetworkinfo = function (options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.getnetworkinfo(this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Returns a new Syscoin address for receiving payments. If 'account' is specified (DEPRECATED), it is added to the address book so payments received with the address will be credited to 'account'.
     * @param request
     */
    GeneralApi.prototype.getnewaddress = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.getnewaddress(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Returns data about each connected network node as a json array of objects.
     */
    GeneralApi.prototype.getpeerinfo = function (options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.getpeerinfo(this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * DEPRECATED. Returns the total amount received by addresses with <account> in transactions with at least [minconf] confirmations.
     * @param account The selected account, may be the default account using \&quot;\&quot;.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     */
    GeneralApi.prototype.getreceivedbyaccount = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.getreceivedbyaccount(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Returns the total amount received by the given syscoinaddress in transactions with at least minconf confirmations.
     * @param syscoinaddress The syscoin address for transactions.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     */
    GeneralApi.prototype.getreceivedbyaddress = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.getreceivedbyaddress(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Get detailed information about in-wallet transaction <txid>
     * @param txid The transaction id
     * @param includeWatchonly Whether to include watchonly addresses in balance calculation and details[]
     */
    GeneralApi.prototype.gettransaction = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.gettransaction(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Returns the server's total unconfirmed balance
     */
    GeneralApi.prototype.getunconfirmedbalance = function (options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.getunconfirmedbalance(this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Returns wallet balance for all accounts. Does not include watch only accounts.
     */
    GeneralApi.prototype.getwalletbalance = function (options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.getwalletbalance(this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Returns an object containing various wallet state info.
     */
    GeneralApi.prototype.getwalletinfo = function (options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.getwalletinfo(this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Adds a script (in hex) or address that can be watched as if it were in your wallet but cannot be used to spend.
     * @param request
     */
    GeneralApi.prototype.importaddress = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.importaddress(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Adds a private key (as returned by dumpprivkey) to your wallet.
     * @param request
     */
    GeneralApi.prototype.importprivkey = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.importprivkey(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Adds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend.
     * @param request
     */
    GeneralApi.prototype.importpubkey = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.importpubkey(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Imports keys from a wallet dump file (see dumpwallet).
     * @param request
     */
    GeneralApi.prototype.importwallet = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.importwallet(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * DEPRECATED. Returns Object that has account names as keys, account balances as values.
     * @param minconf Only include transactions with at least this many confirmations
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeWatchonly Include balances in watchonly addresses (see &#39;importaddress&#39;)
     */
    GeneralApi.prototype.listaccounts = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.listaccounts(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Lists groups of addresses which have had their common ownership made public by common use as inputs or as the resulting change in past transactions
     */
    GeneralApi.prototype.listaddressgroupings = function (options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.listaddressgroupings(this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * DEPRECATED. List balances by account.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeempty Whether to include accounts that haven&#39;t received any payments.
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     */
    GeneralApi.prototype.listreceivedbyaccount = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.listreceivedbyaccount(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * List balances by receiving address.
     * @param minconf Only include transactions confirmed at least this many times.
     * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
     * @param includeempty Whether to include accounts that haven&#39;t received any payments.
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     */
    GeneralApi.prototype.listreceivedbyaddress = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.listreceivedbyaddress(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Get all transactions in blocks since block [blockhash], or all transactions if omitted
     * @param blockhash The block hash to list transactions since
     * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
     * @param targetConfirmations
     */
    GeneralApi.prototype.listsinceblock = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.listsinceblock(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Returns up to 'count' most recent transactions skipping the first 'from' transactions for account 'account'.
     * @param account DEPRECATED. The account name. Should be \&quot;*\&quot;.
     * @param count The number of transactions to return
     * @param from The number of transactions to skip
     * @param includeWatchonly Include transactions to watchonly addresses (see &#39;importaddress&#39;)
     */
    GeneralApi.prototype.listtransactions = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.listtransactions(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * DEPRECATED (use sendtoaddress). Sent an amount from an account to a syscoin address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    GeneralApi.prototype.sendfrom = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.sendfrom(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Send multiple times. Amounts are double-precision floating point numbers. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    GeneralApi.prototype.sendmany = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.sendmany(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Send an amount to a given address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    GeneralApi.prototype.sendtoaddress = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.sendtoaddress(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Sign a message with the private key of an address. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    GeneralApi.prototype.signmessage = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.signmessage(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Decode raw syscoin transaction (serialized, hex-encoded) and display information pertaining to the service that is included in the transactiion data output(OP_RETURN).
     * @param hexstring
     */
    GeneralApi.prototype.syscoindecoderawtransaction = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.syscoindecoderawtransaction(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Signed raw transaction (serialized, hex-encoded) sent out to the network.
     * @param hexstring
     */
    GeneralApi.prototype.syscoinsendrawtransaction = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.syscoinsendrawtransaction(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Return information about the given syscoin address.
     * @param syscoinaddress
     */
    GeneralApi.prototype.validateaddress = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.validateaddress(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Verify a signed message
     * @param syscoinaddress The syscoin address to use for the signature.
     * @param signature The signature provided by the signer in base 64 encoding (see signmessage).
     * @param message The message that was signed.
     */
    GeneralApi.prototype.verifymessage = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.verifymessage(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Removes the wallet encryption key from memory, locking the wallet. After calling this method, you will need to call walletpassphrase again before being able to call any methods which require the wallet to be unlocked.
     */
    GeneralApi.prototype.walletlock = function (options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.walletlock(this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Stores the wallet decryption key in memory for 'timeout' seconds. This is needed prior to performing transactions related to private keys such as sending syscoins
     * @param request
     */
    GeneralApi.prototype.walletpassphrase = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.walletpassphrase(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Changes the wallet passphrase from 'oldpassphrase' to 'newpassphrase'.
     * @param request
     */
    GeneralApi.prototype.walletpassphrasechange = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.GeneralApiFp.walletpassphrasechange(params, this.configuration, options)(this.fetch, this.basePath);
    };
    return GeneralApi;
}(BaseAPI));
exports.GeneralApi = GeneralApi;
;
/**
 * GeneralApi - factory interface
 */
exports.GeneralApiFactory = function (fetch, basePath) {
    return {
        /**
         * Add a nrequired-to-sign multisignature address to the wallet. Each key is a Syscoin address or hex-encoded public key. If 'account' is specified (DEPRECATED), assign address to that account.
         * @param request
         */
        addmultisigaddress: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.addmultisigaddress(params, configuration, options)(fetch, basePath);
        },
        /**
         * Reveals the private key corresponding to 'syscoinaddress'. Then the importprivkey can be used with this output.
         * @param address The syscoin address for the private key
         */
        dumpprivkey: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.dumpprivkey(params, configuration, options)(fetch, basePath);
        },
        /**
         * Dumps all wallet keys in a human-readable format.
         * @param filename The filename
         */
        dumpwallet: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.dumpwallet(params, configuration, options)(fetch, basePath);
        },
        /**
         * Encrypts the wallet with 'passphrase'. This is for first time encryption. After this, any calls that interact with private keys such as sending or signing will require the passphrase to be set prior the making these calls. Use the walletpassphrase call for this, and then walletlock call. If the wallet is already encrypted, use the walletpassphrasechange call. Note that this will shutdown the server.
         * @param request
         */
        encryptwallet: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.encryptwallet(params, configuration, options)(fetch, basePath);
        },
        /**
         * DEPRECATED. Returns the account associated with the given address.
         * @param syscoinaddress The syscoin address for account lookup.
         */
        getaccount: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.getaccount(params, configuration, options)(fetch, basePath);
        },
        /**
         * DEPRECATED. Returns the current Syscoin address for receiving payments to this account.
         * @param account The account name for the address. It can also be set to the empty string \&quot;\&quot; to represent the default account. The account does not need to exist, it will be created and a new address created  if there is no account by the given name.
         */
        getaccountaddress: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.getaccountaddress(params, configuration, options)(fetch, basePath);
        },
        /**
         * Returns the balance for addresses or aliases
         * @param addresses
         */
        getaddressbalance: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.getaddressbalance(params, configuration, options)(fetch, basePath);
        },
        /**
         * Returns all unspent outputs for addresses or aliases
         * @param addresses
         */
        getaddressutxos: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.getaddressutxos(params, configuration, options)(fetch, basePath);
        },
        /**
         * If account is not specified, returns the server's total available balance. If account is specified (DEPRECATED), returns the balance in the account. Note that the account \"\" is not the same as leaving the parameter out. The server total may be different to the balance in the default \"\" account.
         * @param account DEPRECATED. The selected account, or \&quot;*\&quot; for entire wallet. It may be the default account using \&quot;\&quot;.
         * @param minconf Only include transactions confirmed at least this many times.
         * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
         * @param includeWatchonly Also include balance in watchonly addresses (see &#39;importaddress&#39;)
         */
        getbalance: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.getbalance(params, configuration, options)(fetch, basePath);
        },
        /**
         * If verbose is false, returns a string that is serialized, hex-encoded data for block 'hash'. If verbose is true, returns an Object with information about block <hash>.
         * @param hash
         * @param verbose
         */
        getblock: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.getblock(params, configuration, options)(fetch, basePath);
        },
        /**
         * Returns an object containing various state info regarding block chain processing.
         */
        getblockchaininfo: function (configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.getblockchaininfo(configuration, options)(fetch, basePath);
        },
        /**
         * Returns the number of blocks in the longest block chain.
         */
        getblockcount: function (configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.getblockcount(configuration, options)(fetch, basePath);
        },
        /**
         * Returns an object containing various state info.
         */
        getinfo: function (configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.getinfo(configuration, options)(fetch, basePath);
        },
        /**
         * Returns a json object containing mining-related information.
         */
        getmininginfo: function (configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.getmininginfo(configuration, options)(fetch, basePath);
        },
        /**
         * Returns a json object containing network-related information.
         */
        getnetworkinfo: function (configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.getnetworkinfo(configuration, options)(fetch, basePath);
        },
        /**
         * Returns a new Syscoin address for receiving payments. If 'account' is specified (DEPRECATED), it is added to the address book so payments received with the address will be credited to 'account'.
         * @param request
         */
        getnewaddress: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.getnewaddress(params, configuration, options)(fetch, basePath);
        },
        /**
         * Returns data about each connected network node as a json array of objects.
         */
        getpeerinfo: function (configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.getpeerinfo(configuration, options)(fetch, basePath);
        },
        /**
         * DEPRECATED. Returns the total amount received by addresses with <account> in transactions with at least [minconf] confirmations.
         * @param account The selected account, may be the default account using \&quot;\&quot;.
         * @param minconf Only include transactions confirmed at least this many times.
         * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
         */
        getreceivedbyaccount: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.getreceivedbyaccount(params, configuration, options)(fetch, basePath);
        },
        /**
         * Returns the total amount received by the given syscoinaddress in transactions with at least minconf confirmations.
         * @param syscoinaddress The syscoin address for transactions.
         * @param minconf Only include transactions confirmed at least this many times.
         * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
         */
        getreceivedbyaddress: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.getreceivedbyaddress(params, configuration, options)(fetch, basePath);
        },
        /**
         * Get detailed information about in-wallet transaction <txid>
         * @param txid The transaction id
         * @param includeWatchonly Whether to include watchonly addresses in balance calculation and details[]
         */
        gettransaction: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.gettransaction(params, configuration, options)(fetch, basePath);
        },
        /**
         * Returns the server's total unconfirmed balance
         */
        getunconfirmedbalance: function (configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.getunconfirmedbalance(configuration, options)(fetch, basePath);
        },
        /**
         * Returns wallet balance for all accounts. Does not include watch only accounts.
         */
        getwalletbalance: function (configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.getwalletbalance(configuration, options)(fetch, basePath);
        },
        /**
         * Returns an object containing various wallet state info.
         */
        getwalletinfo: function (configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.getwalletinfo(configuration, options)(fetch, basePath);
        },
        /**
         * Adds a script (in hex) or address that can be watched as if it were in your wallet but cannot be used to spend.
         * @param request
         */
        importaddress: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.importaddress(params, configuration, options)(fetch, basePath);
        },
        /**
         * Adds a private key (as returned by dumpprivkey) to your wallet.
         * @param request
         */
        importprivkey: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.importprivkey(params, configuration, options)(fetch, basePath);
        },
        /**
         * Adds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend.
         * @param request
         */
        importpubkey: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.importpubkey(params, configuration, options)(fetch, basePath);
        },
        /**
         * Imports keys from a wallet dump file (see dumpwallet).
         * @param request
         */
        importwallet: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.importwallet(params, configuration, options)(fetch, basePath);
        },
        /**
         * DEPRECATED. Returns Object that has account names as keys, account balances as values.
         * @param minconf Only include transactions with at least this many confirmations
         * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
         * @param includeWatchonly Include balances in watchonly addresses (see &#39;importaddress&#39;)
         */
        listaccounts: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.listaccounts(params, configuration, options)(fetch, basePath);
        },
        /**
         * Lists groups of addresses which have had their common ownership made public by common use as inputs or as the resulting change in past transactions
         */
        listaddressgroupings: function (configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.listaddressgroupings(configuration, options)(fetch, basePath);
        },
        /**
         * DEPRECATED. List balances by account.
         * @param minconf Only include transactions confirmed at least this many times.
         * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
         * @param includeempty Whether to include accounts that haven&#39;t received any payments.
         * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
         */
        listreceivedbyaccount: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.listreceivedbyaccount(params, configuration, options)(fetch, basePath);
        },
        /**
         * List balances by receiving address.
         * @param minconf Only include transactions confirmed at least this many times.
         * @param addlockconf Whether to add 5 confirmations to transactions locked via InstantSend
         * @param includeempty Whether to include accounts that haven&#39;t received any payments.
         * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
         */
        listreceivedbyaddress: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.listreceivedbyaddress(params, configuration, options)(fetch, basePath);
        },
        /**
         * Get all transactions in blocks since block [blockhash], or all transactions if omitted
         * @param blockhash The block hash to list transactions since
         * @param includeWatchonly Whether to include watchonly addresses (see &#39;importaddress&#39;).
         * @param targetConfirmations
         */
        listsinceblock: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.listsinceblock(params, configuration, options)(fetch, basePath);
        },
        /**
         * Returns up to 'count' most recent transactions skipping the first 'from' transactions for account 'account'.
         * @param account DEPRECATED. The account name. Should be \&quot;*\&quot;.
         * @param count The number of transactions to return
         * @param from The number of transactions to skip
         * @param includeWatchonly Include transactions to watchonly addresses (see &#39;importaddress&#39;)
         */
        listtransactions: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.listtransactions(params, configuration, options)(fetch, basePath);
        },
        /**
         * DEPRECATED (use sendtoaddress). Sent an amount from an account to a syscoin address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        sendfrom: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.sendfrom(params, configuration, options)(fetch, basePath);
        },
        /**
         * Send multiple times. Amounts are double-precision floating point numbers. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        sendmany: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.sendmany(params, configuration, options)(fetch, basePath);
        },
        /**
         * Send an amount to a given address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        sendtoaddress: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.sendtoaddress(params, configuration, options)(fetch, basePath);
        },
        /**
         * Sign a message with the private key of an address. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        signmessage: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.signmessage(params, configuration, options)(fetch, basePath);
        },
        /**
         * Decode raw syscoin transaction (serialized, hex-encoded) and display information pertaining to the service that is included in the transactiion data output(OP_RETURN).
         * @param hexstring
         */
        syscoindecoderawtransaction: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.syscoindecoderawtransaction(params, configuration, options)(fetch, basePath);
        },
        /**
         * Signed raw transaction (serialized, hex-encoded) sent out to the network.
         * @param hexstring
         */
        syscoinsendrawtransaction: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.syscoinsendrawtransaction(params, configuration, options)(fetch, basePath);
        },
        /**
         * Return information about the given syscoin address.
         * @param syscoinaddress
         */
        validateaddress: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.validateaddress(params, configuration, options)(fetch, basePath);
        },
        /**
         * Verify a signed message
         * @param syscoinaddress The syscoin address to use for the signature.
         * @param signature The signature provided by the signer in base 64 encoding (see signmessage).
         * @param message The message that was signed.
         */
        verifymessage: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.verifymessage(params, configuration, options)(fetch, basePath);
        },
        /**
         * Removes the wallet encryption key from memory, locking the wallet. After calling this method, you will need to call walletpassphrase again before being able to call any methods which require the wallet to be unlocked.
         */
        walletlock: function (configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.walletlock(configuration, options)(fetch, basePath);
        },
        /**
         * Stores the wallet decryption key in memory for 'timeout' seconds. This is needed prior to performing transactions related to private keys such as sending syscoins
         * @param request
         */
        walletpassphrase: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.walletpassphrase(params, configuration, options)(fetch, basePath);
        },
        /**
         * Changes the wallet passphrase from 'oldpassphrase' to 'newpassphrase'.
         * @param request
         */
        walletpassphrasechange: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.GeneralApiFp.walletpassphrasechange(params, configuration, options)(fetch, basePath);
        },
    };
};
/**
 * OffersApi - fetch parameter creator
 */
exports.OffersApiFetchParamCreator = {
    /**
     * scan and filter offers
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    offerfilter: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "query" is set
        if (params["query"] == null) {
            throw new Error("Missing required parameter query when calling offerfilter");
        }
        var baseUrl = "/offerfilter";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "query": params["query"],
            "count": params["count"],
            "from": params["from"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * List all stored values of an offer.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    offerhistory: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "query" is set
        if (params["query"] == null) {
            throw new Error("Missing required parameter query when calling offerhistory");
        }
        var baseUrl = "/offerhistory";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "query": params["query"],
            "count": params["count"],
            "from": params["from"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Show values of an offer.
     * @param guid
     */
    offerinfo: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "guid" is set
        if (params["guid"] == null) {
            throw new Error("Missing required parameter guid when calling offerinfo");
        }
        var baseUrl = "/offerinfo";
        var urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "guid": params["guid"],
        });
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    offerlink: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling offerlink");
        }
        var baseUrl = "/offerlink";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Create a new offer on the Syscoin decentralized marketplace. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    offernew: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling offernew");
        }
        var baseUrl = "/offernew";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * Perform an update on an offer you control. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    offerupdate: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        // verify required parameter "request" is set
        if (params["request"] == null) {
            throw new Error("Missing required parameter request when calling offerupdate");
        }
        var baseUrl = "/offerupdate";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["request"]) {
            fetchOptions.body = JSON.stringify(params["request"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        // authentication (token) required
        if (configuration.apiKey && configuration.apiKey.token) {
            fetchOptions.headers = assign({
                "token": configuration.apiKey.token,
            }, contentTypeHeader);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
};
/**
 * OffersApi - functional programming interface
 */
exports.OffersApiFp = {
    /**
     * scan and filter offers
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    offerfilter: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.OffersApiFetchParamCreator.offerfilter(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * List all stored values of an offer.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    offerhistory: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.OffersApiFetchParamCreator.offerhistory(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Show values of an offer.
     * @param guid
     */
    offerinfo: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.OffersApiFetchParamCreator.offerinfo(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    offerlink: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.OffersApiFetchParamCreator.offerlink(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Create a new offer on the Syscoin decentralized marketplace. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    offernew: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.OffersApiFetchParamCreator.offernew(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * Perform an update on an offer you control. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    offerupdate: function (params, configuration, options) {
        if (options === void 0) { options = {}; }
        var fetchArgs = exports.OffersApiFetchParamCreator.offerupdate(params, configuration, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
};
/**
 * OffersApi - object-oriented interface
 */
var OffersApi = /** @class */ (function (_super) {
    tslib_1.__extends(OffersApi, _super);
    function OffersApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * scan and filter offers
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    OffersApi.prototype.offerfilter = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.OffersApiFp.offerfilter(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * List all stored values of an offer.
     * @param query Generic filter query to pass into syscoinquery
     * @param count The number of results to return
     * @param from Show results from this GUID [from], empty means first
     */
    OffersApi.prototype.offerhistory = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.OffersApiFp.offerhistory(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Show values of an offer.
     * @param guid
     */
    OffersApi.prototype.offerinfo = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.OffersApiFp.offerinfo(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    OffersApi.prototype.offerlink = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.OffersApiFp.offerlink(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Create a new offer on the Syscoin decentralized marketplace. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    OffersApi.prototype.offernew = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.OffersApiFp.offernew(params, this.configuration, options)(this.fetch, this.basePath);
    };
    /**
     * Perform an update on an offer you control. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request
     */
    OffersApi.prototype.offerupdate = function (params, options) {
        if (options === void 0) { options = {}; }
        return exports.OffersApiFp.offerupdate(params, this.configuration, options)(this.fetch, this.basePath);
    };
    return OffersApi;
}(BaseAPI));
exports.OffersApi = OffersApi;
;
/**
 * OffersApi - factory interface
 */
exports.OffersApiFactory = function (fetch, basePath) {
    return {
        /**
         * scan and filter offers
         * @param query Generic filter query to pass into syscoinquery
         * @param count The number of results to return
         * @param from Show results from this GUID [from], empty means first
         */
        offerfilter: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.OffersApiFp.offerfilter(params, configuration, options)(fetch, basePath);
        },
        /**
         * List all stored values of an offer.
         * @param query Generic filter query to pass into syscoinquery
         * @param count The number of results to return
         * @param from Show results from this GUID [from], empty means first
         */
        offerhistory: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.OffersApiFp.offerhistory(params, configuration, options)(fetch, basePath);
        },
        /**
         * Show values of an offer.
         * @param guid
         */
        offerinfo: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.OffersApiFp.offerinfo(params, configuration, options)(fetch, basePath);
        },
        /**
         * Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        offerlink: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.OffersApiFp.offerlink(params, configuration, options)(fetch, basePath);
        },
        /**
         * Create a new offer on the Syscoin decentralized marketplace. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        offernew: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.OffersApiFp.offernew(params, configuration, options)(fetch, basePath);
        },
        /**
         * Perform an update on an offer you control. Requires wallet passphrase to be set with walletpassphrase call.
         * @param request
         */
        offerupdate: function (params, configuration, options) {
            if (options === void 0) { options = {}; }
            return exports.OffersApiFp.offerupdate(params, configuration, options)(fetch, basePath);
        },
    };
};
//# sourceMappingURL=api.js.map
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const headless_esm = require('./headless.esm-30732e14.js');
const interfaceCommon = require('./interface-common-38ac723a.js');
const propsUtils = require('./props-utils-e054c946.js');
const analyticsConfig = require('./analytics-config-73be318e.js');
const store = require('./store-3e7a313a.js');
require('./_commonjsHelpers-0192c5b3.js');
require('./headless.esm-1a66963a.js');
require('./dayjs.min-f5fda39e.js');
require('./utils-b609c39e.js');
require('./bueno.esm-344292d0.js');

function getAnalyticsConfig(recsConfig, enabled) {
    var _a;
    switch ((_a = recsConfig.analytics) === null || _a === void 0 ? void 0 : _a.analyticsMode) {
        case 'next':
            return analyticsConfig.getNextAnalyticsConfig(recsConfig, enabled);
        case 'legacy':
        default:
            return getLegacyAnalyticsConfig(recsConfig, enabled);
    }
}
function getLegacyAnalyticsConfig(recsConfig, enabled) {
    const analyticsClientMiddleware = (event, payload) => augmentAnalytics(event, payload, recsConfig);
    const defaultAnalyticsConfig = {
        analyticsClientMiddleware,
        enabled,
        ...analyticsConfig.augmentAnalyticsConfigWithDocument(),
        ...analyticsConfig.augmentAnalyticsConfigWithAtomicVersion(),
    };
    if (recsConfig.analytics) {
        return {
            ...defaultAnalyticsConfig,
            ...recsConfig.analytics,
            analyticsClientMiddleware,
        };
    }
    return defaultAnalyticsConfig;
}
function augmentAnalytics(event, payload, recsConfig) {
    let result = analyticsConfig.augmentWithExternalMiddleware(event, payload, recsConfig);
    result = analyticsConfig.augmentAnalyticsWithAtomicVersion(result);
    return result;
}

function createAtomicRecsStore() {
    const commonStore = store.createAtomicCommonStore({
        loadingFlags: [],
        facets: {},
        numericFacets: {},
        dateFacets: {},
        categoryFacets: {},
        iconAssetsPath: '',
        facetElements: [],
        fieldsToInclude: [],
    });
    return {
        ...commonStore,
        getUniqueIDFromEngine(engine) {
            return engine.state.recommendation.searchUid;
        },
    };
}

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const FirstRecommendationExecutedFlag = 'firstRecommendationExecuted';
const AtomicRecsInterface = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.store = createAtomicRecsStore();
        this.initialized = false;
        /**
         * Whether analytics should be enabled.
         */
        this.analytics = true;
        /**
         * The recommendation interface i18next instance.
         */
        this.i18n = interfaceCommon.instance.createInstance();
        /**
         * The compatibility JSON version for i18next to use (see [i18next Migration Guide](https://www.i18next.com/misc/migration-guide#v20.x.x-to-v21.0.0)).
         */
        this.localizationCompatibilityVersion = 'v3';
        /**
         * The recommendation interface language.
         */
        this.language = 'en';
        /**
         * A list of non-default fields to include in the query results.
         *
         * Specify the property as an array using a JSON string representation:
         * ```html
         * <atomic-recs-interface fields-to-include='["fieldA", "fieldB"]'></atomic-recs-interface>
         * ```
         */
        this.fieldsToInclude = '[]';
        /**
         * The language assets path. By default, this will be a relative URL pointing to `./lang`.
         *
         * Example: "/mypublicpath/languages"
         *
         */
        this.languageAssetsPath = './lang';
        /**
         * The icon assets path. By default, this will be a relative URL pointing to `./assets`.
         *
         * Example: "/mypublicpath/icons"
         *
         */
        this.iconAssetsPath = './assets';
        this.error = undefined;
        this.pipeline = undefined;
        this.searchHub = undefined;
        this.timezone = undefined;
        this.engine = undefined;
        this.analytics = true;
        this.i18n = interfaceCommon.instance.createInstance();
        this.logLevel = undefined;
        this.localizationCompatibilityVersion = 'v3';
        this.language = 'en';
        this.fieldsToInclude = '[]';
        this.languageAssetsPath = './lang';
        this.iconAssetsPath = './assets';
        this.CspNonce = undefined;
        this.commonInterfaceHelper = new interfaceCommon.CommonAtomicInterfaceHelper(this, 'CoveoAtomicRecs');
    }
    get bindings() {
        return {
            engine: this.engine,
            i18n: this.i18n,
            store: this.store,
            interfaceElement: this.host,
        };
    }
    connectedCallback() {
        this.store.setLoadingFlag(FirstRecommendationExecutedFlag);
    }
    componentWillLoad() {
        if (this.CspNonce) {
            index.setNonce(this.CspNonce);
        }
    }
    /**
     * Initializes the connection with the headless recommendation engine using options for `accessToken` (required), `organizationId` (required), `renewAccessToken`, and `platformUrl`.
     */
    initialize(options) {
        return this.internalInitialization(() => this.initEngine(options));
    }
    /**
     * Initializes the connection with an already preconfigured headless recommendation engine.
     * This bypasses the properties set on the component, such as analytics, recommendation, searchHub, language, timezone & logLevel.
     */
    initializeWithRecommendationEngine(engine) {
        if (this.pipeline && this.pipeline !== engine.state.pipeline) {
            console.warn(interfaceCommon.mismatchedInterfaceAndEnginePropError('recommendation', 'query pipeline'));
        }
        if (this.searchHub && this.searchHub !== engine.state.searchHub) {
            console.warn(interfaceCommon.mismatchedInterfaceAndEnginePropError('recommendation', 'search hub'));
        }
        return this.internalInitialization(() => (this.engine = engine));
    }
    /**
     *
     * Fetches new recommendations.
     */
    async getRecommendations() {
        if (!this.commonInterfaceHelper.engineIsCreated(this.engine)) {
            return;
        }
        if (!this.initialized) {
            console.error('You have to wait until the "initialize" promise is fulfilled before executing a search.', this.host);
            return;
        }
        this.engine.dispatch(headless_esm.OP(this.engine).getRecommendations());
    }
    async getOrganizationEndpoints(organizationId, env = 'prod') {
        return headless_esm.gr(organizationId, env);
    }
    updateIconAssetsPath() {
        this.store.set('iconAssetsPath', this.iconAssetsPath);
    }
    handleInitialization(event) {
        this.commonInterfaceHelper.onComponentInitializing(event);
    }
    updateLanguage() {
        if (!this.commonInterfaceHelper.engineIsCreated(this.engine)) {
            return;
        }
        const { updateSearchConfiguration } = headless_esm._x(this.engine);
        this.engine.dispatch(updateSearchConfiguration({
            locale: this.language,
        }));
        this.commonInterfaceHelper.onLanguageChange();
    }
    toggleAnalytics() {
        if (!this.commonInterfaceHelper.engineIsCreated(this.engine)) {
            return;
        }
        this.commonInterfaceHelper.onAnalyticsChange();
    }
    registerFieldsToInclude() {
        const fields = headless_esm.Ig.concat([...this.fieldsToInclude].filter((field) => !!field));
        this.engine.dispatch(headless_esm.pP(this.engine).registerFieldsToInclude(fields));
    }
    async internalInitialization(initEngine) {
        await this.commonInterfaceHelper.onInitialization(initEngine);
        this.pipeline = this.engine.state.pipeline;
        this.searchHub = this.engine.state.searchHub;
        this.store.unsetLoadingFlag(FirstRecommendationExecutedFlag);
        this.initialized = true;
    }
    initEngine(options) {
        var _a;
        const analyticsConfig = getAnalyticsConfig(options, this.analytics);
        try {
            this.engine = headless_esm.bg({
                configuration: {
                    pipeline: this.pipeline,
                    searchHub: (_a = this.searchHub) !== null && _a !== void 0 ? _a : 'default',
                    locale: this.language,
                    timezone: this.timezone,
                    ...options,
                    analytics: analyticsConfig,
                },
                loggerOptions: {
                    level: this.logLevel,
                },
            });
        }
        catch (error) {
            this.error = error;
            throw error;
        }
    }
    render() {
        return this.engine && index.h("slot", { key: 'f3683a76d3555fabc6e28f3eb1ee6c2091faa2f2' });
    }
    get host() { return index.getElement(this); }
    static get watchers() { return {
        "iconAssetsPath": ["updateIconAssetsPath"],
        "language": ["updateLanguage"],
        "analytics": ["toggleAnalytics"]
    }; }
};
__decorate([
    propsUtils.ArrayProp()
], AtomicRecsInterface.prototype, "fieldsToInclude", void 0);

exports.atomic_recs_interface = AtomicRecsInterface;

//# sourceMappingURL=atomic-recs-interface.cjs.entry.js.map
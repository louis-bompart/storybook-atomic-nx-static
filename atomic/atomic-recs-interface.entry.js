import { r as registerInstance, s as setNonce, h, g as getElement } from './index-53978573.js';
import { l as loadRecommendationActions, g as getOrganizationEndpoints, a as loadSearchConfigurationActions, E as EcommerceDefaultFieldsToInclude, c as loadFieldActions, d as buildRecommendationEngine } from './headless.esm-c65bdd66.js';
import { i as instance, C as CommonAtomicInterfaceHelper, m as mismatchedInterfaceAndEnginePropError } from './interface-common-61887d00.js';
import { A as ArrayProp } from './props-utils-050f4514.js';
import { g as getNextAnalyticsConfig, c as augmentAnalyticsConfigWithDocument, d as augmentAnalyticsConfigWithAtomicVersion, a as augmentWithExternalMiddleware, b as augmentAnalyticsWithAtomicVersion } from './analytics-config-318e23c6.js';
import { c as createAtomicCommonStore } from './store-876029fc.js';
import './_commonjsHelpers-1a56c7bc.js';
import './headless.esm-bdb53e72.js';
import './dayjs.min-198942a4.js';
import './utils-8200d0ae.js';
import './bueno.esm-38a5b490.js';

function getAnalyticsConfig(recsConfig, enabled) {
    var _a;
    switch ((_a = recsConfig.analytics) === null || _a === void 0 ? void 0 : _a.analyticsMode) {
        case 'next':
            return getNextAnalyticsConfig(recsConfig, enabled);
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
        ...augmentAnalyticsConfigWithDocument(),
        ...augmentAnalyticsConfigWithAtomicVersion(),
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
    let result = augmentWithExternalMiddleware(event, payload, recsConfig);
    result = augmentAnalyticsWithAtomicVersion(result);
    return result;
}

function createAtomicRecsStore() {
    const commonStore = createAtomicCommonStore({
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
        registerInstance(this, hostRef);
        this.store = createAtomicRecsStore();
        this.initialized = false;
        /**
         * Whether analytics should be enabled.
         */
        this.analytics = true;
        /**
         * The recommendation interface i18next instance.
         */
        this.i18n = instance.createInstance();
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
        this.i18n = instance.createInstance();
        this.logLevel = undefined;
        this.localizationCompatibilityVersion = 'v3';
        this.language = 'en';
        this.fieldsToInclude = '[]';
        this.languageAssetsPath = './lang';
        this.iconAssetsPath = './assets';
        this.CspNonce = undefined;
        this.commonInterfaceHelper = new CommonAtomicInterfaceHelper(this, 'CoveoAtomicRecs');
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
            setNonce(this.CspNonce);
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
            console.warn(mismatchedInterfaceAndEnginePropError('recommendation', 'query pipeline'));
        }
        if (this.searchHub && this.searchHub !== engine.state.searchHub) {
            console.warn(mismatchedInterfaceAndEnginePropError('recommendation', 'search hub'));
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
        this.engine.dispatch(loadRecommendationActions(this.engine).getRecommendations());
    }
    async getOrganizationEndpoints(organizationId, env = 'prod') {
        return getOrganizationEndpoints(organizationId, env);
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
        const { updateSearchConfiguration } = loadSearchConfigurationActions(this.engine);
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
        const fields = EcommerceDefaultFieldsToInclude.concat([...this.fieldsToInclude].filter((field) => !!field));
        this.engine.dispatch(loadFieldActions(this.engine).registerFieldsToInclude(fields));
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
            this.engine = buildRecommendationEngine({
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
        return this.engine && h("slot", { key: 'f3683a76d3555fabc6e28f3eb1ee6c2091faa2f2' });
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "iconAssetsPath": ["updateIconAssetsPath"],
        "language": ["updateLanguage"],
        "analytics": ["toggleAnalytics"]
    }; }
};
__decorate([
    ArrayProp()
], AtomicRecsInterface.prototype, "fieldsToInclude", void 0);

export { AtomicRecsInterface as atomic_recs_interface };

//# sourceMappingURL=atomic-recs-interface.entry.js.map
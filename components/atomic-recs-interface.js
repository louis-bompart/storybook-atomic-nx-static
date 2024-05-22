import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { O as OP, g as gr, _ as _x, p as pP, b as bg, I as Ig } from './headless.esm4.js';
import { i as instance, C as CommonAtomicInterfaceHelper, m as mismatchedInterfaceAndEnginePropError } from './interface-common.js';
import { A as ArrayProp } from './props-utils.js';
import { g as getNextAnalyticsConfig, c as augmentAnalyticsConfigWithDocument, d as augmentAnalyticsConfigWithAtomicVersion, a as augmentWithExternalMiddleware, b as augmentAnalyticsWithAtomicVersion } from './analytics-config.js';
import { c as createAtomicCommonStore } from './store.js';

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
const AtomicRecsInterface$1 = /*@__PURE__*/ proxyCustomElement(class AtomicRecsInterface extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
        this.engine.dispatch(OP(this.engine).getRecommendations());
    }
    async getOrganizationEndpoints(organizationId, env = 'prod') {
        return gr(organizationId, env);
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
        const { updateSearchConfiguration } = _x(this.engine);
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
        const fields = Ig.concat([...this.fieldsToInclude].filter((field) => !!field));
        this.engine.dispatch(pP(this.engine).registerFieldsToInclude(fields));
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
            this.engine = bg({
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
        return this.engine && h("slot", { key: 'e57f3ca4a12dff5519647992175d19c5e3e31eb6' });
    }
    get host() { return this; }
    static get watchers() { return {
        "iconAssetsPath": ["updateIconAssetsPath"],
        "language": ["updateLanguage"],
        "analytics": ["toggleAnalytics"]
    }; }
}, [1, "atomic-recs-interface", {
        "pipeline": [1537],
        "searchHub": [1537, "search-hub"],
        "timezone": [513],
        "engine": [1040],
        "analytics": [516],
        "i18n": [16],
        "logLevel": [513, "log-level"],
        "localizationCompatibilityVersion": [1, "localization-compatibility-version"],
        "language": [513],
        "fieldsToInclude": [1025, "fields-to-include"],
        "languageAssetsPath": [513, "language-assets-path"],
        "iconAssetsPath": [513, "icon-assets-path"],
        "CspNonce": [513, "csp-nonce"],
        "error": [32],
        "initialize": [64],
        "initializeWithRecommendationEngine": [64],
        "getRecommendations": [64],
        "getOrganizationEndpoints": [64]
    }, [[0, "atomic/initializeComponent", "handleInitialization"]], {
        "iconAssetsPath": ["updateIconAssetsPath"],
        "language": ["updateLanguage"],
        "analytics": ["toggleAnalytics"]
    }]);
__decorate([
    ArrayProp()
], AtomicRecsInterface$1.prototype, "fieldsToInclude", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-recs-interface"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-recs-interface":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicRecsInterface$1);
            }
            break;
    } });
}

const AtomicRecsInterface = AtomicRecsInterface$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicRecsInterface, defineCustomElement };

//# sourceMappingURL=atomic-recs-interface.js.map
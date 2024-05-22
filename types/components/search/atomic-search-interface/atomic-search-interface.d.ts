import { LogLevel, SearchEngine, SearchEngineConfiguration, PlatformEnvironment } from '@coveo/headless';
import { i18n } from 'i18next';
import { InitializeEvent } from '../../../utils/initialization-utils';
import { CommonBindings, NonceBindings } from '../../common/interface/bindings';
import { i18nCompatibilityVersion } from '../../common/interface/i18n';
import { BaseAtomicInterface } from '../../common/interface/interface-common';
import { AtomicStore } from './store';
export type InitializationOptions = SearchEngineConfiguration;
export type Bindings = CommonBindings<SearchEngine, AtomicStore, HTMLAtomicSearchInterfaceElement> & NonceBindings;
/**
 * The `atomic-search-interface` component is the parent to all other atomic components in a search page. It handles the headless search engine and localization configurations.
 */
export declare class AtomicSearchInterface implements BaseAtomicInterface<SearchEngine> {
    private urlManager;
    private searchStatus;
    private unsubscribeUrlManager;
    private unsubscribeSearchStatus;
    private initialized;
    private store;
    private commonInterfaceHelper;
    host: HTMLAtomicSearchInterfaceElement;
    error?: Error;
    relevanceInspectorIsOpen: boolean;
    /**
     * A list of non-default fields to include in the query results.
     *
     * Specify the property as an array using a JSON string representation:
     * ```html
     * <atomic-search-interface fields-to-include='["fieldA", "fieldB"]'></atomic-search-interface>
     * ```
     */
    fieldsToInclude: string[] | string;
    /**
     * The search interface [query pipeline](https://docs.coveo.com/en/180/).
     *
     * If the search interface is initialized using [`initializeWithSearchEngine`](https://docs.coveo.com/en/atomic/latest/reference/components/atomic-search-interface/#initializewithsearchengine), the query pipeline should instead be configured in the target engine.
     */
    pipeline?: string;
    /**
     * The search interface [search hub](https://docs.coveo.com/en/1342/).
     *
     * If the search interface is initialized using [`initializeWithSearchEngine`](https://docs.coveo.com/en/atomic/latest/reference/components/atomic-search-interface/#initializewithsearchengine, the search hub should instead be configured in the target engine.
     */
    searchHub?: string;
    /**
     * Whether analytics should be enabled.
     */
    analytics: boolean;
    /**
     * The [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) identifier of the time zone to use to correctly interpret dates in the query expression, facets, and result items.
     * By default, the timezone will be [guessed](https://day.js.org/docs/en/timezone/guessing-user-timezone).
     *
     * Example: "America/Montreal"
     */
    timezone?: string;
    /**
     * The severity level of the messages to log in the console.
     */
    logLevel?: LogLevel;
    /**
     * The compatibility JSON version for i18next to use (see [i18next Migration Guide](https://www.i18next.com/misc/migration-guide#v20.x.x-to-v21.0.0)).
     */
    localizationCompatibilityVersion: i18nCompatibilityVersion;
    /**
     * The search interface i18next instance.
     */
    i18n: i18n;
    /**
     * The search interface language.
     */
    language: string;
    /**
     * The search interface headless engine.
     */
    engine?: SearchEngine;
    /**
     * Whether the state should be reflected in the URL parameters.
     */
    reflectStateInUrl: boolean;
    /**
     * The CSS selector for the container where the interface will scroll back to.
     */
    scrollContainer: string;
    /**
     * The language assets path. By default, this will be a relative URL pointing to `./lang`.
     *
     * Example: "/mypublicpath/languages"
     *
     */
    languageAssetsPath: string;
    /**
     * The icon assets path. By default, this will be a relative URL pointing to `./assets`.
     *
     * Example: "/mypublicpath/icons"
     *
     */
    iconAssetsPath: string;
    /**
     * Whether the relevance inspector shortcut should be enabled for this interface.
     *
     * The relevance inspector can be opened by holding the Alt key (Option on Mac) while over the interface, and performing a double click.
     *
     * The relevance inspector allows to troubleshoot and debug queries.
     */
    enableRelevanceInspector: boolean;
    /**
     * The value to set the [nonce](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce) attribute to on inline script and style elements generated by this interface and its child components.
     * If your application is served with a Content Security Policy (CSP) that doesn't include the `script-src: 'unsafe-inline'` or `style-src: 'unsafe-inline'` directives,
     * you should ensure that your application server generates a new nonce on every page load and uses the generated value to set this prop and serve the corresponding CSP response headers
     * (i.e., script-src 'nonce-<YOUR_GENERATED_NONCE>' and style-src 'nonce-<YOUR_GENERATED_NONCE>').
     * Otherwise you may see console errors such as
     *  - Refused to execute inline script because it violates the following Content Security Policy directive: [...]
     *  - Refused to apply inline style because it violates the following Content Security Policy directive: [...].
     * @example:
     * ```html
     * <script nonce="<YOUR_GENERATED_NONCE>">
     *  import {setNonce} from '@coveo/atomic';
     *  setNonce('<YOUR_GENERATED_NONCE>');
     * </script>
     * ```
     */
    CspNonce?: string;
    /**
     * A reference clone of the search interface i18next instance.
     */
    private i18nClone;
    constructor();
    connectedCallback(): void;
    componentWillLoad(): void;
    updateSearchConfiguration(updatedProp: 'searchHub' | 'pipeline', newValue: string | undefined): void;
    updateSearchHub(): void;
    updatePipeline(): void;
    toggleAnalytics(): void;
    updateLanguage(): void;
    updateIconAssetsPath(): void;
    disconnectedCallback(): void;
    handleInitialization(event: InitializeEvent): void;
    scrollToTop(): void;
    closeRelevanceInspector(): void;
    /**
     * Initializes the connection with the headless search engine using options for accessToken (required), organizationId (required), renewAccessToken, organizationEndpoints (recommended), and platformUrl (deprecated).
     */
    initialize(options: InitializationOptions): Promise<void>;
    /**
     * Initializes the connection with an already preconfigured [headless search engine](https://docs.coveo.com/en/headless/latest/reference/search/), as opposed to the `initialize` method, which will internally create a new search engine instance.
     * This bypasses the properties set on the component, such as analytics, searchHub, pipeline, language, timezone & logLevel.
     */
    initializeWithSearchEngine(engine: SearchEngine): Promise<void>;
    /**
     *
     * Executes the first search and logs the interface load event to analytics, after initializing connection to the headless search engine.
     */
    executeFirstSearch(): Promise<void>;
    /**
     * Returns the unique, organization-specific endpoint(s).
     * @param {string} organizationId
     * @param {'prod'|'hipaa'|'staging'|'dev'} [env=Prod]
     */
    getOrganizationEndpoints(organizationId: string, env?: PlatformEnvironment): Promise<{
        platform: string;
        analytics: string;
        search: string;
        admin: string;
    }>;
    get bindings(): Bindings;
    private initFieldsToInclude;
    registerFieldsToInclude(): void;
    private updateMobileBreakpoint;
    private initEngine;
    private getSearchConfiguration;
    private get fragment();
    private initUrlManager;
    private initAriaLive;
    private initRelevanceInspector;
    private initSearchStatus;
    private updateHash;
    private onHashChange;
    private internalInitialization;
    private addResourceBundleWithWarning;
    render(): any[];
}

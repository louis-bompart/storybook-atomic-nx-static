import { r as registerInstance, h, g as getElement } from './index-53978573.js';
import './index-0417bc1a.js';
import { F as FocusTargetController } from './accessibility-utils-c8cb59bc.js';
import { I as InitializeBindings, B as BindStateToController } from './initialization-utils-446eb31c.js';
import { r as randomID } from './utils-8200d0ae.js';
import { R as ResultsPlaceholdersGuard } from './placeholders-55d308c1.js';
import { D as DisplayWrapper, I as ItemDisplayGuard } from './item-display-guard-ecb47894.js';
import { I as ItemListCommon } from './item-list-common-1933ab8b.js';
import { I as ItemListGuard } from './item-list-guard-151231f9.js';
import { I as ItemTemplateProvider } from './item-template-provider-f37a0178.js';
import { g as getItemListDisplayClasses } from './display-options-d1c7bf4c.js';
import { t as buildResultList, d as buildResultsPerPage, f as buildInteractiveResult } from './headless.esm-9d469c2b.js';
import './event-utils-8de63ec3.js';
import './_commonjsHelpers-1a56c7bc.js';
import './replace-breakpoint-e74c8165.js';
import './headless.esm-bdb53e72.js';
import './template-provider-818c930d.js';
import './sections-a7d75695.js';

const atomicInsightResultListCss = ".list-wrapper.placeholder .result-component{display:none}.list-wrapper.placeholder table.list-root{display:none}.list-wrapper:not(.placeholder) atomic-result-placeholder{display:none}.list-wrapper:not(.placeholder) atomic-result-table-placeholder{display:none}.list-root.loading{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}@keyframes pulse{0%,100%{opacity:0.6}50%{opacity:0.2}}[part~='divider']:not(:last-child){border-bottom:1px solid var(--atomic-neutral);padding-bottom:1rem}[part~='divider']{margin-bottom:1rem}.list-root.display-list{display:flex;flex-direction:column}.list-root.display-list .result-component,.list-root.display-list atomic-result-placeholder{width:auto}.list-root.display-list.density-comfortable [part~='outline']::before{margin:2rem 0}.list-root.display-list.density-normal [part~='outline']::before{margin:1.5rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-normal [part~='outline']::before{margin:1.75rem 0}}.list-root.display-list.density-compact [part~='outline']::before{margin:1rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-compact [part~='outline']::before{margin:1.5rem 0}}.list-root.display-list [part~='outline']::before{display:block;content:' ';height:1px;background-color:var(--atomic-neutral)}.list-root.display-list [part~='outline']:first-of-type::before{display:none}.list-root.display-list atomic-result-placeholder::before{background-color:transparent}.list-root.display-list .result-component[part~='outline']::before{margin-top:0px;margin-bottom:0px;margin-left:1.5rem;margin-right:1.5rem}.list-root.placeholder{padding:0.5rem 1.5rem}";

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
const AtomicInsightResultList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.loadingFlag = randomID('firstInsightResultLoaded-');
        this.display = 'list';
        this.templateHasError = false;
        this.resultTemplateRegistered = false;
        /**
         * The spacing of various elements in the result list, including the gap between results, the gap between parts of a result, and the font sizes of different parts in a result.
         */
        this.density = 'normal';
        /**
         * The expected size of the image displayed in the results.
         */
        this.imageSize = 'icon';
        this.resultsPerPageState = undefined;
        this.resultListState = undefined;
        this.templateHasError = false;
        this.resultTemplateRegistered = false;
        this.error = undefined;
        this.density = 'normal';
        this.imageSize = 'icon';
    }
    /**
     * Sets a rendering function to bypass the standard HTML template mechanism for rendering results.
     * You can use this function while working with web frameworks that don't use plain HTML syntax, e.g., React, Angular or Vue.
     *
     * Do not use this method if you integrate Atomic in a plain HTML deployment.
     *
     * @param resultRenderingFunction
     */
    async setRenderFunction(resultRenderingFunction) {
        this.itemRenderingFunction = resultRenderingFunction;
    }
    initialize() {
        this.resultList = buildResultList(this.bindings.engine, {
            options: {
                fieldsToInclude: this.bindings.store.state.fieldsToInclude || undefined,
            },
        });
        this.resultsPerPage = buildResultsPerPage(this.bindings.engine);
        this.itemTemplateProvider = new ItemTemplateProvider({
            includeDefaultTemplate: true,
            templateElements: Array.from(this.host.querySelectorAll('atomic-insight-result-template')),
            getResultTemplateRegistered: () => this.resultTemplateRegistered,
            getTemplateHasError: () => this.templateHasError,
            setResultTemplateRegistered: (value) => {
                this.resultTemplateRegistered = value;
            },
            setTemplateHasError: (value) => {
                this.templateHasError = value;
            },
            bindings: this.bindings,
        });
        this.itemListCommon = new ItemListCommon({
            engineSubscribe: this.bindings.engine.subscribe,
            getCurrentNumberOfItems: () => this.resultListState.results.length,
            getIsLoading: () => this.resultListState.isLoading,
            host: this.host,
            loadingFlag: this.loadingFlag,
            nextNewItemTarget: this.focusTarget,
            store: this.bindings.store,
        });
    }
    get focusTarget() {
        if (!this.nextNewResultTarget) {
            this.nextNewResultTarget = new FocusTargetController(this);
        }
        return this.nextNewResultTarget;
    }
    render() {
        this.itemListCommon.updateBreakpoints();
        const listClasses = this.computeListDisplayClasses();
        return (h(ItemListGuard, { key: 'ae74b8f2391b867fe56f35db0daf44f886e29f3e', hasTemplate: this.resultTemplateRegistered, templateHasError: this.itemTemplateProvider.hasError, firstRequestExecuted: this.resultListState.firstSearchExecuted, hasItems: this.resultListState.hasResults, hasError: this.resultListState.hasError }, h(DisplayWrapper, { key: 'a00e1356406b9069faea6bdd927eb8c99a203cea', listClasses: listClasses, display: this.display }, h(ResultsPlaceholdersGuard, { key: '1170503ccfea3d528d574449ba7090c28ae39ebb', displayPlaceholders: !this.bindings.store.isAppLoaded(), numberOfPlaceholders: this.resultsPerPageState.numberOfResults, display: this.display, density: this.density, imageSize: this.imageSize }), h(ItemDisplayGuard, { key: '175018623c45d954181e84fb93e45abcfd61da6b', firstRequestExecuted: this.resultListState.firstSearchExecuted, hasItems: this.resultListState.hasResults }, this.resultListState.results.map((result, i) => {
            const atomicInsightResultProps = this.getPropsForAtomicInsightResult(result);
            return (h("atomic-insight-result", { ...atomicInsightResultProps, part: "outline", ref: (element) => element && this.itemListCommon.setNewResultRef(element, i) }));
        })))));
    }
    computeListDisplayClasses() {
        const displayPlaceholders = !this.bindings.store.isAppLoaded();
        return getItemListDisplayClasses(this.display, this.density, this.imageSize, this.resultListState.firstSearchExecuted &&
            this.resultListState.isLoading, displayPlaceholders);
    }
    getPropsForAtomicInsightResult(result) {
        return {
            interactiveResult: buildInteractiveResult(this.bindings.engine, {
                options: { result },
            }),
            result,
            renderingFunction: this.itemRenderingFunction,
            loadingFlag: this.loadingFlag,
            key: this.itemListCommon.getResultId(result.uniqueId, this.resultListState.searchResponseId, this.density, this.imageSize),
            content: this.itemTemplateProvider.getTemplateContent(result),
            store: this.bindings.store,
            density: this.density,
            imageSize: this.imageSize,
            display: this.display,
        };
    }
    get host() { return getElement(this); }
};
__decorate([
    InitializeBindings()
], AtomicInsightResultList.prototype, "bindings", void 0);
__decorate([
    BindStateToController('resultsPerPage')
], AtomicInsightResultList.prototype, "resultsPerPageState", void 0);
__decorate([
    BindStateToController('resultList')
], AtomicInsightResultList.prototype, "resultListState", void 0);
AtomicInsightResultList.style = atomicInsightResultListCss;

export { AtomicInsightResultList as atomic_insight_result_list };

//# sourceMappingURL=atomic-insight-result-list.entry.js.map
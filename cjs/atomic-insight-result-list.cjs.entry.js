'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const headless_esm = require('./headless.esm-cf228ce3.js');
const accessibilityUtils = require('./accessibility-utils-d00e9462.js');
const initializationUtils = require('./initialization-utils-f21f2efb.js');
const utils = require('./utils-b609c39e.js');
const placeholders = require('./placeholders-3fdbabb6.js');
const itemDisplayGuard = require('./item-display-guard-c58ceb86.js');
const itemListCommon = require('./item-list-common-562cd0ba.js');
const itemListGuard = require('./item-list-guard-946de6a1.js');
const itemTemplateProvider = require('./item-template-provider-41ec4218.js');
const displayOptions = require('./display-options-809f1483.js');
require('./event-utils-9bfcf3c5.js');
require('./_commonjsHelpers-0192c5b3.js');
require('./replace-breakpoint-2f99fafc.js');
require('./headless.esm-1a66963a.js');
require('./template-provider-d0180cd1.js');
require('./sections-9d82449e.js');

const atomicInsightResultListCss = ".list-wrapper.placeholder .result-component{display:none}.list-wrapper.placeholder table.list-root{display:none}.list-wrapper:not(.placeholder) atomic-result-placeholder{display:none}.list-wrapper:not(.placeholder) atomic-result-table-placeholder{display:none}.list-root.loading{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}@keyframes pulse{0%,100%{opacity:0.6}50%{opacity:0.2}}[part~='divider']:not(:last-child){border-bottom:1px solid var(--atomic-neutral);padding-bottom:1rem}[part~='divider']{margin-bottom:1rem}.list-root.display-list{display:flex;flex-direction:column}.list-root.display-list .result-component,.list-root.display-list atomic-result-placeholder{width:auto}.list-root.display-list.density-comfortable [part~='outline']::before{margin:2rem 0}.list-root.display-list.density-normal [part~='outline']::before{margin:1.5rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-normal [part~='outline']::before{margin:1.75rem 0}}.list-root.display-list.density-compact [part~='outline']::before{margin:1rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-compact [part~='outline']::before{margin:1.5rem 0}}.list-root.display-list [part~='outline']::before{display:block;content:' ';height:1px;background-color:var(--atomic-neutral)}.list-root.display-list [part~='outline']:first-of-type::before{display:none}.list-root.display-list atomic-result-placeholder::before{background-color:transparent}.list-root.display-list .result-component[part~='outline']::before{margin-top:0px;margin-bottom:0px;margin-left:1.5rem;margin-right:1.5rem}.list-root.placeholder{padding:0.5rem 1.5rem}";
const AtomicInsightResultListStyle0 = atomicInsightResultListCss;

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
        index.registerInstance(this, hostRef);
        this.loadingFlag = utils.randomID('firstInsightResultLoaded-');
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
        this.resultList = headless_esm.uP(this.bindings.engine, {
            options: {
                fieldsToInclude: this.bindings.store.state.fieldsToInclude || undefined,
            },
        });
        this.resultsPerPage = headless_esm.CP(this.bindings.engine);
        this.itemTemplateProvider = new itemTemplateProvider.ItemTemplateProvider({
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
        this.itemListCommon = new itemListCommon.ItemListCommon({
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
            this.nextNewResultTarget = new accessibilityUtils.FocusTargetController(this);
        }
        return this.nextNewResultTarget;
    }
    render() {
        this.itemListCommon.updateBreakpoints();
        const listClasses = this.computeListDisplayClasses();
        return (index.h(itemListGuard.ItemListGuard, { key: 'ae74b8f2391b867fe56f35db0daf44f886e29f3e', hasTemplate: this.resultTemplateRegistered, templateHasError: this.itemTemplateProvider.hasError, firstRequestExecuted: this.resultListState.firstSearchExecuted, hasItems: this.resultListState.hasResults, hasError: this.resultListState.hasError }, index.h(itemDisplayGuard.DisplayWrapper, { key: 'a00e1356406b9069faea6bdd927eb8c99a203cea', listClasses: listClasses, display: this.display }, index.h(placeholders.ResultsPlaceholdersGuard, { key: '1170503ccfea3d528d574449ba7090c28ae39ebb', displayPlaceholders: !this.bindings.store.isAppLoaded(), numberOfPlaceholders: this.resultsPerPageState.numberOfResults, display: this.display, density: this.density, imageSize: this.imageSize }), index.h(itemDisplayGuard.ItemDisplayGuard, { key: '175018623c45d954181e84fb93e45abcfd61da6b', firstRequestExecuted: this.resultListState.firstSearchExecuted, hasItems: this.resultListState.hasResults }, this.resultListState.results.map((result, i) => {
            const atomicInsightResultProps = this.getPropsForAtomicInsightResult(result);
            return (index.h("atomic-insight-result", { ...atomicInsightResultProps, part: "outline", ref: (element) => element && this.itemListCommon.setNewResultRef(element, i) }));
        })))));
    }
    computeListDisplayClasses() {
        const displayPlaceholders = !this.bindings.store.isAppLoaded();
        return displayOptions.getItemListDisplayClasses(this.display, this.density, this.imageSize, this.resultListState.firstSearchExecuted &&
            this.resultListState.isLoading, displayPlaceholders);
    }
    getPropsForAtomicInsightResult(result) {
        return {
            interactiveResult: headless_esm.hP(this.bindings.engine, {
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
    get host() { return index.getElement(this); }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicInsightResultList.prototype, "bindings", void 0);
__decorate([
    initializationUtils.BindStateToController('resultsPerPage')
], AtomicInsightResultList.prototype, "resultsPerPageState", void 0);
__decorate([
    initializationUtils.BindStateToController('resultList')
], AtomicInsightResultList.prototype, "resultListState", void 0);
AtomicInsightResultList.style = AtomicInsightResultListStyle0;

exports.atomic_insight_result_list = AtomicInsightResultList;

//# sourceMappingURL=atomic-insight-result-list.cjs.entry.js.map
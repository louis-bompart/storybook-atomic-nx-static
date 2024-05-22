'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const headless_esm = require('./headless.esm-cf228ce3.js');
const accessibilityUtils = require('./accessibility-utils-8ec8aa46.js');
const initializationUtils = require('./initialization-utils-88a3fba7.js');
const utils = require('./utils-93ea935e.js');
const placeholders = require('./placeholders-3fdbabb6.js');
const itemTemplateProvider = require('./item-template-provider-41ec4218.js');
const itemDisplayGuard = require('./item-display-guard-c58ceb86.js');
const itemListCommon = require('./item-list-common-c317734c.js');
const itemListGuard = require('./item-list-guard-946de6a1.js');
const displayOptions = require('./display-options-efe6b72f.js');
require('./event-utils-9bfcf3c5.js');
require('./_commonjsHelpers-0192c5b3.js');
require('./headless.esm-1a66963a.js');
require('./template-provider-d0180cd1.js');
require('./replace-breakpoint-7f1e4575.js');
require('./sections-923396f6.js');

const atomicInsightFoldedResultListCss = ".list-wrapper.placeholder .result-component{display:none}.list-wrapper.placeholder table.list-root{display:none}.list-wrapper:not(.placeholder) atomic-result-placeholder{display:none}.list-wrapper:not(.placeholder) atomic-result-table-placeholder{display:none}.list-root.loading{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}@keyframes pulse{0%,100%{opacity:0.6}50%{opacity:0.2}}[part~='divider']:not(:last-child){border-bottom:1px solid var(--atomic-neutral);padding-bottom:1rem}[part~='divider']{margin-bottom:1rem}.list-root.display-list{display:flex;flex-direction:column}.list-root.display-list .result-component,.list-root.display-list atomic-result-placeholder{width:auto}.list-root.display-list.density-comfortable [part~='outline']::before{margin:2rem 0}.list-root.display-list.density-normal [part~='outline']::before{margin:1.5rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-normal [part~='outline']::before{margin:1.75rem 0}}.list-root.display-list.density-compact [part~='outline']::before{margin:1rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-compact [part~='outline']::before{margin:1.5rem 0}}.list-root.display-list [part~='outline']::before{display:block;content:' ';height:1px;background-color:var(--atomic-neutral)}.list-root.display-list [part~='outline']:first-of-type::before{display:none}.list-root.display-list atomic-result-placeholder::before{background-color:transparent}.list-root.display-list .result-component[part~='outline']::before{margin-top:0px;margin-bottom:0px;margin-left:1.5rem;margin-right:1.5rem}.list-root.placeholder{padding:0.5rem 1.5rem}";
const AtomicInsightFoldedResultListStyle0 = atomicInsightFoldedResultListCss;

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
const AtomicInsightFoldedResultList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.loadingFlag = utils.randomID('firstResultLoaded-');
        this.display = 'list';
        this.resultTemplateRegistered = false;
        this.templateHasError = false;
        /**
         * The spacing of various elements in the result list, including the gap between results, the gap between parts of a result, and the font sizes of different parts in a result.
         */
        this.density = 'normal';
        /**
         * The expected size of the image displayed in the results.
         */
        this.imageSize = 'icon';
        this.foldedResultListState = undefined;
        this.resultsPerPageState = undefined;
        this.resultTemplateRegistered = false;
        this.error = undefined;
        this.templateHasError = false;
        this.density = 'normal';
        this.imageSize = 'icon';
        this.collectionField = undefined;
        this.parentField = undefined;
        this.childField = undefined;
    }
    /**
     * Sets a rendering function to bypass the standard HTML template mechanism for rendering results.
     * You can use this function while working with web frameworks that don't use plain HTML syntax, e.g., React, Angular or Vue.
     *
     * Do not use this method if you integrate Atomic in a plain HTML deployment.
     */
    async setRenderFunction(resultRenderingFunction) {
        this.itemRenderingFunction = resultRenderingFunction;
    }
    resolveFoldedResultList(event) {
        event.preventDefault();
        event.stopPropagation();
        event.detail(this.foldedResultList);
    }
    loadCollection(event) {
        event.preventDefault();
        event.stopPropagation();
        this.foldedResultList.loadCollection(event.detail);
    }
    initialize() {
        try {
            this.foldedResultList = this.initFolding();
            this.resultsPerPage = headless_esm.CP(this.bindings.engine);
        }
        catch (e) {
            this.error = e;
        }
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
            getCurrentNumberOfItems: () => this.foldedResultListState.results.length,
            getIsLoading: () => this.foldedResultListState.isLoading,
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
    initFolding(props = { options: {} }) {
        return headless_esm.gP(this.bindings.engine, {
            options: {
                ...props.options,
                folding: {
                    collectionField: this.collectionField,
                    parentField: this.parentField,
                    childField: this.childField,
                },
            },
        });
    }
    render() {
        this.itemListCommon.updateBreakpoints();
        const listClasses = this.computeListDisplayClasses();
        return (index.h(itemListGuard.ItemListGuard, { key: 'e78b5f2d5c9b62b237bd9f91ed5cc351ef9e3e2b', firstRequestExecuted: this.foldedResultListState.firstSearchExecuted, hasItems: this.foldedResultListState.hasResults, hasTemplate: this.resultTemplateRegistered, templateHasError: this.itemTemplateProvider.hasError, hasError: this.foldedResultListState.hasError }, index.h(itemDisplayGuard.DisplayWrapper, { key: '3ec7598838b40d72071b3e14e5eea6024c838554', listClasses: listClasses, display: this.display }, index.h(placeholders.ResultsPlaceholdersGuard, { key: '9100bafd2e7b885b968bbc1590b4e0e5967be83a', displayPlaceholders: !this.bindings.store.isAppLoaded(), numberOfPlaceholders: this.resultsPerPageState.numberOfResults, display: this.display, density: this.density, imageSize: this.imageSize }), index.h(itemDisplayGuard.ItemDisplayGuard, { key: 'e9c86f06a63ad09701ef601296565cf098780f26', firstRequestExecuted: this.foldedResultListState.firstSearchExecuted, hasItems: this.foldedResultListState.hasResults }, this.foldedResultListState.results.map((collection, i) => {
            const atomicInsightResultProps = this.getPropsForAtomicInsightResult(collection);
            return (index.h("atomic-insight-result", { ...atomicInsightResultProps, part: "outline", ref: (element) => element && this.itemListCommon.setNewResultRef(element, i) }));
        })))));
    }
    computeListDisplayClasses() {
        const displayPlaceholders = !this.bindings.store.isAppLoaded();
        return displayOptions.getItemListDisplayClasses(this.display, this.density, this.imageSize, this.foldedResultListState.firstSearchExecuted &&
            this.foldedResultListState.isLoading, displayPlaceholders);
    }
    getPropsForAtomicInsightResult(collection) {
        const result = itemTemplateProvider.extractUnfoldedItem(collection);
        return {
            interactiveResult: headless_esm.hP(this.bindings.engine, {
                options: { result },
            }),
            result,
            renderingFunction: this.itemRenderingFunction,
            loadingFlag: this.loadingFlag,
            key: this.itemListCommon.getResultId(result.uniqueId, this.foldedResultListState.searchResponseId, this.density, this.imageSize),
            content: this.itemTemplateProvider.getTemplateContent(result),
            store: this.bindings.store,
            density: this.density,
            display: this.display,
            imageSize: this.imageSize,
        };
    }
    get host() { return index.getElement(this); }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicInsightFoldedResultList.prototype, "bindings", void 0);
__decorate([
    initializationUtils.BindStateToController('foldedResultList')
], AtomicInsightFoldedResultList.prototype, "foldedResultListState", void 0);
__decorate([
    initializationUtils.BindStateToController('resultsPerPage')
], AtomicInsightFoldedResultList.prototype, "resultsPerPageState", void 0);
AtomicInsightFoldedResultList.style = AtomicInsightFoldedResultListStyle0;

exports.atomic_insight_folded_result_list = AtomicInsightFoldedResultList;

//# sourceMappingURL=atomic-insight-folded-result-list.cjs.entry.js.map
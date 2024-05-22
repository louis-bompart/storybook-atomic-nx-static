import { r as registerInstance, h, g as getElement } from './index-c045ad7c.js';
import { C as CP, g as gP, h as hP } from './headless.esm-8f8571fe.js';
import { F as FocusTargetController } from './accessibility-utils-95c56e98.js';
import { I as InitializeBindings, B as BindStateToController } from './initialization-utils-2f872ed1.js';
import { r as randomID } from './utils-af246396.js';
import { R as ResultsPlaceholdersGuard } from './placeholders-f4f03b54.js';
import { I as ItemTemplateProvider, e as extractUnfoldedItem } from './item-template-provider-e4f808aa.js';
import { D as DisplayWrapper, I as ItemDisplayGuard } from './item-display-guard-7af34685.js';
import { I as ItemListCommon } from './item-list-common-04954faf.js';
import { I as ItemListGuard } from './item-list-guard-f7aeaff7.js';
import { g as getItemListDisplayClasses } from './display-options-97880b8d.js';
import './event-utils-8de63ec3.js';
import './_commonjsHelpers-c9e3b764.js';
import './headless.esm-88bad35d.js';
import './template-provider-818c930d.js';
import './replace-breakpoint-8bfab33b.js';
import './sections-a848dae3.js';

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
        registerInstance(this, hostRef);
        this.loadingFlag = randomID('firstResultLoaded-');
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
            this.resultsPerPage = CP(this.bindings.engine);
        }
        catch (e) {
            this.error = e;
        }
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
            this.nextNewResultTarget = new FocusTargetController(this);
        }
        return this.nextNewResultTarget;
    }
    initFolding(props = { options: {} }) {
        return gP(this.bindings.engine, {
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
        return (h(ItemListGuard, { key: '5a5989a8f4bc5a54a296c2f31cefcf3a7c15240f', firstRequestExecuted: this.foldedResultListState.firstSearchExecuted, hasItems: this.foldedResultListState.hasResults, hasTemplate: this.resultTemplateRegistered, templateHasError: this.itemTemplateProvider.hasError, hasError: this.foldedResultListState.hasError }, h(DisplayWrapper, { key: '71f81d254665841d8f4f2b830943b670cf0c0151', listClasses: listClasses, display: this.display }, h(ResultsPlaceholdersGuard, { key: '5b0d44f92761bd8d4682eec9ec17bd910a152bf8', displayPlaceholders: !this.bindings.store.isAppLoaded(), numberOfPlaceholders: this.resultsPerPageState.numberOfResults, display: this.display, density: this.density, imageSize: this.imageSize }), h(ItemDisplayGuard, { key: '905eeb0b6d7c95adb46af482a54f2df92a3ac00a', firstRequestExecuted: this.foldedResultListState.firstSearchExecuted, hasItems: this.foldedResultListState.hasResults }, this.foldedResultListState.results.map((collection, i) => {
            const atomicInsightResultProps = this.getPropsForAtomicInsightResult(collection);
            return (h("atomic-insight-result", { ...atomicInsightResultProps, part: "outline", ref: (element) => element && this.itemListCommon.setNewResultRef(element, i) }));
        })))));
    }
    computeListDisplayClasses() {
        const displayPlaceholders = !this.bindings.store.isAppLoaded();
        return getItemListDisplayClasses(this.display, this.density, this.imageSize, this.foldedResultListState.firstSearchExecuted &&
            this.foldedResultListState.isLoading, displayPlaceholders);
    }
    getPropsForAtomicInsightResult(collection) {
        const result = extractUnfoldedItem(collection);
        return {
            interactiveResult: hP(this.bindings.engine, {
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
    get host() { return getElement(this); }
};
__decorate([
    InitializeBindings()
], AtomicInsightFoldedResultList.prototype, "bindings", void 0);
__decorate([
    BindStateToController('foldedResultList')
], AtomicInsightFoldedResultList.prototype, "foldedResultListState", void 0);
__decorate([
    BindStateToController('resultsPerPage')
], AtomicInsightFoldedResultList.prototype, "resultsPerPageState", void 0);
AtomicInsightFoldedResultList.style = AtomicInsightFoldedResultListStyle0;

export { AtomicInsightFoldedResultList as atomic_insight_folded_result_list };

//# sourceMappingURL=atomic-insight-folded-result-list.entry.js.map
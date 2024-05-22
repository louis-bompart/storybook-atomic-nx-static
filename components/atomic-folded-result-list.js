import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { O as Ok, c as cT, w as wk } from './headless.esm.js';
import { F as FocusTargetController } from './accessibility-utils.js';
import { I as InitializeBindings, B as BindStateToController } from './initialization-utils.js';
import { r as randomID } from './utils.js';
import { R as ResultsPlaceholdersGuard } from './placeholders.js';
import { I as ItemTemplateProvider, e as extractUnfoldedItem } from './item-template-provider.js';
import { D as DisplayWrapper, I as ItemDisplayGuard } from './item-display-guard.js';
import { I as ItemListCommon } from './item-list-common.js';
import { I as ItemListGuard } from './item-list-guard.js';
import { g as getItemListDisplayClasses } from './display-options.js';
import { d as defineCustomElement$e } from './atomic-component-error2.js';
import { d as defineCustomElement$d } from './atomic-result2.js';
import { d as defineCustomElement$c } from './atomic-result-link2.js';
import { d as defineCustomElement$b } from './atomic-result-placeholder2.js';
import { d as defineCustomElement$a } from './atomic-result-section-actions2.js';
import { d as defineCustomElement$9 } from './atomic-result-section-badges2.js';
import { d as defineCustomElement$8 } from './atomic-result-section-bottom-metadata2.js';
import { d as defineCustomElement$7 } from './atomic-result-section-excerpt2.js';
import { d as defineCustomElement$6 } from './atomic-result-section-title2.js';
import { d as defineCustomElement$5 } from './atomic-result-section-visual2.js';
import { d as defineCustomElement$4 } from './atomic-result-table-placeholder2.js';
import { d as defineCustomElement$3 } from './atomic-result-text2.js';
import { d as defineCustomElement$2 } from './atomic-text2.js';

const atomicFoldedResultListCss = ".list-wrapper.placeholder .result-component{display:none}.list-wrapper.placeholder table.list-root{display:none}.list-wrapper:not(.placeholder) atomic-result-placeholder{display:none}.list-wrapper:not(.placeholder) atomic-result-table-placeholder{display:none}.list-root.loading{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}@keyframes pulse{0%,100%{opacity:0.6}50%{opacity:0.2}}[part~='divider']:not(:last-child){border-bottom:1px solid var(--atomic-neutral);padding-bottom:1rem}[part~='divider']{margin-bottom:1rem}.list-root.display-list{display:flex;flex-direction:column}.list-root.display-list .result-component,.list-root.display-list atomic-result-placeholder{width:auto}@media (min-width: 1024px){.list-root.display-list.density-comfortable [part~='outline']::before{margin:2rem 0}.list-root.display-list.density-normal [part~='outline']::before{margin:1.5rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-normal [part~='outline']::before{margin:1.75rem 0}}.list-root.display-list.density-compact [part~='outline']::before{margin:1rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-compact [part~='outline']::before{margin:1.5rem 0}}.list-root.display-list [part~='outline']::before{display:block;content:' ';height:1px;background-color:var(--atomic-neutral)}.list-root.display-list [part~='outline']:first-of-type::before{display:none}.list-root.display-list atomic-result-placeholder::before{background-color:transparent}}@media not all and (min-width: 1024px){.list-root.display-list.image-large.density-comfortable [part~='outline']::before{margin:2rem 0}.list-root.display-list.image-large.density-normal [part~='outline']::before{margin:1.5rem 0}@media not all and (min-width: 1024px){.list-root.display-list.image-large.density-normal [part~='outline']::before{margin:1.75rem 0}}.list-root.display-list.image-large.density-compact [part~='outline']::before{margin:1rem 0}@media not all and (min-width: 1024px){.list-root.display-list.image-large.density-compact [part~='outline']::before{margin:1.5rem 0}}.list-root.display-list.image-large [part~='outline']::before{display:block;content:' ';height:1px;background-color:var(--atomic-neutral)}.list-root.display-list.image-large [part~='outline']:first-of-type::before{display:none}.list-root.display-list.image-large atomic-result-placeholder::before{background-color:transparent}.list-root.display-list.image-large{display:grid;justify-content:space-evenly;grid-template-columns:minmax(auto, 35rem)}.list-root.display-list.image-small,.list-root.display-list.image-icon,.list-root.display-list.image-none{grid-row-gap:1rem}.list-root.display-list.image-small [part~='outline'],.list-root.display-list.image-icon [part~='outline'],.list-root.display-list.image-none [part~='outline']{border:1px solid var(--atomic-neutral);padding:1rem;border-radius:1rem}.list-root.display-list.image-small atomic-result-placeholder,.list-root.display-list.image-icon atomic-result-placeholder,.list-root.display-list.image-none atomic-result-placeholder{border-color:transparent}}";
const AtomicFoldedResultListStyle0 = atomicFoldedResultListCss;

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
const AtomicFoldedResultList$1 = /*@__PURE__*/ proxyCustomElement(class AtomicFoldedResultList extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
        /**
         * The initial number of child results to request for each folded collection, before expansion.
         *
         * @defaultValue `2`
         *
         * @example For an email thread with a total of 20 messages, using the default value of `2` will request the top two child messages, based on the current sort criteria and query, to be returned as children of the parent message.
         * The user can then click to expand the collection and see the remaining messages that match the current query (i.e., not necessarily all remaining 18 messages). Those messages will be sorted based on the current sort criteria (i.e., not necessarily by date). See the `atomic-load-more-children-results` component.
         * For more info on Result Folding, see [Result Folding](https://docs.coveo.com/en/1884).
         **/
        this.numberOfFoldedResults = 2;
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
        this.numberOfFoldedResults = 2;
    }
    /**
     * Sets a rendering function to bypass the standard HTML template mechanism for rendering results.
     * You can use this function while working with web frameworks that don't use plain HTML syntax, e.g., React, Angular or Vue.
     *
     * Do not use this method if you integrate Atomic in a plain HTML deployment.
     */
    async setRenderFunction(resultRenderingFunction) {
        this.resultRenderingFunction = resultRenderingFunction;
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
    get focusTarget() {
        if (!this.nextNewResultTarget) {
            this.nextNewResultTarget = new FocusTargetController(this);
        }
        return this.nextNewResultTarget;
    }
    initialize() {
        try {
            this.foldedResultList = this.initFolding();
            this.resultsPerPage = Ok(this.bindings.engine);
        }
        catch (e) {
            this.error = e;
        }
        this.itemTemplateProvider = new ItemTemplateProvider({
            includeDefaultTemplate: true,
            templateElements: Array.from(this.host.querySelectorAll('atomic-result-template')),
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
    initFolding(props = { options: {} }) {
        return cT(this.bindings.engine, {
            options: {
                ...props.options,
                folding: {
                    collectionField: this.collectionField,
                    parentField: this.parentField,
                    childField: this.childField,
                    numberOfFoldedResults: this.numberOfFoldedResults,
                },
            },
        });
    }
    render() {
        this.itemListCommon.updateBreakpoints();
        const listClasses = this.computeListDisplayClasses();
        return (h(ItemListGuard, { key: 'cba7d099d0f6b8b74f78c56fd8976f632bf4a8ca', hasError: this.foldedResultListState.hasError, firstRequestExecuted: this.foldedResultListState.firstSearchExecuted, hasItems: this.foldedResultListState.hasResults, hasTemplate: this.resultTemplateRegistered, templateHasError: this.itemTemplateProvider.hasError }, h(DisplayWrapper, { key: '1a8d06d0279469dd3076b3db8e4c9b8a98fb67d7', listClasses: listClasses, display: this.display }, h(ResultsPlaceholdersGuard, { key: 'dd6e8ff13a01004661acb2695ff7ad82ff8f9a95', density: this.density, imageSize: this.imageSize, display: this.display, displayPlaceholders: !this.bindings.store.isAppLoaded(), numberOfPlaceholders: this.resultsPerPageState.numberOfResults }), h(ItemDisplayGuard, { key: '04a1a41afdcf28c43eb8594aa7c2aa6f632e996e', firstRequestExecuted: this.foldedResultListState.firstSearchExecuted, hasItems: this.foldedResultListState.hasResults }, this.foldedResultListState.results.map((collection, i) => {
            const propsForAtomicResult = this.getPropsForAtomicResult(collection);
            return (h("atomic-result", { ...propsForAtomicResult, part: "outline", ref: (element) => element && this.itemListCommon.setNewResultRef(element, i) }));
        })))));
    }
    computeListDisplayClasses() {
        const displayPlaceholders = !this.bindings.store.isAppLoaded();
        return getItemListDisplayClasses(this.display, this.density, this.imageSize, this.foldedResultListState.firstSearchExecuted &&
            this.foldedResultListState.isLoading, displayPlaceholders);
    }
    getPropsForAtomicResult(collection) {
        const result = extractUnfoldedItem(collection);
        return {
            interactiveResult: wk(this.bindings.engine, {
                options: { result },
            }),
            result,
            renderingFunction: this.resultRenderingFunction,
            loadingFlag: this.loadingFlag,
            key: this.itemListCommon.getResultId(result.uniqueId, this.foldedResultListState.searchResponseId, this.density, this.imageSize),
            content: this.itemTemplateProvider.getTemplateContent(result),
            store: this.bindings.store,
            density: this.density,
            imageSize: this.imageSize,
            display: this.display,
        };
    }
    get host() { return this; }
    static get style() { return AtomicFoldedResultListStyle0; }
}, [1, "atomic-folded-result-list", {
        "density": [513],
        "imageSize": [513, "image-size"],
        "collectionField": [513, "collection-field"],
        "parentField": [513, "parent-field"],
        "childField": [513, "child-field"],
        "numberOfFoldedResults": [514, "number-of-folded-results"],
        "foldedResultListState": [32],
        "resultsPerPageState": [32],
        "resultTemplateRegistered": [32],
        "error": [32],
        "templateHasError": [32],
        "setRenderFunction": [64]
    }, [[0, "atomic/resolveFoldedResultList", "resolveFoldedResultList"], [0, "atomic/loadCollection", "loadCollection"]]]);
__decorate([
    InitializeBindings()
], AtomicFoldedResultList$1.prototype, "bindings", void 0);
__decorate([
    BindStateToController('foldedResultList')
], AtomicFoldedResultList$1.prototype, "foldedResultListState", void 0);
__decorate([
    BindStateToController('resultsPerPage')
], AtomicFoldedResultList$1.prototype, "resultsPerPageState", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-folded-result-list", "atomic-component-error", "atomic-result", "atomic-result-link", "atomic-result-placeholder", "atomic-result-section-actions", "atomic-result-section-badges", "atomic-result-section-bottom-metadata", "atomic-result-section-excerpt", "atomic-result-section-title", "atomic-result-section-visual", "atomic-result-table-placeholder", "atomic-result-text", "atomic-text"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-folded-result-list":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicFoldedResultList$1);
            }
            break;
        case "atomic-component-error":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "atomic-result":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "atomic-result-link":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "atomic-result-placeholder":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "atomic-result-section-actions":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "atomic-result-section-badges":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "atomic-result-section-bottom-metadata":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "atomic-result-section-excerpt":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "atomic-result-section-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "atomic-result-section-visual":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "atomic-result-table-placeholder":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atomic-result-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atomic-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtomicFoldedResultList = AtomicFoldedResultList$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicFoldedResultList, defineCustomElement };

//# sourceMappingURL=atomic-folded-result-list.js.map
import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { C as CP, g as gP, h as hP } from './headless.esm3.js';
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
import { d as defineCustomElement$d } from './atomic-insight-result2.js';
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
const AtomicInsightFoldedResultList$1 = /*@__PURE__*/ proxyCustomElement(class AtomicInsightFoldedResultList extends HTMLElement {
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
        return (h(ItemListGuard, { key: 'e78b5f2d5c9b62b237bd9f91ed5cc351ef9e3e2b', firstRequestExecuted: this.foldedResultListState.firstSearchExecuted, hasItems: this.foldedResultListState.hasResults, hasTemplate: this.resultTemplateRegistered, templateHasError: this.itemTemplateProvider.hasError, hasError: this.foldedResultListState.hasError }, h(DisplayWrapper, { key: '3ec7598838b40d72071b3e14e5eea6024c838554', listClasses: listClasses, display: this.display }, h(ResultsPlaceholdersGuard, { key: '9100bafd2e7b885b968bbc1590b4e0e5967be83a', displayPlaceholders: !this.bindings.store.isAppLoaded(), numberOfPlaceholders: this.resultsPerPageState.numberOfResults, display: this.display, density: this.density, imageSize: this.imageSize }), h(ItemDisplayGuard, { key: 'e9c86f06a63ad09701ef601296565cf098780f26', firstRequestExecuted: this.foldedResultListState.firstSearchExecuted, hasItems: this.foldedResultListState.hasResults }, this.foldedResultListState.results.map((collection, i) => {
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
    get host() { return this; }
    static get style() { return AtomicInsightFoldedResultListStyle0; }
}, [1, "atomic-insight-folded-result-list", {
        "density": [513],
        "imageSize": [513, "image-size"],
        "collectionField": [513, "collection-field"],
        "parentField": [513, "parent-field"],
        "childField": [513, "child-field"],
        "foldedResultListState": [32],
        "resultsPerPageState": [32],
        "resultTemplateRegistered": [32],
        "error": [32],
        "templateHasError": [32],
        "setRenderFunction": [64]
    }, [[0, "atomic/resolveFoldedResultList", "resolveFoldedResultList"], [0, "atomic/loadCollection", "loadCollection"]]]);
__decorate([
    InitializeBindings()
], AtomicInsightFoldedResultList$1.prototype, "bindings", void 0);
__decorate([
    BindStateToController('foldedResultList')
], AtomicInsightFoldedResultList$1.prototype, "foldedResultListState", void 0);
__decorate([
    BindStateToController('resultsPerPage')
], AtomicInsightFoldedResultList$1.prototype, "resultsPerPageState", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-insight-folded-result-list", "atomic-component-error", "atomic-insight-result", "atomic-result-link", "atomic-result-placeholder", "atomic-result-section-actions", "atomic-result-section-badges", "atomic-result-section-bottom-metadata", "atomic-result-section-excerpt", "atomic-result-section-title", "atomic-result-section-visual", "atomic-result-table-placeholder", "atomic-result-text", "atomic-text"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-insight-folded-result-list":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicInsightFoldedResultList$1);
            }
            break;
        case "atomic-component-error":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "atomic-insight-result":
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

const AtomicInsightFoldedResultList = AtomicInsightFoldedResultList$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicInsightFoldedResultList, defineCustomElement };

//# sourceMappingURL=atomic-insight-folded-result-list.js.map
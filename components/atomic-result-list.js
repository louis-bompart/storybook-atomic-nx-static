import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { e as bk, O as Ok, w as wk } from './headless.esm.js';
import { F as FocusTargetController } from './accessibility-utils.js';
import { I as InitializeBindings, B as BindStateToController } from './initialization-utils.js';
import { r as randomID } from './utils.js';
import { R as ResultsPlaceholdersGuard } from './placeholders.js';
import { D as DisplayGrid } from './display-grid.js';
import { D as DisplayTable, a as DisplayTableRow, b as DisplayTableData } from './display-table.js';
import { D as DisplayWrapper, I as ItemDisplayGuard } from './item-display-guard.js';
import { I as ItemListCommon } from './item-list-common.js';
import { I as ItemListGuard } from './item-list-guard.js';
import { I as ItemTemplateProvider } from './item-template-provider.js';
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

const atomicResultListCss = ".list-wrapper.placeholder .result-component{display:none}.list-wrapper.placeholder table.list-root{display:none}.list-wrapper:not(.placeholder) atomic-result-placeholder{display:none}.list-wrapper:not(.placeholder) atomic-result-table-placeholder{display:none}.list-root.loading{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}@keyframes pulse{0%,100%{opacity:0.6}50%{opacity:0.2}}.list-wrapper.display-table{display:grid;overflow-x:auto}.list-root.display-table{min-width:100%;border-spacing:0;border-collapse:separate}.list-root.display-table th,.list-root.display-table td{font-family:var(--atomic-font-family);border:1px solid var(--atomic-neutral);--font-size:var(--atomic-text-sm);font-size:var(--font-size);line-height:1rem;white-space:nowrap}.list-root.display-table th:not(:first-child),.list-root.display-table td:not(:first-child){border-left:none}.list-root.display-table th:first-child,.list-root.display-table td:first-child{min-width:19rem}.list-root.display-table th{background-color:var(--atomic-neutral-light);border-bottom:none;font-weight:bold;color:black;padding:1rem var(--padding);text-align:left}.list-root.display-table th:first-child{border-top-left-radius:var(--atomic-border-radius-xl)}.list-root.display-table th:last-child{border-top-right-radius:var(--atomic-border-radius-xl)}.list-root.display-table td{color:var(--atomic-neutral-dark);border-top:none;vertical-align:top;padding:var(--padding)}.list-root.display-table.density-comfortable{--padding:2rem}.list-root.display-table.density-normal{--padding:1.5rem}.list-root.display-table.density-compact{--padding:1rem}[part~='divider']:not(:last-child){border-bottom:1px solid var(--atomic-neutral);padding-bottom:1rem}[part~='divider']{margin-bottom:1rem}.list-root.display-list{display:flex;flex-direction:column}.list-root.display-list .result-component,.list-root.display-list atomic-result-placeholder{width:auto}@media (min-width: 1024px){.list-root.display-list.density-comfortable [part~='outline']::before{margin:2rem 0}.list-root.display-list.density-normal [part~='outline']::before{margin:1.5rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-normal [part~='outline']::before{margin:1.75rem 0}}.list-root.display-list.density-compact [part~='outline']::before{margin:1rem 0}@media not all and (min-width: 1024px){.list-root.display-list.density-compact [part~='outline']::before{margin:1.5rem 0}}.list-root.display-list [part~='outline']::before{display:block;content:' ';height:1px;background-color:var(--atomic-neutral)}.list-root.display-list [part~='outline']:first-of-type::before{display:none}.list-root.display-list atomic-result-placeholder::before{background-color:transparent}}@media not all and (min-width: 1024px){.list-root.display-list.image-large.density-comfortable [part~='outline']::before{margin:2rem 0}.list-root.display-list.image-large.density-normal [part~='outline']::before{margin:1.5rem 0}@media not all and (min-width: 1024px){.list-root.display-list.image-large.density-normal [part~='outline']::before{margin:1.75rem 0}}.list-root.display-list.image-large.density-compact [part~='outline']::before{margin:1rem 0}@media not all and (min-width: 1024px){.list-root.display-list.image-large.density-compact [part~='outline']::before{margin:1.5rem 0}}.list-root.display-list.image-large [part~='outline']::before{display:block;content:' ';height:1px;background-color:var(--atomic-neutral)}.list-root.display-list.image-large [part~='outline']:first-of-type::before{display:none}.list-root.display-list.image-large atomic-result-placeholder::before{background-color:transparent}.list-root.display-list.image-large{display:grid;justify-content:space-evenly;grid-template-columns:minmax(auto, 35rem)}.list-root.display-list.image-small,.list-root.display-list.image-icon,.list-root.display-list.image-none{grid-row-gap:1rem}.list-root.display-list.image-small [part~='outline'],.list-root.display-list.image-icon [part~='outline'],.list-root.display-list.image-none [part~='outline']{border:1px solid var(--atomic-neutral);padding:1rem;border-radius:1rem}.list-root.display-list.image-small atomic-result-placeholder,.list-root.display-list.image-icon atomic-result-placeholder,.list-root.display-list.image-none atomic-result-placeholder{border-color:transparent}}[part~='outline'][part~='result-list-grid-clickable-container']{position:relative}@media (min-width: 1024px){[part~='outline'][part~='result-list-grid-clickable-container']{border:1px solid transparent;padding:1rem;border-radius:1rem;transition:all 0.12s ease-out}[part~='outline'][part~='result-list-grid-clickable-container']:hover{border:1px solid var(--atomic-neutral);box-shadow:0px 10px 25px var(--atomic-neutral);cursor:pointer}}[part='result-list-grid-clickable'].focus-visible.js-focus-visible,.js-focus-visible [part='result-list-grid-clickable'].focus-visible{border:2px solid var(--atomic-primary);border-radius:2px;color:var(--atomic-primary);cursor:pointer;display:inline-block;text-decoration:underline;text-align:center;position:absolute}[part='result-list-grid-clickable']:focus-visible{border:2px solid var(--atomic-primary);border-radius:2px;color:var(--atomic-primary);cursor:pointer;display:inline-block;text-decoration:underline;text-align:center;position:absolute}[part='result-list-grid-clickable']:not(:focus){clip:rect(1px, 1px, 1px, 1px);overflow:hidden;position:absolute;padding:0}.list-wrapper{word-break:break-word}.list-root.display-grid{display:grid;justify-content:space-evenly}.list-root.display-grid .result-component{height:100%;box-sizing:border-box}@media (min-width: 1024px){.list-root.display-grid{grid-template-columns:repeat(auto-fit, minmax(17rem, 1fr))}.list-root.display-grid.density-comfortable{grid-row-gap:4rem;grid-column-gap:1.5rem}.list-root.display-grid.density-normal,.list-root.display-grid.density-compact{grid-row-gap:3rem;grid-column-gap:1.5rem}.list-root.display-grid.image-large{grid-template-columns:repeat(auto-fill, minmax(19rem, 1fr))}@media not all and (min-width: 1024px){.list-root.display-grid.image-small{grid-template-columns:repeat(3, 1fr)}}@media (min-width: 1024px){.list-root.display-grid.image-small{grid-template-columns:repeat(4, 1fr)}}}@media not all and (min-width: 1024px){@media not all and (min-width: 768px){.list-root.display-grid.image-large.density-comfortable [part~='outline']::before{margin:2rem 0}.list-root.display-grid.image-large.density-normal [part~='outline']::before{margin:1.5rem 0}@media not all and (min-width: 1024px){.list-root.display-grid.image-large.density-normal [part~='outline']::before{margin:1.75rem 0}}.list-root.display-grid.image-large.density-compact [part~='outline']::before{margin:1rem 0}@media not all and (min-width: 1024px){.list-root.display-grid.image-large.density-compact [part~='outline']::before{margin:1.5rem 0}}.list-root.display-grid.image-large [part~='outline']::before{display:block;content:' ';height:1px;background-color:var(--atomic-neutral)}.list-root.display-grid.image-large [part~='outline']:first-of-type::before{display:none}.list-root.display-grid.image-large atomic-result-placeholder::before{background-color:transparent}.list-root.display-grid.image-large{grid-template-columns:minmax(auto, 35rem)}}@media (min-width: 768px){.list-root.display-grid.image-large [part~='outline']{border:1px solid var(--atomic-neutral);padding:1rem;border-radius:1rem}.list-root.display-grid.image-large atomic-result-placeholder{border-color:transparent}.list-root.display-grid.image-large{grid-column-gap:0.5rem;grid-row-gap:0.5rem;grid-template-columns:1fr 1fr}}.list-root.display-grid.image-small [part~='outline'],.list-root.display-grid.image-icon [part~='outline'],.list-root.display-grid.image-none [part~='outline']{border:1px solid var(--atomic-neutral);padding:1rem;border-radius:1rem}.list-root.display-grid.image-small atomic-result-placeholder,.list-root.display-grid.image-icon atomic-result-placeholder,.list-root.display-grid.image-none atomic-result-placeholder{border-color:transparent}.list-root.display-grid.image-small,.list-root.display-grid.image-icon,.list-root.display-grid.image-none{grid-column-gap:0.5rem;grid-row-gap:0.5rem}@media not all and (min-width: 640px){.list-root.display-grid.image-small,.list-root.display-grid.image-icon,.list-root.display-grid.image-none{grid-template-columns:minmax(0, 1fr)}}@media (min-width: 768px){.list-root.display-grid.image-small,.list-root.display-grid.image-icon,.list-root.display-grid.image-none{grid-template-columns:minmax(0, 1fr) minmax(0, 1fr)}}@media (min-width: 1024px){.list-root.display-grid.image-small,.list-root.display-grid.image-icon,.list-root.display-grid.image-none{grid-template-columns:minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)}}}";
const AtomicResultListStyle0 = atomicResultListCss;

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
const AtomicResultList$1 = /*@__PURE__*/ proxyCustomElement(class AtomicResultList extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.loadingFlag = randomID('firstResultLoaded-');
        this.resultTemplateRegistered = false;
        this.templateHasError = false;
        /**
         * The desired layout to use when displaying results. Layouts affect how many results to display per row and how visually distinct they are from each other.
         */
        this.display = 'list';
        /**
         * The spacing of various elements in the result list, including the gap between results, the gap between parts of a result, and the font sizes of different parts in a result.
         */
        this.density = 'normal';
        /**
         * The target location to open the result link (see [target](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target)).
         * This property is only leveraged when `display` is `grid`.
         * @defaultValue `_self`
         */
        this.gridCellLinkTarget = '_self';
        /**
         * The expected size of the image displayed in the results.
         */
        this.imageSize = 'icon';
        this.resultListState = undefined;
        this.resultsPerPageState = undefined;
        this.resultTemplateRegistered = false;
        this.error = undefined;
        this.templateHasError = false;
        this.display = 'list';
        this.density = 'normal';
        this.gridCellLinkTarget = '_self';
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
    get focusTarget() {
        if (!this.nextNewResultTarget) {
            this.nextNewResultTarget = new FocusTargetController(this);
        }
        return this.nextNewResultTarget;
    }
    initialize() {
        if (this.host.innerHTML.includes('<atomic-result-children')) {
            console.warn('Folded results will not render any children for the "atomic-result-list". Please use "atomic-folded-result-list" instead.');
        }
        this.resultList = bk(this.bindings.engine);
        this.resultsPerPage = Ok(this.bindings.engine);
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
        this.resultListCommon = new ItemListCommon({
            engineSubscribe: this.bindings.engine.subscribe,
            getCurrentNumberOfItems: () => this.resultListState.results.length,
            getIsLoading: () => this.resultListState.isLoading,
            host: this.host,
            loadingFlag: this.loadingFlag,
            nextNewItemTarget: this.focusTarget,
            store: this.bindings.store,
        });
    }
    render() {
        this.resultListCommon.updateBreakpoints();
        const listClasses = this.computeListDisplayClasses();
        return (h(ItemListGuard, { key: '14f45d97c7d629b69a44e741a6ae99e727c0fc65', hasError: this.resultListState.hasError, hasTemplate: this.resultTemplateRegistered, templateHasError: this.itemTemplateProvider.hasError, firstRequestExecuted: this.resultListState.firstSearchExecuted, hasItems: this.resultListState.hasResults }, h(DisplayWrapper, { key: 'ae267dfd3358fd0367bf86b675b9ea0895fae870', display: this.display, listClasses: listClasses }, h(ResultsPlaceholdersGuard, { key: '970abf6519fa2a1c7a90a93d88f9975a83277406', density: this.density, display: this.display, imageSize: this.imageSize, displayPlaceholders: !this.bindings.store.isAppLoaded(), numberOfPlaceholders: this.resultsPerPageState.numberOfResults }), h(ItemDisplayGuard, { key: '8c52394d9cad0fc6574cf013e505a6c9b70dfd6d', firstRequestExecuted: this.resultListState.firstSearchExecuted, hasItems: this.resultListState.hasResults }, this.display === 'table'
            ? this.renderAsTable()
            : this.display === 'grid'
                ? this.renderAsGrid()
                : this.renderAsList()))));
    }
    getPropsForAtomicResult(result) {
        return {
            interactiveResult: wk(this.bindings.engine, {
                options: { result },
            }),
            result,
            renderingFunction: this.itemRenderingFunction,
            loadingFlag: this.loadingFlag,
            key: this.resultListCommon.getResultId(result.uniqueId, this.resultListState.searchResponseId, this.density, this.imageSize),
            content: this.itemTemplateProvider.getTemplateContent(result),
            store: this.bindings.store,
            density: this.density,
            imageSize: this.imageSize,
            display: this.display,
        };
    }
    computeListDisplayClasses() {
        const displayPlaceholders = !this.bindings.store.isAppLoaded();
        return getItemListDisplayClasses(this.display, this.density, this.imageSize, this.resultListState.firstSearchExecuted &&
            this.resultListState.isLoading, displayPlaceholders);
    }
    renderAsGrid() {
        return this.resultListState.results.map((result, i) => {
            const propsForAtomicResult = this.getPropsForAtomicResult(result);
            return (h(DisplayGrid, { item: result, ...propsForAtomicResult.interactiveResult, setRef: (element) => element && this.resultListCommon.setNewResultRef(element, i) }, h("atomic-result", { ...this, ...propsForAtomicResult })));
        });
    }
    renderAsTable() {
        if (!this.resultListState.hasResults) {
            return;
        }
        const listClasses = this.computeListDisplayClasses();
        const firstItem = this.resultListState.results[0];
        const propsForTableColumns = {
            firstItem,
            templateContentForFirstItem: this.itemTemplateProvider.getTemplateContent(firstItem),
        };
        return (h(DisplayTable, { ...propsForTableColumns, listClasses: listClasses, logger: this.bindings.engine.logger, itemRenderingFunction: this.itemRenderingFunction, host: this.host }, this.resultListState.results.map((result, i) => {
            const propsForAtomicResult = this.getPropsForAtomicResult(result);
            return (h(DisplayTableRow, { ...propsForAtomicResult, rowIndex: i, setRef: (element) => element && this.resultListCommon.setNewResultRef(element, i) }, h(DisplayTableData, { ...propsForTableColumns, ...propsForAtomicResult, renderItem: (content) => {
                    return (h("atomic-result", { ...propsForAtomicResult, content: content }));
                } })));
        })));
    }
    renderAsList() {
        return this.resultListState.results.map((result, i) => {
            const propsForAtomicResult = this.getPropsForAtomicResult(result);
            return (h("atomic-result", { ...propsForAtomicResult, ref: (element) => element && this.resultListCommon.setNewResultRef(element, i), part: "outline" }));
        });
    }
    get host() { return this; }
    static get style() { return AtomicResultListStyle0; }
}, [1, "atomic-result-list", {
        "display": [513],
        "density": [513],
        "gridCellLinkTarget": [1, "grid-cell-link-target"],
        "imageSize": [1537, "image-size"],
        "resultListState": [32],
        "resultsPerPageState": [32],
        "resultTemplateRegistered": [32],
        "error": [32],
        "templateHasError": [32],
        "setRenderFunction": [64]
    }]);
__decorate([
    InitializeBindings()
], AtomicResultList$1.prototype, "bindings", void 0);
__decorate([
    BindStateToController('resultList')
], AtomicResultList$1.prototype, "resultListState", void 0);
__decorate([
    BindStateToController('resultsPerPage')
], AtomicResultList$1.prototype, "resultsPerPageState", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-result-list", "atomic-component-error", "atomic-result", "atomic-result-link", "atomic-result-placeholder", "atomic-result-section-actions", "atomic-result-section-badges", "atomic-result-section-bottom-metadata", "atomic-result-section-excerpt", "atomic-result-section-title", "atomic-result-section-visual", "atomic-result-table-placeholder", "atomic-result-text", "atomic-text"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-result-list":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicResultList$1);
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

const AtomicResultList = AtomicResultList$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicResultList, defineCustomElement };

//# sourceMappingURL=atomic-result-list.js.map
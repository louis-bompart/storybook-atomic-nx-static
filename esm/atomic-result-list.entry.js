import { r as registerInstance, h, g as getElement } from './index-c045ad7c.js';
import { b as bk, O as Ok, w as wk } from './headless.esm-88bad35d.js';
import { F as FocusTargetController } from './accessibility-utils-95c56e98.js';
import { I as InitializeBindings, B as BindStateToController } from './initialization-utils-2f872ed1.js';
import { r as randomID } from './utils-af246396.js';
import { R as ResultsPlaceholdersGuard } from './placeholders-f4f03b54.js';
import { D as DisplayGrid } from './display-grid-89483b4d.js';
import { D as DisplayTableRow, a as DisplayTableData, b as DisplayTable } from './display-table-70a42629.js';
import { D as DisplayWrapper, I as ItemDisplayGuard } from './item-display-guard-7af34685.js';
import { I as ItemListCommon } from './item-list-common-04954faf.js';
import { I as ItemListGuard } from './item-list-guard-f7aeaff7.js';
import { I as ItemTemplateProvider } from './item-template-provider-e4f808aa.js';
import { g as getItemListDisplayClasses } from './display-options-97880b8d.js';
import './event-utils-8de63ec3.js';
import './_commonjsHelpers-c9e3b764.js';
import './item-link-e997e301.js';
import './xss-utils-3bfd8d0c.js';
import './table-element-utils-2fd4b45f.js';
import './replace-breakpoint-8bfab33b.js';
import './template-provider-818c930d.js';
import './sections-a848dae3.js';

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
const AtomicResultList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(ItemListGuard, { key: 'a9693457dbab1e105ebc90fa08b4eb007f7a7beb', hasError: this.resultListState.hasError, hasTemplate: this.resultTemplateRegistered, templateHasError: this.itemTemplateProvider.hasError, firstRequestExecuted: this.resultListState.firstSearchExecuted, hasItems: this.resultListState.hasResults }, h(DisplayWrapper, { key: 'a56347f47dea125886923adaaf312686df1396ef', display: this.display, listClasses: listClasses }, h(ResultsPlaceholdersGuard, { key: '5176095c61eba1082e805dc2accec9fdaff37573', density: this.density, display: this.display, imageSize: this.imageSize, displayPlaceholders: !this.bindings.store.isAppLoaded(), numberOfPlaceholders: this.resultsPerPageState.numberOfResults }), h(ItemDisplayGuard, { key: 'd07439e79dd728d272f85ca4bbaf409a92b80f1e', firstRequestExecuted: this.resultListState.firstSearchExecuted, hasItems: this.resultListState.hasResults }, this.display === 'table'
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
    get host() { return getElement(this); }
};
__decorate([
    InitializeBindings()
], AtomicResultList.prototype, "bindings", void 0);
__decorate([
    BindStateToController('resultList')
], AtomicResultList.prototype, "resultListState", void 0);
__decorate([
    BindStateToController('resultsPerPage')
], AtomicResultList.prototype, "resultsPerPageState", void 0);
AtomicResultList.style = AtomicResultListStyle0;

export { AtomicResultList as atomic_result_list };

//# sourceMappingURL=atomic-result-list.entry.js.map
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const bueno_esm = require('./bueno.esm-344292d0.js');
const headless_esm = require('./headless.esm-1a66963a.js');
const initializationUtils = require('./initialization-utils-88a3fba7.js');
const facetCommon = require('./facet-common-c74c5abf.js');
require('./event-utils-9bfcf3c5.js');
require('./utils-93ea935e.js');
require('./_commonjsHelpers-0192c5b3.js');

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
const AtomicFacetManager = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * The number of expanded facets inside the manager.
         * Remaining facets are automatically collapsed.
         *
         * Using the value `0` collapses all facets.
         * Using the value `-1` disables the feature and keeps all facets expanded. Useful when you want to set the collapse state for each facet individually.
         */
        this.collapseFacetsAfter = 4;
        this.sortFacets = () => {
            const facets = facetCommon.getFacetsInChildren(this.host);
            const sortedFacets = this.sortFacetsUsingManager(facets, this.facetManager);
            const { visibleFacets, invisibleFacets } = facetCommon.sortFacetVisibility(sortedFacets, this.bindings.store.getAllFacets());
            const generator = facetCommon.getAutomaticFacetGenerator(this.host);
            facetCommon.collapseFacetsAfter(visibleFacets, this.collapseFacetsAfter);
            generator === null || generator === void 0 ? void 0 : generator.updateCollapseFacetsDependingOnFacetsVisibility(this.collapseFacetsAfter, visibleFacets.length);
            this.host.append(...[
                ...visibleFacets,
                ...invisibleFacets,
                ...(generator ? [generator] : []),
            ]);
        };
        this.facetManagerState = undefined;
        this.error = undefined;
        this.collapseFacetsAfter = 4;
    }
    initialize() {
        this.validateProps();
        this.facetManager = headless_esm.Zk(this.bindings.engine);
        // An update has to be forced for the facets to be visually updated, without being interacted with.
        this.bindings.i18n.on('languageChanged', this.sortFacets);
    }
    validateProps() {
        new bueno_esm.Schema({
            collapseFacetAfter: new bueno_esm.NumberValue({ min: -1, required: true }),
        }).validate({
            collapseFacetAfter: this.collapseFacetsAfter,
        });
    }
    sortFacetsUsingManager(facets, facetManager) {
        const payload = facets.map((f) => ({
            facetId: f.facetId,
            payload: f,
        }));
        return facetManager.sort(payload).map((f) => f.payload);
    }
    disconnectedCallback() {
        this.bindings.i18n.off('languageChanged', this.sortFacets);
    }
    render() {
        return index.h("slot", { key: 'f161d247456b228c51511788ba95f2d841258a43' });
    }
    get host() { return index.getElement(this); }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicFacetManager.prototype, "bindings", void 0);
__decorate([
    initializationUtils.BindStateToController('facetManager', {
        onUpdateCallbackMethod: 'sortFacets',
    })
], AtomicFacetManager.prototype, "facetManagerState", void 0);

exports.atomic_facet_manager = AtomicFacetManager;

//# sourceMappingURL=atomic-facet-manager.cjs.entry.js.map
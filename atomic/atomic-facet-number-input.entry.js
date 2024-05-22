import { r as registerInstance, j as createEvent, h } from './index-53978573.js';
import { B as Button } from './button-1e00370c.js';
import './ripple-a09c16f2.js';
import './event-utils-8de63ec3.js';
import './button-style-8b7877b4.js';

const atomicFacetNumberInputCss = "[part='input-form']{display:grid;grid-template-areas:'label-start label-end .'\r\n    'input-start input-end apply-button';grid-template-columns:1fr 1fr auto}[part='label-start']{grid-area:label-start}[part='label-end']{grid-area:label-end}[part='input-start']{grid-area:input-start}[part='input-end']{grid-area:input-end}[part='input-apply-button']{grid-area:apply-button}";

const FacetNumberInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.applyInput = createEvent(this, "atomic/numberInputApply", 7);
        this.start = undefined;
        this.end = undefined;
        this.bindings = undefined;
        this.type = undefined;
        this.filter = undefined;
        this.filterState = undefined;
        this.label = undefined;
    }
    connectedCallback() {
        var _a, _b;
        this.start = (_a = this.filterState.range) === null || _a === void 0 ? void 0 : _a.start;
        this.end = (_b = this.filterState.range) === null || _b === void 0 ? void 0 : _b.end;
    }
    apply() {
        if (!this.startRef.validity.valid || !this.endRef.validity.valid) {
            return;
        }
        this.applyInput.emit();
        this.filter.setRange({
            start: this.start,
            end: this.end,
        });
    }
    render() {
        var _a, _b;
        const label = this.bindings.i18n.t(this.label);
        const minText = this.bindings.i18n.t('min');
        const maxText = this.bindings.i18n.t('max');
        const minAria = this.bindings.i18n.t('number-input-minimum', { label });
        const maxAria = this.bindings.i18n.t('number-input-maximum', { label });
        const apply = this.bindings.i18n.t('apply');
        const applyAria = this.bindings.i18n.t('number-input-apply', { label });
        const inputClasses = 'p-2.5 input-primary placeholder-neutral-dark min-w-0 mr-1';
        const labelClasses = 'text-neutral-dark text-sm';
        const step = this.type === 'integer' ? '1' : 'any';
        return (h("form", { key: '864a8a1396b9f6e08537109ba752c58ae17c0974', class: "mt-4 px-2 gap-y-0.5", part: "input-form", onSubmit: (e) => {
                e.preventDefault();
                this.apply();
                return false;
            } }, h("label", { key: '62c2aa56bd2e2bdb8936b29c36591e24c836dc90', part: "label-start", class: labelClasses, htmlFor: `${this.filterState.facetId}_start` }, minText), h("input", { key: '1fb4d282c4c5d3fc3ea1302f00e5d7cd82f5e759', part: "input-start", id: `${this.filterState.facetId}_start`, type: "number", step: step, ref: (ref) => (this.startRef = ref), class: inputClasses, "aria-label": minAria, required: true, min: Number.MIN_SAFE_INTEGER, max: this.end, value: (_a = this.filterState.range) === null || _a === void 0 ? void 0 : _a.start, onInput: (e) => (this.start = e.target.valueAsNumber) }), h("label", { key: 'd8a938ecad188bc2a4738b7fd4c2234d8f4d244f', part: "label-end", class: labelClasses, htmlFor: `${this.filterState.facetId}_end` }, maxText), h("input", { key: 'caeba5358d2612b72506aa24e988210f817a020f', part: "input-end", id: `${this.filterState.facetId}_end`, type: "number", step: step, ref: (ref) => (this.endRef = ref), class: inputClasses, "aria-label": maxAria, required: true, min: this.start, max: Number.MAX_SAFE_INTEGER, value: (_b = this.filterState.range) === null || _b === void 0 ? void 0 : _b.end, onInput: (e) => (this.end = e.target.valueAsNumber) }), h(Button, { key: 'a04e26bca3e3b06f4261e13031943bea00f49e5d', style: "outline-primary", type: "submit", part: "input-apply-button", class: "p-2.5 flex-none truncate", ariaLabel: applyAria, text: apply })));
    }
};
FacetNumberInput.style = atomicFacetNumberInputCss;

export { FacetNumberInput as atomic_facet_number_input };

//# sourceMappingURL=atomic-facet-number-input.entry.js.map
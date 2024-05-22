import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { B as Button } from './button.js';

const atomicFacetNumberInputCss = "[part='input-form']{display:grid;grid-template-areas:'label-start label-end .'\n    'input-start input-end apply-button';grid-template-columns:1fr 1fr auto}[part='label-start']{grid-area:label-start}[part='label-end']{grid-area:label-end}[part='input-start']{grid-area:input-start}[part='input-end']{grid-area:input-end}[part='input-apply-button']{grid-area:apply-button}";
const AtomicFacetNumberInputStyle0 = atomicFacetNumberInputCss;

const FacetNumberInput = /*@__PURE__*/ proxyCustomElement(class FacetNumberInput extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        return (h("form", { key: '1b88a7239f15faafc74a0210942af1831acebc51', class: "mt-4 px-2 gap-y-0.5", part: "input-form", onSubmit: (e) => {
                e.preventDefault();
                this.apply();
                return false;
            } }, h("label", { key: '4d013056d8fa0a1c474ba044982c724fafc6b8cd', part: "label-start", class: labelClasses, htmlFor: `${this.filterState.facetId}_start` }, minText), h("input", { key: '253c7cbc2df9ac20e766b01a1e9cbafa9684b8b9', part: "input-start", id: `${this.filterState.facetId}_start`, type: "number", step: step, ref: (ref) => (this.startRef = ref), class: inputClasses, "aria-label": minAria, required: true, min: Number.MIN_SAFE_INTEGER, max: this.end, value: (_a = this.filterState.range) === null || _a === void 0 ? void 0 : _a.start, onInput: (e) => (this.start = e.target.valueAsNumber) }), h("label", { key: '290eedfcf067aecdd7759deef0ea13ed28b446c3', part: "label-end", class: labelClasses, htmlFor: `${this.filterState.facetId}_end` }, maxText), h("input", { key: '2a73acd3d062b420c1702a1391315c0a41914b21', part: "input-end", id: `${this.filterState.facetId}_end`, type: "number", step: step, ref: (ref) => (this.endRef = ref), class: inputClasses, "aria-label": maxAria, required: true, min: this.start, max: Number.MAX_SAFE_INTEGER, value: (_b = this.filterState.range) === null || _b === void 0 ? void 0 : _b.end, onInput: (e) => (this.end = e.target.valueAsNumber) }), h(Button, { key: '2c8aa2d4dba5cee48b7bc2064a2fb3d22275c8ab', style: "outline-primary", type: "submit", part: "input-apply-button", class: "p-2.5 flex-none truncate", ariaLabel: applyAria, text: apply })));
    }
    static get style() { return AtomicFacetNumberInputStyle0; }
}, [0, "atomic-facet-number-input", {
        "bindings": [16],
        "type": [1],
        "filter": [16],
        "filterState": [16],
        "label": [1],
        "start": [32],
        "end": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-facet-number-input"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-facet-number-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, FacetNumberInput);
            }
            break;
    } });
}

export { FacetNumberInput as F, defineCustomElement as d };

//# sourceMappingURL=facet-number-input.js.map
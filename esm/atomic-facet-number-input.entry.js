import { r as registerInstance, d as createEvent, h } from './index-c045ad7c.js';
import { B as Button } from './button-a9fb1e13.js';
import './ripple-a09c16f2.js';
import './event-utils-8de63ec3.js';
import './button-style-8b7877b4.js';

const atomicFacetNumberInputCss = "[part='input-form']{display:grid;grid-template-areas:'label-start label-end .'\n    'input-start input-end apply-button';grid-template-columns:1fr 1fr auto}[part='label-start']{grid-area:label-start}[part='label-end']{grid-area:label-end}[part='input-start']{grid-area:input-start}[part='input-end']{grid-area:input-end}[part='input-apply-button']{grid-area:apply-button}";
const AtomicFacetNumberInputStyle0 = atomicFacetNumberInputCss;

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
        return (h("form", { key: '1b88a7239f15faafc74a0210942af1831acebc51', class: "mt-4 px-2 gap-y-0.5", part: "input-form", onSubmit: (e) => {
                e.preventDefault();
                this.apply();
                return false;
            } }, h("label", { key: '4d013056d8fa0a1c474ba044982c724fafc6b8cd', part: "label-start", class: labelClasses, htmlFor: `${this.filterState.facetId}_start` }, minText), h("input", { key: '253c7cbc2df9ac20e766b01a1e9cbafa9684b8b9', part: "input-start", id: `${this.filterState.facetId}_start`, type: "number", step: step, ref: (ref) => (this.startRef = ref), class: inputClasses, "aria-label": minAria, required: true, min: Number.MIN_SAFE_INTEGER, max: this.end, value: (_a = this.filterState.range) === null || _a === void 0 ? void 0 : _a.start, onInput: (e) => (this.start = e.target.valueAsNumber) }), h("label", { key: '290eedfcf067aecdd7759deef0ea13ed28b446c3', part: "label-end", class: labelClasses, htmlFor: `${this.filterState.facetId}_end` }, maxText), h("input", { key: '2a73acd3d062b420c1702a1391315c0a41914b21', part: "input-end", id: `${this.filterState.facetId}_end`, type: "number", step: step, ref: (ref) => (this.endRef = ref), class: inputClasses, "aria-label": maxAria, required: true, min: this.start, max: Number.MAX_SAFE_INTEGER, value: (_b = this.filterState.range) === null || _b === void 0 ? void 0 : _b.end, onInput: (e) => (this.end = e.target.valueAsNumber) }), h(Button, { key: '2c8aa2d4dba5cee48b7bc2064a2fb3d22275c8ab', style: "outline-primary", type: "submit", part: "input-apply-button", class: "p-2.5 flex-none truncate", ariaLabel: applyAria, text: apply })));
    }
};
FacetNumberInput.style = AtomicFacetNumberInputStyle0;

export { FacetNumberInput as atomic_facet_number_input };

//# sourceMappingURL=atomic-facet-number-input.entry.js.map
import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { l as lo } from './headless.esm.js';
import { p as parseDate } from './date-utils.js';
import { B as Button } from './button.js';

const FacetDateInput = /*@__PURE__*/ proxyCustomElement(class FacetDateInput extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.applyInput = createEvent(this, "atomic/dateInputApply", 7);
        this.start = undefined;
        this.end = undefined;
        this.bindings = undefined;
        this.filter = undefined;
        this.filterState = undefined;
        this.label = undefined;
        this.min = undefined;
        this.max = undefined;
    }
    connectedCallback() {
        this.start = this.filterState.range
            ? parseDate(this.filterState.range.start).toDate()
            : undefined;
        this.end = this.filterState.range
            ? parseDate(this.filterState.range.end).toDate()
            : undefined;
    }
    apply() {
        if (!this.startRef.validity.valid || !this.endRef.validity.valid) {
            return;
        }
        this.applyInput.emit();
        this.filter.setRange(lo({
            start: this.start,
            end: this.end.setHours(23, 59, 59, 999),
        }));
    }
    formattedDateValue(date) {
        if (!date) {
            return '';
        }
        return parseDate(date).format('YYYY-MM-DD');
    }
    render() {
        var _a, _b;
        const label = this.bindings.i18n.t(this.label);
        const startLabel = this.bindings.i18n.t('start');
        const endLabel = this.bindings.i18n.t('end');
        const startAria = this.bindings.i18n.t('date-input-start', { label });
        const endAria = this.bindings.i18n.t('date-input-end', { label });
        const apply = this.bindings.i18n.t('apply');
        const applyAria = this.bindings.i18n.t('date-input-apply', { label });
        const inputClasses = 'input-primary p-2.5';
        const labelClasses = 'text-neutral-dark self-center';
        const placeholder = 'yyyy-mm-dd';
        // Fallback for Safari < 14.1, date with format yyyy-mm-dd over 1400 (API limit)
        const pattern = '^(1[4-9]\\d{2}|2\\d{3})-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$';
        return (h("form", { key: '42ac63adc85892719bc13350a9ccf6dcff31ffe0', class: "grid gap-2 grid-cols-min-1fr mt-4 px-2", onSubmit: (e) => {
                e.preventDefault();
                this.apply();
                return false;
            } }, h("label", { key: 'b0099ece4ffb6db01a056ebef83def2f79b6c387', part: "input-label", class: labelClasses, htmlFor: `${this.filterState.facetId}_start` }, startLabel, ":"), h("input", { key: '518c7585498a6ca2d892b1be4ea3c19a8fba0bb9', id: `${this.filterState.facetId}_start`, part: "input-start", type: "date", ref: (ref) => (this.startRef = ref), class: inputClasses, "aria-label": startAria, placeholder: placeholder, pattern: pattern, required: true,
            // API/Index minimum supported date
            min: this.min || this.formattedDateValue('1401-01-01'), max: this.end ? this.formattedDateValue(this.end) : this.max, value: this.formattedDateValue((_a = this.filterState.range) === null || _a === void 0 ? void 0 : _a.start), onInput: (e) => (this.start = parseDate(e.target.value).toDate()) }), h("label", { key: '6a3dff24e6b37b27770eb2144d461e54506dbfd1', part: "input-label", class: labelClasses, htmlFor: `${this.filterState.facetId}_end` }, endLabel, ":"), h("input", { key: 'a6ab0d6374e8fce5a58ee2f7a421d688a4ec578a', id: `${this.filterState.facetId}_end`, part: "input-end", type: "date", ref: (ref) => (this.endRef = ref), class: inputClasses, "aria-label": endAria, placeholder: placeholder, pattern: pattern, required: true, min: this.min || this.formattedDateValue(this.start), max: this.max, value: this.formattedDateValue((_b = this.filterState.range) === null || _b === void 0 ? void 0 : _b.end), onInput: (e) => (this.end = parseDate(e.target.value).toDate()) }), h(Button, { key: 'e1e0ce9c56f3614a02b0a65e32648b68b808dbf8', style: "outline-primary", type: "submit", part: "input-apply-button", class: "p-2.5 col-span-2 truncate", ariaLabel: applyAria, text: apply })));
    }
}, [0, "atomic-facet-date-input", {
        "bindings": [16],
        "filter": [16],
        "filterState": [16],
        "label": [1],
        "min": [1],
        "max": [1],
        "start": [32],
        "end": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-facet-date-input"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-facet-date-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, FacetDateInput);
            }
            break;
    } });
}

const AtomicFacetDateInput = FacetDateInput;
const defineCustomElement = defineCustomElement$1;

export { AtomicFacetDateInput, defineCustomElement };

//# sourceMappingURL=atomic-facet-date-input.js.map
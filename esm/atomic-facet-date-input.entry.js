import { r as registerInstance, d as createEvent, h } from './index-c045ad7c.js';
import { l as lo } from './headless.esm-88bad35d.js';
import { p as parseDate } from './date-utils-c01ba132.js';
import { B as Button } from './button-a9fb1e13.js';
import './dayjs.min-092a7cc9.js';
import './_commonjsHelpers-c9e3b764.js';
import './ripple-a09c16f2.js';
import './event-utils-8de63ec3.js';
import './button-style-8b7877b4.js';

const FacetDateInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("form", { key: '7c7b17bbc53e206e8f7e0eb7330f6c4f76f28fef', class: "grid gap-2 grid-cols-min-1fr mt-4 px-2", onSubmit: (e) => {
                e.preventDefault();
                this.apply();
                return false;
            } }, h("label", { key: 'a7e301d6830024e43a500100b08c82b77e4cb3c3', part: "input-label", class: labelClasses, htmlFor: `${this.filterState.facetId}_start` }, startLabel, ":"), h("input", { key: 'ebdeefed8f8ce7b1a70a7a4c1a1dfa6653a2b593', id: `${this.filterState.facetId}_start`, part: "input-start", type: "date", ref: (ref) => (this.startRef = ref), class: inputClasses, "aria-label": startAria, placeholder: placeholder, pattern: pattern, required: true,
            // API/Index minimum supported date
            min: this.min || this.formattedDateValue('1401-01-01'), max: this.end ? this.formattedDateValue(this.end) : this.max, value: this.formattedDateValue((_a = this.filterState.range) === null || _a === void 0 ? void 0 : _a.start), onInput: (e) => (this.start = parseDate(e.target.value).toDate()) }), h("label", { key: 'ffb4ec407a4a48b89744b3eeb20f693329fdf1a5', part: "input-label", class: labelClasses, htmlFor: `${this.filterState.facetId}_end` }, endLabel, ":"), h("input", { key: 'ddb91628e28644acc14683c67b01ce9c7db132d0', id: `${this.filterState.facetId}_end`, part: "input-end", type: "date", ref: (ref) => (this.endRef = ref), class: inputClasses, "aria-label": endAria, placeholder: placeholder, pattern: pattern, required: true, min: this.min || this.formattedDateValue(this.start), max: this.max, value: this.formattedDateValue((_b = this.filterState.range) === null || _b === void 0 ? void 0 : _b.end), onInput: (e) => (this.end = parseDate(e.target.value).toDate()) }), h(Button, { key: '63e9393cc2cd249f37badf7ae4a30b347e47391d', style: "outline-primary", type: "submit", part: "input-apply-button", class: "p-2.5 col-span-2 truncate", ariaLabel: applyAria, text: apply })));
    }
};

export { FacetDateInput as atomic_facet_date_input };

//# sourceMappingURL=atomic-facet-date-input.entry.js.map
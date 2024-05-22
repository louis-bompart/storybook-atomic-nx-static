import { h } from './index-53978573.js';
import { c as createRipple } from './ripple-a09c16f2.js';
import { r as randomID } from './utils-8200d0ae.js';
import { T as Tick, C as Checkbox } from './checkbox-e58c9d55.js';
import { C as CloseIcon } from './close-ff816971.js';
import { C as ClearIcon } from './clear-cacdca9b.js';

const TriStateCheckbox = (props) => {
    var _a, _b;
    const isSelected = props.state === 'selected';
    const isExcluded = props.state === 'excluded';
    const partName = (_a = props.part) !== null && _a !== void 0 ? _a : 'checkbox';
    const classNames = [
        'w-4 h-4 grid place-items-center rounded no-outline hover:border-primary-light focus-visible:border-primary-light',
    ];
    const parts = [partName];
    if (isSelected) {
        classNames.push('selected bg-primary hover:bg-primary-light focus-visible:bg-primary-light');
        parts.push(`${partName}-checked`);
    }
    else if (isExcluded) {
        classNames.push('excluded bg-error hover:bg-error focus-visible:bg-error hover:border-error focus-visible:border-error');
        parts.push(`${partName}-checked`);
    }
    else {
        classNames.push('border border-neutral-dark');
    }
    if (props.class) {
        classNames.push(props.class);
    }
    const attributes = {
        key: props.key,
        id: props.id,
        class: classNames.join(' '),
        part: parts.join(' '),
        'aria-pressed': isSelected ? 'true' : isExcluded ? 'mixed' : 'false',
        'aria-label': (_b = props.ariaLabel) !== null && _b !== void 0 ? _b : props.text,
        value: props.text,
        ref: props.ref,
    };
    return (h("button", { ...attributes, role: "button", onClick: () => { var _a; return (_a = props.onToggle) === null || _a === void 0 ? void 0 : _a.call(props, !isSelected); }, onMouseDown: (e) => { var _a; return (_a = props.onMouseDown) === null || _a === void 0 ? void 0 : _a.call(props, e); } },
        h("atomic-icon", { style: { stroke: 'white', fill: 'white' }, class: `w-3/5 ${isSelected || isExcluded ? 'block' : 'hidden'}`, icon: isSelected ? Tick : CloseIcon, part: props.iconPart })));
};

const FacetValueExclude = (props) => {
    var _a;
    const classNames = [
        'value-exclude-button',
        'peer',
        'order-last',
        'flex',
        'ml-auto',
    ];
    if (props.class) {
        classNames.push(props.class);
    }
    const attributes = {
        class: classNames.join(' '),
        part: 'value-exclude-button',
        ref: props.ref,
        key: props.key,
        'aria-label': (_a = props.ariaLabel) !== null && _a !== void 0 ? _a : props.text,
        value: props.text,
    };
    return (h("button", { ...attributes, onClick: () => { var _a; return (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props); }, onMouseEnter: (e) => { var _a; return (_a = props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.call(props, e); } },
        h("atomic-icon", { class: 'w-4 p-1 rounded bg-neutral order-last hover:bg-error hover:fill-white invisible group-hover:visible', icon: ClearIcon })));
};

const FacetValueCheckbox = (props, children) => {
    const id = randomID('facet-value-');
    const count = props.numberOfResults.toLocaleString(props.i18n.language);
    const ariaLabelAttributes = {
        value: props.displayValue,
        count: props.numberOfResults,
        interpolation: { escapeValue: false },
    };
    const selectedAriaLabel = props.i18n.t('facet-value', ariaLabelAttributes);
    const excludedAriaLabel = props.i18n.t('facet-value-exclude', ariaLabelAttributes);
    let labelRef;
    const isTriStateCheckbox = (a) => {
        return 'state' in a && 'isSelected' in a;
    };
    const renderCheckbox = () => {
        const attributes = {
            id,
            onToggle: () => props.onClick(),
            part: 'value-checkbox',
            class: 'value-checkbox',
            ariaLabel: selectedAriaLabel,
            ref: props.buttonRef,
            onMouseDown: (e) => createRipple(e, { color: 'neutral', parent: labelRef }),
            iconPart: 'value-checkbox-icon',
        };
        if (isTriStateCheckbox(props)) {
            return h(TriStateCheckbox, { ...attributes, state: props.state });
        }
        return h(Checkbox, { ...attributes, checked: props.isSelected });
    };
    const renderExclusion = () => {
        if (isTriStateCheckbox(props)) {
            return (h(FacetValueExclude, { onClick: () => { var _a; return (_a = props.onExclude) === null || _a === void 0 ? void 0 : _a.call(props); }, ariaLabel: excludedAriaLabel }));
        }
    };
    return (h("li", { key: props.displayValue, class: "relative flex items-center" },
        renderCheckbox(),
        h("label", { ref: (ref) => (labelRef = ref), htmlFor: id, part: "value-checkbox-label", class: "group items-center", onMouseDown: (e) => createRipple(e, { color: 'neutral' }), "aria-hidden": "true" },
            children,
            renderExclusion(),
            h("span", { part: "value-count", class: "value-count" }, props.i18n.t('between-parentheses', {
                text: count,
            })))));
};

export { FacetValueCheckbox as F };

//# sourceMappingURL=facet-value-checkbox-522d5545.js.map
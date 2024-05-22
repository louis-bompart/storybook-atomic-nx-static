'use strict';

const index = require('./index-c930d4b4.js');
const ripple = require('./ripple-dcc2ce08.js');
const utils = require('./utils-93ea935e.js');
const checkbox = require('./checkbox-c1f481a7.js');
const close = require('./close-20739950.js');
const clear = require('./clear-695fd2c7.js');

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
    return (index.h("button", { ...attributes, role: "button", onClick: () => { var _a; return (_a = props.onToggle) === null || _a === void 0 ? void 0 : _a.call(props, !isSelected); }, onMouseDown: (e) => { var _a; return (_a = props.onMouseDown) === null || _a === void 0 ? void 0 : _a.call(props, e); } },
        index.h("atomic-icon", { style: { stroke: 'white', fill: 'white' }, class: `w-3/5 ${isSelected || isExcluded ? 'block' : 'hidden'}`, icon: isSelected ? checkbox.Tick : close.CloseIcon, part: props.iconPart })));
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
    return (index.h("button", { ...attributes, onClick: () => { var _a; return (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props); }, onMouseEnter: (e) => { var _a; return (_a = props.onMouseEnter) === null || _a === void 0 ? void 0 : _a.call(props, e); } },
        index.h("atomic-icon", { class: 'w-4 p-1 rounded bg-neutral order-last hover:bg-error hover:fill-white invisible group-hover:visible', icon: clear.ClearIcon })));
};

const FacetValueCheckbox = (props, children) => {
    const id = utils.randomID('facet-value-');
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
            onMouseDown: (e) => ripple.createRipple(e, { color: 'neutral', parent: labelRef }),
            iconPart: 'value-checkbox-icon',
        };
        if (isTriStateCheckbox(props)) {
            return index.h(TriStateCheckbox, { ...attributes, state: props.state });
        }
        return index.h(checkbox.Checkbox, { ...attributes, checked: props.isSelected });
    };
    const renderExclusion = () => {
        if (isTriStateCheckbox(props)) {
            return (index.h(FacetValueExclude, { onClick: () => { var _a; return (_a = props.onExclude) === null || _a === void 0 ? void 0 : _a.call(props); }, ariaLabel: excludedAriaLabel }));
        }
    };
    return (index.h("li", { key: props.displayValue, class: "relative flex items-center" },
        renderCheckbox(),
        index.h("label", { ref: (ref) => (labelRef = ref), htmlFor: id, part: "value-checkbox-label", class: "group items-center", onMouseDown: (e) => ripple.createRipple(e, { color: 'neutral' }), "aria-hidden": "true" },
            children,
            renderExclusion(),
            index.h("span", { part: "value-count", class: "value-count" }, props.i18n.t('between-parentheses', {
                text: count,
            })))));
};

exports.FacetValueCheckbox = FacetValueCheckbox;

//# sourceMappingURL=facet-value-checkbox-a15e4807.js.map
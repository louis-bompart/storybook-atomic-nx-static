'use strict';

const index = require('./index-c930d4b4.js');
const button = require('./button-90bb3acf.js');

const FacetValueLink = (props, children) => {
    var _a;
    const count = props.numberOfResults.toLocaleString(props.i18n.language);
    const ariaLabel = props.i18n.t('facet-value', {
        value: props.displayValue,
        count: props.numberOfResults,
        interpolation: { escapeValue: false },
    });
    let part = (_a = props.part) !== null && _a !== void 0 ? _a : `value-link${props.isSelected ? ' value-link-selected' : ''}`;
    if (props.additionalPart) {
        part += ` ${props.additionalPart}`;
    }
    return (index.h("li", { key: props.displayValue, class: props.class },
        index.h(button.Button, { style: "text-neutral", part: part, onClick: () => props.onClick(), class: "group w-full flex items-center px-2 py-2.5 text-left truncate no-outline", ariaPressed: props.isSelected.toString(), ariaLabel: ariaLabel, ref: props.buttonRef },
            children,
            index.h("span", { part: "value-count", class: "value-count" }, props.i18n.t('between-parentheses', {
                text: count,
            }))),
        props.subList));
};

exports.FacetValueLink = FacetValueLink;

//# sourceMappingURL=facet-value-link-88928cce.js.map
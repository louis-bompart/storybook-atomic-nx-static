import { h } from './index-c045ad7c.js';
import { B as Button } from './button-a9fb1e13.js';

const FacetValueBox = (props, children) => {
    const compactCount = new Intl.NumberFormat(props.i18n.language, {
        notation: 'compact',
    }).format(props.numberOfResults);
    const count = props.numberOfResults.toLocaleString(props.i18n.language);
    const ariaLabel = props.i18n.t('facet-value', {
        value: props.displayValue,
        count: props.numberOfResults,
    });
    return (h("li", { key: props.displayValue },
        h(Button, { style: "outline-bg-neutral", part: `value-box${props.isSelected ? ' value-box-selected' : ''}`, onClick: () => props.onClick(), class: `value-box box-border w-full h-full items-center p-2 group ${props.isSelected ? 'selected' : ''}`, ariaPressed: props.isSelected.toString(), ariaLabel: ariaLabel, ref: props.buttonRef },
            children,
            h("span", { title: count, part: "value-count", class: "value-box-count text-neutral-dark truncate w-full text-sm mt-1" }, props.i18n.t('between-parentheses', {
                text: compactCount,
            })))));
};

export { FacetValueBox as F };

//# sourceMappingURL=facet-value-box-bcb2ac12.js.map
import { h } from './index-c045ad7c.js';
import { c as createRipple } from './ripple-a09c16f2.js';
import { g as getRippleColorForButtonStyle, a as getClassNameForButtonStyle } from './button-style-8b7877b4.js';

const Button = (props, children) => {
    const rippleColor = getRippleColorForButtonStyle(props.style);
    const className = getClassNameForButtonStyle(props.style);
    const attributes = {
        class: props.class ? `${className} ${props.class}` : className,
        part: props.part,
        onClick: props.onClick,
        title: props.title,
        type: props.type,
        role: props.role,
        'aria-label': props.ariaLabel,
        'aria-expanded': props.ariaExpanded,
        'aria-pressed': props.ariaPressed,
        'aria-checked': props.ariaChecked,
        'aria-current': props.ariaCurrent,
        'aria-controls': props.ariaControls,
        'aria-hidden': props.ariaHidden,
        disabled: props.disabled,
        ref(buttonEl) {
            var _a;
            if (props.form) {
                buttonEl === null || buttonEl === void 0 ? void 0 : buttonEl.setAttribute('form', props.form);
            }
            if (props.ariaHidden) {
                buttonEl === null || buttonEl === void 0 ? void 0 : buttonEl.setAttribute('aria-hidden', props.ariaHidden);
            }
            if (props.tabIndex) {
                buttonEl === null || buttonEl === void 0 ? void 0 : buttonEl.setAttribute('tabindex', props.tabIndex);
            }
            (_a = props.ref) === null || _a === void 0 ? void 0 : _a.call(props, buttonEl);
        },
    };
    return (h("button", { ...attributes, onMouseDown: (e) => createRipple(e, { color: rippleColor }) },
        props.text ? h("span", { class: "truncate" }, props.text) : null,
        children));
};

export { Button as B };

//# sourceMappingURL=button-a9fb1e13.js.map
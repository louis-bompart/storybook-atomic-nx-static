'use strict';

const index = require('./index-c930d4b4.js');
const ripple = require('./ripple-dcc2ce08.js');
const buttonStyle = require('./button-style-dc30784f.js');

const Button = (props, children) => {
    const rippleColor = buttonStyle.getRippleColorForButtonStyle(props.style);
    const className = buttonStyle.getClassNameForButtonStyle(props.style);
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
    return (index.h("button", { ...attributes, onMouseDown: (e) => ripple.createRipple(e, { color: rippleColor }) },
        props.text ? index.h("span", { class: "truncate" }, props.text) : null,
        children));
};

exports.Button = Button;

//# sourceMappingURL=button-90bb3acf.js.map
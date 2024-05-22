import { h } from '@stencil/core/internal/client';
import { c as createRipple } from './ripple.js';
import { g as getRippleColorForButtonStyle, a as getClassNameForButtonStyle } from './button-style.js';

const RadioButton = (props) => {
    var _a;
    const classNames = ['btn-radio'];
    let onMouseDown;
    if (props.style) {
        const rippleColor = getRippleColorForButtonStyle(props.style);
        classNames.push(getClassNameForButtonStyle(props.style));
        onMouseDown = (e) => createRipple(e, { color: rippleColor });
    }
    if (props.checked) {
        classNames.push('selected');
    }
    if (props.class) {
        classNames.push(props.class);
    }
    const attributes = {
        name: props.groupName,
        key: props.key,
        checked: props.checked,
        class: classNames.join(' '),
        part: props.part,
        'aria-label': (_a = props.ariaLabel) !== null && _a !== void 0 ? _a : props.text,
        'aria-current': props.ariaCurrent,
        value: props.text,
        ref: props.ref,
    };
    return (h("input", { type: "radio", onChange: (e) => { var _a; return e.currentTarget.checked && ((_a = props.onChecked) === null || _a === void 0 ? void 0 : _a.call(props)); }, onMouseDown: onMouseDown, ...attributes }));
};

export { RadioButton as R };

//# sourceMappingURL=radio-button.js.map
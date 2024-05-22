import { h } from './index-53978573.js';
import { c as createRipple } from './ripple-a09c16f2.js';
import { g as getRippleColorForButtonStyle, a as getClassNameForButtonStyle } from './button-style-8b7877b4.js';

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

//# sourceMappingURL=radio-button-f3d98433.js.map
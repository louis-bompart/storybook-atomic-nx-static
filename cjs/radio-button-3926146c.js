'use strict';

const index = require('./index-c930d4b4.js');
const ripple = require('./ripple-dcc2ce08.js');
const buttonStyle = require('./button-style-dc30784f.js');

const RadioButton = (props) => {
    var _a;
    const classNames = ['btn-radio'];
    let onMouseDown;
    if (props.style) {
        const rippleColor = buttonStyle.getRippleColorForButtonStyle(props.style);
        classNames.push(buttonStyle.getClassNameForButtonStyle(props.style));
        onMouseDown = (e) => ripple.createRipple(e, { color: rippleColor });
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
    return (index.h("input", { type: "radio", onChange: (e) => { var _a; return e.currentTarget.checked && ((_a = props.onChecked) === null || _a === void 0 ? void 0 : _a.call(props)); }, onMouseDown: onMouseDown, ...attributes }));
};

exports.RadioButton = RadioButton;

//# sourceMappingURL=radio-button-3926146c.js.map
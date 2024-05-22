'use strict';

const index = require('./index-c930d4b4.js');
const button = require('./button-90bb3acf.js');

const IconButton = (props) => {
    return (index.h("div", { class: "relative", part: `${props.partPrefix}-container` },
        index.h(button.Button, { ...props, class: "p-3 relative w-[2.6rem] h-[2.6rem]", part: `${props.partPrefix}-button`, ref: props.buttonRef },
            index.h("atomic-icon", { icon: props.icon, class: "w-4 h-4 shrink-0", part: `${props.partPrefix}-icon` })),
        props.badge && (index.h("span", { part: `${props.partPrefix}-badge`, class: "absolute block h-4 w-4 text-center bg-primary text-on-primary rounded-[100%] text-xs leading-4 -top-2 -right-2" }, props.badge))));
};

exports.IconButton = IconButton;

//# sourceMappingURL=iconButton-d8c00ac4.js.map
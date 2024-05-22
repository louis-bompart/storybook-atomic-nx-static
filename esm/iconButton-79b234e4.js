import { h } from './index-c045ad7c.js';
import { B as Button } from './button-a9fb1e13.js';

const IconButton = (props) => {
    return (h("div", { class: "relative", part: `${props.partPrefix}-container` },
        h(Button, { ...props, class: "p-3 relative w-[2.6rem] h-[2.6rem]", part: `${props.partPrefix}-button`, ref: props.buttonRef },
            h("atomic-icon", { icon: props.icon, class: "w-4 h-4 shrink-0", part: `${props.partPrefix}-icon` })),
        props.badge && (h("span", { part: `${props.partPrefix}-badge`, class: "absolute block h-4 w-4 text-center bg-primary text-on-primary rounded-[100%] text-xs leading-4 -top-2 -right-2" }, props.badge))));
};

export { IconButton as I };

//# sourceMappingURL=iconButton-79b234e4.js.map
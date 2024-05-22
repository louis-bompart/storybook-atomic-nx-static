import { h } from './index-c045ad7c.js';
import { d as SearchSlimIcon } from './search-suggestion-b428bcd1.js';
import { B as Button } from './button-a9fb1e13.js';

const TextAreaSubmitButton = ({ bindings, onClick, ...defaultButtonProps }) => (h("div", { part: "submit-button-wrapper", class: "py-2 flex items-start justify-center items-center mr-2" },
    h(Button, { style: "text-primary", class: "flex items-center justify-center w-8 h-8 rounded-full shrink-0", part: "submit-button", ariaLabel: bindings.i18n.t('search'), onClick: () => {
            onClick === null || onClick === void 0 ? void 0 : onClick();
        }, ...defaultButtonProps },
        h("atomic-icon", { part: "submit-icon", icon: SearchSlimIcon, class: "w-4 h-4" }))));

export { TextAreaSubmitButton as T };

//# sourceMappingURL=text-area-submit-button-edb27c51.js.map
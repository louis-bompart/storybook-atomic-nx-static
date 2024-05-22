import { h } from './index-53978573.js';
import { d as SearchSlimIcon } from './search-suggestion-c6ba8a04.js';
import { B as Button } from './button-1e00370c.js';

const TextAreaSubmitButton = ({ bindings, onClick, ...defaultButtonProps }) => (h("div", { part: "submit-button-wrapper", class: "py-2 flex items-start justify-center items-center mr-2" },
    h(Button, { style: "text-primary", class: "flex items-center justify-center w-8 h-8 rounded-full shrink-0", part: "submit-button", ariaLabel: bindings.i18n.t('search'), onClick: () => {
            onClick === null || onClick === void 0 ? void 0 : onClick();
        }, ...defaultButtonProps },
        h("atomic-icon", { part: "submit-icon", icon: SearchSlimIcon, class: "w-4 h-4" }))));

export { TextAreaSubmitButton as T };

//# sourceMappingURL=text-area-submit-button-b9d031f1.js.map
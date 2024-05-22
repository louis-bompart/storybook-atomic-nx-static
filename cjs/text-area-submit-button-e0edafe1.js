'use strict';

const index = require('./index-c930d4b4.js');
const searchSuggestion = require('./search-suggestion-576c07bb.js');
const button = require('./button-90bb3acf.js');

const TextAreaSubmitButton = ({ bindings, onClick, ...defaultButtonProps }) => (index.h("div", { part: "submit-button-wrapper", class: "py-2 flex items-start justify-center items-center mr-2" },
    index.h(button.Button, { style: "text-primary", class: "flex items-center justify-center w-8 h-8 rounded-full shrink-0", part: "submit-button", ariaLabel: bindings.i18n.t('search'), onClick: () => {
            onClick === null || onClick === void 0 ? void 0 : onClick();
        }, ...defaultButtonProps },
        index.h("atomic-icon", { part: "submit-icon", icon: searchSuggestion.SearchSlimIcon, class: "w-4 h-4" }))));

exports.TextAreaSubmitButton = TextAreaSubmitButton;

//# sourceMappingURL=text-area-submit-button-e0edafe1.js.map
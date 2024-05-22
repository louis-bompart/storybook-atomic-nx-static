'use strict';

const index = require('./index-c930d4b4.js');

const LocalizedString = ({ bindings, key, params, count, }) => {
    const delimitingCharacter = '\u001d'; // Unicode group separator
    const placeholderPrefixCharacter = '\u001a'; // Unicode substitute character
    const getPlaceholderForParamKey = (paramKey) => `${delimitingCharacter}${placeholderPrefixCharacter}${paramKey}${delimitingCharacter}`;
    const getParamFromPlaceholder = (placeholder) => params[placeholder.slice(1)];
    const placeholdersMap = Object.fromEntries(Object.keys(params).map((paramKey) => [
        paramKey,
        getPlaceholderForParamKey(paramKey),
    ]));
    const localizedStringWithPlaceholders = bindings.i18n.t(key, {
        interpolation: { escapeValue: false },
        count,
        ...placeholdersMap,
    });
    return (index.h(index.Fragment, null, localizedStringWithPlaceholders
        .split(delimitingCharacter)
        .map((text) => text.startsWith(placeholderPrefixCharacter)
        ? getParamFromPlaceholder(text)
        : text)));
};

exports.LocalizedString = LocalizedString;

//# sourceMappingURL=jsx-utils-746deda4.js.map
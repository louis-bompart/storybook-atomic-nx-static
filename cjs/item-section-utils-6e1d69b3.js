'use strict';

const utils = require('./utils-b609c39e.js');

function hideEmptySection(element) {
    element.style.display = utils.containsVisualElement(element) ? '' : 'none';
}

exports.hideEmptySection = hideEmptySection;

//# sourceMappingURL=item-section-utils-6e1d69b3.js.map
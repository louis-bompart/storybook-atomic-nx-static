import { h as containsVisualElement } from './utils-8200d0ae.js';

function hideEmptySection(element) {
    element.style.display = containsVisualElement(element) ? '' : 'none';
}

export { hideEmptySection as h };

//# sourceMappingURL=item-section-utils-a5e887fa.js.map
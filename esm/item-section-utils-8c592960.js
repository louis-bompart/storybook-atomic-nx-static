import { h as containsVisualElement } from './utils-bc6a079b.js';

function hideEmptySection(element) {
    element.style.display = containsVisualElement(element) ? '' : 'none';
}

export { hideEmptySection as h };

//# sourceMappingURL=item-section-utils-8c592960.js.map
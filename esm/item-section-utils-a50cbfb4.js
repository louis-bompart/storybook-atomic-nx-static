import { h as containsVisualElement } from './utils-af246396.js';

function hideEmptySection(element) {
    element.style.display = containsVisualElement(element) ? '' : 'none';
}

export { hideEmptySection as h };

//# sourceMappingURL=item-section-utils-a50cbfb4.js.map
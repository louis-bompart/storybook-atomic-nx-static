'use strict';

const headless_esm = require('./headless.esm-12566d73.js');
const templateProvider = require('./template-provider-d0180cd1.js');

// TODO: Add JSX support for default template
function defaultTemplate() {
    const content = document.createDocumentFragment();
    const markup = `
    <atomic-product-section-name>
      <atomic-product-link class="font-bold"></atomic-product-link>
    </atomic-product-section-name>
    <atomic-product-section-visual>
      <atomic-product-image field="ec_thumbnails"></atomic-product-image>
    </atomic-product-section-visual>
  `;
    const template = document.createElement('template');
    template.innerHTML = markup.trim();
    content.appendChild(template.content);
    return {
        content,
        conditions: [],
    };
}
class ProductTemplateProvider extends templateProvider.TemplateProvider {
    constructor(props) {
        super(props, () => headless_esm.wA(), () => defaultTemplate());
    }
}

exports.ProductTemplateProvider = ProductTemplateProvider;

//# sourceMappingURL=product-template-provider-a4d817de.js.map
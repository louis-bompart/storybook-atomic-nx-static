import { w as wA } from './headless.esm2.js';
import { T as TemplateProvider } from './template-provider.js';

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
class ProductTemplateProvider extends TemplateProvider {
    constructor(props) {
        super(props, () => wA(), () => defaultTemplate());
    }
}

export { ProductTemplateProvider as P };

//# sourceMappingURL=product-template-provider.js.map
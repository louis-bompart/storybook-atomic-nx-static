import { m as buildResultTemplatesManager } from './headless.esm-bdb53e72.js';
import { T as TemplateProvider } from './template-provider-818c930d.js';

function extractUnfoldedItem(anyResult) {
    return anyResult.result || anyResult;
}

class ItemTemplateProvider extends TemplateProvider {
    constructor(props) {
        super(props, () => buildResultTemplatesManager(props.bindings.engine));
    }
    getTemplateContent(result) {
        return super.getTemplateContent(extractUnfoldedItem(result));
    }
}

export { ItemTemplateProvider as I, extractUnfoldedItem as e };

//# sourceMappingURL=item-template-provider-f37a0178.js.map
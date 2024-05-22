import { S as Sq } from './headless.esm-88bad35d.js';
import { T as TemplateProvider } from './template-provider-818c930d.js';

function extractUnfoldedItem(anyResult) {
    return anyResult.result || anyResult;
}

class ItemTemplateProvider extends TemplateProvider {
    constructor(props) {
        super(props, () => Sq(props.bindings.engine));
    }
    getTemplateContent(result) {
        return super.getTemplateContent(extractUnfoldedItem(result));
    }
}

export { ItemTemplateProvider as I, extractUnfoldedItem as e };

//# sourceMappingURL=item-template-provider-e4f808aa.js.map
'use strict';

const headless_esm = require('./headless.esm-1a66963a.js');
const templateProvider = require('./template-provider-d0180cd1.js');

function extractUnfoldedItem(anyResult) {
    return anyResult.result || anyResult;
}

class ItemTemplateProvider extends templateProvider.TemplateProvider {
    constructor(props) {
        super(props, () => headless_esm.Sq(props.bindings.engine));
    }
    getTemplateContent(result) {
        return super.getTemplateContent(extractUnfoldedItem(result));
    }
}

exports.ItemTemplateProvider = ItemTemplateProvider;
exports.extractUnfoldedItem = extractUnfoldedItem;

//# sourceMappingURL=item-template-provider-41ec4218.js.map
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');

const AtomicSortExpression = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.label = undefined;
        this.expression = undefined;
    }
    render() {
        const dropdownComponent = 'atomic-sort-dropdown';
        if (!this.host.closest(dropdownComponent)) {
            const error = new Error(`The "${this.host.nodeName.toLowerCase()}" component has to be used inside an ${dropdownComponent} element.`);
            return (index.h("atomic-component-error", { key: 'b5b1efef9975af7505fdda9aa6c4d72a714de779', element: this.host, error: error }));
        }
    }
    get host() { return index.getElement(this); }
};

exports.atomic_sort_expression = AtomicSortExpression;

//# sourceMappingURL=atomic-sort-expression.cjs.entry.js.map
'use strict';

const index = require('./index-c930d4b4.js');

const ResultsPlaceholdersGuard = (props) => {
    if (!props.displayPlaceholders) {
        return;
    }
    switch (props.display) {
        case 'table':
            return index.h(TableDisplayResultsPlaceholder, { ...props });
        default:
            return index.h(ResultsPlaceholder, { ...props });
    }
};
const ResultsPlaceholder = (props) => {
    return Array.from({ length: props.numberOfPlaceholders }, (_, i) => (index.h("atomic-result-placeholder", { key: `placeholder-${i}`, density: props.density, display: props.display || 'list', imageSize: props.imageSize })));
};
const TableDisplayResultsPlaceholder = (props) => {
    return (index.h("atomic-result-table-placeholder", { density: props.density, imageSize: props.imageSize, rows: props.numberOfPlaceholders }));
};

exports.ResultsPlaceholder = ResultsPlaceholder;
exports.ResultsPlaceholdersGuard = ResultsPlaceholdersGuard;

//# sourceMappingURL=placeholders-3fdbabb6.js.map
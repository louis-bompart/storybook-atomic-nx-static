import { h } from './index-53978573.js';

const ResultsPlaceholdersGuard = (props) => {
    if (!props.displayPlaceholders) {
        return;
    }
    switch (props.display) {
        case 'table':
            return h(TableDisplayResultsPlaceholder, { ...props });
        default:
            return h(ResultsPlaceholder, { ...props });
    }
};
const ResultsPlaceholder = (props) => {
    return Array.from({ length: props.numberOfPlaceholders }, (_, i) => (h("atomic-result-placeholder", { key: `placeholder-${i}`, density: props.density, display: props.display || 'list', imageSize: props.imageSize })));
};
const TableDisplayResultsPlaceholder = (props) => {
    return (h("atomic-result-table-placeholder", { density: props.density, imageSize: props.imageSize, rows: props.numberOfPlaceholders }));
};

export { ResultsPlaceholdersGuard as R, ResultsPlaceholder as a };

//# sourceMappingURL=placeholders-55d308c1.js.map
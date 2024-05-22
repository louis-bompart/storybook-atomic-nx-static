'use strict';

function parseDependsOn(dependsOn) {
    if (Object.keys(dependsOn).length > 1) {
        throw "Depending on multiple facets isn't supported";
    }
    return Object.entries(dependsOn).map(([parentFacetId, expectedValue]) => {
        return {
            parentFacetId,
            condition: (values) => {
                return values.some((value) => {
                    if (isCategoryFacetValue(value)) {
                        const selectedValue = getSelectedCategoryFacetValueRequest(value);
                        if (!selectedValue) {
                            return false;
                        }
                        if (!expectedValue) {
                            return true;
                        }
                        return selectedValue.value === expectedValue;
                    }
                    if (isSimpleFacetValue(value)) {
                        if (value.state !== 'selected') {
                            return false;
                        }
                        if (!expectedValue) {
                            return true;
                        }
                        return value.value === expectedValue;
                    }
                    return false;
                });
            },
        };
    });
}
function isCategoryFacetValue(request) {
    const requestAsRecord = request;
    return (((requestAsRecord === null || requestAsRecord === void 0 ? void 0 : requestAsRecord.children) &&
        Array.isArray(requestAsRecord.children) &&
        (requestAsRecord === null || requestAsRecord === void 0 ? void 0 : requestAsRecord.state) &&
        typeof requestAsRecord.state === 'string') === true);
}
function getSelectedCategoryFacetValueRequest(value) {
    if (!isCategoryFacetValue(value)) {
        return null;
    }
    if (value.state === 'selected') {
        return value;
    }
    for (const child of value.children) {
        const selectedValue = getSelectedCategoryFacetValueRequest(child);
        if (selectedValue !== null) {
            return selectedValue;
        }
    }
    return null;
}
function isSimpleFacetValue(value) {
    const asRecord = value;
    return ('value' in asRecord &&
        typeof asRecord.value === 'string' &&
        !('children' in asRecord));
}

exports.parseDependsOn = parseDependsOn;

//# sourceMappingURL=depends-on-653d4ed1.js.map
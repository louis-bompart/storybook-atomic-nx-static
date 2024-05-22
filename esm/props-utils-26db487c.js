import { i as isArray } from './bueno.esm-9a075e67.js';
import { g as getElement } from './index-c045ad7c.js';
import { a as camelToKebab, k as kebabToCamel } from './utils-af246396.js';

function MapProp(opts) {
    return (component, variableName) => {
        const { componentWillLoad } = component;
        if (!componentWillLoad) {
            console.error('The "componentWillLoad" lifecycle method has to be defined for the MapProp decorator to work.');
            return;
        }
        component.componentWillLoad = function () {
            var _a;
            const prefix = (opts && opts.attributePrefix) || variableName;
            const variable = this[variableName];
            const attributes = getElement(this).attributes;
            mapAttributesToProp(prefix, variable, Array.from(attributes), (_a = opts === null || opts === void 0 ? void 0 : opts.splitValues) !== null && _a !== void 0 ? _a : false);
            componentWillLoad.call(this);
        };
    };
}
function ArrayProp() {
    return (component, variableName) => {
        const { componentWillLoad } = component;
        const attributeWithBrackets = camelToKebab(variableName);
        component.componentWillLoad = function () {
            const value = this[variableName];
            if (!value || isArray(value)) {
                componentWillLoad === null || componentWillLoad === void 0 ? void 0 : componentWillLoad.call(this);
                return;
            }
            try {
                const valueAsArray = JSON.parse(value);
                if (isArray(valueAsArray)) {
                    this[variableName] = valueAsArray;
                }
                else {
                    console.error(`Property ${attributeWithBrackets} should be an array`, getElement(this));
                }
            }
            catch (e) {
                console.error(`Error while parsing attribute ${attributeWithBrackets} as array`, e);
            }
            componentWillLoad === null || componentWillLoad === void 0 ? void 0 : componentWillLoad.call(this);
        };
    };
}
function splitAttributeValueOnCommas(attributeValue) {
    var _a;
    const splitButIgnoreEscapeSymbolsExpression = /(?:\\.|[^,])+/g;
    const [...valuesWithEscapeSymbols] = (_a = attributeValue.matchAll(splitButIgnoreEscapeSymbolsExpression)) !== null && _a !== void 0 ? _a : [];
    const removeEscapeSymbolsExpression = /\\(.)/g;
    return valuesWithEscapeSymbols.map(([valuesWithEscapeSymbols]) => valuesWithEscapeSymbols.replace(removeEscapeSymbolsExpression, '$1'));
}
function mapAttributesToProp(prefix, mapVariable, attributes, splitValues) {
    const map = attributesToStringMap(prefix, attributes);
    Object.assign(mapVariable, splitValues ? stringMapToStringArrayMap(map) : map);
}
function stringMapToStringArrayMap(map) {
    return Object.entries(map).reduce((acc, [key, value]) => ({
        ...acc,
        [key]: splitAttributeValueOnCommas(value).map((subValue) => subValue.trim()),
    }), {});
}
function attributesToStringMap(prefix, attributes) {
    const mapVariable = {};
    const kebabPrefix = camelToKebab(prefix) + '-';
    for (let i = 0; i < attributes.length; i++) {
        const attribute = attributes[i];
        if (attribute.name.indexOf(kebabPrefix) !== 0) {
            continue;
        }
        const property = kebabToCamel(attribute.name.replace(kebabPrefix, ''));
        mapVariable[property] = `${attribute.value}`;
    }
    return mapVariable;
}

export { ArrayProp as A, MapProp as M };

//# sourceMappingURL=props-utils-26db487c.js.map
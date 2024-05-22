'use strict';

const bueno_esm = require('./bueno.esm-344292d0.js');
const index = require('./index-c930d4b4.js');
const utils = require('./utils-93ea935e.js');

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
            const attributes = index.getElement(this).attributes;
            mapAttributesToProp(prefix, variable, Array.from(attributes), (_a = opts === null || opts === void 0 ? void 0 : opts.splitValues) !== null && _a !== void 0 ? _a : false);
            componentWillLoad.call(this);
        };
    };
}
function ArrayProp() {
    return (component, variableName) => {
        const { componentWillLoad } = component;
        const attributeWithBrackets = utils.camelToKebab(variableName);
        component.componentWillLoad = function () {
            const value = this[variableName];
            if (!value || bueno_esm.isArray(value)) {
                componentWillLoad === null || componentWillLoad === void 0 ? void 0 : componentWillLoad.call(this);
                return;
            }
            try {
                const valueAsArray = JSON.parse(value);
                if (bueno_esm.isArray(valueAsArray)) {
                    this[variableName] = valueAsArray;
                }
                else {
                    console.error(`Property ${attributeWithBrackets} should be an array`, index.getElement(this));
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
    const kebabPrefix = utils.camelToKebab(prefix) + '-';
    for (let i = 0; i < attributes.length; i++) {
        const attribute = attributes[i];
        if (attribute.name.indexOf(kebabPrefix) !== 0) {
            continue;
        }
        const property = utils.kebabToCamel(attribute.name.replace(kebabPrefix, ''));
        mapVariable[property] = `${attribute.value}`;
    }
    return mapVariable;
}

exports.ArrayProp = ArrayProp;
exports.MapProp = MapProp;

//# sourceMappingURL=props-utils-d9a5cdae.js.map
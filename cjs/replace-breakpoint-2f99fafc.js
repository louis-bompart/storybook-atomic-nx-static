'use strict';

const utils = require('./utils-b609c39e.js');

const DEFAULT_MOBILE_BREAKPOINT = '1024px';
function replaceMediaQuery(style, mobileBreakpoint) {
    return style.replace(new RegExp(`\\(min-width: ${DEFAULT_MOBILE_BREAKPOINT}\\)`, 'g'), `(min-width: ${mobileBreakpoint})`);
}
function replaceStyleSheet(element, mobileBreakpoint) {
    var _a, _b;
    // Not adopted by all browsers, not part of Typescript yet
    // https://caniuse.com/mdn-api_document_adoptedstylesheets
    // https://github.com/microsoft/TypeScript/issues/30022
    const stylesheets = (_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.adoptedStyleSheets;
    if (!stylesheets || !stylesheets.length) {
        return;
    }
    const stylesheet = stylesheets[0];
    const style = Object.values(stylesheet.cssRules)
        .map((rule) => rule.cssText)
        .join('');
    (_b = stylesheet.replaceSync) === null || _b === void 0 ? void 0 : _b.call(stylesheet, replaceMediaQuery(style, mobileBreakpoint));
}
function replateStyleContent(element, breakpoint) {
    var _a;
    const styleTag = (_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('style');
    if (!styleTag) {
        return;
    }
    styleTag.textContent = replaceMediaQuery(styleTag.textContent, breakpoint);
}
const layouts = ['atomic-search-layout', 'atomic-insight-layout'];
function updateBreakpoints(element) {
    const layout = utils.closest(element, layouts.join(', '));
    if (!(layout === null || layout === void 0 ? void 0 : layout.mobileBreakpoint)) {
        return;
    }
    if (layout.mobileBreakpoint === DEFAULT_MOBILE_BREAKPOINT) {
        return;
    }
    replaceStyleSheet(element, layout.mobileBreakpoint);
    replateStyleContent(element, layout.mobileBreakpoint);
}

exports.DEFAULT_MOBILE_BREAKPOINT = DEFAULT_MOBILE_BREAKPOINT;
exports.updateBreakpoints = updateBreakpoints;

//# sourceMappingURL=replace-breakpoint-2f99fafc.js.map
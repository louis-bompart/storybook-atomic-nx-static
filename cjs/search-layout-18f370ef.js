'use strict';

const searchLayout = require('./search-layout-ac5a2e9f.js');

function makeDesktopQuery(mobileBreakpoint) {
    return `only screen and (min-width: ${mobileBreakpoint})`;
}
function buildSearchLayout(element, mobileBreakpoint) {
    return searchLayout.buildSearchLayoutCommon(element, mobileBreakpoint, 'atomic-search-layout', 'atomic-search-interface');
}

exports.buildSearchLayout = buildSearchLayout;
exports.makeDesktopQuery = makeDesktopQuery;

//# sourceMappingURL=search-layout-18f370ef.js.map
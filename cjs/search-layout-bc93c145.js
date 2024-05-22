'use strict';

const searchLayout = require('./search-layout-9cb63ad6.js');

function makeDesktopQuery(mobileBreakpoint) {
    return `only screen and (min-width: ${mobileBreakpoint})`;
}
function buildSearchLayout(element, mobileBreakpoint) {
    return searchLayout.buildSearchLayoutCommon(element, mobileBreakpoint, 'atomic-search-layout', 'atomic-search-interface');
}

exports.buildSearchLayout = buildSearchLayout;
exports.makeDesktopQuery = makeDesktopQuery;

//# sourceMappingURL=search-layout-bc93c145.js.map
import { b as buildSearchLayoutCommon } from './search-layout-a5d30198.js';

function makeDesktopQuery(mobileBreakpoint) {
    return `only screen and (min-width: ${mobileBreakpoint})`;
}
function buildSearchLayout(element, mobileBreakpoint) {
    return buildSearchLayoutCommon(element, mobileBreakpoint, 'atomic-search-layout', 'atomic-search-interface');
}

export { buildSearchLayout as b, makeDesktopQuery as m };

//# sourceMappingURL=search-layout-7e0cd352.js.map
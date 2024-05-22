import { s as sectionSelector, f as findSection } from './sections-ae00b53a.js';

function makeDesktopQuery(mobileBreakpoint) {
    return `only screen and (min-width: ${mobileBreakpoint})`;
}
function buildSearchLayoutCommon(element, mobileBreakpoint, layoutWebComponentTagName, containerWebComponentTagName) {
    const id = element.id;
    const layoutSelector = `${layoutWebComponentTagName}#${id}`;
    const cleanStatusSelector = `${containerWebComponentTagName}:not(.${containerWebComponentTagName}-no-results, .${containerWebComponentTagName}-error)`;
    const mediaQuerySelector = `@media ${makeDesktopQuery(mobileBreakpoint)}`;
    const display = `${layoutSelector} { display: grid }`;
    const search = `${mediaQuerySelector} {
    ${layoutSelector} ${sectionSelector('search')} {
      justify-self: start;
      width: 80%;
    }
  }`;
    const facets = () => {
        const facetsSection = findSection(element, 'facets');
        const mainSection = findSection(element, 'main');
        if (!facetsSection || !mainSection) {
            return '';
        }
        const facetsMin = facetsSection.minWidth || '17rem';
        const facetsMax = facetsSection.maxWidth || '22rem';
        const mainMin = mainSection.minWidth || '50%';
        const mainMax = mainSection.maxWidth || '70rem';
        return `${mediaQuerySelector} {
      ${layoutSelector} {
        grid-template-areas:
        '. .                     atomic-section-search .'
        '. atomic-section-main   atomic-section-main   .';
        grid-template-columns:
          1fr minmax(${facetsMin}, ${facetsMax}) minmax(${mainMin}, ${mainMax}) 1fr;
        column-gap: var(--atomic-layout-spacing-x);
      }

      ${cleanStatusSelector} ${layoutSelector} {
        grid-template-areas:
          '. .                     atomic-section-search .'
          '. atomic-section-facets atomic-section-main   .'
          '. atomic-section-facets .                     .';
      }

      ${cleanStatusSelector} ${layoutSelector} ${sectionSelector('facets')} {
        display: block;
      }
    }`;
    };
    const refine = () => {
        const statusSection = findSection(element, 'status');
        if (!statusSection) {
            return '';
        }
        const refineToggle = statusSection.querySelector('atomic-refine-toggle');
        if (!refineToggle) {
            return '';
        }
        const statusSelector = `${layoutSelector} ${sectionSelector('status')}`;
        return `${statusSelector} atomic-sort-dropdown {
      display: none;
    }

    ${mediaQuerySelector} {
     ${statusSelector} atomic-sort-dropdown {
       display: block;
      }

      ${statusSelector} atomic-refine-toggle {
        display: none;
       }
    }`;
    };
    const horizontalFacets = () => {
        return `${mediaQuerySelector} {
      ${layoutSelector} ${sectionSelector('horizontal-facets')} > atomic-popover:not(.atomic-hidden) {
        display: block;
      }
    }`;
    };
    return [display, search, facets(), refine(), horizontalFacets()]
        .filter((declaration) => declaration !== '')
        .join('\n\n');
}

export { buildSearchLayoutCommon as b };

//# sourceMappingURL=search-layout-a5d30198.js.map
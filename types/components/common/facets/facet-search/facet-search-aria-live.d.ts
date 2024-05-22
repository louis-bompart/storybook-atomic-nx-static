import { i18n } from 'i18next';
import { Facet, FacetSearchState } from '../../types';
export declare function announceFacetSearchResultsWithAriaLive(facet: Pick<Facet, 'subscribe'> & {
    state: {
        facetSearch: FacetSearchState;
    };
}, label: string, setAriaLive: (msg: string) => void, i18n: i18n): void;

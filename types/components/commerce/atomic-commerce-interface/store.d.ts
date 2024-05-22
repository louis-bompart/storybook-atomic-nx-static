import { NumericFacetValue, DateFacetValue, SortCriterion } from '@coveo/headless/commerce';
import { FacetInfo, FacetStore, FacetValueFormat } from '../../common/facets/facet-common-store';
import { AtomicCommonStoreData, AtomicCommonStore } from '../../common/interface/store';
export interface SortDropdownOption {
    expression: string;
    criteria: SortCriterion[];
    label: string;
}
export interface AtomicStoreData extends AtomicCommonStoreData {
    facets: FacetStore<FacetInfo>;
    numericFacets: FacetStore<FacetInfo & FacetValueFormat<NumericFacetValue>>;
    dateFacets: FacetStore<FacetInfo & FacetValueFormat<DateFacetValue>>;
    categoryFacets: FacetStore<FacetInfo>;
    sortOptions: SortDropdownOption[];
    mobileBreakpoint: string;
    currentQuickviewPosition: number;
}
export interface AtomicCommerceStore extends AtomicCommonStore<AtomicStoreData> {
    getAllFacets(): FacetInfoMap;
    isMobile(): boolean;
}
export interface FacetInfoMap {
    [facetId: string]: FacetInfo | (FacetInfo & FacetValueFormat<NumericFacetValue>) | (FacetInfo & FacetValueFormat<DateFacetValue>);
}
export declare function createAtomicCommerceStore(): AtomicCommerceStore;

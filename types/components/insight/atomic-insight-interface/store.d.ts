import { InsightDateFacetValue, InsightNumericFacetValue } from '..';
import { FacetInfo, FacetStore, FacetValueFormat } from '../../common/facets/facet-common-store';
import { AtomicCommonStore, AtomicCommonStoreData } from '../../common/interface/store';
export interface AtomicInsightStoreData extends AtomicCommonStoreData {
    fieldsToInclude: string[];
    facets: FacetStore<FacetInfo>;
    numericFacets: FacetStore<FacetInfo & FacetValueFormat<InsightNumericFacetValue>>;
    dateFacets: FacetStore<FacetInfo & FacetValueFormat<InsightDateFacetValue>>;
    categoryFacets: FacetStore<FacetInfo>;
}
export interface AtomicInsightStore extends AtomicCommonStore<AtomicInsightStoreData> {
}
export declare function createAtomicInsightStore(): AtomicInsightStore;

import { FacetInfo, FacetStore, FacetType, FacetValueFormat } from '../facets/facet-common-store';
import { DateFacetValue, NumericFacetValue } from '../types';
import { AnyEngineType, CommonStencilStore } from './bindings';
export interface ResultListInfo {
    focusOnNextNewResult(): void;
    focusOnFirstResultAfterNextSearch(): Promise<void>;
}
export type AtomicCommonStoreData = {
    facets: FacetStore<FacetInfo>;
    numericFacets: FacetStore<FacetInfo & FacetValueFormat<NumericFacetValue>>;
    dateFacets: FacetStore<FacetInfo & FacetValueFormat<DateFacetValue>>;
    categoryFacets: FacetStore<FacetInfo>;
    loadingFlags: string[];
    iconAssetsPath: string;
    fieldsToInclude: string[];
    facetElements: HTMLElement[];
    resultList?: ResultListInfo;
};
export interface AtomicCommonStore<StoreData extends AtomicCommonStoreData> extends CommonStencilStore<StoreData> {
    getIconAssetsPath(): string;
    setLoadingFlag(flag: string): void;
    unsetLoadingFlag(loadingFlag: string): void;
    hasLoadingFlag(loadingFlag: string): boolean;
    waitUntilAppLoaded(callback: () => void): void;
    isAppLoaded(): boolean;
    getUniqueIDFromEngine(engine: AnyEngineType): string;
    getFacetElements(): HTMLElement[];
    registerFacet<T extends FacetType, U extends string>(facetType: T, data: StoreData[T][U] & {
        facetId: U;
        element: HTMLElement;
    }): void;
    registerResultList(data: ResultListInfo): void;
    addFieldsToInclude(fields: string[]): void;
}
export declare const isRefineModalFacet = "is-refine-modal";
export declare function createAtomicCommonStore<StoreData extends AtomicCommonStoreData>(initialStoreData: StoreData): AtomicCommonStore<StoreData>;

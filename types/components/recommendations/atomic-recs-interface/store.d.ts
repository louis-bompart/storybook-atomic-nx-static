import { AtomicCommonStore, AtomicCommonStoreData } from '../../common/interface/store';
export interface AtomicRecsStoreData extends AtomicCommonStoreData {
}
export interface AtomicRecsStore extends AtomicCommonStore<AtomicRecsStoreData> {
}
export declare function createAtomicRecsStore(): AtomicRecsStore;

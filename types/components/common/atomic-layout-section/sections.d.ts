export type Section = 'search' | 'facets' | 'main' | 'status' | 'results' | 'horizontal-facets' | 'pagination';
export declare function findSection(element: HTMLElement, section: Section): HTMLAtomicLayoutSectionElement | null;
export declare function sectionSelector(section: Section): string;

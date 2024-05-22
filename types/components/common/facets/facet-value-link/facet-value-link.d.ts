import { FunctionalComponent, VNode } from '../../../../stencil-public-runtime';
import { FacetValueProps } from '../facet-common';
export interface FacetValueLinkProps extends FacetValueProps {
    subList?: VNode | VNode[];
}
export declare const FacetValueLink: FunctionalComponent<FacetValueLinkProps>;

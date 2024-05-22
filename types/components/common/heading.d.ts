import { FunctionalComponent } from '../../stencil-public-runtime';
import { JSXBase } from '../../stencil-public-runtime';
export interface HeadingProps {
    /**
     * The heading level.
     *
     * A value outside of the range of 1 to 6 will render a div instead of a heading.
     */
    level: number;
}
export declare const Heading: FunctionalComponent<HeadingProps & JSXBase.HTMLAttributes<HTMLHeadingElement>>;

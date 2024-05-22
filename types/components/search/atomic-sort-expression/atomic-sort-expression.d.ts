/**
 * The `atomic-sort-expression` component defines a sort expression. This component must be inside an `atomic-sort-dropdown` component.
 */
export declare class AtomicSortExpression {
    host: HTMLElement;
    /**
     * The non-localized label to display for this expression.
     */
    label: string;
    /**
     * One or more sort criteria that the end user can select or toggle between.
     *
     * The available sort criteria are:
     *
     * * `relevancy`
     * * `date ascending`/`date descending`
     * * `qre`
     * * `<FIELD> ascending`/`<FIELD> descending`, where you replace `<FIELD>` with the name of a sortable field in your index (e.g., `criteria="size ascending"`).
     *
     * You can specify multiple sort criteria to be used in the same request by separating them with a comma (e.g., `criteria="size ascending, date ascending"`).
     */
    expression: string;
    render(): any;
}

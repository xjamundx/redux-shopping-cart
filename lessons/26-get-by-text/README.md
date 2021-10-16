## Testing Visible Text with React Testing Library's getByText Query


Testing Library's [ByText](https://testing-library.com/docs/queries/bytext) methods allow us search the DOM for matching text. We do that here to confirm the total amount is displayed correctly on the page. That search can be narrowed significantly by using the `selector` option as we do in this example to ensure that only an element showing `$0.00` that includes the `total` class satisfies our query.

The default approach to querying with `getByText` searches for TextNodes and looks for a matching `textContent` property. For most advanced searches you can look into the [TextMatch](https://testing-library.com/docs/queries/about#textmatch) options which includes a normalization function and other features to apply more robust searching techniques.

The simpler and more accessible your HTML gets written, the simpler it should to be to query.
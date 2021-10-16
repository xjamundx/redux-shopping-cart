## Testing Accessible Form Elements with React Testing Library's findByLabelText Query

Testing Library's [findBylabelText](https://testing-library.com/docs/queries/bylabeltext) allow us to query a form element by either an associated `<label>` element or `aria-label` property. Here we add an accessible label to our "add to cart" button to allow us to query the button without having to traverse the DOM.

The `name` property used to filter our `findByRole` results above refers to the [accessible name](https://www.tpgi.com/what-is-an-accessible-name/) determined by the browser and could reference button text, heading text or a label associated with a form element.
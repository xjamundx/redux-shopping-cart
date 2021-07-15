## Combining Data from Two Redux Slices to Build our Shopping Cart

This lesson is pretty straightforward but demonstrates how we're combining data from two different redux slices in a single component. We have product data from the `productsSlice` and shopping cart information from the `cartSlice`. Neither of these is sufficient on its own, so it requires us to combine them at render-time. It's pretty common to have 5 or 6 selector functions at the top of a large component.

**Note:** One thing missing from the lesson is that our `<tr>` element needs a `key={id}` to ensure React handles updates properly. You'll likely see a warning in your console about this.

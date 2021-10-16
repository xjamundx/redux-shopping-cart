## Using Preloaded State from Multiple Reducers for Testing a React Component

For this lesson we rely on our `getStateWithItems` helper to produce some state with both a product and an item in the cart. This is needed for our cart component to be able to display the total at the bottom of the page.

We run into one issue here with TypeScript and not wanting to fill out the entire product type, which has a lot of fields like imageURL and imageAlt that we aren't asserting on in our tests. To get around that we use `as Product` here to cast our partial product object into a full one for the purposes of this test.
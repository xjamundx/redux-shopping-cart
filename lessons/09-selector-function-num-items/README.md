## Create a Selector to Aggregate Data from our Redux Store

As I say in the lesson a selector is just a function that takes in the redux state and returns any value. It could be as simple as `(state) => state.cart.items` or even `(state) => state`. But it's more common to create selector functions where there's some kind of processing to be done and that's what we do here. The redux store doesn't directly store the number of items in the cart, instead it stores an object with the the product ID and a number. We have to loop over that object and count it manually. A selector is a perfect place to do that calculation. Another place it could be done is in a `useMemo` hook in your react component.

Read more about selector functions here:
https://redux.js.org/usage/deriving-data-selectors

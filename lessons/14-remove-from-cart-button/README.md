## Adding a Button that Dispatches an Action To Redux to Remove an Item from the ShoppingCart

This lesson creates a new reducer method called `removeFromCart` which accepts a product id as a string. We then add on `onClick` handler to our remove button that dispatches the `removeFromCart` action into our redux store.

One thing to consider is that it's important we avoid dispatching any kind of stale state into our redux store. React event handlers such as the onclick handler do a good job of keeping up-to-date when the component gets updated. If we were dispatching from a `useEffect` hook we'd need to ensure that any of our dispatched data, like the product id, was explicitly defined in the dependency array.

Here's a bit more info about the stale state issue:
https://reactjs.org/docs/hooks-faq.html#why-am-i-seeing-stale-props-or-state-inside-my-function

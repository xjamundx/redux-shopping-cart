## Dispatching Actions to a Redux Store to Test a Redux Connected React Component

In this lesson we show how easy it is to dispatch actions that trigger updates for a component. We can also use those actions as a simple way to load data into our redux store before rendering our component. We're relying on our redux stores's [dispatch](https://redux.js.org/api/store#dispatchaction) method to do most of the heavy lifting here. You'll also notice that rendering happens synchronously. We don't need to `await` our `store.dispatch()` calls unless we're dispatching an async thunk.

It would be ideal if we could trigger the redux actions by interacting with our component, but in this case `<CartLink />` doesn't really have any interactive features. It simply re-renders in response to updates to our redux store triggered elsewhere and so that's what we simulate here.

This lesson also demonstrates a pretty big downside of using the app's redux store directly (instead of a copy), which is that we have to clear any changes we made to the store before the next test.
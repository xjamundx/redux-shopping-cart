## Using Thunks to Dispatch Actions Over Time

Redux Toolkit comes baked in with support for [redux-thunk](https://github.com/reduxjs/redux-thunk) as the recommended way to model asynchronous actions. Thunks can take a bit of getting used to. A typical thunk looks something like this:

```ts
function myAction() {
  return function myActionThunk(dispatch) {
    dispatch({ type: "myAction" });
  };
}

// somewhere in the UI code
dispatch(myAction());
```

So you dispatch a function that is handled and executed by the middleware, and that function receives its own `dispatch` argument that it can use to send multiple actions into the redux store over time.

Thunks are most commonly used when dealing with API calls where you'd send an action to indicate an API call was started and another once the response is received. We model that here with `extraReducers` and the builder API listening for `cart/checkout/pending` and `cart/checkout/fulfilled` actions, which we dispatch from our single checkout thunk.

It's also worth noting why I'm calling a function to return my thunk rather than exporting the thunk function directly. First of all, you can export it directly, but it's common to wrap it like this, because you often want to pass in arguments from your UI layer that ultimately impact how the thunk is used.

For example you could imagine calling `dispatch(checkout(items))` and then passing those items into your API call in your thunk.

Another thing not mentioned in the lesson is that thunks take a second argument which is a `getState` function. This is useful in cases where your async call needs access to the current state object.

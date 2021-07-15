## Handling Errors in Async Thunks with builder.addCase()

When you're handling a thunk's rejected state with` builder.addCase` TypeScript is able to infer that your action includes an extra `error` property containing a serialized version of the error returned by your thunk. We use that here to update the `errorMessage` property in our cart state and display it to our users above the checkout button.

---

The [builder API](https://redux-toolkit.js.org/api/createReducer#usage-with-the-builder-callback-notation) is one way to define additional reducers to your slice. It's semantically similar to a switch statement and includes methods like `addCase` and `addDefaultCase`. You can also define `extraReducers` as an object with the action types as the keys. The difference between `reducers` and `extraReducers` being that RTK won't generate actions for you automatically on the `extraReducers` property, like it will for reducers added to `reducers`.

You can read more about errors from thunks here:
https://redux-toolkit.js.org/api/createAsyncThunk#payloadcreator

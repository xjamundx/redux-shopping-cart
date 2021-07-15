## Accessing Global State inside of Async Thunks with TypeScript

The [payloadCreator](https://redux-toolkit.js.org/api/createAsyncThunk#payloadcreator) argument to `createAsyncThunk` takes two arguments. The first is a single `arg` that receives data passed into the thunk's action creator such as `dispatch(checkout(items))`. The second is called `thunkAPI` that contains something [like 7 different methods on it](https://redux-toolkit.js.org/api/createAsyncThunk#payloadcreator). Here we're going to use its `getState()` method to access the global state just before we make complete the checkout API call.

When it comes to typing `createAsyncThunk` just like other RTK methods, it will mostly be typed by default. In this case we still need to tell it about our store. We can do that with `thunkAPI.getState() as RootState` which I think is the preferred way to handle the types here. If we really want to be thorough though, we can pass in the full types like this:

```ts
createAsyncThunk<PayloadResponse, ThunkArgument, { state: RootState }>(
  "slice/typeName",
  payloadCreator
);
```

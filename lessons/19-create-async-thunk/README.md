## Using createAsyncThunk and the builder API to Generate Redux Actions for an API call

The key reason to use [createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk) is that it generates actions for each of the different outcomes for any promised-based async call: `pending`, `fulfilled`, and `rejected`. We then have to use the builder callback API on the extraReducers property to map these actions back into reducer methods we then use to update our state. It's a bit of of a process but it's simpler than the alternative, which is to create a bunch of actions by hand and manually dispatch them.

---

- [createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk) takes a `type` argument (which I referred to as a label) and a function called a `payloadCreator` which is basically just an async function (or function returning a promise) that goes and collects data.

- The [builder API](https://redux-toolkit.js.org/api/createReducer#usage-with-the-builder-callback-notation) is one way to define `extraReducers` (you can also pass in an object with a string). It's semantically similar to a switch statement and includes methods like `addCase` and `addDefaultCase`.

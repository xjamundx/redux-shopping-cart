## Unit Testing Redux Thunks and Associated Reducer Methods using Your App's Redux Store

For this lesson we focus on running our thunks through our app's reducer methods to test both the thunks and the reducers in a single test. Testing our thunks this way gives us more confidence they are working exactly as we expect and its less code for us to write. The main challenge we face in using our redux store this way is that we need to preload it with state.

To make that simpler we create two helper utilities: `getStoreWithState()` and `getStateWithItems()`. We're going to continue to use these utilities throughout our lessons.

You'll notice I keep referring to the generated store as our "real redux store", even though we aren't relying on the store variable but generating a new store with the same reducers. What I really mean here is that our store has the same middleware and reducers as our app's store. Generating a new store for each test is important so that they can have their own state that don't conflict with other tests.

**Note:** It's also possible to generate the app's `store` variable with `getStoreWithState()`, but it makes the TypeScript syntax more complex and it seemed like it wouldn't add a lot of value.
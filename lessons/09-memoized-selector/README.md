## Unit Testing a Memoized Redux Selector Built with Reselect/RTK

The [reselect module](https://github.com/reduxjs/reselect) popularized a pattern of memoized redux selectors. Now that pattern is baked into Redux Toolkit with its [createSelector](https://redux-toolkit.js.org/api/createSelector) method, which is used by the `getMemoizedNumItems` selector we're testing here.

Any selectors created with `createSelector` come with these two additional methods `recomputations()` and `resetRecomputations()`. These methods keep track of how many times your data was recomputed and are essential for testing these selectors.

One thing to be aware of with memoized selectors is how the caching works. Changing the state object directly usually isn't enough to break the cache, you often need to copy it AND change it as we'll see more of in the next lesson.

Some additional examples on testing memoized selectors can be found here: https://github.com/reduxjs/reselect#q-how-do-i-test-a-selector


## Unit Testing a Memoized Selector that Derives Data from Multiple Reducers

The [reselect module](https://github.com/reduxjs/reselect) popularized a pattern of memoized redux selectors. Now that pattern is baked into Redux Toolkit with its [createSelector](https://redux-toolkit.js.org/api/createSelector) method, which is used by the `getTotalPrice` selector we're testing here.

Any selectors created with `createSelector` come with these two additional methods `recomputations()` and `resetRecomputations()`. These methods keep track of how many times your data was recomputed and are essential for testing these selectors.

The `createSelector` method first takes any number of "input selectors" which gather data from your redux store and then for its final arguments takes an additional selector which has for its inputs the result of those input selectors.

A cached response will be used, if one exists, when either the root state passed in to the selector is unchanged or if any of the results of the input selectors remain unchanged between calls. It uses `===` equality and not any sort of nested equality checking so `state` and `{ ...state }` would not be considered the same and would always recompute. On the flip side passing in `state` and then running `state.count++` would not trigger a recompute automatically, because the state object reference has not changed and `===` would remain true. Writing tests for my memoized selectors definitely helped me better understand this behavior.

Some additional examples on testing memoized selectors can be found here: https://github.com/reduxjs/reselect#q-how-do-i-test-a-selector
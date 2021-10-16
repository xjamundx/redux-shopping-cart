## Unit Testing Redux Thunks with a Mock Dispatch Function

How to properly test thunks seems to be the question that's pretty commonly asked in discussoin forums around redux. Usually an API needs to be mocked and then there are numerous ways to actually run the tests. This lesson showcases the most basic approach which relies on [jest mock functions](https://jestjs.io/docs/mock-functions) and avoids hitting a redux store or reducer.

For this lesson we're testing a thunk created using Redux Toolkit's [createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk) method. The test should continue work completely untouched even if we build the thunk by hand.

The [.mock property](https://jestjs.io/docs/mock-functions#mock-property) of the `jest.fn()` we create here for our mock dispatch ends up doing most of the work. The nested array inside of the `.calls` property measuring first "times called" and then "arguments passed" is a little bit confusing, but extremely powerful!

My least favorite part of writing these tests was needing to pass the third `extra` argument to our thunk to satisfy TypeScript. The other frustrating part was having to build a complete `RootState` object to pass into our `getState` method. We'll solve that in a later lesson by creating a `getStateWithItems` helper.
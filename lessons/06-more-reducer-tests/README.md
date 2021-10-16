## Adding More Test Cases for a Redux Reducer

Just because you've run a function through one set of inputs, doesn't mean other inputs will behave the same way. This is often true with state management solutions where it's common to see memoized responses & cached data. We only end up with 4 tests total for our products reducer, but I'd like you to consider all of the following cases when you're writing reducer tests for your production applications.

- Valid Input
- Valid Input more than once
- Invalid Input
- Invalid Input more than once
- With Existing State
- With No Existing State
- Invalid/Unknown Action Type
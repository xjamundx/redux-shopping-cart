## Unit Testing Redux Thunks using Redux Mock Store

[Redux Mock Store](https://github.com/reduxjs/redux-mock-store) is a library that provides two important capabilities. 1. It makes it easy to pre-load state. 2. It keeps track of which actions were fired. We take advantage of both here for testing our thunk, in what amounts to just a slightly cleaner approach than using `jest.fn()` as we did in our previous lesson.

[Redux Mock Store](https://github.com/reduxjs/redux-mock-store) is more commonly used as a way to test redux-connected components, but also works anytime we need an easy way to confirm that certain actions are fired into our redux store.

While it does make it easy to populate a redux store and inspect which actions were fired, redux mock store doesn't have any reducers, so we can't use it in tests where we want our components to update in response to any actions. It's strictly a read-only store.

Another challenge of using redux mock store is that it needs to be configured separately from your primary redux store. There may be cases where you'll have a middleware on your production redux store, but forget to add it to your mock store, leading to tests that don't match the behavior of your application.

For these reasons I think it's generally better to run both unit and integration tests against a store with your actual reducers hooked up when at all possible. And we'll do that in the next lesson.
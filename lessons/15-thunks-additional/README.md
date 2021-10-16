## Additional Redux Thunk Unit Tests for Increased Code Coverage

In this lesson we go after the elusive goal of 100% test coverage by testing a few additional cases: error responses, empty error messages and the pending state that should exist between checkout being clicked and the API returning data.

The first two require special handling in our mock API:

```typescript
if (items.evilItem > 0) throw new Error();
if (items.badItem > 0) return { success: false };
```

In some ways these are arbitrary examples that may not exist in your production applications, but I wanted to demonstrate the fact that there are a lot of different ways an API might decide to communicate errors.

In general with AJAX calls a non-200 status code often gets thrown as an error, but some APIs (such as graphql) include errors as part of a normal 200 response and need special handling. These lessons are meant to demonstrate how you might mock those cases for your tests.

It's useful to reiterate here that our simple API interface makes writing these mocks very easy, but in many cases something like [Mock Service Worker](https://mswjs.io/docs/getting-started/integrate/node) is a more appropriate way to mock out an API.

For our "pending" test, it's interesting what we lose when we stop focusing on actions fired (like in our previous 2 lessons) and instead focus purely on the resulting state. It makes looking at the intermediary state a bit more difficult. Here we work around that by calling `store.dispatch(thunk)` and saving the results of that to an `action` variable, which we `await` after doing an initial assertion. That `await` triggers our mock API to respond, so we can use the space between `dispatch` and `await` to peak into the pending state.
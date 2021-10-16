## Applying our Redux Test Helpers to an Existing Component Test

In this lesson we try on the updated `renderWithContext` function. The updated version allows `preloadedState` to be passed in as its second argument and return a `store` property which we [destructure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring) off of the response.

Because we don't have access to the store until after we render any data we want our components to access on initial render will we need to be included it as part of the `preloadedState`.
## Testing Redux Connected React Components with React Testing Library (Basic)

There's kind of a lot going on in this lesson, even though it's meant to be basic. I'll try to break down the key parts.

Anytime you have a redux-connected component it must be rendered inside of a redux `<Provider>`. That's going to be true here in the case of all of our tests, so it's critical we find a way to do that easily, hence our `renderWithContext` method that we'll use in all of our future tests.

[getByRole](https://testing-library.com/docs/queries/byrole/) is a testing library utility that synchronously queries the DOM by looking at the [accessible roles](https://www.w3.org/TR/html-aria/#docconformance) assigned to the elements on the page. This is likely not how you're used to thinking about your app, but it is a practice that's worth learning. It specifically was chosen to encourage treating accessibility as a first-class citizen when it comes to building & testing your apps, so use it. The `getByRole` method that's a property of `screen` will search the entire rendered document.

[toBeInTheDocument()](https://github.com/testing-library/jest-dom) comes from the [jest-dom](https://github.com/testing-library/jest-dom) extension and simply confirms that this thing exists. We technically don't need it here, because getByRole will throw when it can't find an element with that role.

---

This is the only redux-connected component we have that relies on [react router](https://reactrouter.com/), so it's probably overkill to include it in `renderWithContext` and instead we could make sure to include `<Router>` in each individual test.

There's a really advanced version of our `renderWithContext` method referenced in the [Writing Tests](https://redux.js.org/usage/writing-tests#components) section of the redux docs, but I like the one I used here a lot better.
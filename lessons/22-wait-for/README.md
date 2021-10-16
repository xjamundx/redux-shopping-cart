## Using React Testing Library's waitFor Method to Test Asynchronous Behavior

The async method [waitFor](https://testing-library.com/docs/dom-testing-library/api-async#waitfor) is helpful when you need to wait for an async response of some kind in your test. It's particularly helpful the way we use it here, alongside a jest spy, where we can hold off until we know that an API response has been sent before continuing with our testing.

The `waitFor` method will run your callback immediately and then every `50ms` until the timeout at `1000m`s`. If you return a promise in your callback, it will simply wait for your promise to be resolved (up until the timeout).

In some cases we can avoid waitFor if we use `preloadedState,` but that's not really possible for our products, because our `<Product>` component's `useEffect` hook always tries to load new products, even if they're already in our our store. You could imagine an implementation that checked if products already existed before calling our API, but that wasn't used here.

---

Testing Library has a section called [Async Methods](https://testing-library.com/docs/dom-testing-library/api-async) that covers all of the details around `waitFor` and `findBy`.
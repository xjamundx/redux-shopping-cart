## Using React Testing Library's findBy Methods to Test Asynchronous Behavior

You can think of [waitFor](https://testing-library.com/docs/dom-testing-library/api-async#waitfor) as a way to delay your test until some arbitrary criteria is met. [findBy](https://testing-library.com/docs/dom-testing-library/api-async/#findby-queries) on the other hand is a much more specific tool. Wait until this query resolves. The docs recommend using this tool for cases where you interact with the UI but need to wait a little bit before the changes show up on the page. Like `waitFor` it checks immediately and then after `50ms` up until a `1000ms` timeout, which is totally customizable.

The way we're using it here really isn't that optimal. Beacuse of its async nature, `findBy` queries generally going to slower than a `getBy` query. And once we know the the content is loaded, we can go back to sync mode for our queries. When I ran some tests the first query took around `70ms` while the rest all took around 50ms. It might even have been better to explicitly `findBy` the first heading and then `getBy` all of the rest or even `findByAll` and then compare them that way.

---

Checkout the [About Queries]() section of the Testing Library docs that covers the differences between `getBy`, `findBy` and `queryBy`. Another section called [Async Methods]() covers all of the details around `waitFor` and `findBy`.
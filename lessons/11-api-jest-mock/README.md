## Mocking out our API Helper with jest.mock

There are several ways to mock APIs for our tests.

Here we're using [jest.mock](https://jestjs.io/docs/es6-class-mocks#calling-jestmock-with-the-module-factory-parameter) with the module factory parameter to a new mocked module to replace our original. This helps us avoid problems like servers taking a long time and node.js not having fetch built-in.

When using mocks this way it's important to note that this mocked module is only going to show up for the tests executed in this file. Other test suites will continue to receive the original implementation of app/api.

Other approaches to mock APIs include mocking out `window.fetch` or using [Mock Service Worker](https://mswjs.io/docs/getting-started/integrate/node) to provide a more robust API implementation. However, the approach we took here makes sense for our use case. We have a simple API surface, it lives in a single file, we never call `fetch` directly and we don't need a lot of bells and whistles (like responding to different routes or query parameters). So for that reason this approach and the [spy](https://jestjs.io/docs/jest-object#jestspyonobject-methodname) approach used in some of the later lessons actually works really well.

If you're using [Apollo](https://www.apollographql.com/) or [ReactQuery](https://react-query.tanstack.com/) or [SWR](https://swr.vercel.app/) to handle your data, then you almost certainly should use [Mock Service Worker](https://mswjs.io/docs/getting-started/integrate/node) instead of the jest.mock approach.
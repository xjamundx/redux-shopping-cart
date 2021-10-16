## Adding Tests for a Redux Reducer

This test starts us off with testing a reducer and we do that by importing both the reducer and an associated action creator, which we can use to generate actions to pass back into that reducer.

For all of our unit tests here we use `describe` blocks to group them even though they're not strictly required. When using this approach a good way to think about naming your tests is if you construct a sentence starting from the describe block text and then concluding with the test name passed into your `it` function. For example you can read one of these tests as "products reducer should convert the products received to an object".

This testing syntax describe/it is loosely referred to as BDD (behavior driven development) and originated with the [R-Spec ruby testing library](https://rspec.info/. Jest also includes a [test()](https://jestjs.io/docs/api#testname-fn-timeout) function, which works the same as `it()`. For asserting behavior jest relies on the powerful [expect](https://jestjs.io/docs/expect) function and its various "matchers".

One thing we use extensively in our tests is the [products.json](https://github.com/xjamundx/redux-shopping-cart/blob/testing/public/products.json) file that we share with our app. In practice, your app likely won't have a products.json file with all of the data. It will more likely  ome from something like an API or a database so you might need to create a file like this just for your tests.

---

If you're just getting started with jest you can check out their [getting started guide](https://jestjs.io/docs/getting-started) or choose from whole slew of [jest lessons on egghead](https://egghead.io/q/jest). Another fantastic resource is Kent C. Dodd's https://testingjavascript.com/ which is a paid course.


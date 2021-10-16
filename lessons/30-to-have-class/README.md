## Testing Components with jest-dom's toHaveClass Matcher

[Jest DOM](https://github.com/testing-library/jest-dom#jest-dom) is a utility that extends jest with additional "matchers". Essentially additional methods I can use when I expect() on an element. Some of these include `toBeVisible`, `toBeValid`, `toBeInTheDocument`, `toBeChecked`, `toHaveStyle` and `toHaveClass`.

For this lesson use `toHaveClass` to ensure that our table is in the correct state. First it will show no special class when we first attempt to checkout, then after we attempt to checkout it will show the `checkoutLoading` class and then after our API call completes trying to checkout with no items, we'll see our table will have the class `checkoutError`.

We use the [.not](https://jestjs.io/docs/expect#not) property of [expect](https://jestjs.io/docs/expect) here to explicitly say that our table should not have a class. This property will reverse whatever our matcher is looking for and can come in handy in a lot of situations.

In general testing for class names is a little bit brittle, but if we use this technique sparingly, such as in cases where we use classes to highlight an error. I think the approach is worth the risk.


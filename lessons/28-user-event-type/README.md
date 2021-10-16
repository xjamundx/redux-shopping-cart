## Simulate Typing into Form Fields in Tests with the User Event Library

The user event library provides a series of tools for programmatically interacting with a webpage during a test. Some of the supported events include `click`, `dblClick`, `type`, `upload`, `clear`, `tab` and `hover`. The interface is fairly straight forward in most cases you simply type `userEvent["eventName"]` and then pass in an element returned from a `findBy` or `getBy` query.

At the beginning of this lesson we add a missing `aria-label` property to an `<input>` element to make it both more accessible and more queryable for our tests. Then we use `userEvent.clear()`, `userEvent.tab()` and `userEvent.type()` to update the quantity on our shopping cart page.

I mention _"blurring"_ an input field a few times. That means that the input field loses focus. Our update quantity implementation waits to update the totals until the user clicks out of the box. Many implementations might instead use a [debouncing technique](https://css-tricks.com/debouncing-throttling-explained-examples/) instead of waiting for the blur event.
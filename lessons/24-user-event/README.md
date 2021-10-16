## Simulate Clicks in a Test with the User Event Library

The user event library provides a series of tools for programmatically interacting with a webpage during a test. Some of the supported events include `click`, `dblClick`, `type`, `upload`, `clear`, `tab` and `hover`. The interface is fairly straight forward in most cases you simply type `userEvent["eventName"]` and then pass in an element returned from a `findBy` or `getBy` query.

Here we use `userEvent.click` to click the "add to cart" button for our bananas product. In this case our button had no specific queryable property (they all said "add to cart" and lacked anything unique), so we have to find a sibling element, the heading, using `screen.findByRole("heading", { name: /bananas/i })`. Once we have a pointer then we traverse to the parent DOM node using the `.parentNode` property. Then we search its children for a _button_ using the standalone form of [getByRole()](https://testing-library.com/docs/queries/byrole/#api) function, which takes for its first argument a container to narrow our search.

---


The `name` property used to filter our `findByRole` results above refers to the [accessible name](https://www.tpgi.com/what-is-an-accessible-name/) determined by the browser and could reference button text, heading text or a label associated with a form element.

When you're searching with `screen.getByRole` the container is assumed to be screen.

There is also a [fireEvent](https://testing-library.com/docs/dom-testing-library/api-events) method that can be imported from "@testing-library/react`, which provides a simpler interface with less options. It's generally preferred to use the [user event](https://testing-library.com/docs/ecosystem-user-event) library instead.

The [parentNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode) property is standard on DOM elements and is provided here courtesy of [JSDom](https://github.com/jsdom/jsdom#--------jsdom) which Jest is using as the host environment for our tests.
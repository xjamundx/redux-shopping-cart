## Testing Accessible Form Elements with React Testing Library's getByTitle Query

There are a number of ways we can query form elements. In the past we've used `getByRole` with a `name` filter. (to filter on the accesible name) We've also used `getByLabelText` to query `<label>`s and `aria-label` properties. In this lesson we use [getByTitle](https://testing-library.com/docs/queries/bytitle/). The `title` attribute is often used on buttons that have just an icon or an X to give a little bit more context to its purpose. When you hover an item with a title attribute you often see a little tooltip with the full text displayed. It can be a nice improvement to accessibility.

We use the `title` attribute here while testing the remove from cart button which just shows an X for the button contents. We give each title a unique name associated with what it's going to delete, so we can easily search for the exact button we want to use.

---

This lesson uses the [user event](https://testing-library.com/docs/ecosystem-user-event/) library for simulating clicks.

For a fantastic explanation of various approaches to calculating accessible names for form elements based on labels and titles check out this article: [https://webaim.org/articles/label-name/#computation]((https://webaim.org/articles/label-name/#computation)
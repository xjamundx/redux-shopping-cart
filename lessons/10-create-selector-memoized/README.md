## Use createSelector from Redux Toolkit to build a Memoized Selector

`createSelector` was brought in to RTK from the popular [reselect](https://github.com/reduxjs/reselect) library. While it's not needed to create selector functions, it makes it a lot easier to create efficient selectors that avoid doing more work than needed.

`createSelector` takes two types of arguments. There are `inputSelectors` (and there can be more than one of these) and then there's the `resultFunction`. You pass in these input selectors and then the result function processes the data that gets returned. As long as the input values don't change, the generated selector won't re-run the result function.

If the data you're working with isn't large or the calculations aren't complex, you don't really need to use `createSelector`. But it's a good tool to have in your toolbox.

---

Check out this link for more info:
https://github.com/reduxjs/reselect#createselectorinputselectors--inputselectors-resultfunc

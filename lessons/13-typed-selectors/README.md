## How to Apply Types to Redux Selectors

What I've found with nearly every method provided by RTK is that type support comes really easy. This is definitely true for the `createSelector` method. As long as you type the `state` argument on your input selectors, TypeScript can calculate your return value as well as the value of the various inputs to your result function.

if you want to type the function fully you can use the following syntax:

```ts
createSelector<RootState, ResultInputType(s)..., ResultOutputType>(...);
```

---

More info about types in Redux can be found here:
https://redux.js.org/recipes/usage-with-typescript

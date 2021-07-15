## Creating a RootState type and Typed Hooks for Type-Aware Redux Interactions

This is probably the most boilerplate you'll be asked to write throughout this whole course. Just copy these few lines of code from the [Usage with TypeScript](https://redux.js.org/usage/usage-with-typescript) section of the Redux docs into `store.ts` and `hooks.ts` and then use the `useAppSelector` and `useAppDispatch` hooks instead of the ones built-in to `react-redux` and you'll have solved 80% of your typing needs with Redux.

In addition to the typed hooks you'll use the `RootState` type any time you're creating a selector function and as we'll see later in this course sometimes with thunks as well It also may come in handy anytime you need to manually call `store.getState()`.

The TS syntax I was most interested in learning for this lesson was [ReturnType](https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype), which is a utility that extracts the return type from the type definition of a function. In our case `ReturnType<typeof store.getState>` creates a type that matches whatever data we have in our redux store, based on the various interfaces we define in each slice.

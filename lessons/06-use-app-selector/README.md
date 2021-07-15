## Access Redux Data in a Component with the TypeScript-enabled useAppSelector hook

The [useSelector](https://react-redux.js.org/api/hooks#useselector) hook from react-redux is incredibly easy to use, but doesn't work super well with TypeScript. The `useAppSelector` function we created in the last lesson solves this by telling it that `state` is always going to be of the `RootState` type we created.

```
const products = useAppSelector((state) => state.products.products);
```

This only works with function components. Class components cannot use hooks and need to use the legacy [connect](https://react-redux.js.org/api/connect) higher order component to gain access to data in the redux store.

Once we type the `useAppSelector` method and our individual slices we don't need any special type syntax as its all covered by the `RootState` type we defined earlier.

Anytime the redux store changes, the selector function passed in to `useAppSelector` will be executed. If the value returned is not an exact match to the last returned value, redux will force the component to re-render.

`useSelector/useAppSelector` can also take a second argument, an equality function. Using `_.isEqual` from Lodash for example could help prevent additional renders in some cases. `react-redux` also includes a `shallowEqual` method that will compare all of the key/value pairs of an object one layer deep. That works well if your selector return an object made up of strings, numbers or booleans.

```
import { shallowEqual, useSelector } from 'react-redux'
const selectedData = useSelector(selectorReturningObject, shallowEqual)
```

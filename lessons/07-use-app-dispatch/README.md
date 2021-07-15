## Create a Reducer with Redux Toolkit and Dispatch its Action with the useAppDispatch hook

In react-redux the [useDispatch](ttps://react-redux.js.org/api/hooks#usedispatch) hook gives us access to our store's [dispatch](https://redux.js.org/api/store#dispatchaction) method. Dispatch is used to send actions into our redux store and is the only way we can affect the store from within a component.

```
const dispatch = useAppDispatch();
dispatch({ type: "featureName/actionName, payload: {} })
```

The only works with function components. Class components cannot use hooks and need to use the legacy [connect](https://react-redux.js.org/api/connect) higher order component and a [mapDispatchToProps](https://react-redux.js.org/using-react-redux/connect-mapdispatch) function to gain a way to dispatch actions from components.

Actions with redux are recommended to follow the [flux standard action](https://redux.js.org/style-guide/style-guide#write-actions-using-the-flux-standard-action-convention) format, which always includes `type` field and usually a `payload` key containing the primary data associated with the action.

## Add Redux and the Redux Toolkit (RTK) to an Existing Application

In this lesson we install [react-redux](https://react-redux.js.org/) and the [Redux Toolkit](https://redux-toolkit.js.org/) via NPM and then setup our own redux store using RTK's [configureStore](https://redux-toolkit.js.org/api/configureStore) method. After creating our store we wrap our entire `<App />` in the `<Provider>` component provided by `react-redux` which makes our newly created redux store accessible to any component in our application.

To install these components use:

```
npm install react-redux
npm install @reduxjs/toolkit
```

We usually place our redux store in a path of either `app/store.ts` or `store/index.ts`.
In legacy redux applications it was common to use the `store/` folder and then have all kinds of `reducer` and `action` files inside of it. Now it's recommended by the [redux style guide](https://redux.js.org/style-guide/style-guide) to use an `app/` folder and the slices of the store should live in feature folders alongside the components that are using them. This application already splits up our components into various feature folders and app-wide or shared utilities are living in the `app` folder.

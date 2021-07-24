## Using the Redux DevTool Support Built-in to Redux Toolkit

In this lesson we install the [Redux Dev Tools](https://github.com/zalmoxisus/redux-devtools-extension#installation) extension into Chrome and demonstrate how it lets you inspect the various actions passing through your redux store as well as all of the data it contains. We also briefly demonstrate the time travel debugging capability as we walk back through and un-add items to our shopping cart.

The key here is that because we used [configureStore](https://redux-toolkit.js.org/api/configureStore) from RTK which automatically includes support for redux dev tool without having to explicitly turn it on.

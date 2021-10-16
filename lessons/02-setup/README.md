## Exploring the Sample App for the Redux Testing Course

This course builds off a react-based shopping cart application containing a list of products (loaded dynamically from a JSON file). It is fully self-sustaining and does not rely on any third party APIs. It uses [vite](https://vitejs.dev/) as the underlying bundler and development tool with [react-ts](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) preset.

To get started simply follow the these instructions:

```
git clone https://github.com/xjamundx/redux-shopping-cart.git redux-testing
cd redux-testing
git checkout testing
npm install
npm run dev
open http://localhost:3000
```

All of the code for this application can be found in the [redux-shopping-cart github repo](https://github.com/xjamundx/redux-shopping-cart/tree/testing), specifically in the testing branch. An explanation for how it was built can be found by completing the [Modern Redux with RTK and TypeScript](https://app.egghead.io/playlists/modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8) course on egghead.

To quickly summarize a few of the things you need to know to be successful:

- This app is built with [Redux Toolkit](https://redux-toolkit.js.org/) which has a slightly different syntax than standard Redux, however the testing examples should all work seamlessly in any Redux application

- Almost all of the key files for the project are found in the src/features folder. "Slice" files are a Redux Toolkit convention and they contain all the redux code for that part of the application.

- You can get the app started by typing npm run dev and opening your browser to http://localhost:3000/.

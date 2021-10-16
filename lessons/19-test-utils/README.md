## Creating a Utility File for Rendering Redux Connected React Components in Tests

Any redux-enabled application is going to need helpers for at least these two things:

1. Rendering components with a `<Provider>` (w/preloaded state)
2. Generating some authentic redux state

For the first one I much prefer using something like our `getStoreWithState` method to generate a store for tests using our real reducers and pre-loaded state. I've used [Redux Mock Store](https://github.com/reduxjs/redux-mock-store) for this in the past, which is pretty easy, but you lose out on the ability to test any kind of interactivity.

You can imagine for a more complex redux store that `getStateWithItems` won't be good enough for generating authentic and properly-typed state. In that case you might need multiple functions for different use cases or even one or more JSONs file where you keep mock state that can be applied to those use cases . How you structure your approach depends on the complexity of your application architecture, but the need for a way to create that state is the same across all applications.
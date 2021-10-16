## Unit Testing a Basic Redux Selector

In a lot of ways plain selectors like we're testing here are extremely simple to reason about. They take in data and they return some part of that data. The only thing that's a little tricky is even though they're often written side-by-side with a reducer, they accept state as `RootState` instead of the that reducer's own part of the state (i.e. `CartState`). When writing these tests with TypeScript you often find yourself using `as` to cast partial state into the full `RootState` type.

Here we're doubly nesting our describe to nicely format our test output.
## Configuring Code Coverage for TypeScript Files in Jest

Code coverage is an important part of any test setup. One of the jest framework's innovations is built-in test coverage support. In this lesson I demonstrate using the [collectCoverageFrom](https://jestjs.io/docs/configuration#collectcoveragefrom-array) configuration option to improve jest's coverage support for TypeScript files and then demonstrate using `npx jest --coverage` to run code coverage as well as `npm test -- --coverage`, which does the same thing.

At the end I briefly mention the [collectCoverage](https://jestjs.io/docs/configuration#collectcoverage-boolean) flag which seems like you'd want to always just have on, but in practice is annoying. That's because coverage takes several extra to process and I rarely need my code coverage run, so it just makes the testing feedback loop a lot slower. For a build-only config it might make sense to leave on.

---

There's a [pretty good question on stackoverflow](https://stackoverflow.com/questions/43046885/what-does-do-when-running-an-npm-command) that covers using `--` with `npm test` that you might want to check out.

Here's also an explanation of how [npx differs from npm](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b).
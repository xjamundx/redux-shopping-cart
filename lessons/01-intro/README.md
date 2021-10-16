## Intro to Confidently Testing Redux Applications with Jest & TypeScript

Best practices for building & testing redux applications have changed dramatically over time. This course aims to be a comprehensive and up-to-date resource for those seeking to confidently test their redux apps. Whether you're just getting started or want to improve on your existing testing strategy, there will be something in this course for you.

This first few lessons of this course look at how to add jest to an existing react/redux application that was built on top of [vite](https://vitejs.dev/). We cover basic functionality like using `npm test` vs `npx jest` and generating and using [code coverage](https://jestjs.io/docs/cli#--coverageboolean) to inform our testing strategy.

The next 10 or so lessons cover the specifics of unit testing the redux code in our application. We'll go over how to test reducers, selectors and thunks. As part of this we'll touch on mocking APIs and using [Redux Mock Store](https://github.com/reduxjs/redux-mock-store) as well as running actions through our applications' actual reducers to broaden our test coverage.

In the final part of this course we'll look at how we can test our redux connected react components using the various utilities that come with the [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). We'll cover simulating various kinds of user input with the [User Event Module](https://testing-library.com/docs/ecosystem-user-event), populating our redux store with test data, using [jest spies](https://jestjs.io/docs/jest-object#jestspyonobject-methodname), how to wait for asynchronous tasks to complete, and several approaches for finding & asserting that visual elements exist on the page.

This course is built on top of content that was created for the [Modern Redux with RTK and TypeScript](https://app.egghead.io/playlists/modern-redux-with-redux-toolkit-rtk-and-typescript-64f243c8) course and I highly recommend you start there if you haven't completed it already. It does expect a *basic* familiarity with react, redux and jest. TypeScript is used in these lessons, but is not a major focus and hopefully won't distract you too much if you prefer plain JavaScript. 

No matter your experience level with redux and testing react applications, I'm confident your abilities will level up as you watch this course and follow along with the examples.

Thank you!

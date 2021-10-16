## Troubleshooting Tests with React Testing Library's Debug Helper

When you `render` a component with the [Redux Testing Library](https://testing-library.com/docs/react-testing-library/api) you get back a result object with numerous properties. One of those properties is a method called [debug()](https://testing-library.com/docs/react-testing-library/api/#debug) which will log the HTML for whatever component you just rendered. It might look something like this:


```typescript
const { debug } = render(<h1>Hello World</h1>);
debug(); // logs <h1>Hello World</h1>
```

There's also another approach to logging HTML using `screen.debug()`, which takes an an argument any queried element. One example would be:

```typescript
screen.debug(screen.getByRole("table"));
```

Just remember that whether you use `debug()` or `screen.debug()` you don't need to wrap it in a console.log()!
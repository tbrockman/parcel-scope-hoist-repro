Minimal reproduction of a scope-hoisting issue causing import of `@uiw/react-codemirror` to be undefined.

To run (just creates a production/scope-hoisted build and serves it):

```sh
pnpm repro
```

and visit [`http://localhost:1234`](http://localhost:1234) (or wherever you've started the server), then inspect the error in the developer console.

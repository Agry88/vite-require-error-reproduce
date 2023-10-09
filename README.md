## How I reproduce the error
Install a package made with commonjs, in this case it is the `mdsvex` package.

Then use ES6 on the project, setup node-adapter on vite config.

The error wiil raise at this time, developing will not have any error, but production build will have the error:
```bash
ReferenceError: require is not defined
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can run the production build with:
```bash
node build
```

## Solutions that I have tried
1. Setup `build.CommonJSOptions` in vite.config.js
[Related article link](https://blog.csdn.net/weixin_41645458/article/details/126952304)
```js
export default defineConfig({
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
```

2. Setup `vite-plugin-commonjs` filter in vite.config.js
[Related article link](https://stackoverflow.com/questions/76702410/uncaught-referenceerror-require-is-not-defined-in-vitejs)
```js
export default defineConfig({
  plugins: [
    sveltekit(),
    commonjs({
      filter(id) {
        if (id.includes('node_modules/mdsvex')) {
          return true;
        }
      },
    }),
  ]
});

```
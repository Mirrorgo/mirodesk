# 11/22/2023
Problem with vite adding aliases

In tsconfig.json added:

```typescript
// // personal
  "baseUrl": ".",
  // "paths": {
  //   "@/*": ["./src/*", "./dist/*", ""],
  //   "pages/*": ["src/pages/*"],
  //   "components/*": ["src/components/*"],
  //   "types/*": ["src/@types/*"],
  //   "public/*": ["public/*"]
  // }
  "paths": {
    "@/*": ["./src/*"]
  } // ↑ personal
```

Then added to vite.config.ts:

```typescript
resolve: {
  // alias: {
  //   "@": path.resolve(__dirname, "./src/"),
  //   components: `${path.resolve(__dirname, "./src/components/")}`,
  //   public: `${path.resolve(__dirname, "./public/")}`,
  //   pages: path.resolve(__dirname, "./src/pages"),
  //   types: `${path.resolve(__dirname, "./src/@types")}`,
  // },
  alias: [{ find: "@", replacement: path.resolve(__dirname, "./src/") }],
}
```

However, it seems that although it can be used, there is no code hinting/input, so I'm not using it for now.

References:
https://stackoverflow.com/questions/75201705/how-to-set-multiple-aliases-in-vite-react
https://juejin.cn/post/7170843707217412126?searchId=202311221552036A01DD8056E7A606FC3D#heading-2
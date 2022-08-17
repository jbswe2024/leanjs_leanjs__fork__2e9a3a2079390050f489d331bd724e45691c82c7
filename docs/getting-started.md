---
title: Getting started
---

# Getting started

## Quick start

For a quick start, visit [create micro-frontends](../packages/create-micro-frontends).

## Manual start

You will want to manually start a micro-frontends project when you have an existing monolith. This is the expected path.

## Recommended setup

### Turn your monolith into a monorepo

- Create directory `apps/my-monolith` and move all your code there
- Keep also a copy of your `package.json` at the root

  ```
  my-monorepo/
  ├─ apps/
  │  ├─ my-monolith/
  │  │  ├─ package.json  👈 same
  ├─ package.json  👈 same
  ```

- Make all the `dependencies` in the package.json in `my-monorepo/apps/my-monolith` point to version `*`. We are enabling a single-version policy for the entire monorepo.
- Add the following field `workspaces: ["apps/*"]` in the root package.json:

  ```
  my-monorepo/
  ├─ apps/
  │  ├─ my-monolith/
  │  │  ├─ package.json
  ├─ package.json  👈 root
  ```

### Create a `packages` workspace

Packages are used to share code between micro-frontends and/or the monolith.

- Add _"packages/\*"_ to the following field `workspaces: ["apps/*", "packages/*"]` in the root package.json.

  ```
  my-monorepo/
  ├─ apps/
  │  ├─ my-monolith/
  │  │  ├─ package.json
  ├─ package.json  👈 here
  ```

- Create a `packages` folder at the root of your monorepo, e.g.

  ```
  my-monorepo/
  ├─ apps/
  ├─ packages/ 👈 here
  ├─ package.json
  ```

- Create a package inside the `packages` folder. You must include a `package.json` in your new package.

  ```
  my-monorepo/
  ├─ apps/
  ├─ packages/
  │  ├─ new-package/
  │  │  ├─ package.json  👈 here
  ├─ package.json
  ```

:::tip

Use the same scope in all the `package.json`s of your monorepo, e.g. **@my-org**:

- apps/my-monolith/package.json `{ "name": "@my-org/my-monolith" }`
- packages/new-package/package.json `{ "name": "@my-org/new-package" }`

:::

### Add the `lean` cli

Create a `lean.config.js` file at the root of your monorepo:

```
my-monorepo/
├─ apps/
├─ packages/
├─ lean.config.js  👈 here
├─ package.json
```

Add some config, for example:

```js
const { getDefaultReactWebpack } = require("@leanjs/webpack");

module.exports = {
  devServer: { port: 43210 },
  webpack: {
    // replace the following config with your custom Webpack config
    react: getDefaultReactWebpack(),
  },
};
```

Execute the following command at the root directory of your monorepo:

```sh
yarn add -W -D @leanjs/cli @leanjs/webpack
```

### Create a `micro-frontends` workspace

- Add _"micro-frontends/\*"_ to the following field `workspaces: ["apps/*", "packages/*", "micro-frontends/*"]` in the root package.json.

  ```
  my-monorepo/
  ├─ apps/
  ├─ packages/
  │  ├─ my-monolith/
  │  │  ├─ package.json
  ├─ package.json  👈 here
  ```

- Create a `micro-frontends` folder at the root of your monorepo, e.g.

  ```
  my-monorepo/
  ├─ apps/
  ├─ packages/
  ├─ micro-frontends/ 👈 here
  ├─ package.json
  ```

- Create a micro-frontend inside the `micro-frontends` folder. You must include a `package.json` in your new micro-frontend:

  ```
  my-monorepo/
  ├─ apps/
  ├─ packages/
  ├─ micro-frontends/
  │  ├─ new-micro-frontend/
  │  │  ├─ package.json  👈 here
  ├─ package.json
  ```

- Create a micro-frontend based on your UI library:
  - [React Router](../packages/react-router/)
  - [Vue Router](../packages/vue-router/)

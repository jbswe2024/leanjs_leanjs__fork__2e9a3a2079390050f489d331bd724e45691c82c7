# @leanjs/vue-router

## Installation

If you use a monorepo (recommended), at the root of your repository:

```
my-monorepo/
├─ micro-apps/
│  ├─ vue-router-micro-app-example/
│  │  ├─ package.json
├─ package.json  👈
```

execute the following command:

```sh
yarn add @leanjs/vue-router @leanjs/core vue-router@4 vue@3
```

Then in the `package.json` of your micro-app app

```
my-monorepo/
├─ micro-apps/
│  ├─ vue-router-micro-app-example/
│  │  ├─ package.json 👈
├─ package.json
```

add the following `peerDependencies`:

```
"dependencies": {
  "@leanjs/vue-router": "*",
  "vue-router": "*",
  "vue": "*"
}
```

and also the following `devDependencies`:

```
  "devDependencies": {
    "@leanjs/cli": "*"
  }
```

## Usage

Create a file called `index.ts` in the `src` directory where your micro-app is.

```
my-monorepo/
├─ micro-apps/
│  ├─ vue-router-micro-app-example/
│  │  ├─ package.json
│  │  ├─ src/
│  │  │  ├─ VueApp.vue
│  │  │  ├─ index.ts 👈
├─ package.json
```

> **Note**

<!-- > Read the recommended setup in our [getting started page](../../docs/getting-started#recommended-setup) if you want to create a similar monorepo structure -->

> Read the recommended setup in our [getting started page](/getting-started#recommended-setup) if you want to create a similar monorepo structure

Call `createApp` with the root component of your VueApp and your `createRuntime` function:

```ts
import { createApp } from "@leanjs/vue-router";
// shared runtime example package created by your org
import { createRuntime } from "@my-org/runtime-shared";

import packageJson from "../package.json";
import VueApp from "./VueApp.vue";

// 👇  you must `export default createApp(`
export default createApp(VueApp, {
  createRuntime,
  packageName: packageJson.name,
});
```

> **Note**
> Read [@leanjs/core](/packages/core#runtime) if you have not already created your own `createRuntime` function

Create `VueApp.vue` component, for example:

```vue
<template>
  <h1>Hello Vue micro-app</h1>
</template>
```

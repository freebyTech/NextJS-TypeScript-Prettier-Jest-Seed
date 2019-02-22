# Global NPM Setup

Make sure the following global NPM Modules are installed:

```sh
npm i -g npx
npm i -g typescript
```

# Initial Setup

```sh
npm init -y
npm install --save react react-dom next
npm install -D prettier
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
npm install --save @zeit/next-typescript
mkdir pages
```

Then add the following to package.json:

```json
"scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
}
```

Create a `.prettierrc` file in your project

```js
{
  "printWidth": 120,
  "trailingComma": "es5",
  "arrowParens": "always"
}
```

## Usage

Create a `next.config.js` in your project

```js
// next.config.js
const withTypescript = require("@zeit/next-typescript");
module.exports = withTypescript();
```

Create a `.babelrc` in your project

```js
{
  "presets": [
    "next/babel",
    "@zeit/next-typescript/babel"
  ]
}
```

Create a `tsconfig.json` in your project, either with `tsc --init` or manually, but make sure these options are set below:

```json
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "jsx": "preserve",
    "lib": ["dom", "es2017"],
    "module": "esnext",
    "moduleResolution": "node",
    "noEmit": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "preserveConstEnums": true,
    "removeComments": false,
    "skipLibCheck": true,
    "sourceMap": true,
    "strict": true,
    "target": "esnext"
  }
}
```

Optionally you can add your custom Next.js configuration as parameter

```js
// next.config.js
const withTypescript = require("@zeit/next-typescript");
module.exports = withTypescript({
  webpack(config, options) {
    return config;
  },
});
```

### Type checking

If your IDE or code editor don't provide satisfying TypeScript support, or you want to see error list in console output, you can use [`fork-ts-checker-webpack-plugin`](https://github.com/Realytics/fork-ts-checker-webpack-plugin). It will not increase compile time because it forks type checking in a separate process

```js
// next.config.js
const withTypescript = require("@zeit/next-typescript");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = withTypescript({
  webpack(config, options) {
    // Do not run type checking twice:
    if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());

    return config;
  },
});
```

## Initial Page Load

Create a default index page in pages called index.tsx

```tsx
import React from "react";

const Index: React.FunctionComponent = () => {
  return (
    <div>
      <p>Hello Next.js</p>
    </div>
  );
};

export default Index;
```

You should now be able to serve up your Next.js application using `npm run dev` to http://localhost:3000

# Optimal VS Code Settings

- install `Prettier - Code formatter`
  - under File -> Preferences -> Settings turn on
    - Prettier: Require Config = true
    - Editor: Format on Save = true
- install `ESLint` and `TSLint`
- install `vscode-styled-components`
- install `npm intellisense`
- install `firacode` from https://github.com/tonsky/FiraCode
  - under File -> Preferences -> Settings turn on
    - Text Editor Font = Fira code
    - Enable font ligatures = checked

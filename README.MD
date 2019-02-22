# Global NPM Setup

Make sure the following global NPM Modules are installed:

```sh
npm i -g npx
npm i -g typescript
```

# Initial Setup

In a new directory where the project will be housed:

```sh
npm init -y
npm install --save react react-dom next
npm install -D prettier
npm install --save typescript @types/node @types/react @types/react-dom @types/next
npm install -D tslint tslint-react tslint-config-prettier
npm install --save @zeit/next-typescript
mkdir pages
```

Then add the following to `package.json`:

```json
"scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start",
    "lint": "tslint --project ."
}
```

Create a `.prettierrc` file in your project:

```js
{
  "printWidth": 120,
  "trailingComma": "es5",
  "arrowParens": "always"
}
```

Create a `tslint.json` file in your project:

```json
{
  "extends": ["tslint:recommended", "tslint-react", "tslint-config-prettier"],
  "rules": {
    "ordered-imports": false,
    "object-literal-sort-keys": false,
    "interface-name": false,
    "member-ordering": false,
    "no-console": false
  }
}
```

Create a `next.config.js` file in your project

```js
// next.config.js
const withTypescript = require("@zeit/next-typescript");
module.exports = withTypescript();
```

Create a `.babelrc` file in your project

```js
{
  "presets": [
    "next/babel",
    "@zeit/next-typescript/babel"
  ]
}
```

Create a `tsconfig.json` file in your project, either with `tsc --init` or manually, but make sure these options are set below:

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

Add your custom Next.js configuration:

```js
// next.config.js
const withTypescript = require("@zeit/next-typescript");
module.exports = withTypescript({
  webpack(config, options) {
    return config;
  },
});
```

### Optional Type checking

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

Create a default index page in pages called `index.tsx`

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

# Jest and Enzyme Setup

Install the following additional node packages and create the jest `__tests__` directory:

In a new directory where the project will be housed:

```sh
npm install --save jest babel-jest enzyme enzyme-adapter-react-16 enzyme-to-json react-addons-test-utils react-test-renderer
npm install --save @types/jest @types/enzyme @types/enzyme-adapter-react-16 @types/react-test-renderer
mkdir __tests__
```

Create a `jest.config.js` file in your project:

```js
module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
};
```

Create the `jest.setup.ts` file in your project to properly setup enzyme support:

```ts
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
```

Then add additional run commands to `package.json`:

```json
"scripts": {
    ...
    "test": "jest --silent",
    "test:update": "jest --silent -u",
    "test:watch": "jest --silent --watch",
    "test:coverage": "jest --silent --coverage"
}
```

## Initial Jest Test of Index Page

Create a series of tests for the `index.tsx` page

```tsx
import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import App from "../pages/index";

describe("With Enzyme", () => {
  it('App shows "Hello Next.js"', () => {
    const app = shallow(<App />);

    expect(app.find("p").text()).toEqual("Hello Next.js");
  });
});

describe("With Snapshot Testing", () => {
  it('App shows "Hello Next.js"', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
```

You should now be able to run any of the new test commands that will execute jest like the shorthand command `npm t` which executes `npm run test`.

# Optimal VS Code Settings

For better support of all the packages used in this setup, Visual Studio Code should be updated with the following:

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

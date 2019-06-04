# Powerball Form Demo Project

This is a react typescript demo project which auto-fills ticket numbers based on the results of the last Powerball draw. 

<img width="400" alt="Screenshot" src="https://user-images.githubusercontent.com/51249461/58845020-f0985700-86bc-11e9-845c-7788eaff51ca.png">

Languages / Framework / Dependenies used:
* Typescript for static type checking
* React for Frontend UI Layer
* Redux for state management
* Redux saga for async calls to remote API's
* Reselect for creating selectors used with redux
* Immer used for creating immutable redux reducers (immutable.js alternative)
* Styled Components for styling components using CSS-in-JS
* Webpack and Babel 7 for compilation and serving of the application
* Jest 24 along with React test renderer and enzyme for component and redux unit tests
* Cypress used for E2E Frontend tests
* ESLint and Prettier used for code formatting and standards
* Precommit hooks on unit tests and linting

### Prerequisites
To build and run this project it requires Node and npm/yarn.

See links below to install:
- Node - https://nodejs.org/en/ - v11.14.0 recommended
- NPM / Yarn - https://yarnpkg.com/en/docs/install#mac-stable

## Installation

```
git clone https://github.com/jamesgDemo/Powerball-results-demo.git && cd Powerball-results-demo
yarn install
```

To start in development mode:
```
yarn start
```

To run unit tests: 
```
yarn test
yarn test:coverage
```

To run Cypress E2E tests: 
```
yarn test:e2e
```

To create production bundle which gets compiled in `/dist`: 
```
yarn build
```

To typecheck and lint src files with eslint:
```
yarn lint
```

## Author

By [James Gosbell](https://github.com/jamesg1)

## License

This project is unlicensed.

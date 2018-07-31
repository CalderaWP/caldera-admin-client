# Caldera Admin Client
The Caldera (Forms) 2.0 admin interface client.

[![Build Status](https://travis-ci.org/CalderaWP/caldera-admin-client.svg?branch=master)](https://travis-ci.org/calderawp/caldera-admin-client)
[![Documentation Status](./docs/badge.svg)](https://calderalabs.org/processor-ui/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/CalderaWP/caldera-admin-client/badge.svg?branch=master)](https://coveralls.io/github/CalderaWP/caldera-admin-client?branch=master)
🌋 [Documentation](http://calderalabs.org/caldera-admin-client/)

## What Is This?
* Phase 1: The main Caldera Forms admin screen.
    - Caldera Forms 1.8
* Phase 1.5: Caldera Forms Pro UI v2
* Phase 2: The Caldera (Forms) grid-based form builder
    - Caldera Forms 2.0




## Usage

### Install
`npm i -D @caldera-labs/caldera-admin-client`

^^ Not on npm yet.


### Import With Webpack

### Basic Example

```js
console.log('Hi Roy');
```

## Development

### Development Requirements
* [npm](https://www.npmjs.com/get-npm)
* [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable)
* [Git]()
* [Jest](https://jestjs.io/)
    - `npm install jest jest-cli -g`


### Scripts

#### Develop
* `yarn start`
    - Runs linter and compiles for development
    - Starts test app server

#### Tests
* `yarn test`
    - Run test watcher
* `npm test:once` 
    - Run tests once
* `npm test:coverage` 
    - Run tests once and update coverage

#### Lint Code
* `yarn lint`
    - Run linter and fixer watch
* `yarn lint:fix`
    - Lint and fix code once
* `yarn lint:once`
    - Lint code once


#### Generate Documentation
* `npm run documentation`
    - Generates documentation from inline docs
    - Generates documentation from markdown files in /manual

#### Release To npm
Must be [logged in as project maintainer via npm cli](https://docs.npmjs.com/cli/adduser)

* `yarn release`
    - Release a patch update
    - Increments third position of a version. 1.0.1 -> 1.0.2
* `yarn release:minor`
    - Release a minor update
    - Increments second position of a version. 1.0.1 -> 1.1.0 
* `yarn release:major`
    - Release a major update
    - Increments second position of a version. 1.0.1 -> 2.0.0 
    
These commands run the tests and linter, and if they pass, re-compiles source, rebuilds docs, updates the version using [npm version](https://docs.npmjs.com/cli/version), adds a git tag, makes a git commit for the version change and updates the module on npm.

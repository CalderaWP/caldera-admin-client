# Caldera Admin Client
The Caldera (FormsSlot) 2.0 admin interface client.

[![Build Status](https://travis-ci.org/CalderaWP/caldera-admin-client.svg?branch=master)](https://travis-ci.org/calderawp/caldera-admin-client)
[![Documentation Status](./docs/badge.svg)](https://calderalabs.org/processor-ui/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/CalderaWP/caldera-admin-client/badge.svg?branch=master)](https://coveralls.io/github/CalderaWP/caldera-admin-client?branch=master)
🌋 [Documentation](http://calderalabs.org/caldera-admin-client/)

## What Is This?
* Phase 1: The main Caldera Forms admin screen.
    - Caldera FormsSlot 1.8
* Phase 1.5: Caldera FormsSlot Pro UI v2
* Phase 2: The Caldera (FormsSlot) grid-based form builder
    - Caldera FormsSlot 2.0




## Usage

		
		
### Create Admin App With Factory

Simplest option :

```js
const app = new AdminApp();
ReactDOM.render(app.component(), document.createElement('div'));
```

Slightly less simple option:

```js
//Optional, create element to place component on
document.createElement('div');
//create factory
const app = new AdminApp();
//Render to element with ID of 'div'
app.renderToDom( 'div' );
```

### Using Components

If you want to use the module's state management:
```js
import React from 'react';
import CalderaAdminScreen from '@caldera-labs/admin-client';
const {CalderaAdminWithState} = CalderaAdminScreen;
class App extends React.Component {
	
	render()
	{
		return (
			<CalderaAdminWithState />
		);
	}
}
```

Or to manage your own state:


```js
import ReactDOM from 'react-dom';
import React from 'react';
import CalderaAdminScreen from '@caldera-labs/admin-client';
const {CalderaAdminWithState,store} = CalderaAdminScreen;
import {Provider} from 'react-redux';
ReactDOM.render(
	<Provider store={store}>
		<CalderaAdminWithState/>
	</Provider>,
	document.getElementById('caldera-forms-admin')
);

```

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
* `yarn test:once` 
    - Run tests once
* `yarn test:coverage` 
    - Run tests once and update coverage
 

#### Lint Code
* `yarn lint`
    - Run linter and fixer watch
* `yarn lint:fix`
    - Lint and fix code once
* `yarn lint:once`
    - Lint code once
    
    
#### Build For Production
* `yarn build:no-test`
    - Run tests, regenerate docs and build for production
* `yarn build:no-test`
    - Build for production    
   


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

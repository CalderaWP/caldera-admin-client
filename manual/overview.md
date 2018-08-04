# Overview
Write docs here.


## Structure

* A quick note about state: `<CfAdminWithState>` is used to wrap the interface with state provided by Redux. This overview ignores state until the end as all components below that level should be decoupled from state and remote API management.


* `<Admin.PageBody>`... components are from `@caldera-labs/components` [Admin module](https://calderalabs.org/caldera-components/manual/components.html#list-of-admin-components)
### High Level

```html

<CfAdminWithState>
    <CalderaFormsAdmin>
        <Admin.PageBody>
    		<TopBar/>
           <MainAdmin/>		
        </Admin.PageBody>
    </CalderaFormsAdmin>
</CfAdminWithState>

```

### Top Bar
This view details what is represented as `<TopBar/>` in the high level architecture. The component Wraps [`<Admin.CalderaHeader>`](https://calderalabs.org/caldera-components/function/index.html#static-function-CalderaHeader) 

```html

<Admin.CalderaHeader>
    <NewForm />
    <MainStatus />
    <ProStatus />
</Admin.CalderaHeader>
```

#### `<NewForm />`
* A button to open the new form UI
* The new form UI (after button is opened)

#### `<MainStatus />`
* Primary indicator of success and errors. For example, "Settings Saved" or "Could not delete entries"
* Wraps [`<Admin.StatusIndicator>`](https://calderalabs.org/caldera-components/function/index.html#static-function-StatusIndicator) and `<Button>` from [`@wordpress/components`](https://www.npmjs.com/package/@wordpress/components)

#### `<ProStatus />`
* Indicates if the current site can connect to Caldera Forms Pro app.
* Wraps [`<Admin.StatusIndicator>`](https://calderalabs.org/caldera-components/function/index.html#static-function-StatusIndicator) and `<Button>` from [`@wordpress/components`](https://www.npmjs.com/package/@wordpress/components)

### Main Admin Area
This view details what is represented as `<MainAdmin/>` in the high level architecture.


```jsx
const state = {
	forms: {
		formId: {}
	},
	entries: {
		formId: {
			entryId: {}
		}
	},
	settings: {
		general: {
			...{},
			forms: {
				formId: {}
			}
		},
		proLocal: {
			...{},
			forms: {
				formId: {}
			}
		},
		privacy: {
			forms: {
				formId: {}
			}
		}

	}
}
<Router>
    <FormList
        forms={state.forms}
     >
        <Form 
            form 
        />
    </FormList>
    <Settings 
        forms={state.forms}
        settings={state.settings}
    >
        <ProSettings
            settings
         />
        <GeneralSettings 
            settings
        />
        <PrivacySettings 
            settings
        />
    </Settings>
</Router>
```

### State

This pseudo-code shows how we can map reducers from [`@caldera-labs/state`'s reducers](https://calderalabs.org/caldera-state/variable/index.html#static-variable-reducers) to the state object described above.

 ```js
import {state} from '@caldera-labs/state';
const {reducers} = state;
const state = {
	forms: reducers.formsReducer,
	entries: reducers.entriesReducer,
	settings: {
		general: reducers.settingsReducer,
		proLocal: reducers.proLocalSettingsReducer,
		privacy: reducers.privacySettingsReducer
	}
};
```
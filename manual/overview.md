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
* Indicates if the current site can connect to Caldera FormsSlot Pro app.
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

### Entry and Processor UI
Caldera FormsSlot admin 1.0, which we'll define as how it works in Caldera FormsSlot through 1.7, limits us to looking at the entries of one form or processors of one form. These are useful views, but so are the reverse. We can see all of the entries submitted to one form, but not all entries submitted by anyone with the email address `roy@hiroy.club` to any form. We can show all of the processors for one form, but not all of the Mailchimp processors for all of the forms.

The [Privacy settings screen in Caldera FormsSlot](https://github.com/CalderaWP/Caldera-Forms/tree/master/clients/privacy) is an example of a recent UI developed with the ability to work with the fields of any form. In that client's state, there is a collection of forms and `editForm`, which contains the current form being editted (source)[https://github.com/CalderaWP/Caldera-FormsSlot/blob/master/clients/privacy/containers/PrivacySettings.js#L250-L251].

The entry viewer, in order to show the entries of one form, needs to know which form was selected in `<FormList>`. We could next inside of `<Form>`:

```jsx
<FormList
        forms={state.forms}
        entries={state.entries}
     >
        <Form 
            form 
        >
            <FormEntryViewer
                form
                entries={entries[form.ID]}
            />
    </Form>
</FormList>
```

But:
* That's a lot of props drilling.
* What if we want to move `<FormEntryViewer>`'s position on the page to somewhere outside of `<FormList>`'s position?
* This is strongly teing `<FormEntryViewer>` to entries of one form.



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
import adminState from './index';

const {dispatchers, selectors} = adminState;
import {dispatch} from '@wordpress/data'
import {store, state} from '@caldera-labs/state'

describe('admin state export', () => {
	it('exports dispatchers', () => {
		expect(typeof dispatchers).toBe('function');
	});
	it('exports selectors', () => {
		expect(typeof selectors).toBe('function');
	});

	describe('dispatchers', () => {
		it('exports setForm action ', () => {
			expect(typeof dispatchers(dispatch).setForm).toBe('function');
		});
		it('exports setForms action ', () => {
			expect(typeof dispatchers(dispatch).setForms).toBe('function');
		});
		it('exports newForm action ', () => {
			expect(typeof dispatchers(dispatch).newForm).toBe('function');
		});
		it('exports setEditForm action ', () => {
			expect(typeof dispatchers(dispatch).setEditForm).toBe('function');
		});
		it('exports unsetEditForm action ', () => {
			expect(typeof dispatchers(dispatch).unsetEditForm).toBe('function');
		});
		it('exports addFormPreview action ', () => {
			expect(typeof dispatchers(dispatch).addFormPreview).toBe('function');
		});
		it('exports setFormPrivacyForm action ', () => {
			expect(typeof dispatchers(dispatch).setFormPrivacyForm).toBe('function');
		});
		it('exports updateStyleIncludes action ', () => {
			expect(typeof dispatchers(dispatch).updateStyleIncludes).toBe('function');
		});
		it('exports updateOtherSettings action ', () => {
			expect(typeof dispatchers(dispatch).updateOtherSettings).toBe('function');
		});
		it('exports updateCfProFormSetting action ', () => {
			expect(typeof dispatchers(dispatch).updateCfProFormSetting).toBe('function');
		});
		it('exports updateCfProSettings action ', () => {
			expect(typeof dispatchers(dispatch).updateCfProSettings).toBe('function');
		});
	});

	describe('selectors', () => {
		const forms = [
			{ID: '1'}
		];
		const mockState = {
			[state.CALDERA_FORMS_STORE_SLUG]: {
				forms
			},
			[state.CALDERA_FORMS_PRIVACY_STORE_SLUG]: {
				forms
			},
			[state.CALDERA_FORMS_PRO_LOCAL_SETTINGS_SLUG]: {
				settings: {
					apiKeys:{}
				},
				forms

			},
			[state.CALDERA_FORMS_SETTINGS_SLUG]: {
				styleIncludes:{},
				other:{}
			},

		};
		it('exports forms object ', () => {
			expect(typeof selectors(mockState).forms).toBe('object');
		});

		it('can use forms object ', () => {
			expect(selectors(mockState).forms).toEqual({
				1: forms[0]
			});
		});

		it('exports getForms selectors ', () => {
			expect(typeof selectors(mockState).getForms).toBe('function');
		});
		it('exports getForm selectors ', () => {
			expect(typeof selectors(mockState).getForm).toBe('function');
		});

		it('exports getFormPreview selectors ', () => {
			expect(typeof selectors(mockState).getFormPreview).toBe('function');
		});
		it('exports getFormPrivacySettings selectors ', () => {
			expect(typeof selectors(mockState).getFormPrivacySettings).toBe('function');
		});
		it('exports getFormPreview selectors ', () => {
			expect(typeof selectors(mockState).getFormPreview).toBe('function');
		});
		it('exports getCfProSettings selectors ', () => {
			expect(typeof selectors(mockState).getCfProSettings).toBe('function');
		});
		it('exports getCfProFormSetting selectors ', () => {
			expect(typeof selectors(mockState).getCfProFormSetting).toBe('function');
		});
		it('exports getStyleIncludes selectors ', () => {
			expect(typeof selectors(mockState).getStyleIncludes).toBe('function');
		});
		it('exports getOtherSettings selectors ', () => {
			expect(typeof selectors(mockState).getOtherSettings).toBe('function');
		});
		it('exports proSettings ', () => {
			expect(typeof selectors(mockState).proSettings).toBe('object');
		});

	});
});
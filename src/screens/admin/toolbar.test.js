import renderer from 'react-test-renderer';
import React from 'react';
import Toolbar from './Toolbar'


describe( 'Toolbar', () => {
	it( 'snapshots', () => {
		const mainStatus = {
			message: '',
				show: false,
				success: false,
				updating: false
		}
		expect(
			renderer.create(
				<Toolbar
					mainStatus={mainStatus}
				/>
			).toJSON()
		).toMatchSnapshot();
	});


});


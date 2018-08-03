import renderer from "react-test-renderer";
import React from 'react';
import {EntryRowActions} from "./EntryRowActions";


describe( 'Entry Row actions component', () => {
	it( 'matches snapshot', () => {
		expect(
			renderer.create(
				<EntryRowActions
					onView={() => {}}
					onResend={() => {}}
					onDelete={() => {}}
				/>
			).toJSON()
		).toMatchSnapshot()
	})
});
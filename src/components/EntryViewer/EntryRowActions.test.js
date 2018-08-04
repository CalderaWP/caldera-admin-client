import renderer from "react-test-renderer";
import React from 'react';
import {EntryRowActions} from "./EntryRowActions";
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

describe( 'Entry Row actions component', () => {
	it( 'matches snapshot', () => {
		expect(
			renderer.create(
				<EntryRowActions
					onEntryAction={() => {}}
				/>
			).toJSON()
		).toMatchSnapshot()
	});

	it( 'emits view event', () => {
		let eventTypeReceived = '';
		const component = shallow(
			<EntryRowActions
				onEntryAction={(eventType) => {
					eventTypeReceived = eventType;
				}}
			/>
		);
		component.find( '.' + EntryRowActions.classNames.view).simulate('click');
		expect(eventTypeReceived).toEqual('view');
	});

	it( 'emits delete event', () => {
		let eventTypeReceived = '';
		const component = shallow(
			<EntryRowActions
				onEntryAction={(eventType) => {
					eventTypeReceived = eventType;
				}}
			/>
		);
		component.find( '.' + EntryRowActions.classNames.delete).simulate('click');
		expect(eventTypeReceived).toEqual('delete');
	});

	it( 'emits view resend', () => {
		let eventTypeReceived = '';
		const component = shallow(
			<EntryRowActions
				onEntryAction={(eventType) => {
					eventTypeReceived = eventType;
				}}
			/>
		);
		component.find( '.' + EntryRowActions.classNames.resend).simulate('click');
		expect(eventTypeReceived).toEqual('resend');
	});
});
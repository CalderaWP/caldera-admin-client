import React from 'react';
import {createSlotFill} from '@wordpress/components'

const {Fill, Slot} = createSlotFill('Viewer');

export default class Viewer extends React.Component {
	static Content = (props) => (
		<Fill name="Viewer.Content">
			<div>{props.children}</div>
		</Fill>
	);

	render() {
		return (
			<main>
				<Slot name="Viewer.Content">
					{(items) => <div>{items[items.length - 1]}</div>}
				</Slot>
			</main>
		);
	}
}

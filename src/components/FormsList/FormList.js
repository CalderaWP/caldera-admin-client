import React from 'react';
import propTypes from 'prop-types'
import {Form} from "./Form";

export const FormList = (props) => {
	const forms = Array.isArray(props.form) ? props.form : Object.values(props.forms);
	return (
		<table className="widefat fixed">
			<thead>
			<tr>
				<th>Form</th>
				<th
					style={{width: '5em', textAlign: 'center'}}>
					Entries
				</th>
			</tr>
			</thead>
			<tbody>

			{forms.map(form => {
				return (
					<Form
						key={form.ID}
						form={form}
						onFormUpdate={props.onFormUpdate}
					/>


				);
			})}
			</tbody>
		</table>
	);
};

FormList.propTypes = {
	forms: propTypes.array.isRequired,
	onFormUpdate: propTypes.func.isRequired,
};



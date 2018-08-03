import React from "react";
import PropTypes from 'prop-types';
import {Button} from '@wordpress/components'

export const EntryRowActions = (props) => {

		return(
			<div>
				<Button
					onClick={props.onView}
				>
					View
				</Button>
				<Button
					onClick={props.onDelete}

				>
					Delete
				</Button>
				<Button
					onClick={props.onResend}

				>
					Resend
				</Button>
			</div>
		)





};

EntryRowActions.propTypes = {
	onView: PropTypes.func,
	onDelete: PropTypes.func,
	onResend: PropTypes.func
};


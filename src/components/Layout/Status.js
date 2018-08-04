import React from 'react';
import {Spinner} from '@wordpress/components';
import PropTypes from 'prop-types'
import {Admin} from '@caldera-labs/components'

export const Status = (props) => {
	if (props.updating) {
		return (
			<Spinner/>
		)
	}
	return (
		<Admin.StatusIndicator
			message={props.message}
			show={props.show}
			success={props.success}
		/>
	)
};

Status.propTypes = {
	updating: PropTypes.bool,
	show: PropTypes.bool,
	success: PropTypes.bool,
	message: PropTypes.string,
};

Status.defaultProps = {
	show: false,
	success: true,
};



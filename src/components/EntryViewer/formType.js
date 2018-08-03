import PropTypes from 'prop-types';

const stringOrNumber = PropTypes.oneOfType([
	PropTypes.string,
	PropTypes.number,
]);
export const idType =
	stringOrNumber.isRequired;

export const nameType = PropTypes.string.isRequired;

export default {
	ID: idType,
	name: nameType,
	fields: PropTypes.shape({
			ID: idType,
			name: nameType,
			type: PropTypes.string
	}),
	emailIdentifyingFields: PropTypes.array,
	piiFields: PropTypes.array,
	privacyExporterEnabled: PropTypes.bool,
	field_details: PropTypes.shape(
		{
			order: PropTypes.shape(
				{
					id: idType,
					label: PropTypes.string
				}
			).isRequired,
			entry_list: PropTypes.shape(
				{
					id: idType,
					label: PropTypes.string
				}
			).isRequired
		}
	).isRequired,
	mailer: PropTypes.shape(
		{
			active: PropTypes.bool
		}
	),
	entries: PropTypes.shape(
		{
			count: stringOrNumber
		}
	)
}
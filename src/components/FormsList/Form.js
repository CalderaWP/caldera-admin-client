import React from 'react';
import {PureComponent} from 'react';
import propTypes from 'prop-types';
import {ShortcodeViewer} from "./ShortcodeViewer";

export class Form extends PureComponent {


	constructor(props)
	{
		super(props);
		this.state = {
			showShortcode: false,
		};

		this.toggleShortcodeView = this.toggleShortcodeView.bind(this);
	}

	toggleShortcodeView()
	{
		this.setState({ showShortcode: ! this.state.showShortcode });
	}
	render()
	{
		return (

			<tr
				id={`form_row_${this.props.form.ID}`}
				className="alternate form_entry_row"
			>
				<td className="active-form">
					{!this.state.showShortcode &&
						<span className="cf-form-name-preview">{this.props.form.name}</span>
					}
					<span className="cf-form-view-shorcode">
						<ShortcodeViewer
							formId={this.props.form.ID}
							onButtonClick={this.toggleShortcodeView}
							show={this.state.showShortcode}
						/>
					</span>



					<div className="row-actions">
						<span className="edit">
							<a
								href={`forms/${this.props.form.ID}/edit`}
							>
								Edit
							</a>
							<button>
								Enable
							</button>
							<button>
								Disable
							</button>
						</span>
					</div>
				</td>
			</tr>
		);
	}

};

Form.propTypes = {
	form: propTypes.object.isRequired,
	onFormUpdate: propTypes.func.isRequired,
};



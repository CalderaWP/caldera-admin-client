import React, {Component} from 'react';

export default class AdminSlot extends Component {
	constructor(props) {
		super(props);
		this.state = {active: false};
		this.handleActive = this.handleActive.bind(this);
		this.handleDeactive = this.handleDeactive.bind(this);
	}

	handleActive() {
		this.setState({active: true});
	}

	handleDeactive() {
		this.setState({active: false});
	}




};

import React from 'react'

export default class AddProfile extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			displayName: '',
			profilePhoto: '',
			email: ''
		}
		this.handleName = this.handleName.bind(this)
		this.handlePhoto = this.handlePhoto.bind(this)
		this.handleEmail = this.handleEmail.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

	handleName(e) {
		this.setState({
			displayName: e.target.value
		})
	}
	handlePhoto(e) {
		this.setState({
			profilePhoto: e.target.value
		})
	}
	handleEmail(e) {
		this.setState({
			email: e.target.value
		})
	}

	handleClick(e) {
		let newProfile = {
			displayName: this.state.displayName,
			profilePhoto: this.state.profilePhoto,
			email: this.state.email
		}
		this.props.addUser(newProfile)
	}

	render() {
		return (
			<div>
				<p>Add a new Profile!</p>
				<input placeholder="Name" onChange={this.handleName} value={this.state.displayName} />
				<input placeholder="your image url" onChange={this.handlePhoto} value={this.state.profilePhoto} />
				<input placeholder="email-address" onChange={this.handleEmail} value={this.state.email} />
				<button onClick={this.handleClick}>Add</button>
			</div>
		)
	}
}
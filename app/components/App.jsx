import React from 'react'
import Profile from './Profile.jsx'
import AddProfile from './AddProfile.jsx'
import SignIn from './SignIn.jsx'

import {getProfiles} from '../utils/profileApi'

export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			users: []
		}
		this.addUser = this.addUser.bind(this)
	}

	componentDidMount() {

		// console.log(getProfiles());
		// let data = getProfiles()

		//need to spin up local server with mock data
		getProfiles().then(profiles => {
			console.log(profiles)
			this.setState({
				users: profiles
			})
		})
	}

	addUser(newProfile) {
		this.setState({
			users: this.state.users.concat([newProfile])
		})
	}

	render() {
		let profiles = this.state.users.map((profile, index) => {
			return (
					<Profile 
					key = {index}
					displayName = {profile.displayName}
					profilePhoto = {profile.profilePhoto}
					email = {profile.email} />
					
			)
		})
		
		return (
			<div>
				<SignIn />
				{profiles}
				<AddProfile addUser={this.addUser} />
			</div>
		)
	}



}

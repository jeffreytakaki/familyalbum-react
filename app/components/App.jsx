import React from 'react'
import Profile from './Profile.jsx'
import AddProfile from './AddProfile.jsx'

import {getProfiles} from '../utils/profileApi'

export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			profiles: []
		}
		this.addUser = this.addUser.bind(this)
	}

	componentDidMount() {

		// console.log(getProfiles());

		//need to spin up local server with mock data
		getProfiles().then(profiles => {
			this.setState({
				profiles: profiles
			})
		})
	}

	addUser(newProfile) {
		this.setState({
			profiles: this.state.profiles.concat([newProfile])
		})
		console.log(this.state)
	}

	render() {
		let profiles = this.state.profiles.map((profile, index) => {
			return (
				
					<Profile 
					key = {index}
					name = {profile.name}
					age = {profile.age}
					bio = {profile.bio}
					hobbies = {profile.hobbies}/>
				
			)
		})
		
		return (
			<div>
				{profiles}
				<AddProfile addUser={this.addUser} />
			</div>
		)
	}



}

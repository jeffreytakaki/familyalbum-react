import React from 'react'

/* 
1 - the first block of code was the original implementation of profile. 
2 - the second block of code replaced the first block of code and is an example of stateless function expression. 
this is, if there is no state invovled, we can refactor and made this basic 'profile render' straight forward.

*/

// export default class Profile extends React.Component {
// 	render() {

// 		let hobbies = this.props.hobbies.map(function(hobby){
// 			return <li>{hobby}</li>
// 		})
// 		return (
// 			<div>
// 				<h3>{this.props.name}</h3>
// 				<p>
// 					{this.props.name} is {this.props.age } & enjoys {this.props.bio}
// 				</p>
// 				<h3>Hobbies</h3>
// 				<ul>
// 					{hobbies}
// 				</ul>
// 			</div>
// 		)
// 	}
// }



let Profile = props => (

	<div>
		<h3>{props.displayName}</h3>
		<img src={props.profilePhoto} width="100" height="100" />
		<p>{props.email}</p>
		
		
	</div>
		
)

export default Profile
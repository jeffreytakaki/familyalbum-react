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
		<h3>{props.name}</h3>
		<p>
			{props.name} is {props.age } & enjoys {props.bio}
		</p>
		<h3>Hobbies</h3>
		<ul>
			{props.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
		</ul>
	</div>
		
)

export default Profile
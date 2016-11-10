import React from 'react'

export default class SignIn extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			id: '',
			displayName: '',
			email: ''
		}
		this.toggleSignIn = this.toggleSignIn.bind(this)
		this.saveUser = this.saveUser.bind(this)
	}

	


	/**
     * Function called when clicking the Login/Logout button.
     */
    // [START buttoncallback]
    toggleSignIn() {
    	var self = this

		var config = {
			apiKey: "AIzaSyDl-d0I6Ofgk_xMi-F6FJwW944qGn7RbB8",
			authDomain: "familyalbum-3553a.firebaseapp.com",
			databaseURL: "https://familyalbum-3553a.firebaseio.com",
			storageBucket: "familyalbum-3553a.appspot.com",
			messagingSenderId: "272805338671"
		};
		firebase.initializeApp(config);
		var database = firebase.database();

		if (!firebase.auth().currentUser) {
			// [START createprovider]
			var provider = new firebase.auth.FacebookAuthProvider();
			// [END createprovider]
			// [START addscopes]
			provider.addScope('user_birthday');
			// [END addscopes]
			// [START signin]
			firebase.auth().signInWithPopup(provider).then(function(result) {
				// This gives you a Facebook Access Token. You can use it to access the Facebook API.
				console.log(result)
				var token = result.credential.accessToken;
				var user = result.user;
//return something back like  UID
				//why isn't this working?
				console.log(self)
				// saveUser(user)
				// database.ref('users').push({
				// 	profilePhoto: user.photoURL,
				// 	displayName: user.displayName,
				// 	email: user.email
				// });
				
			}).catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				// [START_EXCLUDE]
				if (errorCode === 'auth/account-exists-with-different-credential') {
					alert('You have already signed up with a different auth provider for that email.');
					// If you are using multiple auth providers on your app you should handle linking
					// the user's accounts here.
				} else {
					console.error(error);
				}
				// [END_EXCLUDE]
			});
			// [END signin]
		} else {
			// [START signout]
			firebase.auth().signOut();
			// [END signout]
		}
		
    }
    // [END buttoncallback]

    toggleSignOut() {
    	firebase.auth().signOut();
    }

    saveUser(user) {
		this.setState({
			id: null,
			profilePhoto: user.URL,
			displayName: user.displayName,
			email: user.email
		})
    }


	render() {
		
		return (
			<div>
				<p>{this.id}</p>
				<p><img src={this.id} /></p>
				<p>{this.displayName}</p>
				<p>{this.email}</p>
				
				<button onClick={this.toggleSignIn}>Sign In</button>
			</div>
		)
		
	}



}
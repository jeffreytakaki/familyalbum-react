// a node server was set up in directory familyalbum-mockdata to dynamically serve mock data
// go to that folder and run command node server. 

const ENDPOINT = 'http://localhost:3000/'

export function getProfiles() {
	return fetch(ENDPOINT)
	.then(res => res.json())
	.catch(err=>{
		console.log(err)
	})
}


// export function getProfiles() {
// 	// Initialize Firebase
// 	var config = {
// 		apiKey: "AIzaSyDl-d0I6Ofgk_xMi-F6FJwW944qGn7RbB8",
// 		authDomain: "familyalbum-3553a.firebaseapp.com",
// 		databaseURL: "https://familyalbum-3553a.firebaseio.com",
// 		storageBucket: "familyalbum-3553a.appspot.com",
// 		messagingSenderId: "272805338671"
// 	};

// 	firebase.initializeApp(config);

// 	// connect to your Firebase application using your reference URL
// 	// var database = firebase.database();


// 	// var userId = firebase.auth().currentUser.uid;
// 	return firebase.database().ref('/users/' ).once('value').then(function(snapshot) {
// 		var username = snapshot.val()
// 		console.log(username)
// 	// ...
// 	});

// 	// return database;
// }


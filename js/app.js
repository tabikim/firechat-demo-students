// Initiate Angular app that includes firebase

// Initiate controller for your app including scope, firebaseAuth, firebaseArray, firebaseObject

// Create variable reference that refers to your firebase

// Create an authObj that refers to your ref

// Create authentication and create a new instance of firechat

// Upon successful authentication, initiate firechat 

	// Sign-up function
	$scope.signUp = function() {
		$scope.authObj.$createUser({
			email: $scope.email,
			password: $scope.password, 			
		})
		.then($scope.logIn)
	}

	// Login function
	$scope.logIn = function() {
		$scope.authObj.$authWithPassword({
			email: $scope.email,
			password: $scope.password
		}).then(function(authData) {
			  console.log("Logged in as:", authData.uid);
			  $scope.userId = authData.uid
			  // Initiate firechat here as well!
			  
			  chat.setUser(authData.uid, authData.uid);
			  
		}).catch(function(error) {
			  console.error("Authentication failed:", error);
		});
	}

	$scope.logOut = function() {
		$scope.authObj.$unauth()
		$scope.userId = false
	}
})

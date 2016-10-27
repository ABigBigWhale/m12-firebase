// Main.js
$(function() {

	// Setup: Initialize Firebase using the configuration of your project
    var config = {
        apiKey: "AIzaSyCeoK36IJqt7R2HNO8KzMBNHiZeotDCOfc",
        authDomain: "info343-m12-e2.firebaseapp.com",
        databaseURL: "https://info343-m12-e2.firebaseio.com",
        storageBucket: "info343-m12-e2.appspot.com",
        messagingSenderId: "688551405119"
    };
    firebase.initializeApp(config);

	// Set a reference to a "photos" point in your database
    var photosRef = firebase.database().ref('photos');

	// Create a variable to store the firebase storage object
    var storage = firebase.storage();

	// Set listener: when an child is added, render each photo
    photosRef.on('child_added', function(snapshot){
        // Get the value of the data
        var data = snapshot.val();

		// Using jQuery, create a new img element with the URL of your data
        var img = $('img').attr('src', data.url);

		// Append your img to your element with id photos
        $('#photos').append(img);
    });

	// Reading Data: Form submission
    
    // Get the file
    var uploadedFile = $('#file-upload')[0].files[0];

    // Create a reference on Firebase storage using the filename
    var uploadRef = storage.ref(uploadedFile);
    
    // Put a file in the specified location, then...
    fileRef.put(uploadedFile).then(function(){
        
        
        
    });

    

        // Get the download URL from the reference, then...

            // Push the URL as a new child into your data structure
})

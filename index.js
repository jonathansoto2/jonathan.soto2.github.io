/** on state change */
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("login-div").style.display = "none";
      document.getElementById("user-div").style.display = "grid";
      
    } else {
      // No user is signed in.
    }
  });

/** 
*function that handles what happens when the login button is clicked 
*changes the style of the div that holds the loggin page to none
* and the display style of the user portal
*/
function login(){
    
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert(errorMessage);
      // ...
    });
    
};

/**handles what happens when the user presses the signout button
 * changes the style of the div that holds the loggin page to none
 * and the display style of the user portal
 */
function signout (){

    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      document.getElementById("user-div").style.display = "none";
      document.getElementById("login-div").style.display = "block";
    }).catch(function(error) {
      // An error happened.
    });
};

function timeclock(){

  location.href ="timeclock.html";

};

function sales(){

  location.href ="sales.html";

};

function requestPTO(){
  location.href = "https://docs.google.com/forms/d/e/1FAIpQLSe_yQBPma1OvADmRULfIKXRMlZZn1_loBJapSBmGb0mnnJagg/viewform?usp=sf_linkhttps://docs.google.com/forms/d/e/1FAIpQLSe_yQBPma1OvADmRULfIKXRMlZZn1_loBJapSBmGb0mnnJagg/viewform?usp=sf_link"
};
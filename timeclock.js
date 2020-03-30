var timeClockCounter = 0;
var collectionOfTimes = [];
const DB = firebase.firestore();


//set the current 'user' to the .doc of docRef 
var timesheetDoc = DB.collection("users").doc("Kyle");
console.log(timesheetDoc);

timesheetDoc.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      
        //set times 

/**
 * stores the user email in local storage to use outside of this scope
 */
localStorage.setItem('userEmail', firebase.auth().currentUser.email);
//if there is a user signed in then it will console.log the email of the user
      if (firebase.auth().currentUser !== null) 
      console.log("user id: " + firebase.auth().currentUser.email);

    } else {
      
    }
  });

var userEmail = localStorage.getItem('userEmail');

//console.log(userEmail);

/**
 * Handles what happens once the clockin button is clicked
 */



function clockin(){ 

    
            //grab the element to insert the date
            var displayTimeClockedin = document.getElementById("clockedin");
            //then we want to add the date to it
                //create a new date
            var date = new Date();
                //create the days of the week in an array 
                var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
                var day = days[ date.getDay() ];
                
                
                //we want to get the month , day, year 
                    let currentDate = date.getMonth().toString()+ "/" +  date.getDay().toString() + "/"+ date.getFullYear().toString();
            
                //also get the time hours , minutes 
                    let currentTime = date.getHours().toString() + ":" + date.getMinutes().toString();
                //add them to the page
                    
                //add the date and time to a table/array/jsonformat 

                //keep track of times clocked in

            //paragraph.innerHTML = date.toString();
            

            

            if (timeClockCounter == 0){
                var newRow = document.createElement("td");
                newRow.innerText = currentDate + " | " +  currentTime;
                document.getElementById(day).appendChild(newRow);   
                newRow.style.textAlign = "center";
                
                
                console.log(timeClockCounter);
                timeClockCounter = timeClockCounter + 1;
                collectionOfTimes.push(currentTime);
                console.log(collectionOfTimes);
                timesheetDoc.add({
                    "times": collectionOfTimes
                })
    .then(function() {
        console.log("Document successfully written!");
    })
            }else if(timeClockCounter == 1 ){
                window.alert("you've already clocked in")
            }

            if(timeClockCounter % 2 == 0 && timeClockCounter.valueOf() > 0){
                var newTimeInRow = document.createElement("th");
                newTimeInRow.innerText = "Time in";
                document.getElementById("punch-row").appendChild(newTimeInRow);
                var newRow = document.createElement("td");
                newRow.innerText = currentDate + " | " +  currentTime;
                document.getElementById(day).appendChild(newRow);   
                newRow.style.textAlign = "center";
                
                
                console.log(timeClockCounter);
                timeClockCounter = timeClockCounter + 1;
            }else if(timeClockCounter % 2 == 1 && timeClockCounter.valueOf() > 2 ){
                window.alert("you're already clocked in");
            }
            

};
    
/**
 * Handles what happens once the clockout button is clicked
 */

function clockout(){

    //grab the element to insert the date
    var paragraph = document.getElementById("clockedout");

    var displayTimeClockedOut = document.getElementById("clockedout");
    //then we want to add the date to it
        //create a new date
        var date = new Date();
        //turn it into a string
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var day = days[ date.getDay() ];
        //we want to get the month , day, year 
        let currentDate = date.getMonth().toString()+ "/" +  date.getDay().toString() + "/"+ date.getFullYear().toString();
        //also get the time hours , minutes 
        let currentTime = date.getHours().toString() + ":" + date.getMinutes().toString();
                
        //add them to the page
       
                
        //add the date and time to a table/array/jsonformat 

        //keep track of times clocked out
        if (timeClockCounter == 1){
            var newRow = document.createElement("td");
            newRow.innerText = currentDate + " | " +  currentTime;
            document.getElementById(day).appendChild(newRow);   
            newRow.style.textAlign = "center";
            
            
            
            timeClockCounter = timeClockCounter + 1;
            collectionOfTimes.push(currentTime);
            console.log(collectionOfTimes);
        }else if(timeClockCounter == 2){
            window.alert("you are not clocked in!")
        }
        if(timeClockCounter % 2 == 1 && timeClockCounter.valueOf() > 2){
            var newTimeOutRow = document.createElement("th");
            newTimeOutRow.innerText = "Time out";
            document.getElementById("punch-row").appendChild(newTimeOutRow);
            var newRow = document.createElement("td");
            newRow.innerText = currentDate + " | " +  currentTime;
            //push to collection of times 
            document.getElementById(day).appendChild(newRow);   
            newRow.style.textAlign = "center";
            
            
            console.log(timeClockCounter);
            timeClockCounter = timeClockCounter + 1;
        }else if(timeClockCounter % 2 == 0 && timeClockCounter.valueOf() > 3 ){
            window.alert("you are not clocked in");
        }
        

   //let doc = DB.collection().doc().get();
    //qlet timesheet = doc.timesheet

};

var DATE = Date();

var ACCESS_TOKEN = "31465581.2075d8b.17907f14606b43ad93aa5c0cfc320513";

var request = new XMLHttpRequest();

request.open("GET", "https://api.instagram.com/v1/users/self/?access_token=31465581.2075d8b.17907f14606b43ad93aa5c0cfc320513", true);

request.onload = function(){
    var data = JSON.parse(this.response);

    console.log(data.bio);

};


request.send();

console.log("hello work pls");
console.log(DATE);
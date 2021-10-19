var getUserRepos = function(user) {
    //format github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";


//make a request to the url
    fetch(apiUrl).then(function(response) {
        console.log(response);
    response.json().then(function(data) {
        console.log(data);
    });
    });
};

var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

var formSubmitHandler = function(event) {
    var username = nameInputEl.value.trim();

    if (username) {
        getUserRepos(username);
        nameInputEl.value = "";
    } else {
        alert("Please enter a GitHub username");
    }



    event.preventDefault();
    console.log(event);
};

userFormEl.addEventListener("submit", formSubmitHandler);
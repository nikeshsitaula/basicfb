var database = [
    {
        username: "name",
        password: '1234'
    }, {
        username: "name1",
        password: '1234'
    }, {
        username: "name2",
        password: '1234'
    }, {
        username: "name3",
        password: '1234'
    }, {
        username: "name4",
        password: '1234'
    },


];

var newsfeed = [
    {
        username: "username1",
        timeline: "timeline1"
    },
    {
        username: "username2",
        timeline: "timeline2"
    },
    {
        username: "username3",
        timeline: "timeline3"
    }
];

var userNamePrompt = prompt("Enter Username");
var passwordPrompt = prompt("Enter Password");

function checkLoginCredentials(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (username === database[i].username &&
            password === database[i].password) {
            return true
        }
    }
    return false
}

function loginCredentialsCheck(username, password) {

    console.log(checkLoginCredentials(username,password))
    if ( checkLoginCredentials(username,password) === true) {
        console.log(newsfeed);
    } else {
        alert('Login credentials invalid. Please try again!')
    }
}

loginCredentialsCheck(userNamePrompt, passwordPrompt);

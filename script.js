var database = [
    {
        username: "name",
        password: '1234'
    }
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

function loginCredentialsCheck(username, password) {
    if (username === database[0].username && database[0].password) {
        console.log(newsfeed);
    } else {
        alert('Login credentials invalid. Please try again!')
    }
}

loginCredentialsCheck(userNamePrompt, passwordPrompt);
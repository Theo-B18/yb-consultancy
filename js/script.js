var today = new Date();
var hourNow = today.getHours();
var greetings;

if (hourNow > 10) {
    greeting = 'GOOD EVENING';
} else if (hourNow > 12) {
    greeting = 'GOOD AFTERNOON';
} else if (hourNow > 0) {
    greeting = 'GOOD MORNING';
} else {
    greeting = 'Welcome';
}

//document.write('<h3>' + greeting + '</h3>');
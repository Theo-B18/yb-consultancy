var today = new Date();
var hourNow = today.getHours();
var greetings;


if (hourNow > 10) {
    greeting = 'Good evening';
} else if (hourNow > 12) {
    greeting = 'Good afternoon';
} else if (hourNow > 0) {
    greeting = 'Good morning';
} else {
    greeting = 'Welcome';
}

document.write('<h3>' + greeting + '' + '    ' + 'client!!' + '</h3>');
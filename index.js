//This is the javascript code to make immage rollover happen every 2 seconds on the mainpage.html
// The source for this code is https://www.w3schools.com/howto/howto_js_slideshow.asp
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides"); //getting all the slides for the mainpage
    var dots = document.getElementsByClassName("dot"); // Getting all 3 bullets repesenting the showing page
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hiding all the slides
    }
    slideIndex++; //increasing the slideIndex by 1
    if (slideIndex > slides.length) { slideIndex = 1 } //If index is greater than number of slides, will set it back to first
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //Setting all dots to non-active mode
    }
    slides[slideIndex - 1].style.display = "block"; //Displaying slide
    dots[slideIndex - 1].className += " active"; //Setting the dot for the slide displayed above to actove
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}


//This part of jascript is used to show the current EST in the store timings area
//https://stackoverflow.com/questions/9070604/how-to-convert-datetime-from-the-users-timezone-to-est-in-javascript
//https://www.plus2net.com/javascript_tutorial/clock.php
function display_c() {
    var refresh = 1000; // Refresh rate in milli seconds
    mytime = setTimeout('display_ct()', refresh)
}

function display_ct() {
    offset = -5;
    var clientDate = new Date();
    utc = clientDate.getTime() + (clientDate.getTimezoneOffset() * 60000);
    var today_date = new Date(utc + (3600000 * offset)); //Setting the variable today_date to current EST date object
    var month_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']; //list of all months
    var day_arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] //list of all days
    var day = day_arr[today_date.getDay()] //getting day from today_date object
    var month = month_arr[today_date.getMonth()];
    var date = today_date.getDate();
    var year = today_date.getFullYear();
    if (date < 10) { date = '0' + date; } //making sure date is in 2 digit format
    var final = day + "," + month + '-' + date + '-' + year; //string with day and date in it

    // time part //
    var hour = today_date.getHours(); //getting current hour from today_date object
    var minute = today_date.getMinutes();
    var second = today_date.getSeconds();
    var time_zone = "am" //initializing time zone to am
    if (hour >= 13) { //making sure to convert it to pm if needed
        hour = hour - 12;
        time_zone = "pm";
    }
    if (hour == 12) { time_zone = "pm"; }
    if (hour < 10) { hour = '0' + hour; } //making hour in 2 digit format aswell
    if (minute < 10) { minute = '0' + minute; }
    if (second < 10) { second = '0' + second; }
    var final = final + ' ' + hour + ':' + minute + ':' + second + time_zone //the final string

    document.getElementById('ct').innerHTML = final; //setting the id 'ct' from HTML to the time
    display_c();
}
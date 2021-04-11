// Set ID variables

let saveBtn = $('.saveBtn').on('click', function () {
    let activity = $(this).siblings('.form-control').val();
    console.log(activity)
    let hour = $(this).siblings('.form-control').attr('id');
    console.log(hour)
    localStorage.setItem(hour, activity);
    console.log(localStorage)
})
let userInput = $(":input");
let removeBtn = $('.removeBtn')
let currentTime = $('#currentTime')

$('#hour9').val(localStorage.getItem('hour9'))
$('#hour10').val(localStorage.getItem('hour10'))
$('#hour11').val(localStorage.getItem('hour11'))
$('#hour12').val(localStorage.getItem('hour12'))
$('#hour13').val(localStorage.getItem('hour13'))
$('#hour14').val(localStorage.getItem('hour14'))
$('#hour15').val(localStorage.getItem('hour15'))
$('#hour16').val(localStorage.getItem('hour16'))
$('#hour17').val(localStorage.getItem('hour17'))


// set span description to display date from Moment JS
currentTime.text(moment().format(' MMMM Do YYYY'));

// Color code input background based on past, present, future

// ~~~~~ NEED TO MAKE VARIABLE FOR HOUR ~~~~~


function timeTracker() {
    //get current number of hours.
    var timeNow = moment().hour();
    console.log(timeNow)
    // loop over time blocks
    $(".form-control").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockTime)
        // To check the time and add the classes for background indicators
        if (blockTime < timeNow) {
            $(this).removeClass("bg-dark");
            $(this).addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("bg-dark");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("bg-dark");
            $(this).addClass("future");
        }
    })
}
// Refreshes the color changer every 5 minutes
setInterval(timeTracker(), 50000);




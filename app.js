// Set ID variables

let saveBtn = $('.saveBtn');
let userInput = $(":input");
let removeBtn = $('.removeBtn')

// Get day & hour from Moment.js

// Color code input background based on past, present, future

// Save Button saves input to local storage & displays remove button

saveBtn.on('click', function saveInput(){
    event.preventDefault;
    removeBtn.removeClass('d-none');
})

// Remove Button removes the saved input


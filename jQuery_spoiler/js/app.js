$('.spoiler').on('click', 'button', function(event){
    // when the 'show jQuery_spoiler' button is pressed - reveal jQuery_spoiler
    $(this).prev().show();
    $(this).hide();
});


// create "Reveal Spoiler" & append to webpage
const $button = $('<button>Reveal Spoiler</button>');

//Append button
$('.spoiler').append($button);

// Hiding spoiler texts
$('.spoiler span').hide();


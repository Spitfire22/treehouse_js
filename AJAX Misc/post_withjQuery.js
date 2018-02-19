$(document).ready(function () {

    $('form').submit(function(evt){
        evt.preventDefault(); // prevents the webserver from leaving the page until the form is submitted
        let url = $(this).attr('action');
        let formData = $(this).serialize();
        $.post(url, formData, function(response){
            $('#alert').html("<p>Form Submitted</p>");
        }); //end post
    }); //end submit
}); //end ready

// robust version: robustWithjQuery.js
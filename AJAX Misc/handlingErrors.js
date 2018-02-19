$(document).ready(function() {
    $.get('missing.html', function(data) {
        $('myDiv').html(data);
    }).fail(function (jqXHR){
        $('myDiv').html("<p>Sorry! " + jqXHR.statusText + " error.</p>");
    });
});

// this does not work from a different webserver, use a standard way of finding if
// the load had failed from an outside source. Also this does not work with load.

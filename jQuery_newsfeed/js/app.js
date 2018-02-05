
// applies to the link only on odd items in the list elements
const $odd = $('a:odd');
// applies to the https links only - note it starts with ^, this starts with the string following
const $secureLinks = $('a[href^="https://"]');
// applies to the links that end with .pdf - note it starts with $, then the string
const $pdfs = $('a[href$=".pdf"]');
// creates a checkbox for pdf downloads
const $pdfCheck = $('<label><input type=\'checkbox\'> Allow PDF downloads</label>');

$secureLinks.attr('target', '_blank');

$pdfs.attr('download', true);

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');


// check to see if checkbox is checked - if not, prevent download, alert user. if yes, download.
$pdfs.on('click', function(event){
    if ($(':checked').length ===0){
        event.preventDefault();
        alert('Please check the box to allow the PDF downloads.');
    }
});

$('#links').append($pdfCheck);

$('a').each(function(){
    // console.log(index, $(link).attr('href'));
    const url = $(this).attr('href');
    $(this).parent().append(`(${url})`);

});
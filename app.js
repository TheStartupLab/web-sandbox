/*
* document.ready is just a function we wrap all our code in 
* to ensure the document has loaded, and all elements we want to 
* intereact with have loaded into the brower.
*/

$(document).ready(function(){

    //You can open your browser console and read this. Nice for debugging!
    console.log('document is ready!');


    /*
    *   Your code goes here
    */
    $('#btn').click(function(){
        
        var name = $('#contact').val();
        alert('Hello '+name+ ' !');

    })

});
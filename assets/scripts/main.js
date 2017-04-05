/**
 * Created by jason on 3/7/17.
 */
//TODO research quote API and how to utilize jQuery JSON
//TODO research API for tweeting and email subscription


$(document).ready(function(){
    $.getJSON("http://quotes.rest/qod.json", function(json) {
            $("#quote").html((json.value.quotes));
    });


$(".btnRow").click(function(){
    $(".quoteDisplay").slideToggle("slow");
    init();
    $(".quoteDisplay").slideToggle("slow");
});


// http://quotes.rest/qod.json


//deprecated, was going to color switch but contrast wasn't right in a lot of cases.
// function randomColor() {
//     //pick a red from 0 to 255
//     var r = Math.floor(Math.random() * 256);
//     //pick a blue from 0 to 255
//     var g = Math.floor(Math.random() * 256);
//     //pick a green from 0 to 255
//     var b = Math.floor(Math.random() * 256);
//     randoColor = "rgb(" + r + ", " + g + ", " + b + ")";
//     return randoColor;
// }



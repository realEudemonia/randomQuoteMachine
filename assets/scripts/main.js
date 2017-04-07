/**
 * Created by jason on 3/7/17.
 */
//TODO research API for tweeting and email subscription
//TODO tinker with how to get different quotes via a different categories

init();

function init() {
    grabQuote();
}

function grabQuote() {
    $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json) {
        $("#quote").html((json.quote));
        $("#author").html((json.author));
        console.log(json.author)
    });
}

$(".btnRow").click(function(){
    $(".quoteDisplay").slideToggle("slow");
    grabQuote();
    $(".quoteDisplay").slideToggle("slow");
});


// http://quotes.rest/qod.json

//deprecated, first testing to get JSON to work
// function grabQuote() {
//     $.getJSON("http://quotes.rest/qod.json", function(json) {
//         $("#quote").html((json.contents.quotes[0].quote));
//         $("#author").html((json.contents.quotes[0].author));
//         console.log(json.contents.quotes[0].author)
//     });
// }

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



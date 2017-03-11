/**
 * Created by jason on 3/7/17.
 */
//TODO research quote API and how to utilize jQuery JSON
//TODO research API for tweeting and email subscription
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
init();

function init(){
    var color = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[color];
    document.querySelector(".quoteDisplay").style.color = colors[color];
}






//deprecated
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



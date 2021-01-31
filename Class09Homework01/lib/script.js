
$(document).ready(function(){

let input = $(`.inputGreeting`);
let button = $(`button`);
let h1 = $(`h1`);

button.click(function(){

h1.text(input.val());
h1.css(`color`, `green`);
button.css(`background-color`, `yellow`);
input.val(``);


})



})
function isColor(strColor) {
  var s = new Option().style;
  s.color = strColor;
  return s.color == strColor;
}

$(document).ready(function () {

  let inputText = $(`input`).first();
  let inputColor = $(`input`).last();
  let button = $(`button`).first();

  button.click(function () {

    let newText = $(`<h1></h1>`).text(inputText.val());
    newText.css(`color`, inputColor.val());

    if (!isColor(inputColor.val() || inputText.val() === '')) {

      button.after(`<h3>Wrong input or color. Try Again.</h3>`);

    } else {

      button.after(newText);

    }

  })


})
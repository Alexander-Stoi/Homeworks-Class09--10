
$(document).ready(function () {

    let inputNumOne = $(`#inputOne`);
    let inputNumTwo = $(`#inputTwo`);
    let inputNumThree = $(`#inputThree`);
    let inputNumFour = $(`#inputFour`);
    let inputNumFive = $(`#inputFive`);
    let button = $(`button`).first();

    let winningArray = [5, 7, 30, 27, 18];
    winningArray.sort(function (a, b) { return a - b });

    let ol = $(`ol`);

    for (i = 0; i < 37; i++) {
        let li = $(`<li></li>`);
        ol.append(li.val(i + 1));

    }

    let h3Message = $(`<h3></h3>`)
    let inputArray = [];

    button.click(function () {

        inputArray = [parseInt(inputNumOne.val()), parseInt(inputNumTwo.val()), parseInt(inputNumThree.val()), parseInt(inputNumFour.val()), parseInt(inputNumFive.val())];
        inputArray.sort(function (a, b) { return a - b });

        if (JSON.stringify(winningArray) == JSON.stringify(inputArray)) {
            h3Message.text(`You won 1000000$! Congrats!`);
            console.log(`zosto ne vleguvca`);
        } else {
            h3Message.text(`More luck next time`);
        }
        button.after(h3Message);

        console.log(inputNumOne.val());
    })

}

)
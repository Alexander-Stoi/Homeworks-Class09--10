console.log(`test ex02`);

users = [`Aleksandar`, `Darko`, `Kristina`, `Marko`, `Natasha`, `Nikola`];
passowords = [`passAleksandar`, `passDarko`, `passKrsitina`, `passMarko`, `passNatasha`, `passNikola`];

$(document).ready(function () {

    let username = $(`input`).first();
    let password = $(`input`).last();
    let button = $(`button`).first();
    let h2text = $(`<h2></h2>`);

    button.click(function () {

        if (username.val().length === 0) {

            h2text.text(`Please Enter username`);
            button.after(h2text);
            return;
        }

        if (password.val().length === 0) {
            h2text.text(`Please Enter password`);
            button.after(h2text);
            return;
        }


        for (i = 0; i <= users.length; i++) {

            if (username.val() === users[i]) {

                if (passowords[i] === password.val()) {
                    console.log(password.val());
                    h2text.text(`Hello ${users[i]}`);

                } else {

                    h2text.text(`Wrong username`);

                }

                button.after(h2text);
                break;

            } else {

                h2text.text(`The Username ${username.val()} doesn't exist`);
                button.after(h2text);

            }

        }

    })

})


const special = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^",
    "~", "*", "?", ":", "\"", "\\"];
const lower = "abcdefghijklmnopqrstuvwxyz".split('');
const uppity = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
const numeric = "0123456789".split('');

//Grabs a random element from an array, a function used in below functions.
function getRandomFromArray(arr) {
    var randomNumber = (Math.floor(Math.random() * arr.length));
    return arr[randomNumber];
}

//Adding array onto end of another array
function arrayAdder(arr1, arr2) {
    for (i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
}

//Is initialized when you hit the 'generate password' button. It does one thing: makes a password to put in the password text box.
function generatePassword() {
    let charlength = Number(document.getElementById("characterlength").value);
    let password = [];
    let passwordChoices = [];
    // If inputted character length not right.
    if (charlength < 8 || charlength > 128) {
        alert("Please enter a viable number for password character length.");
        return;
    }
    // If no boxes checked regarding characters. 
    if (document.getElementById("chtype1").checked === false && document.getElementById("chtype2").checked === false && document.getElementById("chtype3").checked === false && document.getElementById("chtype4").checked === false) {
        alert("Please check at least one box for desired character types");
        return;
    }
    // Below handles the user checking 1 to 4 of the boxes for character types.
    if (document.getElementById("chtype1").checked === true) {
        password.push(getRandomFromArray(uppity));
        charlength--;
        arrayAdder(passwordChoices, uppity);
    }
    if (document.getElementById("chtype2").checked === true) {
        password.push(getRandomFromArray(numeric));
        charlength--;
        arrayAdder(passwordChoices, numeric);
    }
    if (document.getElementById("chtype3").checked === true) {
        password.push(getRandomFromArray(lower));
        charlength--;
        arrayAdder(passwordChoices, lower);
    }
    if (document.getElementById("chtype4").checked === true) {
        password.push(getRandomFromArray(special));
        charlength--;
        arrayAdder(passwordChoices, special);
    }
    //fills out the rest of the password length knowing the user wants characters that are now within passwordChoice array
    while (charlength > 0) {
        charlength--;
        password.push(getRandomFromArray(passwordChoices));
    }
    document.getElementById("password").innerHTML = password.join("");
}


function scramblePassword() {
    if (document.getElementById("password").value === "") {
        alert("There is no generated password to scramble yet!");
        return;
    } else {
        scrambled = document.getElementById("password").value.split("");
        leng = scrambled.length;
        for (var b = leng - 1; b > 0; b--) {
            var c = Math.floor(Math.random() * (b + 1));
            var d = scrambled[b];
            scrambled[b] = scrambled[c];
            scrambled[c] = d;
            document.getElementById("password").innerHTML = scrambled.join("");
        }
    }
}
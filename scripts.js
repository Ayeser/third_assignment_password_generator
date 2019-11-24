const special = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
"~", "*", "?", ":", "\"", "\\"];
const lower = "abcdefghijklmnopqrstuvwxyz".split('');
const uppity = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
const numeric = "0123456789".split('');
// let password = [];
// let passwordChoice = [];

//Grabs a random element from an array
function getRandomFromArray(arr) {
    var randomNumber = (Math.floor((Math.random() * arr.length)));
    return arr[randomNumber];
}

//Is initialized when you hit the 'generate password' button. It does one thing: makes a password to put in the password text box.
function generatePassword() {
    let charlength = Number(document.getElementById("characterlength").value);
    let password = [];
    let passwordChoice = [];
    if (charlength < 8 || charlength > 128) {
        alert("Please enter a viable number for password character length.");
    }
    if (typeof charlength !== "number") {
        alert("Please enter a number for password character length, please.");
    }
    if (document.getElementById("chtype1").checked === true) {
        password.push(getRandomFromArray(uppity));
        console.log(getRandomFromArray(uppity));
        charlength --;
        passwordChoice.concat(uppity);
    }
    console.log(passwordChoice);
    if (document.getElementById("chtype2").checked === true) {
        password.push(getRandomFromArray(numeric));
        charlength --;
        passwordChoice.concat(numeric);
        console.log(passwordChoice);
    }
    console.log(passwordChoice);
    if (document.getElementById("chtype3").checked === true) {
        password.push(getRandomFromArray(lower));
        charlength --;
        passwordChoice.concat(lower);
        console.log(passwordChoice);
    }
    if (document.getElementById("chtype4").checked === true) {
        password.push(getRandomFromArray(special));
        charlength --;
        console.log(special);
        console.log(passwordChoice);
    }
    while (charlength > 0) {
        charlength --;
        password.push("The next is " + getRandomFromArray(passwordChoice));
    }
    console.log(passwordChoice);
    document.getElementById("password").innerHTML = password.toString();
}


function scramblePassword() {
    if (document.getElementById("password").value === "") {
        alert("There is no generated password to scramble yet!");
    } else {
        scrambled = document.getElementById("password").value.split('');
        console.log(scrambled);
        leng = scrambled.length;
//does not work correctly below
        for (var i = leng - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var k = scrambled[i];
            scrambled[j] = k;
        }
    }
}
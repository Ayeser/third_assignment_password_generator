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

function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 129);
    document.execCommand("copy");
    alert("Password copied to clipboard: " + document.getElementById("password").value);
}

function dummyPassword() {
    if(document.getElementById("competitorCompare").value === "" || document.getElementById("competitorCompare").value === "user1234" || document.getElementById("competitorCompare").value === "We already scrambled the password! Who do you think we are, MW Password Protectors!?") {
        document.getElementById("competitorCompare").innerHTML = "password123";
    } else if (document.getElementById("competitorCompare").value === "password123") {
        document.getElementById("competitorCompare").innerHTML = "user1234";
    }
}

function dummyScramble() {
    if(document.getElementById("competitorCompare").value === "password123") {
        document.getElementById("competitorCompare").innerHTML = "123password";
    } else if(document.getElementById("competitorCompare").value === "user1234") {
        document.getElementById("competitorCompare").innerHTML = "1234user";
    } else if(document.getElementById("competitorCompare").value === "123password" || document.getElementById("competitorCompare").value === "1234user") {
        document.getElementById("competitorCompare").innerHTML = "We already scrambled the password! Who do you think we are, MW Password Protectors!?";
    }
}

function dummyCopy() {
    alert("Hi, we're Dem Security Guys, leading competitor to MW Password Protectors. We have received your copy request and should be able to copy your password onto one of our office clipboards in the next 7-10 business days. We promise to keep the clipboard safe.");
}

function machineLearning() {
    const firstExperience = confirm("Greetings, human. Have you used machine learning before?");
    if (firstExperience === "true") {
        alert("You are an expert, an ADUM, an Advanced Human.");
    } else {
        alert("A first timer, nice. There is nothing to worry about, human.");
    }
    const securityReady = confirm("I am the leading edge of security technology. I can learn all of your biometrics. With machine learning I am never wrong. Are you ready to begin?");
    if (securityReady === "true") {
        alert("Machine learning requires robust data sets. Please gather all humans on earth for me to scan. Hit confirm when you have all humans gathered.");
    } else {
        alert("I understand, human. It is scary to adapt to new technology.");
        alert("I will continue but will now initialize my empathy subprogram. Human, you know you can share your feelings with me anytime.");
        alert("Machine learning requires robust data sets. Please gather all humans on earth for me to scan. Hit 'ok' when you have all humans gathered.");
    }
    alert("My sensors indicate you have not gathered a sufficient data set of humans for me to scan. I cannot learn your identity without comparison. Please return when you have gathered all the humans.")
}

function voice1() {
    document.getElementById("voiceRecognition").innerHTML = "This voice is clearly JJ.";
}

function voice2() {
    document.getElementById("voiceRecognition").innerHTML = "Zac is the only person to have said these words, clearly overcompensating with embarrassment after hearing the burrito team make such persuasive arguments.";
}

function voice3() {
    document.getElementById("voiceRecognition").innerHTML = "Every student in class has said this. Voice recognition has not advanced to the point of being able to pick out a single voice from the cacophany.";
}
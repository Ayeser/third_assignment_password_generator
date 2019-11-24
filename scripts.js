const allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%^&*+=-@_".split('');

function generatePassword() {
    if (document.getElementById("characterlength").value < 8 || document.getElementById("characterlength").value > 128) {
        alert("Please enter a viable number for password character length.");
    }
    if (document.getElementById("chtype1").checked === true) {
        console.log("It worked!");
    }
    document.getElementById("password").innerHTML = document.getElementById("characterlength").value;
}

function scramblePassword() {
    if (document.getElementById("password").value === "") {
        alert("There is no generated password to scramble yet!");
    } else {
        scrambled = document.getElementById("password").value.split('');
        console.log(scrambled);
        leng = scrambled.length;

        for (var i = leng - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var k = scrambled[i];
            scrambled[j] = k;
        }
        console.log(scrambled.join(""));
    }
}

// Math.floor(Math.random() * 10) gives number between 0 and 1
/* <script type="text/javascript">
function getcube(){
var number=document.getElementById("number").value;
alert(number*number*number);
}
</script>
<form>
Enter No:<input type="text" id="number" name="number"/><br/>
<input type="button" value="cube" onclick="getcube()"/>
</form>
 */

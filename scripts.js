let newPassword = "user1234";
var characterLength = document.getElementById("characterlength").value;

const allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%^&*+=-@_".split('');

function createPassword() {
    return document.getElementById("characterlength").value;
}

function characterLengthChanged() {
    let characterLength = document.getElementById("characterlength");
    console.log(characterLength);
}

function showPassword() {
        document.getElementById("password").innerHTML = createPassword();
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

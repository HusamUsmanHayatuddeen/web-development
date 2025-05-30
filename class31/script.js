function handleContact(){
    var fullName = document.getElementById("fullname").Value;
    var email = document.getElementById("email").value;
    var snackbar = document.getElementById("snackbar");
    var snackbarText ="";
    var snackbarBG= "#28a7e9"
     if((fullName ==="") || (email === "") ||| (message === "") ){
        snackbarTexr = `please enter value for all fields`;
        snackbarBG = "rgb(255,204,203)"
     }
     else{
        snackbar.clssName ="show";
        snackbarText=`Thanks ${fullName}...your message has been recorded`;
     }
     snackbar.className ="show";
     snackbar.innerHTML = snackbarText;
     snackbar.style.backgroundColor =snackbarBG;
     setTimeout(function(){snackbar.className = snackbar.className.replace("show", "");},3000);
}
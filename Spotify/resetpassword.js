console.log("Reset Password Page reached")
let EmailAddress = document.getElementById("emailaddress");
let reset = document.getElementById("ResetPassword");
let isadded=false;
reset.addEventListener("click", function () {
    // alert("Email Sent")
    if (EmailAddress.value.includes("@")) {
        console.log("Email found")
        EmailAddress.style.border = "1px solid gray"
    } else {
        console.log("Email not found")
        EmailAddress.style.border = "2px solid red"    
    }
})


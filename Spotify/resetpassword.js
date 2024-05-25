console.log("Reset Password Page reached")
let reset = document.getElementById("ResetPassword");
let isadded = false;
let emailsent=false;
reset.addEventListener("click", function () {
    let emailAddress = document.getElementById("emailaddress");

    if (emailAddress.value.includes("@")) {
        console.log("Email found");
        console.log(emailAddress.value);
        if (!isadded) {
            document.querySelector(".textfield").innerHTML += "<div class='error' style='color: green;font-size: 15px;font-weight: 700;position: relative;text-align: start;justify-content: start;'>Reset Email Sent Successfully</div>";
            emailsent = true;
        }
        emailAddress.style.border = "1px solid gray";
    } else {
        console.log("Email not found");
        emailAddress.style.border = "2px solid red";
        if (!isadded) {
            document.querySelector(".textfield").innerHTML += "<div class='error' style='color: red;font-size: 15px;font-weight: 500;position: relative;text-align: start;justify-content: start;'>This field is required</div>";
            isadded = true;
        }
    }
});



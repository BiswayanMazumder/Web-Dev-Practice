console.log("Login Page reached")
let googlebutton=document.getElementById("GoogleLogin");
googlebutton.addEventListener("click",function(){
    alert("Google Login Started")
})
let facebookbutton=document.getElementById("FacebookLogin");
facebookbutton.addEventListener("click",function(){
    alert("Facebook Login Started")
})
let applebutton=document.getElementById("AppleLogin");
applebutton.addEventListener("click",function(){
    alert("Apple Login Started")
})
let phonebutton=document.getElementById("PhoneLogin");
phonebutton.addEventListener("click",function(){
    alert("Phone Login Started")
})
let loginbutton=document.getElementById("EmailLogin");
loginbutton.addEventListener("click",function(){
    alert("Email Login Started")
})
// let githubbutton=document.getElementById("GithubLogin");
// githubbutton.addEventListener("click",function(){
//     alert("Github Login Started")
// })
// let emailaddress=document.getElementById("email");
// if(emailaddress==null){
//     console.log("Email address not found")
//     document.querySelector(".glogin").innerHTML+=" <div style='color: red;font-size: 14px;font-weight: 400;'>Please enter your Spotify username or email address.</div>"
//     console.log(document.querySelector(".glogin").innerHTML)
// }
// else{
//     console.log("Email address found")
// }
// let prom1= new Promise((resolve,reject)=>{
//     let number=Math.random()
//     console.log(number)
//     if(number>0.5){
//         resolve(alert("Resolved"))
//     }else{
//         reject(alert("Rejected"));
//     }
// })
// prom1.then(
//     console.log("Success")
// ).catch((err)=>{
//     console.log(err)
// })
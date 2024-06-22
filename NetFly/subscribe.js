
console.log('Subscribe')
var isprem=false;
var isstand=false;
var isbasic=false;
var ismobile=false;
var prem=document.querySelector('#premiumplan')
var stand=document.querySelector('#Standardplan')
var basic=document.querySelector('#basicplan')
var mobile=document.querySelector('#mobileplan')
var premtick=document.querySelector('.premtick')
var standtick=document.querySelector('.standardtick')
var basictick=document.querySelector('.basictick')
var mobiletick=document.querySelector('.mobiletick')
prem.addEventListener('click',function(){
    isprem=true;
    isstand=false;
    isbasic=false;
    ismobile=false;
    
    if(isprem){
        standtick.innerHTML=``
        basictick.innerHTML=``
        mobiletick.innerHTML=``
        premtick.innerHTML=`<svg width="24" height="22" viewBox="0 0 24 22" fill="none" class="success-icon" data-uia="success-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0183 21.0833C17.7761 21.0833 22.4438 16.5688 22.4438 11C22.4438 5.43112 17.7761 0.916656 12.0183 0.916656C6.26044 0.916656 1.59277 5.43112 1.59277 11C1.59277 16.5688 6.26044 21.0833 12.0183 21.0833ZM11.7407 14.3982L17.4273 8.89817L16.087 7.60181L11.0705 12.4536L8.89738 10.3518L7.55702 11.6482L10.4004 14.3982L11.0705 15.0463L11.7407 14.3982Z" fill="white"></path></svg>`
    }
    console.log(isprem,isstand,isbasic,ismobile)
})
stand.addEventListener('click',function(){
    isprem=false;
    isstand=true;
    isbasic=false;
    ismobile=false;
    
    if(isstand){
        premtick.innerHTML=``
        basictick.innerHTML=``
        mobiletick.innerHTML=``
        standtick.innerHTML=`<svg width="24" height="22" viewBox="0 0 24 22" fill="none" class="success-icon" data-uia="success-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0183 21.0833C17.7761 21.0833 22.4438 16.5688 22.4438 11C22.4438 5.43112 17.7761 0.916656 12.0183 0.916656C6.26044 0.916656 1.59277 5.43112 1.59277 11C1.59277 16.5688 6.26044 21.0833 12.0183 21.0833ZM11.7407 14.3982L17.4273 8.89817L16.087 7.60181L11.0705 12.4536L8.89738 10.3518L7.55702 11.6482L10.4004 14.3982L11.0705 15.0463L11.7407 14.3982Z" fill="white"></path></svg>`
    }
})
basic.addEventListener('click',function(){
    isprem=false;
    isstand=false;
    isbasic=true;
    ismobile=false;
    
    if(isbasic){
        premtick.innerHTML=``
        standtick.innerHTML=``
        mobiletick.innerHTML=``
        basictick.innerHTML=`<svg width="24" height="22" viewBox="0 0 24 22" fill="none" class="success-icon" data-uia="success-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0183 21.0833C17.7761 21.0833 22.4438 16.5688 22.4438 11C22.4438 5.43112 17.7761 0.916656 12.0183 0.916656C6.26044 0.916656 1.59277 5.43112 1.59277 11C1.59277 16.5688 6.26044 21.0833 12.0183 21.0833ZM11.7407 14.3982L17.4273 8.89817L16.087 7.60181L11.0705 12.4536L8.89738 10.3518L7.55702 11.6482L10.4004 14.3982L11.0705 15.0463L11.7407 14.3982Z" fill="white"></path></svg>`
    }
})
mobile.addEventListener('click',function(){
    isprem=false;
    isstand=false;
    isbasic=false;
    ismobile=true;
    
    if(ismobile){
        premtick.innerHTML=``
        standtick.innerHTML=``
        basictick.innerHTML=`` 
        mobiletick.innerHTML=`<svg width="24" height="22" viewBox="0 0 24 22" fill="none" class="success-icon" data-uia="success-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0183 21.0833C17.7761 21.0833 22.4438 16.5688 22.4438 11C22.4438 5.43112 17.7761 0.916656 12.0183 0.916656C6.26044 0.916656 1.59277 5.43112 1.59277 11C1.59277 16.5688 6.26044 21.0833 12.0183 21.0833ZM11.7407 14.3982L17.4273 8.89817L16.087 7.60181L11.0705 12.4536L8.89738 10.3518L7.55702 11.6482L10.4004 14.3982L11.0705 15.0463L11.7407 14.3982Z" fill="white"></path></svg>`
    }
})
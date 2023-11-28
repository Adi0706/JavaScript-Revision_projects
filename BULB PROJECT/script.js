var bulb = document.querySelector(".bulb") 
const btn = document.getElementById("switch") ; 

// btn.addEventListener("click",function(){
//     if(btn.innerHTML==="ON" || bulb.style.backgroundColor==="yellow"){
//         btn.innerHTML ="OFF";
//         bulb.style.backgroundColor= "white";
//     }else{
//         btn.innerHTML="ON";
//         bulb.style.backgroundColor="yellow";
//     }
// })


var clicked = 0 ;

btn.addEventListener("click",function(){
    if(clicked == 0 ){
        console.log("switch is on ")
        btn.innerHTML="ON";
        bulb.style.backgroundColor="yellow";
        clicked=1
    }else{
        console.log("switch is off")
        btn.innerHTML="OFF";
        bulb.style.backgroundColor="white";
        clicked=0;
    }
})
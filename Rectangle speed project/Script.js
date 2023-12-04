window.document.querySelector('div')

window.addEventListener("mousemove",function(details){

var rect = document.querySelector(".rectangle")


var xVal = gsap.utils.mapRange(0,window.innerWidth,100+rect.getBoundingClientRect().width/2,window.innerWidth-100+rect.getBoundingClientRect().width/2,details.clientX)



   gsap.to(".rectangle",{
    left:xVal,

    ease:Power2
   })
})
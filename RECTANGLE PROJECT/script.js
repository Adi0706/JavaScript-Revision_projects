var rect = document.querySelector('.rectangle');

rect.addEventListener("mouseover", function (details) {
    var rectlocation = rect.getBoundingClientRect();
    var insidelocation = details.clientX - rectlocation.left;

    if(insidelocation < rectlocation.width/2){
        var redcolor = gsap.utils.mapRange(0,rectlocation.width/2,255,0,insidelocation)
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},0,0)`,
            
        })
    }else{
        var bluecolor = gsap.utils.mapRange(rectlocation.width/2,rectlocation.width,255,0,insidelocation)
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${bluecolor})`
        })
    }
});

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"white"
    })
})
getElementbyId()
const title = document.getElementById("main-heading");
title.style.color='green' ; 


const coloring = document.querySelectorAll('.list-item')

for(var i=0 ; i<coloring.length; i++)
{
    coloring[i].style.color = 'purple'
}


const ul = document.querySelector('ul');
const li = document.createElement('li');

ul.append(li);


const itemSelector = document.querySelectorAll('.list-item');

for(var i =0 ; i < itemSelector.length;i++){
    itemSelector[i].innerHTML='surname'
    itemSelector[i].style.color='WHITE'
}



var title = document.querySelector("h1");
title.addEventListener("click",function(){
    console.log("hey");
    title.innerHTML="I AM BATMAN"
    title.style.color="black"
    title.style.backgroundColor="white"
})

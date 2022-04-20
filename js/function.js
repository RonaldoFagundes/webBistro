

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

const idMsgOne = document.getElementById("msg_one");
const idMsgTwo = document.getElementById("msg_two");


function messagem(){
     idMsgOne.classList.add(animationClass);
     idMsgTwo.classList.add(animationClass);
    }
    











function animeScroll(){

     const windowTop = window.pageYOffset;

     target.forEach(function(element){

          if( (windowTop) > element.offsetTop ){
             element.classList.add(animationClass);
             
          }
     })


}



/*
window.addEventListener('scroll',function(){

    
})
*/
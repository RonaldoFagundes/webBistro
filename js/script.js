/*
const toTop = document.querySelector(".to-top");

 window.addEventListener("scroll",()=>{
	if(window.pageYOffset>300){
		toTop.classList.add("active");
	}else{
		toTop.classList.remove("active");
	}
	
}); */




//window.onload =  addCartEmpty;


/*
let shopCart = 0 ;
let shopCartFull = document.querySelector(".cart-full");
let shopCartEmpty = document.querySelector(".cart-empty");

let qtdEmpty = document.querySelector(".cart-empty span");
let qtdFull = document.querySelector(".cart-full span");




 addCartEmpty=()=>{

   //shopCart = 0;      
    
      if(shopCart == 0){
        
         shopCartFull.classList.remove("cart-show");
         shopCartEmpty.classList.add("cart-show");
         
        // qtdEmpty.textContent=shopCart;
         qtdEmpty.innerHTML=shopCart;
      }


  


 }



addCartFull=()=>{

     shopCart ++;      
  

      if(shopCart>=1){
        
         shopCartEmpty.classList.remove("cart-show");
         shopCartFull.classList.add("cart-show");
         qtdFull.innerHTML=shopCart;
      }

 }


*/


 








let iconWhatsapp = document.querySelector(".pedido");

  shakeWhatsapp=()=>{
 
   if(!iconWhatsapp.classList.contains("animateRock")){
     
      iconWhatsapp.classList.add("animateRock"); 

     }else{

      iconWhatsapp.classList.remove("animateRock"); 
   }

 }
 
 setInterval(shakeWhatsapp,3000)







let btn_top = document.querySelector(".to-top");


window.addEventListener("scroll",scrollFunction);
      
    function scrollFunction () {

        if(window.pageYOffset > 300){

           if(!btn_top.classList.contains("topEntrance")){
                             
               btn_top.classList.remove("topExit"); 
               btn_top.classList.add("topEntrance");  
               btn_top.style.display="flex";
               
                }

           
        }else{

         if(btn_top.classList.contains("topEntrance")){
            btn_top.classList.remove("topEntrance"); 
            btn_top.classList.add("topExit"); 
            setTimeout(()=>{
               btn_top.style.display="none";
            },250);
             

          }

        }
        
     }


   btn_top.addEventListener("click",backToTop);

    function backToTop(){
         window.scrollTo(0,0);
    }
















const debounce  = function (func,wait,immediate){
 let timeout;
 return function(...args){
      const context = this;
      const later = function(){
           timeout = null;
           if(!immediate)func.apply(context,args);           
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout) ;
      timeout = setTimeout(later,wait);
       if(callNow)func.apply(context,args);
 };
};








const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';






 animeScroll=()=>{

    const windowTop = window.pageYOffset +((window.innerHeight*3/4));


     target.forEach(function(element){

          if( (windowTop) > element.offsetTop ){
             element.classList.add(animationClass);             
          }else{
             element.classList.remove(animationClass); 
          }
     })
}


animeScroll();

if(target.length){
window.addEventListener('scroll',debounce(function(){
     animeScroll();
},200));
}






window.sr = ScrollReveal({reset:true});

sr.reveal('.text-1', {duration:2000});

sr.reveal('.text-2', {
	
	rotate:{x:100, y:80, z:0},
	duration:2000	
	
	});
	
	
sr.reveal('.text-3', {
	
	rotate:{x:100, y:80, z:0},
	duration:2000	
	
	});	






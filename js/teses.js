









/* 



window.onload =  addCartEmpty;

let shopCart = 0 ;
let shopCartFull = document.querySelector(".cart-full");
let shopCartEmpty = document.querySelector(".cart-empty");

let qtdEmpty = document.querySelector(".cart-empty span");
let qtdFull = document.querySelector(".cart-full span");












 function addCartEmpty(){

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

       // window.location.href='checkout.html';
      }

 }
















const products = [

    {
     img:"./img/home_pudim_m.png",
     id:"",
     nome:"Pudim Gostoso",
     info:"pudim no pote de ninho com geleia aetesanal de morango",
     valor:12,
     estoque:5
     },
     
    
      {
        img:"./img/home_bombom_m.png",
        id:"",
       nome:"Bombom",
       info:"pudim no pote de ninho com geleia aetesanal de morango",
       valor:12,
       estoque:5
       },
     

       {
        img:"./img/home_abacaxi_m.png",
        id:"",
       nome:"Abacaxi",
       info:"abacaxi com geleia aetesanal de morango",
       valor:17,
       estoque:5
       },

       {
        img:"./img/home_banoffee_m.png",
        id:"",
       nome:"Abacaxi",
       info:"abacaxi com geleia aetesanal de morango",
       valor:17,
       estoque:5
       },

];


*/



 












/*
list.forEach(e => {


   
    
    const container = document.querySelector('.containner-produto');

    const card = document.createElement('div');
    card.classList.add('card-home');
     
    const boxImg = document.createElement('div');
    boxImg.classList.add('box-img');

   
    const picture = document.createElement('picture');
    const img = document.createElement('img');
    
   
    const content = document.createElement('div');
    content.classList.add('content');
   

    const nome = document.createElement('p');
    const info = document.createElement('p');


    const divBtn = document.createElement('div');
    divBtn.classList.add('btn-buy');
    const addBtn = document.createElement('a');
    addBtn.classList.add('btn');
    addBtn.classList.add('btn-outline-warning');
    addBtn.classList.add('add-products');




    img.src = e.img;
    nome.innerText = e.nome;
    info.innerText = e.info;
    addBtn.innerText ="Adicionar ao carrinho"



    picture.appendChild(img);

    boxImg.appendChild(picture);
    

    divBtn.appendChild(addBtn);

    content.appendChild(nome);
    content.appendChild(info);
    content.appendChild(divBtn); 
    

    card.appendChild(boxImg);
    card.appendChild(content);   
  

    container.appendChild(card);



   
    addBtn.addEventListener('click', (ex)=>{

      //  alert("ir para pagina check-out  para comprar "+e.nome)
    
      //  addCartFull();
     }) 
     
 








})

*/





/*
let addProducts = document.querySelector(".add-products");


addProducts.addEventListener('click', (e)=>{

 // alert("ir para pagina check-out  para comprar ");
  
  addCartFull();

}) 
*/ 
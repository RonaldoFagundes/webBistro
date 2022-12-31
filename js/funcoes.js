

function startIndex(){

  listProducts();
  updateIndex();

}




const urlParams = new URLSearchParams(window.location.search); 

var  quantity = 0 ;






 function addProduto(){
 
  quantity ++;

  const carrinho = new Carrinho(quantity)
  
  window.location.href = "checkout.html?qtd="+quantity;
  
 }




 function updateCheckout(){

  const shopCartFull = document.querySelector(".cart-full");
//  const shopCartEmpty = document.querySelector(".cart-empty");
      
//const qtdEmpty = document.querySelector(".cart-empty span");
const qtdFull = document.querySelector(".cart-full span");


const urlQtd = urlParams.get('qtd');

const carrinho = new Carrinho(urlQtd);

quantity = carrinho.getQuantidade();


 if (quantity >= 0){

      shopCartFull.classList.add("cart-show");    
      qtdFull.innerHTML = quantity;  

 }
  
}






function continuarComprando(){  
  window.location.href = "index.html?qtd="+quantity;
}





function updateIndex(){

  const shopCartFull = document.querySelector(".cart-full");
  const shopCartEmpty = document.querySelector(".cart-empty");

      
//  const qtdEmpty = document.querySelector(".cart-empty span");
  const qtdFull = document.querySelector(".cart-full span");


const urlQtd = urlParams.get('qtd');

const carrinho = new Carrinho(urlQtd);

quantity = carrinho.getQuantidade();

 if (quantity >= 1){

      shopCartFull.classList.add("cart-show");
      shopCartEmpty.classList.remove("cart-show"); 
      qtdFull.innerHTML = quantity;  

 }
  
}




 function clearKart(){
  window.location.href = "index.html";
  const carrinho = new Carrinho(0);
 } 









    
  

    

   
     







 listProducts=()=>{ 


    const products = [

        {
         img:"./img/home_pudim_m.png",
         id:"01",
         nome:"Pudim Gostoso",
         info:"pudim no pote de ninho com geleia aetesanal de morango",
         valor:12,
         estoque:5
         },
         
        
          {
            img:"./img/home_bombom_m.png",
            id:"02",
           nome:"Bombom",
           info:"pudim no pote de ninho com geleia aetesanal de morango",
           valor:12,
           estoque:5
           },
         
    
           {
            img:"./img/home_abacaxi_m.png",
            id:"03",
           nome:"Abacaxi",
           info:"abacaxi com geleia aetesanal de morango",
           valor:17,
           estoque:5
           },
    
           {
            img:"./img/home_banoffee_m.png",
            id:"04",
           nome:"Abacaxi",
           info:"abacaxi com geleia aetesanal de morango",
           valor:17,
           estoque:5
           },
    
    ];
      


        products.forEach(e => {   
    
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






            addBtn.addEventListener('click', (ex)=>{
             
                 addProduto();



              /*
            const c =  new  Controller(e.id, e.nome, e.info, e.valor );
            addProducts(c);            
               alert(
                "id: "+c.getId()+" Nome: "+c.getNome()+" Info:  "+c.getInfo()+" Valor: "+c.getValor()+" quantidade:  "+c.getQuantidade()
               )
              */

               
             }) 
        







        
            picture.appendChild(img);
        
            boxImg.appendChild(picture);
            
        
            divBtn.appendChild(addBtn);
        
            content.appendChild(nome);
            content.appendChild(info);
            content.appendChild(divBtn); 
            
        
            card.appendChild(boxImg);
            card.appendChild(content);   
          
        
            container.appendChild(card);   
      
        })
   
        
   }     
   
  



















 
    class Carrinho{

      constructor(quantidade){
         this.setQuantidade(quantidade)
      }


      setQuantidade=(quantidade)=>{
        this.quantidade = quantidade;
      }
    
      getQuantidade=()=>{
        return this.quantidade ;
     }
    
    } 
 














  class Controller{
 
      constructor(id, nome , info, valor){
     
         this.setId(id);
         this.setNome(nome);
         this.setInfo(info);
         this.setValor(valor)       
      }
         


    setId=(id)=>{
      this.id = id;
    }

    getId=()=>{
      return this.id;
   }

   setNome=(nome)=>{
    this.nome = nome;
  }

  getNome=()=>{
    return this.nome;
 }

   setInfo=(info)=>{
    this.info = info;
  }

  getInfo=()=>{
    return this.info;
 }

 setValor=(valor)=>{
    this.valor = valor;
  }

  getValor=()=>{
    return this.valor;
 }


}






/*   adcionar no array product um produto de cada vez 

addProduct=(controller)=>{

    product = [
      'id'=controller.getId(),
      'nome'=controller.getNome(),
      'info'=controller.getInfo(),
      'valor'=controller.getValor(),
      'qtd'=1
    ]
}

*/







  



   
   
    

  


   


function startIndex(){
 listProducts();
 updateIndex();

}






function startCheckbox(){
  updateCheckout();  
  }







const urlParams = new URLSearchParams(window.location.search); 
var  quantity = 0 ;






 



 function updateCheckout(){

const shopCartFull = document.querySelector(".cart-full");
const qtdFull = document.querySelector(".cart-full span");


const urlQtd = urlParams.get('qtd');

const urlId = urlParams.get('id');
const urlName = urlParams.get('nome');
const urlInfo = urlParams.get('info');
const urValor = urlParams.get('valor');

const urlImg = urlParams.get('img');

console.log(urlImg)

const produto = new Produtos(urlImg, urlId, urlName, urlInfo, urValor, urlQtd);
produto.setDados();


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
         img:"img/home-item-card/banoffee.png",
         id:"01",
         nome:"Banoffe",
         info:"Sobremesa de banana deliciosa",
         valor:12,
         estoque:5
         },
         
        
          {
            img:"img/home-item-card/bolo.png",
            id:"02",
           nome:"Bolo",
           info:"Bolo de chocolate e chantilly",
           valor:12,
           estoque:5
           },
         
    
           {
            img:"img/home-item-card/banoffee.png",
            id:"03",
           nome:"Morango",
           info:"Morango com chantilly",
           valor:17,
           estoque:5
           },
    
           {
            img:"img/home-item-card/banoffee.png",
            id:"04",
           nome:"Abacaxi",
           info:"abacaxi com geleia aetesanal de morango",
           valor:17,
           estoque:5
           },
    
    ];
      

    console.log(products);


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

           
           // console.log(e.img)


            addBtn.addEventListener('click', (ex)=>{  
              
                           
             var produtos = new Produtos(e.img, e.id, e.nome, e.info, e.valor);

             produtos.addProduto(); 
             
            
               
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
 





  class Produtos{ 

      constructor(img, id, nome , info, valor, quantity){
     
         this.setImg(img);
         this.setId(id);
         this.setNome(nome);
         this.setInfo(info);
         this.setValor(valor);
         this.setQuantity(quantity) 

         this.img = img ;
         this.id = id ;
         this.nome = nome ;
         this.info = info ;
         this.valor = valor ;

         this.arrayProdutos=[];        
      
      }
         

     
     
    
    
    setImg=(img)=>{
      this.img = img;
    }

    getImg=()=>{
      return this.img;
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


setQuantity(quantity){
    this.quantity = quantity;
}

getQuantity(){
  return this.quantity;
}




getDados(){
   let produto={}
 
   /* 
   produto.idProduto = this.id;
   produto.nomeProduto = this.nome;
   produto.infoProduto = this.info;
   produto.valorProduto = this.valor;
   produto.quantityProduto = this.qtd;
   */

   produto.imgProduto = this.getImg();
   produto.idProduto = this.getId();
   produto.nomeProduto = this.getNome();
   produto.infoProduto = this.getInfo();
   produto.valorProduto = this.getValor();
   produto.quantityProduto = this.getQuantity();


   return produto;
}





 setDados(){
  let produto = this.getDados();

    this.addproduto(produto)

    

   this.listarProdutosAdd();
  }



  addproduto(produto){
    
       this.arrayProdutos.push(produto);

       console.log(" id produto "+produto.idProduto+" array "+this.arrayProdutos);
       //this.qtd++;
  }


   






   addProduto(){  
 
    quantity ++;
  
    const carrinho = new Carrinho(quantity)      
  
   /*  window.location.href =
     "checkout.html?qtd="+quantity+"&id="+this.getId();  */

     window.location.href =
     "checkout.html?id="+this.getId()+"&img="+this.getImg()+"&nome="+this.getNome()+"&info="+this.getInfo()+"&valor="+this.getValor()+"&qtd="+quantity; 
         
   }
  
   







  listarProdutosAdd(){   
  
   /* 
   for (let i in this.arrayProdutos ){
   this.arrayProdutos.forEach(i => { 

    const tbody = document.getElementById('tbody');

    const tr = document.createElement('tr');
    const tdId = document.createElement('td');
    const tdName = document.createElement('td');
    const tdInfo = document.createElement('td');    
    const tdQtd = document.createElement('td');
    

    tdId.innerText =   i.idProduto;
    tdName.innerText = i.nomeProduto;
    tdInfo.innerText = i.infoProduto;       
    tdQtd.innerText = i.quantityProduto

    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdInfo);
    tr.appendChild(tdQtd);
  
    tbody.appendChild(tr); 

   } )   */       
  

   let tbody = document.querySelector('#tbody');
         
    for (let i = 0; i < this.arrayProdutos.length; i++ ){

      console.log(" tamanho do array "+this.arrayProdutos.length)

          let tr = tbody.insertRow();

          let td_img   = tr.insertCell();
          let td_id    = tr.insertCell();
          let td_nome  = tr.insertCell();
          let td_info  = tr.insertCell();
          let td_valor = tr.insertCell();
          let td_qtd   = tr.insertCell();
         

          let img = new Image(80, 80); 
          img.src = this.arrayProdutos[i].imgProduto;

          td_img.appendChild(img);
          td_id.innerText    = this.arrayProdutos[i].idProduto;
          td_nome.innerText  = this.arrayProdutos[i].nomeProduto;
          td_info.innerText  = this.arrayProdutos[i].infoProduto;
          td_valor.innerText = this.arrayProdutos[i].valorProduto;
          td_qtd.innerText   = this.arrayProdutos[i].quantityProduto; 

         
      } 



  }









}










      









   

       



      
/*
      function listar(controller){
          
            var  arrayProd = 
              {
                'id':controller.getId(),
                'nome':controller.getNome(),
                'info':controller.getInfo(),    
                'quantity':controller.getQuantity(),      
              }
            
           

             // for (let i in arrayProd ){
                arrayProd.forEach(i => { 

                const tbody = document.getElementById('tbody');
          
                const tr = document.createElement('tr');
                const tdId = document.createElement('td');
                const tdName = document.createElement('td');
                const tdInfo = document.createElement('td');    
                const tdQtd = document.createElement('td');
                
  
                tdId.innerText = i=id;
                tdName.innerText = i.nome;
                tdInfo.innerText = i.info;       
                tdQtd.innerText = i.quantity
      
                tr.appendChild(tdId);
                tr.appendChild(tdName);
                tr.appendChild(tdInfo);
                tr.appendChild(tdQtd);
              
                tbody.appendChild(tr); 
      
               })           

        
    }
*/




       

   



      

    

   
    /*
     function addList(controller){      
     
         if(controller.getQuantity()==1){

        //  console.log(" 1º produto "+controller.getId())

          controller.setId(
            [
             id=controller.getId(),
             nome=controller.getNome(),
             info=controller.getInfo(),
             quantity=1
            ]
         ) 

             }else{

          //    console.log(" 2º produto "+controller.getId())  
              
              controller.setId(
                [
                 id=controller.getId(),
                 quantity=controller.getQuantity()
                
                ]
              ) 
             }
                  

            // console.log(controller.getId()[1]) ;

             console.log(controller.getId()) ;             
  }

*/


  
       



        




     

          


        /*
         prodChosse.forEach(i => { 
        
          for (let i in prodChosse ){        

            const tbody = document.getElementById('tbody');
      
            const tr = document.createElement('tr');
            const tdId = document.createElement('td');
            const tdName = document.createElement('td');
            const tdInfo = document.createElement('td');    
            const tdQtd = document.createElement('td');
            
          
            tdId.innerText = i=id;
            tdName.innerText = i=nome;
            tdInfo.innerText = i=info;       
            tdQtd.innerText = i=quantity

            
                tr.appendChild(tdId);
                tr.appendChild(tdName);
                tr.appendChild(tdInfo);
                tr.appendChild(tdQtd);
              
                tbody.appendChild(tr);  
           
         }
        */

         







      
                             
              
             
           
           





   








  



   
   
    

  


   
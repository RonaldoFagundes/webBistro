


const products = [

    {
     img:"home_pudim_sm.png",
     id:"",
     nome:"Pudim Gostoso",
     info:"pudim no pote de ninho com geleia aetesanal de morango",
     valor:12,
     estoque:5
     },
     
    
      {
        img:"home_pudim_sm.png",
        id:"",
       nome:"Bombom",
       info:"pudim no pote de ninho com geleia aetesanal de morango",
       valor:12,
       estoque:5
       },
     

       {
        img:"home_pudim_sm.png",
        id:"",
       nome:"Abacaxi",
       info:"abacaxi com geleia aetesanal de morango",
       valor:17,
       estoque:5
       },

       {
        img:"home_pudim_sm.png",
        id:"",
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

   
    const img = document.createElement('picture');
   
    const content = document.createElement('div');
    content.classList.add('content');

   
    const nome = document.createElement('p');
    const info = document.createElement('p');


    const divBtn = document.createElement('div');
    divBtn.classList.add('btn-buy');


    const aBtn = document.createElement('a');
    aBtn.classList.add('btn');
    aBtn.classList.add('btn-outline-warning');



    




    img.innerText = e.img;
    nome.innerText = e.nome;
    info.innerText = e.info;
    aBtn.innerText ="Adicionar ao carrinho"


    boxImg.appendChild(img);
    divBtn.appendChild(aBtn);

    content.appendChild(nome);
    content.appendChild(info);
    content.appendChild(divBtn); 

    
    card.appendChild(boxImg);
    card.appendChild(content);   
  


    container.appendChild(card);






    aBtn.addEventListener('click', (ex)=>{

        alert("ir para pagina check-out  para comprar "+e.nome)
    
    
      })


})






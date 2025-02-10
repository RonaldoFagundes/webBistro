
import * as products from './model.js';


var list = products.list();


var total_car = 0;
var qtd_car = 0;


var produtos = new Array();



function updateShopCar(qtd) {

const shopCartFull  = document.querySelector(".cart-full");
const shopCartEmpty = document.querySelector(".cart-empty");
const qtdFull = document.querySelector(".cart-full span");


if (qtd >= 1) {
  shopCartFull.classList.add("cart-show");
  shopCartEmpty.classList.remove("cart-show");
  qtdFull.innerHTML = qtd;
}

}






list.map((item, index) => {

  const container = document.querySelector('.containner-produto');

  const card = document.createElement('div');
  card.classList.add('card-home');

  const content = document.createElement('div');
  content.classList.add('content');

  const boxPrice = document.createElement('div');
  boxPrice.classList.add('boxPrice');

  const boxImg = document.createElement('div');
  boxImg.classList.add('box-img');

  const picture = document.createElement('picture');
  const img = document.createElement('img');

  const nome = document.createElement('p');
  const info = document.createElement('p');
  const price = document.createElement('p');

  const qtd = document.createElement('input');
  qtd.classList.add('input-qtd');

  const divBtnShop = document.createElement('div');
  divBtnShop.classList.add('btn-shop');

  const btnShop = document.createElement('a');
  btnShop.classList.add('btn');
  btnShop.classList.add('btn-outline-warning');
  btnShop.classList.add('shop-car');

  img.src = item.img;
  nome.innerText = item.nome;
  info.innerText = item.info;
  price.innerText = " Preço R$ " + item.valor.toFixed(2);

  qtd.setAttribute('type', 'number');
  qtd.setAttribute('min', '1');
  qtd.setAttribute("value", "1");
  qtd.setAttribute("style", "width:60px; text-align:center; background-color:#c57135; color:#9B050A; font-weight: bold; border:none; font-size: 1.2rem");

  btnShop.innerText = "Adicionar ao carrinho";

  picture.appendChild(img);
  boxImg.appendChild(picture);

  divBtnShop.appendChild(btnShop);

  boxPrice.appendChild(price);
  boxPrice.appendChild(qtd);

  content.appendChild(nome);
  content.appendChild(info);
  content.appendChild(boxPrice);
  content.appendChild(divBtnShop);

  card.appendChild(boxImg);
  card.appendChild(content);
  container.appendChild(card);







  btnShop.addEventListener('click', (ex) => {


   const modal = document.querySelector('.modal-car-shop');
         modal.classList.remove("hide-shop-car-modal");

    let tr = tbody.insertRow();

    let td_img = tr.insertCell();
    let td_nome = tr.insertCell();

    let td_valor = tr.insertCell();

    let td_qtd = tr.insertCell();
    td_qtd.classList.add('tdQtd');

    let td_total = tr.insertCell();
    td_total.classList.add('tdTotal');

    let img = new Image(80, 80);
    img.src = item.img;

    td_img.appendChild(img);

    let sub_total = item.valor * qtd.value;

    td_nome.innerText = item.nome;
    td_valor.innerText = item.valor.toFixed(2);
    td_qtd.innerText = qtd.value;
    td_total.innerText = sub_total.toFixed(2);

    let td_tt = document.querySelectorAll('.tdTotal');
    let sum_total = 0;

    let td_qt = document.querySelectorAll('.tdQtd');
    let sum_qtd = 0;

    for (var i = 0; i < td_tt.length; i++) {

      let td_valor = parseFloat(td_tt[i].textContent);
      sum_total = sum_total + td_valor;

      let td_qtd = parseFloat(td_qt[i].textContent);
      sum_qtd = sum_qtd + td_qtd;

    }

    total_car = sum_total;
    qtd_car = sum_qtd;
    
    updateShopCar(sum_qtd);

    produtos.push({
      name:item.nome,
      qtd : qtd.value,
      sutotal: sub_total,
      qtdt:sum_qtd,
      total:sum_total
    });

  })
})






        


const modalCarShop = document.querySelector('.modal-car-shop');

const contentBtn  = document.createElement('div');
contentBtn.classList.add('content-btn')

const btnCalc = document.createElement('a');
btnCalc.classList.add('btn');
btnCalc.classList.add('btn-outline-warning');
btnCalc.classList.add('shop-car');
btnCalc.innerText = "Calcular";


const btnOder = document.createElement('a');
btnOder.classList.add('btn');
btnOder.classList.add('btn-outline-warning');
btnOder.classList.add('shop-car');
btnOder.innerText = "Finalizar Pedido";


const btnBuying = document.createElement('a');
btnBuying.classList.add('btn');
btnBuying.classList.add('btn-outline-warning');
btnBuying.classList.add('shop-car');
btnBuying.innerText = "Continuar Comprando";

const btnEmpty = document.createElement('a');
btnEmpty.classList.add('btn');
btnEmpty.classList.add('btn-outline-warning');
btnEmpty.classList.add('shop-car');
btnEmpty.innerText = "Esvaziar Carrinho";


const car_total = document.createElement('p');
car_total.classList.add('car-total');





contentBtn.appendChild(btnCalc)
contentBtn.appendChild(btnOder)
contentBtn.appendChild(btnBuying)
contentBtn.appendChild(btnEmpty)

modalCarShop.appendChild(contentBtn)









btnCalc.addEventListener('click', (ex) => {
  car_total.innerText = " total de items " + qtd_car + " valor total R$ " + total_car.toFixed(2);
  modalCarShop.appendChild(car_total)
})



btnBuying.addEventListener('click', (ex) => {
  modalCarShop.classList.add("hide-shop-car-modal");
  car_total.innerText = ""; 
})



btnEmpty.addEventListener('click', (ex) => {
  window.location.reload(true); 
  updateShopCar(0);
})







btnOder.addEventListener('click', (ex) => {
  
     
  /*
     for(let i =0; i<produtos.length; i++){
       
       console.log(
        " encaminhar o pedido para o whatsap "+
        " nome "+produtos[i].name+
        " qtd  "+produtos[i].qtd+
        " subtotal "+produtos[i].sutotal+
        " qtd total "+produtos[i].qtdt+
        " valor total "+produtos[i].total      
      )
     }
    */


   
     alert(" voce receberá a chave pix pelo WhatsApp ")

     let pedido = []; 
     
     let valorTotal = 0 ;
   
     for(let i =0; i<produtos.length; i++){ 
  
      pedido.push(" Produto "+produtos[i].name+" quantidade  "+produtos[i].qtd)
       
      valorTotal = produtos[i].total;
     }
  
    
     var oder = JSON.stringify(pedido);   
  
     console.log(oder+" valor a receber "+valorTotal);

    // window.open('https://wa.me/5521993067274?text=pedido=%20'+oder+'%20Total R$%20'+total.toFixed(2), '_blank');


})













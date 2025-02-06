

  function list ()  {

    const products = [

        {            
            id: 1,
            img: "img/home-item-card/banoffee.png",
            nome: "Banoffe",
            info: "Sobremesa de banana deliciosa",
            valor: 18,
            estoque: 5,
            un:1
        },

        {
            id: 2,
            img: "img/home-item-card/bolo.png",
            nome: "Bolo",
            info: "Bolo de chocolate e chantilly",
            valor: 14,
            estoque: 5,
            un:1
        },

        {
            id: 3,
            img: "img/home-item-card/banoffee.png",
            nome: "Morango",
            info: "Morango com chantilly",
            valor: 17,
            estoque: 5,
            un:1
        },

        {
            id: 4,
            img: "img/home-item-card/banoffee.png",
            nome: "Abacaxi",
            info: "abacaxi com geleia aetesanal de morango",
            valor: 19,
            estoque: 5,
            un:1            
        },
    ];

    return products;
}

export { list };

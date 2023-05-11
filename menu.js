let items = [
  { name: "Ayam Balado", price: 10000, stock: 5, type: "lauk" },
  { name: "Ayam Goreng", price: 11000, stock: 5, type: "lauk" },
  { name: "Ikan Goreng", price: 10000, stock: 4, type: "lauk" },
  { name: "Ikan Sambel Ijo", price: 12000, stock: 3, type: "lauk" },
  { name: "Cumi Tumis", price: 13000, stock: 2, type: "lauk" },
  { name: "Cumi Oseng Asin", price: 14000, stock: 1, type: "lauk" },
  { name: "Sayur Sop", price: 10000, stock: 5, type: "sayur" },
  { name: "Sayur Asem", price: 11000, stock: 5, type: "sayur" },
  { name: "Kangkung", price: 10000, stock: 4, type: "sayur" },
  { name: "Cap Cay", price: 12000, stock: 3, type: "sayur" },
  { name: "Teh Manis Hangat", price: 10000, stock: 5, type: "minuman" },
  { name: "Teh Manis Dingin", price: 11000, stock: 5, type: "minuman" },
  { name: "Teh Tawar Hangat", price: 10000, stock: 4, type: "minuman" },
  { name: "Teh Tawar Dingin", price: 12000, stock: 3, type: "minuman" },
  { name: "Air Mineral", price: 12000, stock: 3, type: "minuman" },
  { name: "Jeruk Panas", price: 12000, stock: 3, type: "minuman" },
  { name: "Jeruk Dingin", price: 12000, stock: 3, type: "minuman" },
  { name: "Nasi Putih", price: 5000, stock: 3, type: "nasi" },
  { name: "Nasi Uduk", price: 6000, stock: 3, type: "nasi" },
];

function render(filter,type){
    let cards = document.getElementById("cards");
    cards.remove();
    let newCards = document.createElement('div');
    let body = document.getElementsByTagName('body');
    newCards.id =`cards`;
    console.log(body);
    body[0].appendChild(newCards);
    for(let i in filter){
        if(filter[i].type === type){
            const card = document.createElement("div");
            card.classList.add(`card`)
            card.classList.add(filter[i][type]);
            const img = document.createElement('img');
            img.classList.add('item-img');
            img.src =`./assets/img/${filter[i].name.toLowerCase()}.jpeg`;
            img.alt =`${filter[i].name}`;
            const title = document.createElement("p");
            title.innerText=`${filter[i].name}`;
            const harga = document.createElement("p");
            const status = document.createElement("p");
            title.classList.add(`item-title`);
            harga.classList.add(`item-harga`);
            harga.innerText = `${new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(filter[i].price)}`;
            status.classList.add(`item-status`);
            if(filter[i].stock !== 0){
                status.innerText = `Tersedia: ${filter[i].stock}`;
            }else{
                status.innerText = `Habis`;
                status.style = 'color: red';
            }
            newCards.appendChild(card);
            card.appendChild(title);
            card.appendChild(harga);
            card.appendChild(status);
        }
    }
    

}



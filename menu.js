let items = [
  { id: 1, name: "Ayam Balado", price: 10000, stock: 5, type: "lauk" },
  { id: 2, name: "Ayam Goreng", price: 11000, stock: 5, type: "lauk" },
  { id: 3, name: "Ikan Goreng", price: 10000, stock: 4, type: "lauk" },
  { id: 4, name: "Ikan Sambel Ijo", price: 12000, stock: 3, type: "lauk" },
  { id: 5, name: "Cumi Tumis", price: 13000, stock: 2, type: "lauk" },
  { id: 6, name: "Cumi Oseng Asin", price: 14000, stock: 1, type: "lauk" },
  { id: 7, name: "Sayur Sop", price: 10000, stock: 5, type: "sayur" },
  { id: 8, name: "Sayur Asem", price: 11000, stock: 5, type: "sayur" },
  { id: 9, name: "Kangkung", price: 10000, stock: 4, type: "sayur" },
  { id: 10, name: "Cap Cay", price: 12000, stock: 3, type: "sayur" },
  { id: 11, name: "Teh Manis Hangat", price: 10000, stock: 5, type: "minuman" },
  { id: 12, name: "Teh Manis Dingin", price: 11000, stock: 5, type: "minuman" },
  { id: 13, name: "Teh Tawar Hangat", price: 10000, stock: 4, type: "minuman" },
  { id: 14, name: "Teh Tawar Dingin", price: 12000, stock: 3, type: "minuman" },
  { id: 15, name: "Air Mineral", price: 12000, stock: 3, type: "minuman" },
  { id: 16, name: "Jeruk Panas", price: 12000, stock: 3, type: "minuman" },
  { id: 17, name: "Jeruk Dingin", price: 12000, stock: 3, type: "minuman" },
  { id: 18, name: "Nasi Putih", price: 5000, stock: 3, type: "nasi" },
  { id: 19, name: "Nasi Uduk", price: 6000, stock: 3, type: "nasi" },
];

function renderFirstTime(items){
    let newCards = document.createElement("div");
    newCards.id = 'cards';
    let body = document.getElementsByTagName("body");
    body[0].appendChild(newCards);
    for(let perMakanan of items){
        const card = document.createElement("div");
        card.classList.add(`card`);
        card.classList.add(perMakanan.type);
        card.id = perMakanan.id;
        let img = new Image();
        img.classList.add("item-img");
        img.src = `./assets/img/${perMakanan.id}.jpeg`;
        img.alt = `${perMakanan.name}`;
        img.onload = function () {
          card.appendChild(img);
        };
        const title = document.createElement("p");
        title.innerText = `${perMakanan.name}`;
        const harga = document.createElement("p");
        const status = document.createElement("p");
        title.classList.add(`item-title`);
        harga.classList.add(`item-harga`);
        harga.innerText = `${new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(perMakanan.price)}`;
        status.classList.add(`item-status`);
        if (perMakanan.stock !== 0) {
          status.innerText = `Tersedia: ${perMakanan.stock}`;
        } else {
          status.innerText = `Habis`;
          status.style = "color: red";
        }
        newCards.appendChild(card);
        card.appendChild(title);
        card.appendChild(harga);
        card.appendChild(status);        
    }
    let cards = document.getElementsByClassName(`card`);
    for (let card of cards) {
      card.setAttribute("onclick", `addItemToCart(items,${card.id})`);
    }
}



function render(filter,type){
    let cards = document.getElementById("cards");
    cards.remove();
    let newCards = document.createElement('div');
    let body = document.getElementsByTagName('body');
    newCards.id =`cards`;
    // console.log(body);
    body[0].appendChild(newCards);
    for(let i in filter){
      if(filter[i].type === type){
          const card = document.createElement("div");
          card.classList.add(`card`)
          card.classList.add(filter[i][type]);
          card.id = filter[i].id;
          let img = new Image();
          img.classList.add('item-img');
          img.src = `./assets/img/${filter[i].id}.jpeg`;
          img.alt =`${filter[i].name}`;
          img.onload = function() {
            card.appendChild(img);
          };
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
      let cards = document.getElementsByClassName(`card`);
      for (let card of cards) {
      card.setAttribute("onclick", `addItemToCart(items,${card.id})`);
    }
  }   
}
let yangDiPesan = [];
function addItemToCart(items,name){
  // console.log(name);
  for(let item of items){
    if(name === item.id){
      let card = document.getElementById(name);
      let textStock = card.childNodes[2];
      item.stock--;
      if (item.stock > 0) {
        textStock.innerText = `Tersedia: ${item.stock}`
        yangDiPesan.push(name);
      }else{
        textStock.innerText = `HABIS`;
        textStock.style = 'color: red';
        break;
      }
    }
  }
}

function getInvoice(items,yangDiPesan){
  if(localStorage.getItem('keranjang',yangDiPesan)){
    console.log(`keranjang terisi`)
    localStorage.removeItem('keranjang');
  }
  localStorage.setItem('items',JSON.stringify(items));
  localStorage.setItem('keranjang',yangDiPesan);
}




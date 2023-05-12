
function menunjukanPembayaran(parameter) {

    let parent = document.getElementById("ordermakanan");

    while(parent.childElementCount > 0){
        parent.removeChild(parent.firstElementChild)
    }

    const node = document.createElement("h3");
    const textnode = document.createTextNode(`Anda akan bayar menggunakan ${parameter}`);
    node.setAttribute("class","h33")
    node.appendChild(textnode);
    document.getElementById("ordermakanan").appendChild(node);

    const butt = document.createElement("button");
    const isiButt = document.createTextNode("CheckOut")
    butt.setAttribute("class","buttonCheckOut")
    butt.setAttribute("onclick", "nunjukinModal()")
    butt.appendChild(isiButt);
    document.getElementById("ordermakanan").appendChild(butt);


}



function nunjukinModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function buttonConfirm() {
    let buttonConfirmnya = document.getElementById("confirmButton")
    buttonConfirmnya.style.boxShadow = "10px 10px"
    buttonConfirmnya.style.backgroundColor = "rgb(146, 146, 249)"
}

function buttonConfirmOff() {
    let buttonConfirmnya = document.getElementById("confirmButton")
    buttonConfirmnya.style.boxShadow = "0px 0px"
    buttonConfirmnya.style.backgroundColor = "rgb(83, 83, 255)"
}

function buttonOnClick(){
    let idnyayang = document.getElementById("modal-content")
    while(idnyayang.childElementCount > 0){
        idnyayang.removeChild(idnyayang.firstElementChild)
    }
    const Thengyu = document.createElement("h1");
    const isiTheng = document.createTextNode(`Terima Kasih`);
    Thengyu.setAttribute("class","h11")
    Thengyu.appendChild(isiTheng);
    document.getElementById("modal-content").appendChild(Thengyu);

    let img= new Image();
    img.className = "center"
    img.width = 60
    img.height = 60
    img.src = "C:\Hacktiv8\Phase_0\Hackton8\Images\GoPay-logo-2048x1392.png"
    document.idnyayang.appendChild(img);
}

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

let awdawd = document.getElementsByClassName("nunjukMakanan")
keranjang = localStorage.getItem("keranjang")

for (let i in keranjang){
    let data = keranjang[i];

    for (let j in items){
        let dataCari = items[j]

        const adadadad = document.createElement("h1");
        const isiTheng = document.createTextNode(`Anda membeli ${dataCari.name} dengan harga ${dataCari.price}`);
        adadadad.setAttribute("class","h11")
        adadadad.appendChild(isiTheng);
        document.getElementById("nunjukMakanan").appendChild(adadadad);


        if (data === dataCari.id){
            document.awdawd.appendChild(namaDanHarga);
        }
    }

}
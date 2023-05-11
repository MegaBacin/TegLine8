let ordermakanan = document.getElementById("ordermakanan");

function menunjukanPembayaran(parameter) {

    let parent = document.getElementById("ordermakanan");
    // let data = document.createElement("h1");
    // let textnode = document.createTextNode(parameter)
    // data.innerText = textnode

    
//   // Create an "li" node:
// const node = document.createElement("h1");

// // Create a text node:
// const textnode = document.createTextNode(parameter);

// // Append the text node to the "li" node:
// node.appendChild(textnode);

// Append the "li" node to the list:
// document.getElementById("myList").appendChild(node);

    while(parent.childElementCount > 0){
        parent.removeChild(parent.firstElementChild)
    }


    if (parameter === "tunai"){
          // Create an "li" node:
const node = document.createElement("h1");

// Create a text node:
const textnode = document.createTextNode(parameter);

// Append the text node to the "li" node:
node.appendChild(textnode);
        document.getElementById("ordermakanan").appendChild(node);
    }
    
}
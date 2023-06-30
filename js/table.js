let tableArray = [
  {
    "cantidad": "3",
    "producto": "Buzo Negro DC",
  },
  {
    "cantidad": "5",
    "producto": "Remera Blanca",
  },
  {
    "cantidad": "2",
    "producto": "Gorro Negro",
  }
];

function seeTable() {
  let contentTable = document.querySelector(".content-table tbody");
  contentTable.innerHTML = "";

  for (const element of tableArray) {
    let fila = document.createElement("tr");
    let cantidadColumna = document.createElement("td");
    cantidadColumna.classList.add("table_td_cantidad")
    let productoColumna = document.createElement("td");
    productoColumna.classList.add("table_td_tipo")

    cantidadColumna.textContent = element.cantidad;
    productoColumna.textContent = element.producto;

    fila.appendChild(cantidadColumna);
    fila.appendChild(productoColumna);
    contentTable.appendChild(fila);
  }
}

seeTable();

function deleteValues() {
  tableArray = [];
  seeTable();
}


function autoProd(){

    let obj1 = {
        cantidad: 2,
        producto: "Remera blanca",
    }

    let obj2 = {
      cantidad: 3,
        producto: "Gorro",
    }

    let obj3 = {
      cantidad: 1,
      producto: "Mochila"
    }

    tableArray.push(obj1, obj2, obj3);
    seeTable();
}
let form = document.querySelector("#form_input");

function addProduct(event) {
  event.preventDefault();
  let formData = new FormData(form);
  let inputTableProd = document.querySelector(".input_prod").value;
  let inputTableQuantity = document.querySelector(".input_quantity").value;
  let newData = {
    cantidad: inputTableQuantity,
    producto: inputTableProd
  };
  if (inputTableProd === "Buzo Negro" || inputTableProd === "Remera Blanca" || inputTableProd === "Gorro" || inputTableProd === "Mochila"){
      tableArray.push(newData);
      seeTable();
    return;
  }
  else{
    alert ("Escriba un producto valido tal cual se muestra en el texto!")
  }
}

form.addEventListener("submit", addProduct);

form.addEventListener("reset", deleteValues);

let buttonAutoFill = document.querySelector(".auto_product");
buttonAutoFill.addEventListener("click", autoProd);


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

function addProduct() {
  let inputTableProd = document.querySelector(".input_prod").value;
  let inputTableQuantity = document.querySelector(".input_quantity").value;

  let newData = {
    cantidad: inputTableQuantity,
    producto: inputTableProd
  };
  if (!inputTableQuantity  && !inputTableProd){
    alert ("Debe elegir un producto y cantidad!")
    return;
} else if(inputTableProd !== ("Buzo Negro") || ("Remera Blanca") || ("Gorro") || ("Mochila")){
    alert ("Escriba un producto valido tal cual se muestra en el texto!")
    return;

}
  tableArray.push(newData);
  seeTable();
}

let buttonAddProd = document.querySelector(".add_product");
buttonAddProd.addEventListener("click", addProduct);

let buttonDeleteAll = document.querySelector(".delete_product");
buttonDeleteAll.addEventListener("click", deleteValues);

let buttonAutoProd = document.querySelector(".auto_product");
buttonAutoProd.addEventListener("click", autoProd)


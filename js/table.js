let tableArray = [{
    "cantidad": 3,
    "producto": "Buzo Negro"

}];

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

function addProduct() {
  let inputTableProd = document.querySelector(".input_prod").value;
  let inputTableQuantity = document.querySelector(".input_quantity").value;

  let newData = {
    cantidad: inputTableQuantity,
    producto: inputTableProd
  };

  tableArray.push(newData);
  seeTable();
}

let buttonAddProd = document.querySelector(".add_product");
buttonAddProd.addEventListener("click", addProduct);

let buttonDeleteAll = document.querySelector(".delete_product");
buttonDeleteAll.addEventListener("click", deleteValues);



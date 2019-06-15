class Product {
    constructor(name,price,cant,date){
        this.name = name;
        this.price = price;
        this.cant = cant;
        this.date = date;
    }
}

class UI {
    addProduct(){
       
    }

    deleteProduct(){

    }

    editProduct(){

    }

    showMessage(){

    }
}

// Eventos del DOM

document.getElementById('product-form').addEventListener('submit', function (event) {
  const name =  document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const cant = document.getElementById('cant').value;
  const date = document.getElementById('date').value;
  
  console.log(name,price,cant,date);

  console.log(new Product(name,price,cant,date))

  event.preventDefault();
});
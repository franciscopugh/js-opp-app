class Product {
    constructor(name,price,cant,date){
        this.name = name;
        this.price = price;
        this.cant = cant;
        this.date = date;
    }
}

class UI {
    addProduct(product){
       const productList = document.getElementById('product-list');
       const element = document.createElement('div');

       // Inserto HTML en el elemento 
       element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name} 
                    <strong>Price</strong>: ${product.price}  
                    <strong>Quantity</strong>: ${product.cant} 
                    <strong>Date</strong>: ${product.date}  
                </div>
            </div>
        `;
       productList.appendChild(element);
    }

    resetForm(){
        document.getElementById('product-form').reset();
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

  const product = new Product(name,price,cant,date);

  //Instancio la Clase 

  const ui = new UI();

  ui.addProduct(product);       
  ui.resetForm();

  event.preventDefault();
});
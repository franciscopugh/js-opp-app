// Constructor de Producto
class Product {
    constructor(name,price,cant,date){
        this.name = name;
        this.price = price;
        this.cant = cant;
        this.date = date;
    }
}

//Constructor de UI
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
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
       productList.appendChild(element);
    }

    resetForm(){
        document.getElementById('product-form').reset();
    }

    deleteProduct(element){
        if(element.name === 'delete'){     // Click en el boton Delete
            element.parentElement.parentElement.parentElement.remove()      // Selecciono toda la tarjeta y la elimino
            this.showMessage('Producto Eliminado Satisfactoriamente', 'success');
        }
    }

    showMessage(message,cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));

        // Mostrar en el DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');

        // Insertar Mensaje en la UI
        container.insertBefore(div, app);

        // Remover el mensaje pasado 3 segundos
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    
}

// Eventos del DOM

document.getElementById('product-form').addEventListener('submit', function (event) {
  const name =  document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const cant = document.getElementById('cant').value;
  const date = document.getElementById('date').value;

  const product = new Product(name,price,cant,date);

  const ui = new UI();    //Instancio la Clase 

  if(name === '' || price === '' || cant === '' || date === ''){
        return ui.showMessage('Complete todos los campos requeridos', 'danger'); 
  }

  ui.addProduct(product);       
  ui.showMessage('Producto Agregado satisfactoriamente', 'success');
  ui.resetForm();

  event.preventDefault();
});

document.getElementById('product-list').addEventListener('click', function(event){
    const ui = new UI();
    ui.deleteProduct(event.target);
});
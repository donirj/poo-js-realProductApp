console.log('LOG')

class Product {
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
    
}

class UI {
    // metodo
    addProduct(product){
        const productList = document.getElementById('product-list')
        const element = document.createElement('div')
        // creamos nuevo elemento
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name}
                    <strong>Product price</strong>: ${product.price}
                    <strong>Product price</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </>
        `;
        // a productList le agregamos un elemento hijo
        productList.appendChild(element);
        this.resetForm();
    }

    resetForm(){
        document.getElementById('product-form').reset()
    }

    // element que agregamos con append a productList
    deleteProduct(element){
        if(element.name === 'delete') {
            element.parentElement.parentElement.remove()
        }
    }
    showMessage(message, cssClass) {
        // crea elemento div
        const div = document.createElement('div')
        // a div le da la clase alert alert 
        div.className = `alert alert - ${cssClass}`
        // a div le agregamos el elemento 
        div.appendChild(document.createTextNode(message))
        // new variable of container
        const container = document.querySelector('.container');
        // new variable for app
        const app = document.querySelector('#App')
        container.insertBefore(div, app);

    }
}

// dom events
document.getElementById('product-form')
    .addEventListener('submit', function(e) {
    
        const name = document.getElementById('name').value
        const price = document.getElementById('price').value
        const year = document.getElementById('year').value
        
        const product = new Product(name, price, year)
      
        // nueva instancia de la clase UI
        const ui = new UI();
        // a la nueva instancia ui le agregamos el metodo addProduct y el producto generado
        ui.addProduct(product)
        ui.resetForm();
        ui.showMessage('Product added succesfully', 'success')

        e.preventDefault();

    })

document.getElementById('product-list').addEventListener('click', function(e) {

    const ui = new UI()
    ui.deleteProduct(e.target)
})
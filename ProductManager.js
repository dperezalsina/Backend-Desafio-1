
class ProductManager{
    constructor(){
            this.products = [];
    }

    addProduct = (title, description, price, thumbnail, code, stock) =>{ 
        const producto ={
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        const found = this.products.find(codigo => codigo.code === producto.code); 

        if(this.products.length === 0){
            producto.id = 1;
        }
        else{
            producto.id = this.products [this.products.length-1].id+1
        }

        if (found == undefined){  
            if(producto.title === "" || producto.description === "" || producto.price === "" || producto.thumbnail === "" || producto.stock === "")
            console.log("Todos los campos son obligatorios")
            else{
            this.products.push(producto);
            }
        }
        else{
            console.log(`ya se encuentra registrado el campo "code" para ${producto.title}`)
        }
    }

    getProducts = ()=>{
        console.log(this.products)
    }

    getProductById = (idProducto)=>{
        const idFound = this.products.find(idProduct => idProduct.id === idProducto)
            if(idFound == undefined || idFound.id != idProducto){

                    console.error("Not found")
                    
            }
            else{
                    console.log(idFound)
                    return idFound
        }
    }
}
    



const productoNuevo = new ProductManager();

productoNuevo.getProducts()

productoNuevo.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25)


productoNuevo.getProducts()

productoNuevo.getProductById(1)



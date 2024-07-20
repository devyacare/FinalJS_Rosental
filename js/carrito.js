function actualizarDom (){
    modalContainer.innerHTML = ""
    modalContainer.style.display = "flex"
    const modalHeader = document.createElement("div")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h2 class="modal-header-title">Carrito</h2>
    `
    modalContainer.append(modalHeader)

    const modalButton = document.createElement("h2")
    modalButton.innerText = "X"
    modalButton.className = "modal-header-button"

    modalButton.addEventListener("click", () =>{
        modalContainer.style.display = "none"
    })

    modalHeader.append(modalButton)

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `El carrito se encuentra vacio`

    modalContainer.append(totalBuying)
}

const pintarCarrito = () =>{
    modalContainer.innerHTML = ""
    modalContainer.style.display = "flex"
    const modalHeader = document.createElement("div")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h2 class="modal-header-title">Carrito</h2>
    `
    modalContainer.append(modalHeader)

    const modalButton = document.createElement("h2")
    modalButton.innerText = "X"
    modalButton.className = "modal-header-button"

    modalButton.addEventListener("click", () =>{
        modalContainer.style.display = "none"
    })

    modalHeader.append(modalButton)

    carrito.forEach((product) =>{
        let carritoContent = document.createElement ("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
            <img src="${product.img}">
            <div class="modal-content-name">
                <h3>${product.nombre}</h3>
                <p>($${product.precio})</p>
            </div>
            <div class="modal-content-cantidades">
                <span class="restar"> - </span>
                <p>Cantidad: ${product.cantidad}</p>
                <span class="sumar"> + </span>
            </div>
            <p>Total: ${product.cantidad * product.precio}</p>
            <span class="delete-product"> X </span>
        `
        modalContainer.append(carritoContent)

        let restar = carritoContent.querySelector(".restar")
        restar.addEventListener("click", () =>{
            if(product.cantidad !== 1){
            product.cantidad--
        }
            saveLocal()
            pintarCarrito()
        })

        let sumar = carritoContent.querySelector(".sumar")
        sumar.addEventListener("click", () =>{
            product.cantidad++
            saveLocal()
            pintarCarrito()
        })

        let eliminar = carritoContent.querySelector(".delete-product")
        eliminar.addEventListener ("click", () =>{
            eliminarProducto(product.id)
        })

    })

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    if (total === 0){ 
    totalBuying.innerHTML = `El carrito se encuentra vacio`
    } else{
        totalBuying.innerHTML = `
        Total a pagar: $${total}
        <div class="modal-footer">
                 <button class="vaciar-carrito" id="vaciar-carrito">Vaciar carrito</button>
                 <button class="checkout" id="checkout">Checkout</button>
             </div>
        `
    }

    let vaciarCarrito = totalBuying.querySelector(".vaciar-carrito")
    vaciarCarrito.addEventListener ("click", () =>{
        localStorage.clear()
        actualizarDom()
    })

    modalContainer.append(totalBuying)
}

verCarrito.addEventListener("click", pintarCarrito)

const eliminarProducto = (id) =>{
    const foundId = carrito.find((element) => element.id === id)
    carrito = carrito.filter((carritoId) =>{
        return carritoId !== foundId
    })
    carritoCounter()
    saveLocal()
    pintarCarrito()
}

const carritoCounter = () => {
    cantidadCarrito.style.display = "block"

    const carritoLength = carrito.length
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
}

carritoCounter()

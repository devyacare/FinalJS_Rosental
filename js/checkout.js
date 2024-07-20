const resumenPedido = document.getElementById("resumen-pedido")

let carrito = JSON.parse(localStorage.getItem("carrito"))

carrito.forEach((product) =>{
    let tablaPedidos = document.createElement ("div")
    tablaPedidos.className = "tabla-container"
    tablaPedidos.innerHTML = `
        <table>
            <tr>
                <td>Nombre del producto</td>
                <td>Precio por unidad</td>
                <td>Cantidad de unidades</td>
                <td>Total</td>
            </tr>
            <tr>
                <td>${product.nombre}</td>
                <td>${product.precio}</td>
                <td>${product.cantidad}</td>
                <td>${product.cantidad * product.precio}</td>
            </tr>
        </table>

    `
    resumenPedido.append(tablaPedidos)
})


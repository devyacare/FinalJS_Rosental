const resumenPedido = document.getElementById("resumen-pedido")
const tablaProductos = document.getElementById("tabla")
const costoCompra = document.getElementById("costo-compra")

let carrito = JSON.parse(localStorage.getItem("carrito"))
const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)

carrito.forEach((product) =>{
    let tablaPedidos = document.createElement ("tbody")
    tablaPedidos.className = "tabla-pedido"
    tablaPedidos.innerHTML = `
                <tr>
                    <td>${product.nombre}</td>
                    <td>$${product.precio}</td>
                    <td>${product.cantidad}</td>
                    <td>$${product.cantidad * product.precio}</td>
                </tr>
    `
    tablaProductos.append(tablaPedidos)
})

costoCompra.innerHTML = `El total de su compra es: $${total}`
const resumenPedido = document.getElementById("resumen-pedido")
const tablaProductos = document.getElementById("tabla")
const costoCompra = document.getElementById("costo-compra")
const confirmarPedido = document.getElementById("confirmar")
const sectionInfo = document.getElementById("info")
const formContainer = document.getElementById("form-container")


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




confirmarPedido.addEventListener ("click", () =>{
    Swal.fire({
        title: "No te quedó nada más para comprar?",
        text: "Una vez que confirmes el pedido nos pondremos en contacto",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Quiero mi pedido!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "EXCELENTE!",
            text: "Estaté atento que nos comunicaremos con vos para hacerte llegar el pedido lo antes posible",
            icon: "success"
          });
          localStorage.clear()
          carrito.length = 0
          sectionInfo.innerHTML = ""
          formContainer.innerHTML = ""         
          resumenPedido.innerHTML =`
          <p>Estamos procesando tu pedido y pronto nos comunicaremos con vos. GRACIAS POR TU COMPRA !</p>
          `
        }
    });
})


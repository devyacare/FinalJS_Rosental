Entrega final

Curso JavaScript - CoderHouse

Notas: 
- Se puede elegir un articulo y manejar cantidades desde el carrito. Lo hice así para no ser redundante y que aparezca dos veces la selección de cantidad.
Así en la página principal se elije un producto y antes de confirmar la compra se puede decidir cuantos se quieren o vaciar el carrito. Si se intenta agregar
cantidades dandole al botón de agregar se muestra una notificación indicando que se dirija al carrito como feedback.

Andrés Rosental.



    let vaciarCarrito = totalBuying.querySelector(".vaciar-carrito")
    vaciarCarrito.addEventListener ("click", () =>{
        localStorage.clear()
    })

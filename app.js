
    const productos = [
        { nombre: "torta", precio: 10000 },
        { nombre: "cupcakes", precio: 850 },
        { nombre: "cookies", precio: 700 },
        { nombre: "paletas", precio: 1200 },
        { nombre: "oreo bañadas", precio: 350 }
    ];
    
    let carrito = {};
    
    let seleccion = prompt("¿Quieres llevar algún producto hoy?");
    
    while (seleccion !== "si" && seleccion !== "no") {
        alert("Por favor, responde 'si' o 'no'");
        seleccion = prompt("¿Deseas hacer un pedido?");
    }
    
    if (seleccion === "si") {
        alert("Puedes elegir entre estos productos:");
        let todosLosProductos = productos.map((producto) => `${producto.nombre} - ${producto.precio}$`);
        alert(todosLosProductos.join("\n"));

        if (seleccion === "no") {
            alert("Gracias por visitarnos, vuelve pronto")};
    
        let productoElegido = prompt("Ingrese el nombre del producto que desea agregar al carrito:");
    
        while (productoElegido) {
            const productoEncontrado = productos.find((producto) => producto.nombre === productoElegido);
    
            if (productoEncontrado) {
                if (carrito[productoElegido]) {
                    carrito[productoElegido] += 1;
                } else {
                    carrito[productoElegido] = 1;
                }
    
                alert(`${productoElegido} se ha añadido al carrito.`);
            } else {
                alert("El producto no existe en nuestro catálogo.");
            }
    
            productoElegido = prompt("Ingrese el nombre del producto que desea agregar al carrito (o deja el campo en blanco para finalizar):");
        }
    
        alert("Tu carrito de compras:");
        for (const item in carrito) {
            alert(`${item}: ${carrito[item]} unidades`);
        }
    } else {
        alert("Gracias por visitarnos. ¡Hasta luego!");
    }
    
    
const produ = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    nombre: `Jugueteria ${i + 1}`,
    precio: (i + 1) * 10,
    imagen: "saved Pictures/Jugueteria.jpg"

}));
const Productos = [
    {
        id: 1,
        nombre: `Carro Electrico Rosado`,
        precio: 900.000,
        imagen: "Imagenes/Carro Electrico Rosado.jpg"
    },
    {
        id: 2,
        nombre: `Carro Electrico`,
        precio: 922.000,
        imagen: "Imagenes/Carro Electrico.jpg"
    },
    {
        id: 3,
        nombre: `Carro Radio Control Azul`,
        precio: 120.600,
        imagen: "Imagenes/Carro Radio Control Azul.jpg"
    },
    {
        id: 4,
        nombre: `Carro Tiburon Control Remoto`,
        precio: 250.000,
        imagen: "Imagenes/Carro Tiburon Control Remoto.jpg"
    },
    {
        id: 5,
        nombre: `Coche Convertible Rosa`,
        precio: 120.000,
        imagen: "Imagenes/Coche Convertible Rosa.jpg"
    },
    {
        id: 6,
        nombre: `Figura Dinosaurio Velociraptor`,
        precio: 42.000,
        imagen: "Imagenes/Figura Dinosaurio Velociraptor.jpg"
    },
    {
        id: 7,
        nombre: `Figura Dragon Ball Piccolo`,
        precio: 85.000,
        imagen: "Imagenes/Figura Dragon Ball Piccolo.jpg"
    },
    {
        id: 8,
        nombre: `Figura Hulk 30 cm`,
        precio: 100.000,
        imagen: "Imagenes/Figura Hulk 30 cm.jpg"
    },
    {
        id: 9,
        nombre: `Figura Thor`,
        precio: 340.000,
        imagen: "Imagenes/Figura Thor.jpg"
    },
    {
        id: 10,
        nombre: `Figura Venom Titan Hero`,
        precio: 900.000,
        imagen: "saved Pictures/Figura Venom Titan Hero.jpg"
    },
    {
        id: 11,
        nombre: `Lanzador Nerf Elite`,
        precio: 69.000,
        imagen: "Imagenes/Lanzador Nerf Elite.jpg"
    },
    {
        id: 12,
        nombre: `Muñeca Barbie Glitz`,
        precio: 35.000,
        imagen: "Imagenes/Muñeca Barbie Glitz.jpg"
    },
    {
        id: 13,
        nombre: `Muñeca Sirena Luces Brillante`,
        precio: 120.000,
        imagen: "Imagenes/Muñeca Sirena Luces Brillante.jpg"
    },
    {
        id: 14,
        nombre: `Muñeca Sorpresa Baby Alive`,
        precio: 80.000,
        imagen: "Imagenes/Muñeca Sorpresa Baby Alive.jpg"
    },
    {
        id: 15,
        nombre: `Peluche Furby`,
        precio: 430.000,
        imagen: "Imagenes/Peluche Furby.jpg"
    },
    {
        id: 16,
        nombre: `Pista Carrera de Canicas`,
        precio: 110.000,
        imagen: "Imagenes/Pista Carrera de Canicas.jpg"
    },
    {
        id: 17,
        nombre: `Pista de Reto`,
        precio: 182.000,
        imagen: "Imagenes/Pista de Reto.jpg"
    },
    {
        id: 18,
        nombre: `Set de Juego Chelsea`,
        precio: 120.000,
        imagen: "Imagenes/Set de Juego Chelsea.jpg"
    },
    {
        id: 19,
        nombre: `Set de Juego Nueva Casa de los Sueños Barbie`,
        precio: 980.000,
        imagen: "Imagenes/Set de Juego Nueva Casa de los Sueños barbie.jpg"
    },
    {
        id: 20,
        nombre: `Set Joyas Fiesta de Alfabeto`,
        precio: 80.000,
        imagen: "Imagenes/Set Joyas Fiesta de Alfabeto.jpg"
    },
    {
        id: 21,
        nombre: `Set Lavado de Autos`,
        precio: 70.000,
        imagen: "Imagenes/Set Lavado de Autos.jpg"
    },
    {
        id: 22,
        nombre: `Set Nuevo Closet de Lujo`,
        precio: 182.000,
        imagen: "Imagenes/Set Nuevo Closet de Lujo.jpg"
    },
    {
        id: 23,
        nombre: `Set Patio del Castillo de Elsa`,
        precio: 45.600,
        imagen: "Imagenes/Set Patio del Castillo de Elsa.jpg"
    },
    {
        id: 24,
        nombre: `Set Tocador`,
        precio: 120.000,
        imagen: "Imagenes/Set Tocador.jpg"
    },
    {
        id: 25,
        nombre: `Supermercado de Minnie`,
        precio: 260.000,
        imagen: "Imagenes/Supermercado de Minnie.jpg"
    },
];

let carrito = [];
const productosContainer = document.getElementById("productos-container");

function renderProductos() {
    const fragment = document.createDocumentFragment();
    Productos.forEach(producto => {
        const colDiv = document.createElement("div");
        colDiv.className = "col-12 col-md-6 col-lg-4 col-x1-2 mb-4";
        colDiv.innerHTML = `
         <div class="card h-100">
         <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
         <div class="card-body">
         <h5 class="card-title">${producto.nombre}</h5>
         <p class="card-text">Precio: $${producto.precio}</p>
         <input type="number" min="1" value="1" class="form-control mb-2 product-quantity" data-id="${producto.id}">
         <button class="btn btn-primary w-100" data-id="${producto.id}">Agragar al Carrito</button>
         </div>
         </div>
        
        `;
        fragment.appendChild(colDiv);

    });
    productosContainer.appendChild(fragment);
}

productosContainer.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
        const productoId = parseInt(e.target.dataset.id);
        const quantityInput = document.querySelector(`.product-quantity[data-id="${productoId}"]`);
        const cantidad = parseInt(quantityInput.value);
        agregarAlCarrito(productoId, cantidad);
    }
});

function agregarAlCarrito(productoId, cantidad) {
    console.log(Productos)
    const producto = Productos.find(p => p.id === productoId);
    const productoEnCarrito = carrito.find(p => p.id === productoId);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += cantidad;
    } else {
        carrito.push({ ...producto, cantidad });
    }
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoContainer = document.getElementById("carrito-container");
    carritoContainer.innerHTML = carrito.map(producto => `
        <div class="carrito-item d-flex justify-content-between align-items-center mb-2">
        <p>${producto.nombre} - $${producto.precio} x ${producto.cantidad}</p>
        <div>

        <button onclick="cambiarCantidad(${producto.id}, -1)" class="btn btn--sm btn-secondary">-</button>
        <span>${producto.cantidad}</span>
        <button onclick="cambiarCantidad(${producto.id}, 1)" class="btn btn-sm btn-secondary">+</button>
        <button onclick="eliminarDelCarrito(${producto.id}) class="btn btn-danger btn-sm">Eliminar</button>
        </div>
        </div>
        
        `).join("");

    const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    document.getElementById("carrito-total").innerText = `Total: $${total}`;
}

function cambiarCantidad(productoId, cambio) {
    const producto = carrito.find(p => p.id === productoId);
    if (!producto) return;

    producto.cantidad += cambio;
    if (producto.cantidad <= 0) {
        eliminarDelCarrito(productoId);
    } else {
        actualizarCarrito();
    }
}

function eliminarDelCarrito(productoId) {
    carrito = carrito.filter(producto => producto.id !== productoId);
    actualizarCarrito();
}

function finalizarCompra() {
    const carritoModal = bootstrap.Modal.getInstance(document.getElementById("carritoModal"));
    carritoModal.hide();
    const finalizacionModal = new bootstrap.Modal(document.getElementById("finalizacionModal"));
    finalizacionModal.show();
}

function completarPedido() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const direccion = document.getElementById("direccion").value;

    if (!nombre || !email || !direccion) {
        alert("Por favor, completa todos los campos.");
        return;
    }   

    alert(`¡Gracias por tu compra, ${nombre}! Te enviaremos un correo de confirmacion a ${email}.`);
    carrito = [];
    actualizarCarrito();    
    document.getElementById("form-finalizacion").reset();
    const finalizacionModal = bootstrap.Modal.getInstance(document.getElementById("finalizacionModal"));
    finalizacionModal.hide();
}

renderProductos();

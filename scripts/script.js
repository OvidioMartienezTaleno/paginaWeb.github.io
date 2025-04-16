document.addEventListener('DOMContentLoaded', function() {
    //datos dinamicos de las festividades.
    const imagenes = [
        {
            id: 1,
            src: "assets/diaNacional.jpg",
            texto: " Día Nacional de Noruega (17 de mayo): Este día es una de las celebraciones más importantes del país. En Oslo, las calles se llenan de desfiles, música y banderas noruegas. Los habitantes visten trajes tradicionales llamados bunads, y es común ver a las familias disfrutando de picnics y actividades al aire libre."
        },
        {
            id: 2,
            src: "assets/oya.jpg",
            texto: "Festival de Música Øya (agosto): Un evento vibrante que reúne a artistas internacionales y locales en un entorno al aire libre. Es uno de los festivales de música más importantes de Noruega."
        },
        {
            id: 3,
            src: "assets/Spikersuppa.jpg",
            texto: "Mercado Navideño en Spikersuppa (diciembre):Durante el mes de diciembre, el centro de Oslo se transforma en un encantador mercado navideño. Los visitantes pueden disfrutar de puestos de artesanías, comida típica noruega y una pista de patinaje sobre hielo. Es una experiencia mágica para todas las edades."
        },
        {
            id: 4,
            src: "assets/musica.jpg",
            texto: "Festival Internacional de Música Religiosa de Oslo (marzo): Un evento dedicado a la música religiosa de alta calidad, con conciertos en iglesias y auditorios de la ciudad."
        },
        {
            id: 5,
            src: "assets/solsticio.jpg",
            texto: "Solsticio de Verano (junio): Aunque no es exclusivo de Oslo, esta celebración es muy popular en toda Noruega. Se organizan fogatas, conciertos y actividades al aire libre para marcar el día más largo del año."
        }
    ];
    
    const miniaturas = document.querySelectorAll('.miniatura');
    const imagenPrincipal = document.querySelector('.imagen-principal');
    const textoImagen = document.querySelector('.texto-imagen');
    const botonAnterior = document.querySelector('.anterior');
    const botonSiguiente = document.querySelector('.siguiente');
    
    let imagenActual = 1;
    
    //cargar imagenes
    function cambiarImagen(id) {
        const imagen = imagenes.find(img => img.id === id);
        
        if (imagen) {
            imagenPrincipal.src = imagen.src;
            textoImagen.textContent = imagen.texto;
            imagenActual = id;
            
            //actualizacion de las imagenes mini
            miniaturas.forEach(mini => {
                if (parseInt(mini.dataset.id) === id) {
                    mini.classList.add('activa');
                } else {
                    mini.classList.remove('activa');
                }
            });
        }
    }
    
    // evento de las imagenes mini
    miniaturas.forEach(miniatura => {
        miniatura.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            cambiarImagen(id);
        });
    });
    
    // eventos de navegacion con click
    botonAnterior.addEventListener('click', function() {
        let nuevoId = imagenActual - 1;
        if (nuevoId < 1) nuevoId = 5;
        cambiarImagen(nuevoId);
    });
    
    //evento de navegacion con click
    botonSiguiente.addEventListener('click', function() {
        let nuevoId = imagenActual + 1;
        if (nuevoId > 5) nuevoId = 1;
        cambiarImagen(nuevoId);
    });
    
    cambiarImagen(1);
});



//Galeria: ======================================================================================================================================


const atracciones = [
    //Datos dinamicos de las festividades
    {
        id: 1,
        nombre: "Castillo y Fortaleza de Akershus",
        src: "assets/castilloCP.jpg",
        descripcion: "Es un impresionante complejo histórico ubicado en Oslo, Noruega, junto al fiordo de Oslo. Construido originalmente en la Edad Media, alrededor de 1290, por el rey Haakon V, comenzó como un castillo real y más tarde fue rodeado por una fortaleza renacentista en el siglo XVII.",
        horarios: "Lunes a domingo: 6:00AM - 9:00 PM",
        costo: "Adultos Entrada 150 NOK, Jubilados y estudiantes Entrada 100N NOK, Menores de 18 años Entrada libre, Jubilados y estudiantes Combined ticket Entrada 200 NOK, Adultos Combined ticket Entrada 300 NOK",
        categoria: "castillos",
        sitioWeb: "https://www.tripadvisor.com.mx/Attraction_Review-g190479-d206477-Reviews-Akershus_Castle_and_Fortress_Akershus_Slott_og_Festning-Oslo_Eastern_Norway.html"
    },  
    {
        id: 2,
        nombre: "The National Museum",
        src: "assets/museoCP.jpg",
        descripcion: "El Museo Nacional tiene una exposición permanente que consta de más de 5000 objetos que incluye desde diseño, artesanía y artes visuales de diferentes siglos, además de arte contemporáneo. La presentación se realiza de forma cronológica mostrando las principales características de la historia del arte noruego, así como obras extranjeras clave. La exposición principal crea la coherencia entre las distintas colecciones y épocas históricas.",
        horarios: "Lunes cerrado, Martes a Miercoles: 10:00 AM - 8:00 PM, Jueves a domingo: 10:00 AM - 5:00 PM",
        costo: "Adultos Entrada 200 NOK, Menores de 18 años Entrada 0 , Estudiante Entrada 120 NOK, Adolescentes entre 18 y 25 Entrada 120 NOK",
        categoria: "museo",
        sitioWeb: "https://www.tripadvisor.com.mx/Attraction_Review-g190479-d24051441-Reviews-The_National_Museum-Oslo_Eastern_Norway.html"
    },
    {
        id: 3,
        nombre: "Museo de la Resistencia Noruega",
        src: "assets/museoResistenciaCP.jpg",
        descripcion: "Los 5 años de la ocupación alemana desde la invasión hasta la liberación se recrean a través de imágenes, documentos, carteles, objetos, maquetas, periódicos de la época y grabaciones radiofónicas.",
        horarios: "Lunes a Domingo: 10:00 AM - 5:00 PM",
        costo: "Jubilados y estudiantes Entrada 100 NOK, Adultos Entrada 150 NOK, Menores de 18 años Entrada libre, Adultos Combined ticket Entrada 300 NOK, Jubilados y estudiantes Combined ticket Entrada 200 NOK",
        categoria: "museo",
        sitioWeb: "https://www.tripadvisor.com.mx/Attraction_Review-g190479-d206467-Reviews-Norges_Hjemmefrontmuseum-Oslo_Eastern_Norway.html"
    },
    {
        id: 4,
        nombre: "Museo Marítimo Nacional",
        src: "assets/museoMaritimoCP.jpg",
        descripcion: "El Museo Marítimo ofrece la experiencia de Noruega como nación costera y naval, también tiene un programa de temporada con actividades variadas y exposiciones temporales.",
        horarios: "Lunes a domingo: 10:00 AM - 5:00 PM",
        costo: "Adultos Entrada 140 NOK, Grupos, mínimo 10 personas. Por persona 90 NOK, Jubilados Entrada 120 NOK, Estudiante Entrada 120 NOK, Menores de 18 años Entrada libre",
        categoria: "museo",
        sitioWeb: "https://www.tripadvisor.com.mx/Attraction_Review-g190479-d656587-Reviews-Fram_Museum-Oslo_Eastern_Norway.html"
    },
    {
        id: 5,
        nombre: "Vigeland Park",
        src: "assets/parqueCP.jpg",
        descripcion: "El excepcional parque escultórico es el trabajo de toda una vida del escultor Gustav Vigeland (1869-1943), con más de 200 esculturas de bronce, granito y hierro forjado. Vigeland fue también el diseñador del conjunto arquitectónico del parque",
        horarios: "Abierto",
        costo: "No aplica",
        categoria: "parques",
        sitioWeb: "https://www.tripadvisor.com.mx/Attraction_Review-g190479-d9602729-Reviews-Vigeland_Park-Oslo_Eastern_Norway.html"
    },
    {
        id: 6,
        nombre: "Munch",
        src: "assets/muchCP.jpg",
        descripcion: "Descubre obras de arte icónicas y encuentra tesoros escondidos. Disfruta de las espectaculares vistas a la ciudad y de un almuerzo junto al mar: MUNCH ofrece 13 pisos de experiencias artísticas para jóvenes y mayores.",
        horarios: "Lunes-Martes: 10:00-18:00, Miércoles-Sábado: 10:00-21:00, Domingo: 10:00-18:00",
        costo: "Adultos Entrada 180 NOK, Menores de 18 años Entrada libre,Adolescentes Menores de 25 años Entrada 100 NOK",
        categoria: "museo",
        sitioWeb: "https://www.tripadvisor.com.mx/Attraction_Review-g190479-d196805-Reviews-Munch-Oslo_Eastern_Norway.html"
    },
    {
        id: 7,
        nombre: "Karl Johans Gate",
        src: "assets/gateCP.jpg",
        descripcion: "La calle Karl Johans es la calle principal de la ciudad de Oslo, Noruega. Fue nombrada en honor de Carlos III Juan, rey de Suecia y Noruega. La calle Karl Johans es una composición de varias calles antiguas que fueron vías separadas.",
        horarios: "Abierto ",
        costo: "No aplica",
        categoria: "monumentos",
        sitioWeb: "https://www.tripadvisor.com.mx/Attraction_Review-g190479-d206479-Reviews-Karl_Johans_Gate-Oslo_Eastern_Norway.html"
    },
    {
        id: 8,
        nombre: "El Palacio Real",
        src: "assets/palacioCP.jpg",
        descripcion: "Residencia de la Familia Real construida en 1824-48 en Christiania. Cambio de Guardia a las 13.30. Desfile de la Guardia de su Alteza Real en determinados días durante la temporada de verano.",
        horarios: "Abierto a los visitantes desde últimos de junio a mediados de agosto. Las visitas guiadas duran cerca de una hora.",
        costo: "Adultos: 230 NOK, Niños y estudiantes: 110 NOK, Menores de 5 años: Entrada gratis.",
        categoria: "monumentos",
        sitioWeb: "https://www.tripadvisor.com.mx/Attraction_Review-g190479-d656633-Reviews-The_Royal_Palace-Oslo_Eastern_Norway.html"
    },
    {
        id: 9,
        nombre: "Ayuntamiento de Oslo",
        src: "assets/ayuntamientoCP.jpg",
        descripcion: "El Ayuntamiento de Oslo fue inaugurado en 1950 y es conocido por su decoración realizada por importantes artistas noruegos. En su edificio se celebran asambleas y ceremonias.",
        horarios: "Lunes-Doming: 09:00-16:00",
        costo: "No aplica",
        categoria: "monumentos",
        sitioWeb: "https://www.tripadvisor.com.mx/Attraction_Review-g190479-d206468-Reviews-Oslo_City_Hall-Oslo_Eastern_Norway.html"
    },
    {
        id: 10,
        nombre: "Korketrekkeren",
        src: "assets/korketreCP.jpg",
        descripcion: "Montar en trineo en 'Korketrekkeren' (= el sacacorchos), la pista más grande para trineos. La pista es iluminada por la noche.",
        horarios: ["Lunes-Viernes: Winter 10:00-21:00 ", 
                    "Sábado: Winter 09:00-21:00 ", 
                    "Domingo: Winter 10:00-18:00 "],
        costo: "El alquiler del tobogán cuesta entre 100-150 NOK",
        categoria: "parques",
        sitioWeb: "https://www.tripadvisor.com.mx/Attraction_Review-g190479-d591707-Reviews-Korketrekkeren-Oslo_Eastern_Norway.html"
    }
];

//crea targetas de maneta dinamica
function mostrarAtracciones(atraccionesFiltradas = atracciones) {
    const contenedor = document.getElementById('lista-atracciones');
    contenedor.innerHTML = ''; 
    
    atraccionesFiltradas.forEach(atraccion => {
        //crea tarjeta para cada atracción
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-atraccion';
        tarjeta.dataset.categoria = atraccion.categoria;
        
        //estructura de la tarjeta
        tarjeta.innerHTML = `
            <div class="imagen-atraccion">
                <img src="${atraccion.src}" alt="${atraccion.nombre}">
            </div>
            <div class="contenido-atraccion">
                <h2 class="nombre-atraccion">${atraccion.nombre}</h2>
                <p class="descripcion-atraccion">${atraccion.descripcion}</p>
                <div class="detalles-atraccion">
                    <div class="detalle">
                        <h4>HORARIOS</h4>
                        <p>${atraccion.horarios}</p>
                    </div>
                    <div class="detalle">
                        <h4>COSTO</h4>
                        <p>${atraccion.costo}</p>
                    </div>
                </div>
                <a href="${atraccion.sitioWeb}" target="_blank" class="enlace-sitio">Visitar sitio oficial</a>
            </div>
        `;
        //agrega la targeta
        contenedor.appendChild(tarjeta);
    });
    
    // si no hay resultados
    if (atraccionesFiltradas.length === 0) {
        contenedor.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 30px;">No se encontraron atracciones con los criterios de búsqueda.</p>';
    }
}

//filtra las atracciones por categoria
function filtrarPorCategoria(categoria) {
    if (categoria === 'todas') {
        return atracciones;
    } else {
        return atracciones.filter(atraccion => atraccion.categoria === categoria);
    }
}

//buscar atracciones por texto
function buscarAtracciones(texto) {
    const textoBusqueda = texto.toLowerCase();
    return atracciones.filter(atraccion => 
        atraccion.nombre.toLowerCase().includes(textoBusqueda) || 
        atraccion.descripcion.toLowerCase().includes(textoBusqueda)
    );
}

//inica la pagina
document.addEventListener('DOMContentLoaded', () => {
    
    mostrarAtracciones();
    
    //evento de cambio para el filtro de categoría
    const filtroCategoria = document.getElementById('filtro-categoria');
    filtroCategoria.addEventListener('change', () => {
        const categoriaSeleccionada = filtroCategoria.value;
        const atraccionesFiltradas = filtrarPorCategoria(categoriaSeleccionada);
        mostrarAtracciones(atraccionesFiltradas);
        
        document.getElementById('campo-busqueda').value = '';
    });
    
    const botonBusqueda = document.getElementById('boton-busqueda');
    botonBusqueda.addEventListener('click', realizarBusqueda);
    
    const campoBusqueda = document.getElementById('campo-busqueda');
    campoBusqueda.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            realizarBusqueda();
        }
    });
    
    function realizarBusqueda() {
        const textoBusqueda = document.getElementById('campo-busqueda').value.trim();
        if (textoBusqueda) {
            const resultados = buscarAtracciones(textoBusqueda);
            mostrarAtracciones(resultados);

            
            document.getElementById('filtro-categoria').value = 'todas';
        } else {
            
            const categoriaSeleccionada = document.getElementById('filtro-categoria').value;
            const atraccionesFiltradas = filtrarPorCategoria(categoriaSeleccionada);
            mostrarAtracciones(atraccionesFiltradas);
        }
    }
});

// MAPA: ======================================================================================================================================
var mapa = L.map("map").setView([59.91340666508375, 10.752853444768544], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© OpenStreetMap',
    maxZoom: 19,
}).addTo(mapa);

// Lista de atracciones turísticas con coordenadas y nombre
const ubicacionesAtracciones = [
    {
    nombre: "Castillo y Fortaleza de Akershus",
    coordenadas: [59.907736597706624, 10.73878998274911],
    },
    {
    nombre: "The National Museum",
    coordenadas: [59.91160817122746, 10.729493960862916],
    },
    {
    nombre: "Museo de la Resistencia Noruega",
    coordenadas: [59.907814024606296, 10.736217132922304],
    },
    {
    nombre: "Museo Marítimo Nacional",
    coordenadas: [59.90290473767151, 10.699414873769605],
    },
    {
    nombre: "Vigeland Park",
    coordenadas: [59.92712037098259, 10.701626744935707],
    },
    {
    nombre: "Munch",
    coordenadas: [59.906117192084515, 10.756249823014043],
    },
    {
    nombre: "Karl Johans Gate",
    coordenadas: [59.91321452328875, 10.741955243086132],
    },
    {
    nombre: "El Palacio Real",
    coordenadas: [59.91714707557393, 10.728618450480873],
    },
    {
    nombre: "Ayuntamiento de Oslo",
    coordenadas: [59.912238094176466, 10.733769972311297],
    },
    {
    nombre: "Korketrekkeren",
    coordenadas: [59.977196196765036, 10.679217516103607],
    },
];

ubicacionesAtracciones.forEach((lugar) => {
    L.marker(lugar.coordenadas)
    .addTo(mapa)
    .bindPopup(`<strong>${lugar.nombre}</strong>`);
});


// gastronomia: ======================================================================================================================================

// Datos de platos típicos
const platillos = [
    {
        id: 1,
        tipo: 'plato',
        nombre: 'Lutefisk',
        src: 'assets/restaurante/Lutefisk.png',
        descripcion: 'Bacalao seco tratado con sosa cáustica que adquiere una textura gelatinosa. Es un plato navideño muy tradicional en Noruega.',
        ingredientes: [
            { nombre: 'Bacalao seco', alergeno: true },
            { nombre: 'Agua', alergeno: false },
            { nombre: 'Sosa cáustica', alergeno: false },
            { nombre: 'Mantequilla (para acompañar)', alergeno: true },
            { nombre: 'Puré de patatas', alergeno: false },
            { nombre: 'Tocino o panceta', alergeno: false },
            { nombre: 'Mostaza (opcional)', alergeno: false },
        ]
    },
    {
        id: 2,
        tipo: 'plato',
        nombre: 'Salmón ahumado',
        src: 'assets/restaurante/Salmon-ahumado.png',
        descripcion: 'Filetes de salmón tratados con sal y azúcar, luego ahumados para realzar su sabor. Se disfruta con pan, ensaladas o como aperitivo.',
        ingredientes: [
            { nombre: 'Salmón fresco', alergeno: true },
            { nombre: 'Sal', alergeno: false },
            { nombre: 'Azúcar', alergeno: false },
            { nombre: 'Eneldo (para decorar)', alergeno: false },
            { nombre: 'Pan de centeno', alergeno: true }, 
            { nombre: 'Queso crema', alergeno: true }, 
            { nombre: 'Rodajas de limón', alergeno: false },
        ]
    },
    {
        id: 3,
        tipo: 'plato',
        nombre: 'Lefse',
        src: 'assets/restaurante/Lefse.png',
        descripcion: 'Esta es una especie de pan noruego que se hace con patatas, leche y levadura. Su forma de comer es en forma de tortilla y enrollado. Hay otras variantes como la tynnlefse que se hace con mantequilla, azúcar y canela y es más parecido a un bizcocho.',
        ingredientes: [
            { nombre: 'Patatas', alergeno: false },
            { nombre: 'Harina de trigo', alergeno: true }, 
            { nombre: 'Mantequilla', alergeno: true }, 
            { nombre: 'Leche o nata', alergeno: true },
            { nombre: 'Azúcar (para versiones dulces)', alergeno: false },
            { nombre: 'Canela (opcional)', alergeno: false },
            { nombre: 'Salmón ahumado (opcional, para versiones saladas)', alergeno: true },
        ]
    },
    {
        id: 4,
        tipo: 'plato',
        nombre: 'Geitost',
        src: 'assets/restaurante/Geitost.png',
        descripcion: 'Es un queso con sabor dulce pero con ese toque amargo que le da la leche de cabra. Suele servirse y comerse fresco y cortado en tiras muy finas para tomar con el café.',
        ingredientes: [
            { nombre: 'Suero de leche de cabra', alergeno: true }, 
            { nombre: 'Crema', alergeno: true }, 
            { nombre: 'Leche (opcional)', alergeno: true }, 
            { nombre: 'Pan de centeno', alergeno: true }, 
            { nombre: 'Frutas como manzanas o uvas', alergeno: false },
        ]
    },
    {
        id: 5,
        tipo: 'plato',
        nombre: 'Risgrøt',
        src: 'assets/restaurante/Risgrot.png',
        descripcion: 'Este postre típico noruego es una versión del arroz con leche, a diferencia de que el risgrøt se sirve caliente y con un poco de mantequilla y canela por encima. ',
        ingredientes: [
            { nombre: 'Arroz', alergeno: false },
            { nombre: 'Leche', alergeno: true }, 
            { nombre: 'Azúcar', alergeno: false },
            { nombre: 'Canela en polvo', alergeno: false },
            { nombre: 'Mantequilla (para servir)', alergeno: true }, 
            { nombre: 'Pasas (opcional)', alergeno: false },
            { nombre: 'Cardamomo (opcional)', alergeno: false },
        ]
    },
];

// Datos de restaurantes recomendados
const restaurantes = [
    {
        id: 6,
        tipo: 'restaurante',
        nombre: 'Maaemo',
        src: 'assets/restaurante/Maaemo2.jpg',
        imagenAmplia: 'assets/restaurante/Maaemo2.jpg',
        descripcion: 'Restaurante con tres estrellas Michelin que ofrece cocina innovadora nórdica con ingredientes ecológicos locales. Una experiencia gastronómica de alto nivel en el corazón de Oslo.',
        horario: 'Miércoles a sábado: 18:00-00:00. Domingo a martes: cerrado.',
        telefono: '+47 919 94 310',
        enlace: 'https://www.maaemo.no'
    },
    {
        id: 7,
        tipo: 'restaurante',
        nombre: 'Kontrast',
        src: 'assets/restaurante/Kontrast.jpg',
        imagenAmplia: 'assets/restaurante/Kontrast.jpg',
        descripcion: 'Restaurante con estrella Michelin especializado en cocina moderna nórdica, utilizando productos de temporada e ingredientes noruegos de alta calidad.',
        horario: 'Martes a sábado: 18:00-22:30. Domingo y lunes: cerrado.',
        telefono: '+47 21 60 01 01',
        enlace: 'https://www.restaurant-kontrast.no'
    },
    {
        id: 8,
        tipo: 'restaurante',
        nombre: 'Ekeberg Restaurant',
        src: 'assets/restaurante/ekebergrestauranten.jpg',
        imagenAmplia: 'assets/restaurante/ekebergrestauranten.jpg',
        descripcion: 'Ubicado en la colina Ekeberg con vistas panorámicas a la ciudad y el fiordo de Oslo. Ofrece cocina noruega moderna en un edificio histórico de estilo art déco.',
        horario: 'Todos los días: 11:00-23:00',
        telefono: '+47 23 24 23 00',
        enlace: 'https://www.ekebergrestauranten.com'
    },
];


const galeriaItems = [
    platillos[0],
    platillos[1],
    restaurantes[0],
    platillos[2],
    restaurantes[1],
    platillos[3],
    platillos[4],
    restaurantes[2]
];

// Función para cargar los elementos en la galería
function cargarGaleria() {
    const galeriaElement = document.getElementById('gastronomiaG');
    
    galeriaItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item';
        itemElement.dataset.id = item.id;
        itemElement.dataset.tipo = item.tipo;
        
        itemElement.innerHTML = `
            <div class="item-image-container">
                <img class="item-image" src="${item.src}" alt="${item.nombre}">
                <div class="item-overlay">
                    <div class="item-title">${item.nombre}</div>
                    <div class="item-type">${item.tipo === 'plato' ? 'Plato típico' : 'Restaurante recomendado'}</div>
                </div>
            </div>
        `;
        
        itemElement.addEventListener('click', () => mostrarModal(item));
        galeriaElement.appendChild(itemElement);
    });
}

// Función para mostrar el modal según el tipo de elemento
function mostrarModal(item) {
    if (item.tipo === 'plato') {
        mostrarModalPlato(item);
    } else if (item.tipo === 'restaurante') {
        mostrarModalRestaurante(item);
    }
}

// Función para mostrar el modal de plato típico
function mostrarModalPlato(plato) {
    document.getElementById('plato-title').textContent = plato.nombre;
    document.getElementById('plato-image').src = plato.src;
    document.getElementById('plato-image').alt = plato.nombre;
    document.getElementById('plato-description').textContent = plato.descripcion;
    
    const ingredientesList = document.getElementById('ingredientes-list');
    ingredientesList.innerHTML = '';
    
    plato.ingredientes.forEach(ingrediente => {
        const li = document.createElement('li');
        
        const span = document.createElement('span');
        span.textContent = ingrediente.nombre;
        li.appendChild(span);
        
        if (ingrediente.alergeno) {
            const alertTag = document.createElement('span');
            alertTag.className = 'alergeno-tag';
            alertTag.textContent = 'Alérgeno';
            li.appendChild(alertTag);
        }
        
        ingredientesList.appendChild(li);
    });
    
    document.getElementById('modal-plato').style.display = 'flex';
}

// Función para mostrar el modal de restaurante
function mostrarModalRestaurante(restaurante) {
    document.getElementById('restaurante-title').textContent = restaurante.nombre;
    document.getElementById('restaurante-image').src = restaurante.imagenAmplia;
    document.getElementById('restaurante-image').alt = restaurante.nombre;
    document.getElementById('restaurante-description').textContent = restaurante.descripcion;
    document.getElementById('restaurante-horario').textContent = restaurante.horario;
    document.getElementById('restaurante-telefono').textContent = restaurante.telefono;
    
    const enlace = document.getElementById('restaurante-enlace');
    enlace.href = restaurante.enlace;
    
    document.getElementById('modal-restaurante').style.display = 'flex';
}

// Función para cerrar cualquier modal abierto
function closeModal() {
    document.getElementById('modal-plato').style.display = 'none';
    document.getElementById('modal-restaurante').style.display = 'none';
}

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('modal-plato')) {
        closeModal();
    }
    if (event.target === document.getElementById('modal-restaurante')) {
        closeModal();
    }
});

// Iniciar la carga de la galería cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', cargarGaleria);


//-=====================================================================================================================
// Datos de transporte en formato JSON


const datosTransporte = {

    aeropuertos: [
        {
            id: "osl",
            nombre: "Aeropuerto de Oslo Gardermoen (OSL)",
            direccion: "Edvard Munchs veg, 2061 Gardermoen, Noruega",
            horario: "Abierto 24 horas todos los días",
            tarifas: [
                "Tren Airport Express (Flytoget): 210-240 NOK, 19-22 minutos",
                "Tren regional (Vy): 114 NOK, 23-25 minutos",
                "Autobús Flybussen: 199 NOK, 40-50 minutos",
                "Taxi: 700-1000 NOK, 40 minutos"
            ],
            servicios: [
                "Tiendas libres de impuestos",
                "Restaurantes y cafeterías",
                "Cambio de divisas",
                "Alquiler de coches",
                "Wi-Fi gratuito",
                "Consignas para equipaje",
                "Salas VIP"
            ],
            sitioWeb: "https://avinor.no/en/airport/oslo-airport/",
            ubicacion: [60.19440, 11.10045],
            textoPopup: "Principal aeropuerto internacional de Oslo",
            src: "assets/transporte/Gardermoen.jpg"
        },
        {
            id: "trf",
            nombre: "Aeropuerto de Oslo Torp Sandefjord (TRF)",
            direccion: "Torpveien 130, 3241 Sandefjord, Noruega",
            horario: "04:30 - 00:30 (varía según temporada)",
            tarifas: [
                "Tren (con shuttle al aeropuerto): 279 NOK, 1 hora 45 minutos",
                "Autobús Torp-Ekspressen: 299 NOK, 1 hora 45 minutos",
                "Taxi: aproximadamente 2500 NOK, 1 hora 30 minutos"
            ],
            servicios: [
                "Tiendas duty-free",
                "Cafeterías",
                "Alquiler de coches",
                "Cambio de divisas",
                "Wi-Fi gratuito",
                "Zona de juegos infantil"
            ],
            sitioWeb: "https://www.torp.no/en/",
            ubicacion: [59.18671, 10.25803],
            textoPopup: "Aeropuerto secundario con vuelos económicos",
            src: "assets/transporte/TRF.jpg"
        }
    ],

    estaciones: [
        {
            id: "oslos",
            nombre: "Estación Central de Oslo (Oslo S)",
            direccion: "Jernbanetorget 1, 0154 Oslo, Noruega",
            horario: "Abierta 24 horas (servicios de 04:00 a 01:00)",
            tarifas: [
                "Billete sencillo zona 1 (centro): 39 NOK",
                "Billete de 24 horas: 117 NOK",
                "Billete de 7 días: 323 NOK",
                "Oslo Pass (incluye transporte): 445 NOK (24h), 655 NOK (48h), 820 NOK (72h)"
            ],
            servicios: [
                "Conexiones de trenes nacionales e internacionales",
                "Metro, tranvía y autobuses urbanos",
                "Centro comercial",
                "Restaurantes y cafeterías",
                "Consignas para equipaje",
                "Oficina de turismo",
                "Alquiler de coches",
                "Supermercado"
            ],
            sitioWeb: "https://www.visitoslo.com/es/producto/?tlp=2979523&name=Oslo-S--la-estacion-central-de-Oslo",
            ubicacion: [59.91098, 10.75255],
            textoPopup: "Principal estación de trenes de la ciudad",
            src: "assets/transporte/Central.jpg"
        },
        {
            id: "oslometro",
            nombre: "Estación de Metro Stortinget",
            direccion: "Stortingsgata 22, 0161 Oslo, Noruega",
            horario: "05:00 - 00:00 todos los días",
            tarifas: [
                "Billete sencillo: 39 NOK",
                "Billete de 24 horas: 117 NOK",
                "Billete semanal: 323 NOK"
            ],
            servicios: [
                "Conexiones con las líneas principales del metro",
                "Acceso a autobuses urbanos",
                "Información turística",
                "Wi-Fi gratuito"
            ],
            sitioWeb: "https://ruter.no/",
            ubicacion: [59.91208, 10.73475],
            textoPopup: "Principal estación de metro en Oslo",
            src: "assets/transporte/stortinget.jpg"
        },
        {
            id: "osloferry",
            nombre: "Terminal de Ferry de Oslo",
            direccion: "Vippetangen, Akershusstranda 35, 0150 Oslo, Noruega",
            horario: "Varía según temporada y operador",
            tarifas: [
                "Ferry a Copenhague: desde 550 NOK por trayecto",
                "Ferry a Kiel (Alemania): desde 650 NOK por trayecto",
                "Ferries locales a las islas del fiordo: incluido con billete de transporte público (39 NOK)"
            ],
            servicios: [
                "Conexiones internacionales a Dinamarca y Alemania",
                "Ferries locales a las islas del fiordo de Oslo",
                "Terminal de cruceros",
                "Restaurantes",
                "Tiendas",
                "Oficina de información turística (temporada alta)",
                "Servicios aduaneros"
            ],
            sitioWeb: "https://www.oslohavn.no/en/",
            ubicacion: [59.90358, 10.74174],
            textoPopup: "Conexiones a Dinamarca, Alemania e islas del fiordo",
            src: "assets/transporte/Ferry.jpg"
        }
    ]
};


function createTransportItem(item) {
    const element = document.createElement('div');
    element.className = 'transport-item';
    element.setAttribute('data-id', item.id);
    
    // Construir HTML del elemento
    let html = `
        <h3>${item.nombre}</h3>
        <img src="${item.src}">
        <p><strong>Dirección:</strong> ${item.direccion}</p>
        <p><strong>Horarios:</strong> ${item.horario}</p>
    `;
    
    // Agregar tarifas
    html += '<p><strong>Tarifas:</strong></p><ul>';
    item.tarifas.forEach(fare => {
        html += `<li>${fare}</li>`;
    });
    html += '</ul>';
    
    // Agregar servicios
    html += '<div class="services"><h4>Servicios y Facilidades</h4><ul>';
    item.servicios.forEach(service => {
        html += `<li>${service}</li>`;
    });
    html += '</ul></div>';
    
    // Agregar enlace
    html += `<a href="${item.sitioWeb}" class="btn" target="_blank">Sitio web oficial</a>`;
    
    element.innerHTML = html;
    return element;
}

// Función para cargar los datos de transporte
function loadTransportData() {
    const airportsContainer = document.getElementById('airports-container');
    const stationsContainer = document.getElementById('stations-container');
    
    // Limpiar contenedores
    airportsContainer.innerHTML = '';
    stationsContainer.innerHTML = '';

    // Cargar aeropuertos
    datosTransporte.aeropuertos.forEach(airport => {
        airportsContainer.appendChild(createTransportItem(airport));
    });
    
    // Cargar estaciones
    datosTransporte.estaciones.forEach(station => {
        stationsContainer.appendChild(createTransportItem(station));
    });
}

// Inicializar el mapa

function initMap() {
    // Centrar mapa en Oslo
     var mapa = L.map("mapa2").setView([59.91340666508375, 10.752853444768544], 11);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© OpenStreetMap',
        maxZoom: 19,
    }).addTo(mapa);
    
    // Agregar marcadores para aeropuertos
    datosTransporte.aeropuertos.forEach(aeropuerto => {
        const marker = L.marker(aeropuerto.ubicacion).addTo(mapa);
        marker.bindPopup(`<b>${aeropuerto.nombre}</b><br>${aeropuerto.textoPopup}`);
    });
    
    // Agregar marcadores para estaciones
    datosTransporte.estaciones.forEach(estacion => {
        const marker = L.marker(estacion.ubicacion).addTo(mapa);
        marker.bindPopup(`<b>${estacion.nombre}</b><br>${estacion.textoPopup}`);
    });
}

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    loadTransportData();
    initMap();
});


let menuVisible = false;

//funcionamiento del menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("id-nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("id-nav").classList="responsive";
        menuVisible = true
    }
}

function seleccionar(){
    //ocultar el menu una vez seleccione la opcion
    document.getElementById("nav").classList="";
    menuVisible = false;
}
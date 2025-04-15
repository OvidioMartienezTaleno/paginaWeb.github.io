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
        horarios: "Lunes-Viernes: Winter 10:00-21:00, Sábado: Winter 09:00-21:00, Domingo: Winter 10:00-18:00",
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

// MAPA:

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


    

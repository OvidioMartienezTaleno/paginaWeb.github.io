document.addEventListener('DOMContentLoaded', function() {
    // Datos de las imágenes
    const imagenes = [
        {
            id: 1,
            src: "./assets/diaNacional.jpg",
            texto: " Día Nacional de Noruega (17 de mayo): Una celebración patriótica que conmemora la firma de la Constitución Noruega en 1814. Las calles se llenan de desfiles, trajes tradicionales (bunads) y banderas noruegas."
        },
        {
            id: 2,
            src: "./assets/oya.jpg",
            texto: "Festival de Música Øya (agosto): Un evento vibrante que reúne a artistas internacionales y locales en un entorno al aire libre. Es uno de los festivales de música más importantes de Noruega."
        },
        {
            id: 3,
            src: "./assets/Spikersuppa.jpg",
            texto: "Mercado Navideño en Spikersuppa (diciembre):Durante el invierno, Oslo se transforma en un espectáculo de luces y tradiciones nórdicas, con puestos de comida, artesanías y actividades festivas."
        },
        {
            id: 4,
            src: "./assets/musica.jpg",
            texto: "Festival Internacional de Música Religiosa de Oslo (marzo): Un evento dedicado a la música religiosa de alta calidad, con conciertos en iglesias y auditorios de la ciudad."
        },
        {
            id: 5,
            src: "./assets/solsticio.jpg",
            texto: "Solsticio de Verano (junio): Una celebración tradicional que marca el día más largo del año, con fogatas, música y actividades al aire libre en toda Noruega."
        }
    ];
    
    const miniaturas = document.querySelectorAll('.miniatura');
    const imagenPrincipal = document.querySelector('.imagen-principal');
    const textoImagen = document.querySelector('.texto-imagen');
    const botonAnterior = document.querySelector('.anterior');
    const botonSiguiente = document.querySelector('.siguiente');
    
    let imagenActual = 1;
    
    // Función para cambiar la imagen
    function cambiarImagen(id) {
        const imagen = imagenes.find(img => img.id === id);
        
        if (imagen) {
            imagenPrincipal.src = imagen.src;
            textoImagen.textContent = imagen.texto;
            imagenActual = id;
            
            // Actualizar miniatura activa
            miniaturas.forEach(mini => {
                if (parseInt(mini.dataset.id) === id) {
                    mini.classList.add('activa');
                } else {
                    mini.classList.remove('activa');
                }
            });
        }
    }
    
    // Configurar evento click en miniaturas
    miniaturas.forEach(miniatura => {
        miniatura.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            cambiarImagen(id);
        });
    });
    
    // Configurar eventos de navegación
    botonAnterior.addEventListener('click', function() {
        let nuevoId = imagenActual - 1;
        if (nuevoId < 1) nuevoId = 5;
        cambiarImagen(nuevoId);
    });
    
    botonSiguiente.addEventListener('click', function() {
        let nuevoId = imagenActual + 1;
        if (nuevoId > 5) nuevoId = 1;
        cambiarImagen(nuevoId);
    });
    
    // Inicializar con la primera imagen
    cambiarImagen(1);
});
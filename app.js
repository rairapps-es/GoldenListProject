// =========================================================================
// 🌐 CONFIGURACIÓN CORE Y REPOSITORIO DE DATOS MULTIMEDIA (PROYECTO PREMIUM)
// =========================================================================
window.LISTA_USUARIOS_PREMIUM = ["1320417199", "987654321"]; 

window.DB_COMPRAS_USUARIOS = {
    "1320417199": [
        { idItem: "SUB-GOLDEN", tipo: "suscripcion", titulo: "Suscripción Golden VIP Anual", fechaInicio: "01/01/2026", fechaFin: "01/01/2027", estado: "Activa 👑" },
        { idItem: "SERV-002", tipo: "servicio", titulo: "Estrategia Avanzada N°2", fechaInicio: "10/06/2026", fechaFin: "25/06/2026", estado: "En Desarrollo 🛠️" },
        { idItem: "PROD-001", tipo: "producto", titulo: "Script Auto-Backup Modular", fechaCompra: "12/05/2026", estado: "Entregado ✅" }
    ]
};

// Generador de Tarjetas con Identificadores de Imagen de Alta Calidad (Cyber/Tech)
// AGREGAR UN NUEVO SERVICIO PERSONALIZADO MANUALLY
// ====== LIMPIAR EL ARRAY AUTOMÁTICO ANTES DE INSERTAR LOS TUYOS ======
window.CATALOGO_SERVICIOS = []; 

// 👑 ITEM 001: Configurado como servicio premium de suscripción
window.CATALOGO_SERVICIOS.push({
    id: "SERV-001",
    tipo: "servicio", // Se mantiene como servicio para que sea visible en el catálogo
    categoria: "bot",
    titulo: "👑 Suscripción Anual - Bot SaaS Automatizado",
    rating: "5.0",
    imagen: "https://picsum.photos/id/1062/400/220",
    descripcion_corta: "Acceso ilimitado a nuestra infraestructura de bots en tiempo real.",
    descripcion_larga: "Licencia anual premium. Incluye soporte prioritario 24/7, actualizaciones automáticas de parches en tu servidor y acceso exclusivo a los módulos Beta de Lista Golden.",
    precio: 150,
    descuento: 30, // El usuario paga 120€
    oferta: "🔥 ¡Oferta Anual!",
    tiempoEntregaBase: "Inmediato",
    revisiones: 0,
    deseosIniciales: 245
});

// 🛠️ ITEM 002: Configurado como servicio de desarrollo (Activa formulario Urgente/Express)
window.CATALOGO_SERVICIOS.push({
    id: "SERV-002",
    tipo: "servicio",
    categoria: "grupo",
    titulo: "🛠️ Configuración y Montaje de Grupo Monetizado",
    rating: "4.9",
    imagen: "https://picsum.photos/id/1043/400/220",
    descripcion_corta: "Estructuración completa de canales de venta y embudos.",
    descripcion_larga: "Modelado técnico de tu grupo de Telegram. Instalación de bots de bienvenida, pasarelas de pago integradas al chat, sistemas anti-spam avanzados y consultoría de retención de usuarios.",
    precio: 95,
    descuento: 0,
    oferta: "Tarifa Regular",
    tiempoEntregaBase: "72 horas",
    revisiones: 3,
    deseosIniciales: 132
});

// 📦 ITEM 003: Configurado como producto digital (Activa formulario de Estrellas de Telegram)
window.CATALOGO_SERVICIOS.push({
    id: "PROD-001",
    tipo: "producto", // 🌟 Activa pasarela de Estrellas, PayPal y USDT sin preguntas de entrega
    categoria: "canal",
    titulo: "📦 Script Pack Auto-Post Inteligente AI",
    rating: "5.0",
    imagen: "https://picsum.photos/id/1025/400/220",
    descripcion_corta: "Código fuente nativo para automatizar contenido en tus canales.",
    descripcion_larga: "Descarga inmediata de archivo ejecutable compatible con servidores Linux/Windows. Conecta tus fuentes de información y deja que la IA redacte, maquete y publique en tus canales de Telegram de forma autónoma.",
    precio: 60,
    descuento: 15, // El usuario paga 45€
    oferta: "🔥 ¡Oferta Flash!",
    tiempoEntregaBase: "Descarga Inmediata",
    revisiones: 0,
    deseosIniciales: 512
});

// 📦 ITEM 004: Configurado como producto digital (Activa formulario de Estrellas de Telegram)
window.CATALOGO_SERVICIOS.push({
    id: "SUB-002",
    tipo: "suscripcion", // 🌟 Activa pasarela de Estrellas, PayPal y USDT sin preguntas de entrega
    categoria: "mi",
    titulo: "📦 Inteligente AI",
    rating: "5.0",
    imagen: "https://picsum.photos/id/1025/400/220",
    descripcion_corta: "Automatizar contenido en tus canales.",
    descripcion_larga: "Descarga inmediata de archivo ejecutable compatible con servidores Linux/Windows. Conecta tus fuentes de información y deja que la IA redacte, maquete y publique en tus canales de Telegram de forma autónoma.",
    precio: 50,
    descuento: 10, // El usuario paga 45€
    oferta: "🔥 ¡Oferta Flash!",
    tiempoEntregaBase: "Descarga Inmediata",
    revisiones: 0,
    deseosIniciales: 112
});
// =========================================================================
// 📢 CATÁLOGO DE CANALES EN VENTA (CORREGIDO Y CONFIGURADO)
// =========================================================================
window.CATALOGO_CANALES = [
    { 
        id: "CHAN-001", 
        tipo: "canal", 
        titulo: "💰 Canal de Apuestas Deportivas (Venta)", 
        imagen: "https://picsum.photos/id/1071/400/220", 
        suscriptores: "14,200", 
        categoria: "Deportes", 
        precio: 290, 
        descuento: 0, 
        oferta: "Destacado VIP ⭐", 
        descripcion_breve: "Rentabilidad y conversión demostrable mediante auditorías." 
    },
    { 
        id: "CHAN-002", 
        tipo: "canal", 
        titulo: "🚀 Canal de Crypto & Airdrops Orgánico", 
        imagen: "https://picsum.photos/id/1025/400/220", 
        suscriptores: "8,500", 
        categoria: "Finanzas", 
        precio: 195, 
        descuento: 25, // Paga 170€
        oferta: "🔥 ¡Oferta Flash!", 
        descripcion_breve: "Comunidad inversora ultra-activa con alta tasa de interacción diaria." 
    }
];

// =========================================================================
// 🚀 CATÁLOGO DE PAUTAS Y ANUNCIOS PUBLICITARIOS
// =========================================================================
window.CATALOGO_ANUNCIOS = [
    { 
        id: "ANUN-001", 
        tipo: "anuncio", 
        titulo: "📢 Pack Anuncios Masivo Lista Golden", 
        imagen: "https://picsum.photos/id/1081/400/220", 
        precio: 60, 
        descuento: 10, // Paga 50€
        oferta: "🔥 Ofertas Flash", 
        descripcion_larga: "Captura masiva de leads cualificados de forma hiper-segmentada dentro del ecosistema.", 
        tiempoEntregaBase: "24 horas" 
    },
    { 
        id: "ANUN-002", 
        tipo: "anuncio", 
        titulo: "💎 Mención VIP en Canales Afiliados Network", 
        imagen: "https://picsum.photos/id/1069/400/220", 
        precio: 120, 
        descuento: 0, 
        oferta: "Tarifa Regular", 
        descripcion_larga: "Publicación fija durante 48 horas con notificación push activa en nuestra red de canales aliados con más de 100k usuarios globales.", 
        tiempoEntregaBase: "12 horas" 
    }
];
// =========================================================================
// 🎛️ TORRE DE CONTROL DE ESTADOS (FILTRADO CRUZADO Y PASARELAS)
// =========================================================================
let filtroTipoActivo = "todos";      // 🏷️ Filtro A (Pestaña): "todos", "servicio", "suscripcion", "producto"
let filtroCategoriaActiva = "todos"; // 📂 Filtro B (Botones): "todos", "mi", "bot", "grupo", "canal"
let catalogoActualActivo = "servicios"; // 🧭 "servicios", "canales", "anuncios"

let tarjetasDesplegadasActualmente = 10; // 🔄 Contador para el Lazy Load automático
let itemSeleccionadoParaCompra = null;   // 🛍️ Almacén temporal del ítem que se va a enviar a @Airdayz

// =========================================================================
// 🚀 INICIALIZACIÓN CON CARGA SOBERANA DE PERFIL
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
    if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();
    }
    
    if (!localStorage.getItem('lista_deseos_golden')) {
        localStorage.setItem('lista_deseos_golden', JSON.stringify([]));
    }

    const userTelegram = window.Telegram?.WebApp?.initDataUnsafe?.user;
    const firstName = userTelegram?.first_name || "Usuario Golden";
    const lastName = userTelegram?.last_name || "";
    const nombreCompleto = `${firstName} ${lastName}`.trim();
    const urlFoto = userTelegram?.photo_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(nombreCompleto)}&background=00f0ff&color=060814&bold=true`;

    const topNameDOM = document.getElementById('top-user-name');
    const topAvatarDOM = document.getElementById('top-user-avatar');
    const pageAvatarDOM = document.getElementById('page-user-avatar');

    if (topNameDOM) topNameDOM.innerText = firstName;
    if (topAvatarDOM) topAvatarDOM.innerHTML = `<img src="${urlFoto}" alt="Avatar">`;
    if (pageAvatarDOM) pageAvatarDOM.innerHTML = `<img src="${urlFoto}" alt="Avatar Grande">`;

    renderizerEcosistemaActual(false);
    iniciarSimuladorContadoresTarjeta();

    if (window.fomoIntervalID) clearInterval(window.fomoIntervalID);
    setTimeout(ejecutarFomoFlotanteSincronizado, 2500);
    window.fomoIntervalID = setInterval(ejecutarFomoFlotanteSincronizado, 13000);
});

// =========================================================================
// 🧭 SISTEMA NATIVO DE NAVEGACIÓN Y RUTAS FLOTANTES
// =========================================================================
function navegarA(seccion) {
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    
    const viewCatalog = document.querySelector('.catalog-grid');
    const viewPerfil = document.getElementById('perfil-usuario-view');
    const viewDeseos = document.getElementById('lista-deseos-view');
    const filterBar = document.getElementById('filter-bar-container');

    if (viewCatalog) viewCatalog.style.display = "none";
    if (viewPerfil) viewPerfil.style.display = "none";
    if (viewDeseos) viewDeseos.style.display = "none";
    if (filterBar) filterBar.style.display = "none";

    const views = [viewCatalog, viewPerfil, viewDeseos].filter(Boolean);
    views.forEach(v => v.classList.remove('view-fade-in'));

    if (seccion === "servicios" || seccion === "canales" || seccion === "anuncios") {
        const navBtn = document.getElementById(`nav-${seccion}`);
        if (navBtn) navBtn.classList.add('active');
        
        if (viewCatalog) {
            viewCatalog.style.display = "block";
            viewCatalog.classList.add('view-fade-in');
        }
        catalogoActualActivo = seccion;
        
        // El contenedor de filtros superiores solo se muestra en la pestaña de servicios/catálogo principal
        if (filterBar && seccion === "servicios") filterBar.style.display = "flex";
        
        renderizerEcosistemaActual(false);
    } 
    else if (seccion === "deseos") {
        const navBtn = document.getElementById('nav-deseos');
        if (navBtn) navBtn.classList.add('active');
        if (viewDeseos) {
            viewDeseos.style.display = "block";
            viewDeseos.classList.add('view-fade-in');
        }
        cargarPaginaDeseosOriginales();
    } 
    else if (seccion === "perfil") {
        const navBtn = document.getElementById('nav-perfil');
        if (navBtn) navBtn.classList.add('active');
        if (viewPerfil) {
            viewPerfil.style.display = "block";
            viewPerfil.classList.add('view-fade-in');
        }
        cargarDatosPanelPerfil();
    }
}

function aplicarFiltrosYOrdenacion(listado) {
    const selectSort = document.getElementById('select-sort');
    if (!selectSort) return listado;
    
    const criterio = selectSort.value;
    if (criterio === "barato") {
        listado.sort((a, b) => (a.precio - (a.descuento || 0)) - (b.precio - (b.descuento || 0)));
    } else if (criterio === "descuento") {
        listado.sort((a, b) => (b.descuento || 0) - (a.descuento || 0));
    } else if (criterio === "ofertas") {
        listado = listado.filter(item => item.oferta && item.oferta.includes("Flash"));
    } else {
        listado.sort((a, b) => parseFloat(b.rating || 0) - parseFloat(a.rating || 0));
    }
    return listado;
}

// 🌐 SOLUCIÓN AL PROBLEMA DE LOS BOTONES: Pestañas de Tipo (Todos, Servicios, Suscripciones, Productos)
function cambiarPestañaTipo(tipo, botonPulsado) {
    filtroTipoActivo = tipo;
    
    // Cambiar la clase activa visualmente en el HTML
    document.querySelectorAll('.tab-tipo-btn').forEach(btn => btn.classList.remove('active'));
    if (botonPulsado) {
        botonPulsado.classList.add('active');
    }
    
    // Forzamos reseteo del lazy load y renderizamos
    renderizerEcosistemaActual(false); 
}

// Subcategorías inferiores (Para mí, Bots, Grupos, Canales)
function cambiarCategoriaFiltro(categoria, botonPulsado) {
    filtroCategoriaActiva = categoria;
    
    // Cambiar la clase activa visualmente en el HTML
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    if (botonPulsado) {
        botonPulsado.classList.add('active');
    }
    
    renderizerEcosistemaActual(false);
}

// =========================================================================
// 🔄 MOTOR CORE: RENDERIZADO CON FILTRADO CRUZADO INTELIGENTE
// =========================================================================
function renderizerEcosistemaActual(cargarMas = false) {
    const grid = document.querySelector('.catalog-grid');
    if (!grid) return;

    if (!cargarMas) { 
        grid.innerHTML = ""; 
        tarjetasDesplegadasActualmente = 10; 
    }

    // 1. Selección dinámica del pool de datos según la sección activa de la navegación inferior
    let sourceData = [];
    if (catalogoActualActivo === "servicios") {
        sourceData = window.CATALOGO_SERVICIOS || [];
    } else if (catalogoActualActivo === "canales") {
        sourceData = window.CATALOGO_CANALES || [];
    } else if (catalogoActualActivo === "anuncios") {
        sourceData = window.CATALOGO_ANUNCIOS || [];
    }

    let listadoFiltrado = [...sourceData];

    // 2. 🏷️ PRIMER FILTRO: Por Tipo de Modelo (Pestaña Superior del HTML)
    if (filtroTipoActivo !== "todos") {
        listadoFiltrado = listadoFiltrado.filter(item => item.tipo === filtroTipoActivo);
    }

    // 3. 📂 SEGUNDO FILTRO: Por Destinatario/Categoría (Fila Inferior del HTML)
    if (filtroCategoriaActiva !== "todos") {
        listadoFiltrado = listadoFiltrado.filter(item => item.categoria === filtroCategoriaActiva);
    }

    // 4. Aplicar ordenación avanzada
    if (typeof aplicarFiltrosYOrdenacion === "function") {
        listadoFiltrado = aplicarFiltrosYOrdenacion(listadoFiltrado);
    }

    // 5. Segmentación del Lazy Load
    const bloquePaginado = listadoFiltrado.slice(0, tarjetasDesplegadasActualmente);
    let html = "";
    
    bloquePaginado.forEach(item => { 
        html += generarTarjetaInyectableHTML(item); 
    });

    const trigger = document.getElementById('trigger-lazy-load');
    if (trigger) trigger.remove();

    if (cargarMas) {
        grid.insertAdjacentHTML('beforeend', html);
    } else {
        grid.innerHTML = html;
    }

    // 6. 🚨 PANTALLA DE ALERTA: Si no hay resultados
    if (listadoFiltrado.length === 0) {
        grid.innerHTML = `
            <div style="text-align:center; padding: 40px 20px; color:#64748b; width:100%; font-size:0.8rem;" class="view-fade-in">
                📡 La red no ha detectado módulos tipo "${filtroTipoActivo.toUpperCase()}" enfocados en "${filtroCategoriaActiva.toUpperCase()}". Prueba otra combinación.
            </div>
        `;
    }

    // 7. RENDERIZAR BOTÓN "DESPLEGAR MÁS"
    if (listadoFiltrado.length > tarjetasDesplegadasActualmente) {
        grid.insertAdjacentHTML('beforeend', `
            <div id="trigger-lazy-load" style="text-align:center; padding:10px 0; width:100%;" class="view-fade-in">
                <button onclick="tarjetasDesplegadasActualmente+=10; renderizerEcosistemaActual(true);" style="background:rgba(255,255,255,0.03); border:1px solid rgba(0,240,255,0.2); color:#00f0ff; padding:10px; border-radius:12px; font-size:0.75rem; font-weight:bold; cursor:pointer; width:100%; box-shadow: 0 0 10px rgba(0,240,255,0.05);">Desplegar Más Conexiones ⬇️</button>
            </div>
        `);
    }
}

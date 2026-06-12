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

// 📦 ITEM 003: Configurado como producto digital (Activa formulario de Estrellas de Telegram)
window.CATALOGO_SERVICIOS.push({
    id: "PROD-003",
    tipo: "producto", // 🌟 Activa pasarela de Estrellas, PayPal y USDT sin preguntas de entrega
    categoria: "canal",
    titulo: "📦 Inteligente AI",
    rating: "4.2",
    imagen: "https://picsum.photos/id/1025/400/220",
    descripcion_corta: "nativo para automatizar contenido en tus canales.",
    descripcion_larga: "archivo ejecutable compatible con servidores Linux/Windows. Conecta tus fuentes de información y deja que la IA redacte, maquete y publique en tus canales de Telegram de forma autónoma.",
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

    document.getElementById('top-user-name').innerText = firstName;
    document.getElementById('top-user-avatar').innerHTML = `<img src="${urlFoto}" alt="Avatar">`;
    document.getElementById('page-user-avatar').innerHTML = `<img src="${urlFoto}" alt="Avatar Grande">`;

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

    viewCatalog.style.display = "none";
    viewPerfil.style.display = "none";
    viewDeseos.style.display = "none";
    filterBar.style.display = "none";

    // Reiniciar animaciones de entrada aplicando de nuevo la clase reactiva
    const views = [viewCatalog, viewPerfil, viewDeseos];
    views.forEach(v => v.classList.remove('view-fade-in'));

    if (seccion === "servicios" || seccion === "canales" || seccion === "anuncios") {
        document.getElementById(`nav-${seccion}`).classList.add('active');
        viewCatalog.style.display = "block";
        viewCatalog.classList.add('view-fade-in');
        catalogoActualActivo = seccion;
        if (seccion === "servicios") filterBar.style.display = "flex";
        renderizerEcosistemaActual(false);
    } 
    else if (seccion === "deseos") {
        document.getElementById('nav-deseos').classList.add('active');
        viewDeseos.style.display = "block";
        viewDeseos.classList.add('view-fade-in');
        cargarPaginaDeseosOriginales();
    } 
    else if (seccion === "perfil") {
        document.getElementById('nav-perfil').classList.add('active');
        viewPerfil.style.display = "block";
        viewPerfil.classList.add('view-fade-in');
        cargarDatosPanelPerfil();
    }
}

function cambiarCategoria(cat) {
    filtroActualActivo = cat;
    document.querySelectorAll('.categories .filter-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`cat-${cat}`).classList.add('active');
    renderizerEcosistemaActual(false);
}

function aplicarFiltrosYOrdenacion(listado) {
    if (catalogoActualActivo === "servicios" && filtroActualActivo !== "todos") {
        listado = listado.filter(item => item.categoria === filtroActualActivo);
    }
    const criterio = document.getElementById('select-sort').value;
    if (criterio === "barato") {
        listado.sort((a, b) => (a.precio - (a.descuento || 0)) - (b.precio - (b.descuento || 0)));
    } else if (criterio === "descuento") {
        listado.sort((a, b) => (b.descuento || 0) - (a.descuento || 0));
    } else if (criterio === "ofertas") {
        listado = listado.filter(item => item.oferta.includes("Flash"));
    } else {
        listado.sort((a, b) => parseFloat(b.rating || 0) - parseFloat(a.rating || 0));
    }
    return listado;
}

// Ejecutar cuando pinchen en las pestañas de Tipo (Todos, Servicios, etc.)
function filtrarPorTipo(tipo) {
    filtroTipoActivo = tipo;
    // Quitamos la clase active de los botones viejos y se la ponemos al nuevo...
    renderizerEcosistemaActual(); // Recargamos el catálogo
}

// Ejecutar cuando pinchen en las subcategorías (Para mí, Bots, Grupos, Canales)
function filtrarPorCategoria(categoria) {
    filtroCategoriaActiva = categoria;
    // Quitamos la clase active de los sub-botones viejos y se la ponemos al nuevo...
    renderizerEcosistemaActual(); // Recargamos el catálogo
}

// =========================================================================
// 📥 MOTOR DE RENDIMIENTO LAZY LOAD
// =========================================================================
// =========================================================================
// 🔄 MOTOR CORE: RENDERIZADO CON FILTRADO CRUZADO INTELIGENTE
// =========================================================================
function renderizerEcosistemaActual(cargarMas = false) {
    const grid = document.querySelector('.catalog-grid');
    if (!grid) return;

    // Si es un filtrado nuevo (no "cargar más"), limpiamos la grilla y reiniciamos el scroll
    if (!cargarMas) { 
        grid.innerHTML = ""; 
        tarjetasDesplegadasActualmente = 10; 
    }

    // 1. Clonamos la base de datos completa de ítems
    let listadoFiltrado = [...window.CATALOGO_SERVICIOS];

    // 2. 🏷️ PRIMER FILTRO: Por Tipo de Modelo (Pestaña Superior del HTML)
    if (filtroTipoActivo !== "todos") {
        listadoFiltrado = listadoFiltrado.filter(item => item.tipo === filtroTipoActivo);
    }

    // 3. 📂 SEGUNDO FILTRO: Por Destinatario/Categoría (Fila Inferior del HTML)
    if (filtroCategoriaActiva !== "todos") {
        listadoFiltrado = listadoFiltrado.filter(item => item.categoria === filtroCategoriaActiva);
    }

    // 4. Aplicar ordenación avanzada si la tienes declarada (por precio, rating, etc.)
    if (typeof aplicarFiltrosYOrdenacion === "function") {
        listadoFiltrado = aplicarFiltrosYOrdenacion(listadoFiltrado);
    }

    // 5. Segmentación del Lazy Load (Paginación visual de 10 en 10)
    const bloquePaginado = listadoFiltrado.slice(0, tarjetasDesplegadasActualmente);
    let html = "";
    
    // Construimos el bloque inyectable
    bloquePaginado.forEach(item => { 
        html += generarTarjetaInyectableHTML(item); 
    });

    // Eliminamos el botón disparador anterior para que no se quede duplicado en medio
    const trigger = document.getElementById('trigger-lazy-load');
    if (trigger) trigger.remove();

    // Inyectamos el HTML en la grilla cyberpunk
    if (cargarMas) {
        grid.insertAdjacentHTML('beforeend', html);
    } else {
        grid.innerHTML = html;
    }

    // 6. 🚨 PANTALLA DE ALERTA: Si la combinación cruzada no arroja stock
    if (listadoFiltrado.length === 0) {
        grid.innerHTML = `
            <div style="text-align:center; padding: 40px 20px; color:#64748b; width:100%; font-size:0.8rem;" class="view-fade-in">
                📡 La red no ha detectado módulos tipo "${filtroTipoActivo.toUpperCase()}" enfocados en "${filtroCategoriaActiva.toUpperCase()}". Prueba otra combinación.
            </div>
        `;
    }

    // 7. RENDERIZAR BOTÓN "DESPLEGAR MÁS" (Solo si quedan elementos en cola)
    if (listadoFiltrado.length > tarjetasDesplegadasActualmente) {
        grid.insertAdjacentHTML('beforeend', `
            <div id="trigger-lazy-load" style="text-align:center; padding:10px 0; width:100%;" class="view-fade-in">
                <button onclick="tarjetasDesplegadasActualmente+=10; renderizerEcosistemaActual(true);" style="background:rgba(255,255,255,0.03); border:1px solid rgba(0,240,255,0.2); color:#00f0ff; padding:10px; border-radius:12px; font-size:0.75rem; font-weight:bold; cursor:pointer; width:100%; box-shadow: 0 0 10px rgba(0,240,255,0.05);">Desplegar Más Conexiones ⬇️</button>
            </div>
        `);
    }
}

// Controla los botones de categoría inferiores (Filtro B)
function cambiarCategoriaFiltro(categoria, botonPulsado) {
    filtroCategoriaActiva = categoria;
    
    // Cambiar la clase activa visualmente en la fila de Categorías
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    botonPulsado.classList.add('active');
    
    // Refrescar el catálogo con el doble filtro aplicado
    renderizerEcosistemaActual();
}

// =========================================================================
// 🧱 COMPONENTE ARQUITECTÓNICO DE TARJETA (EFECTOS COMPLETO)
// =========================================================================
// =========================================================================
// 🧱 COMPONENTE DE TARJETA ULTRA-PREMIUM (REDISEÑO CON PRECIO A LA DERECHA)
// =========================================================================
function generarTarjetaInyectableHTML(item) {
    const deseosLocales = JSON.parse(localStorage.getItem('lista_deseos_golden')) || [];
    const estaEnDeseos = deseosLocales.some(d => d.id === item.id);
    const precioFinal = item.precio - (item.descuento || 0);

    // 1. Determinar el texto de la etiqueta y su clase de color según el tipo
    let tipoTexto = "Servicio";
    let tipoClase = "badge-servicio";
    if (item.tipo === "suscripcion") { tipoTexto = "Suscripción"; tipoClase = "badge-suscripcion"; }
    if (item.tipo === "producto") { tipoTexto = "Producto"; tipoClase = "badge-producto"; }

    // 2. Obtener o inicializar los datos del simulador de deseos para este ítem específico
    let simKey = `sim_deseos_${item.id}`;
    let simData = JSON.parse(localStorage.getItem(simKey));
    let ahora = Date.now();
    
    // Si no existe o pasaron más de 24 horas (86400000 ms), se resetea con un número base realista
    if (!simData || (ahora - simData.timestamp > 86400000)) {
        let baseAleatoria = Math.floor(Math.random() * 40) + 15; // Inicia entre 15 y 55 personas
        simData = { count: baseAleatoria, timestamp: ahora };
        localStorage.setItem(simKey, JSON.stringify(simData));
    }

    const botonDeseosHTML = estaEnDeseos 
        ? `<button class="btn-wishlist active" onclick="controladorDeseosDirecto('${item.id}', '${item.titulo}', this)">❤️ Guardado</button>`
        : `<button class="btn-wishlist" onclick="controladorDeseosDirecto('${item.id}', '${item.titulo}', this)">❤️ Guardar</button>`;

    return `
        <div class="servicio-card view-fade-in" id="card-context-${item.id}">
            <div class="card-image-placeholder">
                <div class="badge-tipo-flotante ${tipoClase}">${tipoTexto}</div>
                <img src="${item.imagen}" alt="Media Network">
            </div>
            
            <div class="card-body-flex">
                <div class="card-left-info">
                    <h3 class="card-title-clickable" onclick="toggleAcordeon('${item.id}')">👉 ${item.titulo}</h3>
                    
                    <div style="margin: 4px 0;">
                        <div class="rating-clickable" onclick="window.open('https://t.me/ListaGoldenCanalResenas', '_blank')">
                            ⭐ ${item.rating || '4.9'} <span style="color:#64748b; font-size:0.65rem;">(Reseñas)</span>
                        </div>
                    </div>
                    
                    <p class="descripcion-clickable" onclick="toggleAcordeon('${item.id}')" style="font-size:0.75rem; color:#94a3b8; line-height:1.4;">
                        ${item.descripcion_corta || item.descripcion_breve || ''}
                    </p>
                </div>
                
                <div class="card-right-pricing">
                    <div style="font-size: 1.15rem; font-weight: 900; color: var(--neon-cyan); text-shadow: 0 0 8px rgba(0,240,255,0.25);">
                        ${precioFinal}€
                    </div>
                    ${item.descuento > 0 ? `<div style="font-size: 0.68rem; color: #64748b; text-decoration: line-through; margin-top:-2px;">Antes: ${item.precio}€</div>` : ''}
                    ${item.oferta ? `<div style="color: var(--neon-pink); font-size: 0.62rem; font-weight:800; text-transform: uppercase; letter-spacing:0.3px; margin-top:2px; line-height:1.1;">${item.oferta}</div>` : ''}
                </div>
            </div>

            <div class="simulador-deseos-box">
                🔥 <strong id="sim-contador-render-${item.id}">${simData.count}</strong> personas añadieron este ${tipoTexto.toLowerCase()} a su lista de deseos hoy.
            </div>

            <div id="expand-${item.id}" class="acordeon-contenido">
                <p style="color:#cbd5e1; margin-bottom:4px;"><strong>Módulo Técnico:</strong> ${item.descripcion_larga || 'Especificación de ingeniería Lista Golden optimizada para canales de alta conversión.'}</p>
                <p style="color:#64748b; font-size:0.68rem;">Plazo de despliegue: ${item.tiempoEntregaBase || 'Inmediato'} | Revisiones: ${item.revisiones || 1}</p>
            </div>

            <div class="card-actions-row">
                ${botonDeseosHTML}
                <button class="btn-contratar" onclick="abrirModalCheckoutEspecifico('${item.id}', '${item.tipo}')">Comprar Módulo 🛍️</button>
            </div>
        </div>
    `;
}

function toggleAcordeon(id) {
    const box = document.getElementById(`expand-${id}`);
    if (box) box.classList.toggle('open');
}

function controladorDeseosDirecto(id, titulo, boton) {
    let deseos = JSON.parse(localStorage.getItem('lista_deseos_golden')) || [];
    if (deseos.some(d => d.id === id)) {
        deseos = deseos.filter(d => d.id !== id);
        boton.classList.remove('active'); boton.innerText = "❤️ Guardar";
    } else {
        deseos.push({ id: id, titulo: titulo });
        boton.classList.add('active'); boton.innerText = "❤️ Guardado";
    }
    localStorage.setItem('lista_deseos_golden', JSON.stringify(deseos));
    if (document.getElementById('lista-deseos-view').style.display === "block") {
        cargarPaginaDeseosOriginales();
    }
}

// =========================================================================
// 💎 ARQUITECTURA DE CHECKOUT INTELIGENTE INDIVIDUALIZADO
// =========================================================================
function abrirModalCheckoutEspecifico(idItem, tipoItem) {
    let fuente = tipoItem === 'servicio' ? window.CATALOGO_SERVICIOS : (tipoItem === 'canal' ? window.CATALOGO_CANALES : window.CATALOGO_ANUNCIOS);
    let item = fuente.find(i => i.id === idItem);
    if (!item) return;

    itemSeleccionadoParaCompra = item;
    const precioBase = item.precio - (item.descuento || 0);
    const contenedorModal = document.getElementById('modal-dinamico-cuerpo');

    let formularioHTML = ``;

    if (tipoItem === "servicio") {
        formularioHTML = `
            <h2 class="modal-title">🛠️ Configurar Servicio: ${item.titulo}</h2>
            <hr class="modal-divider">
            <div class="modal-field">
                <label>Plazo prioritario de ejecución:</label>
                <select id="form-opcion" onchange="recalcularPrecioDinamicoModal(${precioBase}, 'servicio')">
                    <option value="estandar">Entrega Estándar (Precio Regular)</option>
                    <option value="urgente_48">Prioridad Urgente 48h (+15€)</option>
                    <option value="express_24">Prioridad Crítica Express 24h (+30€)</option>
                </select>
            </div>
            <div class="modal-field">
                <label>Pasarela Cripto / Fiat:</label>
                <select id="form-pago">
                    <option value="PayPal">PayPal / MasterCard / Visa</option>
                    <option value="USDT">Criptomonedas (USDT-TRC20 / TON)</option>
                </select>
            </div>
        `;
    } 
    else if (tipoItem === "producto" || tipoItem === "anuncio") {
        formularioHTML = `
            <h2 class="modal-title">📦 Ordenar Producto: ${item.titulo}</h2>
            <hr class="modal-divider">
            <div class="modal-field">
                <label>Método de liquidación:</label>
                <select id="form-pago">
                    <option value="PayPal">PayPal / Cuenta Externa</option>
                    <option value="USDT">USDT (Red Tron Protocol)</option>
                    <option value="Estrellas">⭐ Estrellas oficiales de Telegram</option>
                </select>
            </div>
            <input type="hidden" id="form-opcion" value="entrega_digital_inmediata">
        `;
    } 
    else if (tipoItem === "canal") {
        formularioHTML = `
            <h2 class="modal-title">📢 Transferencia: ${item.titulo}</h2>
            <hr class="modal-divider">
            <p style="font-size:0.75rem; color:#64748b; margin-bottom:12px; line-height:1.4;">Se empaquetará la metadata comercial del canal junto con tus credenciales seguras de Telegram para asignación por Árbitro.</p>
            <input type="hidden" id="form-opcion" value="transferencia_garantizada_arbitro">
            <input type="hidden" id="form-pago" value="Garantia_Escrow_Agente">
        `;
    }

    contenedorModal.innerHTML = `
        ${formularioHTML}
        <div class="modal-price-box">Inversión Final: <span id="modal-precio-voto">${precioBase}</span>€</div>
        <div class="modal-actions">
            <button class="btn-modal-cancelar" onclick="cerrarModalCheckout()">Cancelar</button>
            <button class="btn-modal-confirmar" onclick="compilarYEnviarDatosTelegram('${tipoItem}')">Confirmar y Enviar 🚀</button>
        </div>
    `;

    document.getElementById('checkout-modal').style.display = "flex";
}

function recalcularPrecioDinamicoModal(precioBase, tipo) {
    if (tipo === 'servicio') {
        const val = document.getElementById('form-opcion').value;
        let extra = val === 'urgente_48' ? 15 : (val === 'express_24' ? 30 : 0);
        document.getElementById('modal-precio-voto').innerText = precioBase + extra;
    }
}

function cerrarModalCheckout() { document.getElementById('checkout-modal').style.display = "none"; itemSeleccionadoParaCompra = null; }

// =========================================================================
// 📥 ENVIAR PEDIDO DIRECTO AL CHAT PRIVADO DEL ADMINISTRADOR (@Airdayz)
// =========================================================================
function compilarYEnviarDatosTelegram(tipoItem) {
    if (!itemSeleccionadoParaCompra) return;

    // 1. Extraer credenciales del comprador
    const userTelegram = window.Telegram?.WebApp?.initDataUnsafe?.user;
    const tgID = userTelegram?.id || "1320417199";
    const tgName = userTelegram?.first_name || "Usuario Local Dev";
    const tgUser = userTelegram?.username ? `@${userTelegram.username}` : "Sin_Alias_Configurado";

    // 2. Recolectar datos del formulario de compra
    const opcionSeleccionada = document.getElementById('form-opcion')?.value || "N/A";
    const metodoPago = document.getElementById('form-pago')?.value || "N/A";
    const importeFinal = document.getElementById('modal-precio-voto')?.innerText || "0";

    // 3. Redactar el mensaje en texto limpio y ultra-legible
    let mensajeFormateado = `⚡ *NUEVA ORDEN DE COMPRA - LISTA GOLDEN*\n\n`;
    mensajeFormateado += `👤 *Comprador:* ${tgName} (${tgUser})\n`;
    mensajeFormateado += `🆔 *Telegram ID:* \`${tgID}\`\n\n`;
    mensajeFormateado += `📦 *Módulo:* ${itemSeleccionadoParaCompra.titulo}\n`;
    mensajeFormateado += `🆔 *ID Ítem:* \`${itemSeleccionadoParaCompra.id}\`\n`;
    mensajeFormateado += `🏷️ *Tipo:* ${tipoItem.toUpperCase()}\n\n`;
    mensajeFormateado += `⚙️ *Opción/Plazo:* ${opcionSeleccionada}\n`;
    mensajeFormateado += `💳 *Método de Pago:* ${metodoPago}\n`;
    mensajeFormateado += `💰 *Importe Neto:* ${importeFinal}€\n\n`;
    mensajeFormateado += `🚀 _Deseo proceder con la activación de este módulo._`;

    // 4. Convertir el texto a formato seguro para URLs (URL Encoding)
    const mensajeCodificado = encodeURIComponent(mensajeFormateado);

    // 5. Construir el enlace directo a tu chat @Airdayz con el texto pre-cargado
    const enlaceChatPrivado = `https://t.me/Airdayz?text=${mensajeCodificado}`;

    // 6. Ejecutar la redirección inteligente
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.openTelegramLink) {
        // Método oficial y seguro dentro de las Mini Apps de Telegram
        window.Telegram.WebApp.openTelegramLink(enlaceChatPrivado);
    } else {
        // Fallback por si estás probando desde un navegador web de escritorio común
        window.open(enlaceChatPrivado, '_blank');
    }

    // Cerramos el modal visual para dejar la app limpia si el usuario regresa
    cerrarModalCheckout();
}

// =========================================================================
// ❤️ PÁGINA INDIVIDUAL COMPLETA DE DESEOS (TARJETAS ORIGINALES)
// =========================================================================
function cargarPaginaDeseosOriginales() {
    const contenedorGrid = document.getElementById('wishlist-original-grid');
    if (!contenedorGrid) return;
    
    contenedorGrid.innerHTML = "";
    let deseosLocales = JSON.parse(localStorage.getItem('lista_deseos_golden')) || [];

    if (deseosLocales.length === 0) {
        contenedorGrid.innerHTML = `<p style="color:#64748b; font-size:0.75rem; text-align:center; padding:40px; width:100%;">No registras ningún módulo guardado en tu almacén de deseos.</p>`;
        return;
    }

    const poolGlobalProductos = [...window.CATALOGO_SERVICIOS, ...window.CATALOGO_CANALES, ...window.CATALOGO_ANUNCIOS];
    let htmlInyeccion = "";

    deseosLocales.forEach(deseo => {
        const itemOriginal = poolGlobalProductos.find(p => p.id === deseo.id);
        if (itemOriginal) { htmlInyeccion += generarTarjetaInyectableHTML(itemOriginal); }
    });

    contenedorGrid.innerHTML = htmlInyeccion;
}

// =========================================================================
// 👤 SECCIÓN PERFIL DE USUARIO
// =========================================================================
// =========================================================================
// 👤 SECCIÓN PERFIL DE USUARIO (REVISADO Y COMPLETO CON TEXTOS NATIVOS)
// =========================================================================
function cargarDatosPanelPerfil() {
    // 1. 🎛️ EXTRACCIÓN SOBERANA DE DATOS DE TELEGRAM SDK
    const userTelegram = window.Telegram?.WebApp?.initDataUnsafe?.user;
    const userTelegramID = userTelegram?.id || "1320417199"; // Fallback por si testeas en navegador local
    
    const firstName = userTelegram?.first_name || "Usuario Golden";
    const lastName = userTelegram?.last_name || "";
    const nombreCompleto = `${firstName} ${lastName}`.trim();

    // 2. ⚡ GENERADOR DINÁMICO DE RANGOS FUTURISTAS
    let rangoFuturista = "⚡ Miembro Golden VIP Synergia";
    
    // Verificamos si el ID del operador está registrado en tu lista de administradores premium
    if (window.LISTA_USUARIOS_PREMIUM && window.LISTA_USUARIOS_PREMIUM.includes(String(userTelegramID))) {
        rangoFuturista = "👑 Administrador Alpha Network";
    }

    // 🌟 INYECCIÓN DIRECTA EN EL DOM (Adiós para siempre al "Buscando datos...")
    const perfNombreDOM = document.getElementById('perf-nombre');
    const perfRangoDOM = document.getElementById('perf-rango');
    
    if (perfNombreDOM) perfNombreDOM.innerText = `👤 ${nombreCompleto}`;
    if (perfRangoDOM) perfRangoDOM.innerText = `Rango: ${rangoFuturista}`;

    // 3. 🏛️ ESTRUCTURACIÓN DE PANELES DE HISTORIAL
    const baseCompras = window.DB_COMPRAS_USUARIOS[userTelegramID] || [];

    const panelSubs = document.getElementById('panel-suscripciones');
    const panelServs = document.getElementById('panel-servicios');
    const panelProds = document.getElementById('panel-productos');
    const panelAnuncios = document.getElementById('panel-anuncios');

    // Limpieza de hilos HTML previos para evitar duplicados al cambiar de pestañas
    if (panelSubs) panelSubs.innerHTML = ""; 
    if (panelServs) panelServs.innerHTML = ""; 
    if (panelProds) panelProds.innerHTML = ""; 
    if (panelAnuncios) panelAnuncios.innerHTML = "";
    
    let tieneSuscripcion = false;

    // Mapeo recursivo de transacciones del cliente
    baseCompras.forEach(item => {
        let htmlCard = `
            <div class="panel-item-data view-fade-in">
                <p style="color:#fff; font-weight:700;">${item.titulo}</p>
                <p style="color:#64748b; font-size:0.65rem; margin-top:2px;">Vigencia: ${item.fechaInicio || item.fechaCompra} al ${item.fechaFin || 'Ilimitado'}</p>
                <p style="color:var(--neon-cyan); font-size:0.65rem; font-weight:bold; margin-top:3px;">Estado: ${item.estado}</p>
            </div>
        `;
        if (item.tipo === "suscripcion") { if (panelSubs) panelSubs.innerHTML += htmlCard; tieneSuscripcion = true; }
        if (item.tipo === "servicio") { if (panelServs) panelServs.innerHTML += htmlCard; }
        if (item.tipo === "producto") { if (panelProds) panelProds.innerHTML += htmlCard; }
        if (item.tipo === "anuncio") { if (panelAnuncios) panelAnuncios.innerHTML += htmlCard; }
    });

    // 4. 🚨 SISTEMA DE SEGURIDAD PARA CASILLAS VACÍAS
    if (!tieneSuscripcion && panelSubs) {
        panelSubs.innerHTML = `
            <div style="text-align:center; padding:4px 0;">
                <p style="color:#64748b; font-size:0.72rem;">No registras ninguna credencial de suscripción activa en la red.</p>
                <button class="btn-ver-catalogo" onclick="navegarA('servicios')">Explorar Servicios 🔍</button>
            </div>
        `;
    }

    if (panelServs && panelServs.innerHTML === "") panelServs.innerHTML = `<p style='color:#64748b; font-size:0.7rem;'>0 módulos en cola de desarrollo.</p>`;
    if (panelProds && panelProds.innerHTML === "") panelProds.innerHTML = `<p style='color:#64748b; font-size:0.7rem;'>0 productos de asignación directa.</p>`;
    if (panelAnuncios && panelAnuncios.innerHTML === "") panelAnuncios.innerHTML = `<p style='color:#64748b; font-size:0.7rem;'>0 pautas publicitarias registradas.</p>`;
}

// =========================================================================
// 🤖 SIMULADORES AUTOMÁTICOS ASÍNCRONOS
// =========================================================================
// =========================================================================
// ⏱️ MOTOR DEL SIMULADOR ASÍNCRONO DE DESEOS EN TIEMPO REAL
// =========================================================================
function iniciarSimuladorContadoresTarjeta() {
    // Cada 7 segundos evaluamos si aumentamos un nodo de forma orgánica
    setInterval(() => {
        // Combinamos todos nuestros almacenes de productos disponibles
        const poolDeItems = [...window.CATALOGO_SERVICIOS, ...window.CATALOGO_CANALES, ...window.CATALOGO_ANUNCIOS];
        if (poolDeItems.length === 0) return;

        // Seleccionamos un ítem al azar de toda nuestra base de datos
        const itemAleatorio = poolDeItems[Math.floor(Math.random() * poolDeItems.length)];
        const simKey = `sim_deseos_${itemAleatorio.id}`;
        let simData = JSON.parse(localStorage.getItem(simKey));

        if (simData) {
            // El simulador tiene un 65% de probabilidades de subir +1 en esta iteración
            if (Math.random() > 0.35) {
                simData.count += 1;
                localStorage.setItem(simKey, JSON.stringify(simData));

                // Si la tarjeta está renderizada en pantalla actualmente, actualizamos el número con un efecto fluido
                const contadorDOM = document.getElementById(`sim-contador-render-${itemAleatorio.id}`);
                if (contadorDOM) {
                    contadorDOM.innerText = simData.count;
                    // Mini animación flash de neón al subir el dígito
                    contadorDOM.style.textShadow = "0 0 15px #00f0ff";
                    setTimeout(() => { contadorDOM.style.textShadow = "0 0 6px rgba(0, 240, 255, 0.3)"; }, 1000);
                }
            }
        }
    }, 7000); 
}

function ejecutarFomoFlotanteSincronizado() {
    const banner = document.getElementById('fomo-notification');
    const fomoText = document.getElementById('fomo-text');
    if (!banner || !fomoText) return;
    const nombres = ["X-801", "Kaelen", "Alpha_09", "Vesper", "Elysia", "Zephyr"];
    const servicio = window.CATALOGO_SERVICIOS[Math.floor(Math.random() * window.CATALOGO_SERVICIOS.length)];
    fomoText.innerHTML = `👤 <strong>${nombres[Math.floor(Math.random() * nombres.length)]}</strong> compró <span style="color:var(--neon-cyan); font-weight:800;">${servicio.titulo}.
</span>`;
    banner.style.opacity = "1"; banner.style.transform = "translateY(0px)";
    setTimeout(() => { banner.style.opacity = "0"; banner.style.transform = "translateY(15px)"; }, 5500);
}

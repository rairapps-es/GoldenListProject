// =========================================================================
// 🌐 CONFIGURACIÓN GENERAL Y BASE DE DATOS LOCAL EXCLUSIVA (REGLA DE ORO)
// =========================================================================

window.LISTA_USUARIOS_PREMIUM = ["1320417199", "987654321", "555666777"]; 

// Estructura limpia para mapear los 4 Paneles Principales según el tipo del ítem comprado
window.DB_COMPRAS_USUARIOS = {
    "1320417199": [
        { idItem: "SUB-GOLDEN", tipo: "suscripcion", titulo: "Suscripción Golden VIP Anual", fechaInicio: "01/01/2026", fechaFin: "01/01/2027", estado: "Activa 👑" },
        { idItem: "SERV-002", tipo: "servicio", titulo: "Optimización Avanzada de Crecimiento N°2", fechaInicio: "10/06/2026", fechaFin: "25/06/2026", estado: "En Producción 🛠️" },
        { idItem: "PROD-102", tipo: "producto", titulo: "Script Automatizado Backup Base Datos Telegram", fechaCompra: "12/05/2026", estado: "Entregado ✅" },
        { idItem: "ANUN-001", tipo: "anuncio", titulo: "Pack Anuncios Masivo Lista Golden", fechaInicio: "05/06/2026", fechaFin: "15/06/2026", estado: "Corriendo Campaña 📊" }
    ]
};

// Generador Automático de 22 Servicios Base para pruebas del Catálogo
window.CATALOGO_SERVICIOS = [];
for (let i = 1; i <= 22; i++) {
    let cat = i % 3 === 0 ? "bot" : (i % 3 === i ? "grupo" : "canal");
    window.CATALOGO_SERVICIOS.push({
        id: `SERV-${String(i).padStart(3, '0')}`,
        categoria: cat,
        titulo: `Estrategia Avanzada para ${cat.toUpperCase()} N°${i}`,
        rating: "4.9",
        descripcion_corta: `Pack optimizado para potenciar tu ${cat} de forma masiva en buscadores.`,
        descripcion_larga: `Configuración técnica milimétrica estructurada, revisión de embudos de conversión integrados y optimización interna en buscadores de Telegram de forma orgánica.`,
        precio: 40 + (i * 15),
        descuento: i % 2 === 0 ? 10 : 0,
        oferta: i % 2 === 0 ? "🔥 ¡Oferta Flash!" : "Tarifa Regular",
        incluye: ["Garantía Lista Golden", "Soporte Técnico Directo"],
        tiempoEntregaBase: "72 horas",
        revisiones: 2,
        deseosIniciales: 104 + i,
        ventasIniciales: 12 + i
    });
}

window.CATALOGO_CANALES = [
    { id: "CHAN-001", titulo: "Canal de Apuestas Deportivas (Venta)", suscriptores: "14,200", categoria: "Deportes", precio: 290, descripcion_breve: "Rentabilidad demostrable mediante auditoría externa.", detalles: "La transferencia incluye bots administradores." }
];

window.CATALOGO_ANUNCIOS = [
    { id: "ANUN-001", titulo: "Pack Anuncios Masivo Lista Golden", precio: 60, descuento: 10, oferta: "Recomendado para lanzamientos masivos", beneficios: ["Difusión simultánea", "Fijado en top chat"], descripcion_larga: "Captura leads cualificados rápidamente de forma segmentada.", tiempoEntregaBase: "24 horas", revisiones: 1, incluye: ["Diseño de banner publicitario"] }
];

// Estado Operacional de la Mini App
let catalogoActualActivo = "servicios"; 
let filtroActualActivo = "todos"; 
let tarjetasDesplegadasActualmente = 10; 
let itemSeleccionadoParaCompra = null;

// =========================================================================
// 🚀 INICIALIZADOR PRINCIPAL CON INTEGRACIÓN NATIVA TOTAL
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
    if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();
    }
    
    // Iniciar el repositorio de almacenamiento para deseos si está limpio
    if (!localStorage.getItem('lista_deseos_golden')) {
        localStorage.setItem('lista_deseos_golden', JSON.stringify([]));
    }

    // SINCRONIZACIÓN SOBERANA DE PERFIL UTILIZANDO PHOTO_URL VALIDADO
    const userTelegram = window.Telegram?.WebApp?.initDataUnsafe?.user;
    const firstName = userTelegram?.first_name || "Usuario Golden";
    const lastName = userTelegram?.last_name || "";
    const nombreCompleto = `${firstName} ${lastName}`.trim();
    
    // Captura de avatar nativo de Telegram con respaldo inteligente por si no tiene asignado
    const urlFotoTelegram = userTelegram?.photo_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(nombreCompleto)}&background=1d4ed8&color=fff`;

    // Inyección sincronizada instantánea en los dos nodos objetivos
    document.getElementById('top-user-name').innerText = firstName;
    document.getElementById('top-user-avatar').innerHTML = `<img src="${urlFotoTelegram}" alt="Profile">`;
    document.getElementById('page-user-avatar').innerHTML = `<img src="${urlFotoTelegram}" alt="Profile Big">`;

    // Carga del catálogo base inicial
    iniciarSimuladorContadoresTarjeta();
    renderizerEcosistemaActual(false);

    // Motor de Notificaciones FOMO Colectivas
    if (window.fomoIntervalID) clearInterval(window.fomoIntervalID);
    setTimeout(ejecutarFomoFlotanteSincronizado, 2500);
    window.fomoIntervalID = setInterval(ejecutarFomoFlotanteSincronizado, 13000);
});

// =========================================================================
// 🔄 ROUTER INTERNO Y CAMBIADOR DE VISTAS (CATÁLOGOS VS PERFIL)
// =========================================================================
function switchCatalog(nuevoCatalogo) {
    catalogoActualActivo = nuevoCatalogo;
    
    document.querySelectorAll('.tab-link').forEach(btn => btn.classList.remove('active'));
    const btnActivo = document.getElementById(`tab-btn-${nuevoCatalogo}`);
    if (btnActivo) btnActivo.classList.add('active');

    const barraFiltros = document.getElementById('filter-bar-container');
    const gridCatalogo = document.querySelector('.catalog-grid');
    const bloquePerfil = document.getElementById('perfil-usuario-view');

    if (nuevoCatalogo === 'perfil') {
        barraFiltros.style.display = "none";
        gridCatalogo.style.display = "none";
        bloquePerfil.style.display = "block";
        cargarDatosPanelPerfil(); // Carga reactiva de los paneles estructurados
    } else {
        gridCatalogo.style.display = "block";
        bloquePerfil.style.display = "none";
        barraFiltros.style.display = nuevoCatalogo === 'servicios' ? "flex" : "none";
        renderizerEcosistemaActual(false);
    }
}

function cambiarFiltroCategoria(categoria, botonOrigen) {
    filtroActualActivo = categoria;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    botonOrigen.classList.add('active');
    renderizerEcosistemaActual(false);
}

// =========================================================================
// 📥 MOTOR DE RENDERIZACIÓN CON LAZY LOAD INTEGRADO
// =========================================================================
function renderizerEcosistemaActual(cargarMas = false) {
    const grid = document.querySelector('.catalog-grid');
    if (!grid) return;

    if (!cargarMas) {
        grid.innerHTML = "";
        tarjetasDesplegadasActualmente = 10; 
    }

    let listadoBase = [];
    if (catalogoActualActivo === "servicios") listadoBase = window.CATALOGO_SERVICIOS;
    if (catalogoActualActivo === "canales") listadoBase = window.CATALOGO_CANALES;
    if (catalogoActualActivo === "anuncios") listadoBase = window.CATALOGO_ANUNCIOS;

    if (catalogoActualActivo === "servicios" && filtroActualActivo !== "todos") {
        listadoBase = listadoBase.filter(item => item.categoria === filtroActualActivo);
    }

    const bloquePaginado = listadoBase.slice(0, tarjetasDesplegadasActualmente);
    let htmlInyeccion = "";
    
    bloquePaginado.forEach(item => {
        if (catalogoActualActivo === "servicios") htmlInyeccion += construirTarjetaServicioHTML(item);
        if (catalogoActualActivo === "canales") htmlInyeccion += construirTarjetaCanalHTML(item);
        if (catalogoActualActivo === "anuncios") htmlInyeccion += construirTarjetaAnuncioHTML(item);
    });

    const gatilloAnterior = document.getElementById('trigger-lazy-load');
    if (gatilloAnterior) gatilloAnterior.remove();

    if (cargarMas) {
        grid.insertAdjacentHTML('beforeend', htmlInyeccion);
    } else {
        grid.innerHTML = htmlInyeccion;
    }

    if (listadoBase.length > tarjetasDesplegadasActualmente) {
        const botonMasHTML = `
            <div id="trigger-lazy-load" style="text-align:center; padding:10px 0; width:100%;">
                <button onclick="ejecutarSiguientePautaLazyLoad()" style="background:#1c2541; border:1px solid #334155; color:#38bdf8; padding:10px; border-radius:8px; font-size:0.75rem; font-weight:700; cursor:pointer; width:100%;">
                    Cargar más elementos disponibles ⬇️
                </button>
            </div>
        `;
        grid.insertAdjacentHTML('beforeend', botonMasHTML);
    }
}

function ejecutarSiguientePautaLazyLoad() {
    tarjetasDesplegadasActualmente += 10;
    renderizerEcosistemaActual(true);
}

// =========================================================================
// 🧱 COMPONENTES DE RENDERIZACIÓN DE TARJETAS (HTML SEMÁNTICO)
// =========================================================================
function construirTarjetaServicioHTML(item) {
    const userTelegramID = window.Telegram?.WebApp?.initDataUnsafe?.user?.id || "1320417199";
    const comprasDelUsuario = window.DB_COMPRAS_USUARIOS[userTelegramID] || [];
    const yaComprado = comprasDelUsuario.find(compra => compra.idItem === item.id);
    const precioFinal = item.precio - item.descuento;

    let botonAccionHTML = `<button class="btn-contratar" onclick="abrirModalCheckout('${item.id}', 'servicios')">Contratar servicio 🛍️</button>`;
    if (yaComprado) {
        botonAccionHTML = `<span style="background:#10b981; color:#fff; padding:6px 12px; border-radius:6px; font-size:0.7rem; font-weight:800; display:inline-block;">✅ YA ADQUIRIDO</span>`;
    }

    return `
        <div class="servicio-card">
            <div style="display:flex; justify-content:space-between; align-items:start;">
                <div>
                    <h3 style="font-size:0.9rem; color:#fff; font-weight:700;">${item.titulo}</h3>
                    <div onclick="window.open('https://t.me/ListaGoldenCanalResenas', '_blank')" style="cursor:pointer; color:#eab308; font-size:0.75rem; margin-top:3px;">
                        ⭐ ${item.rating} <span style="color:#64748b; font-size:0.65rem;">(Ver Reseñas)</span>
                    </div>
                </div>
            </div>
            
            <p style="font-size:0.75rem; color:#cbd5e1; margin:10px 0 6px 0;">${item.descripcion_corta}</p>
            
            <div style="margin:8px 0; font-size:0.8rem;">
                <strong style="color:#22d3ee; font-size:0.95rem;">${precioFinal}€</strong>
                <span style="color:#f43f5e; font-size:0.65rem; margin-left:8px; font-weight:bold;">${item.oferta}</span>
            </div>

            <p id="fomo-card-deseos-${item.id}" style="font-size:0.7rem; color:#f59e0b; font-weight:600; margin-bottom:10px;">
                🔥 ${item.deseosIniciales} usuarios guardaron esto en su lista de deseos.
            </p>

            <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid rgba(255,255,255,0.05); padding-top:8px;">
                <button onclick="window.open('https://t.me/ListaGoldenAgente', '_blank')" style="background:none; border:none; color:#38bdf8; font-size:0.7rem; cursor:pointer;">🗣️ Soporte Directo</button>
                <span onclick="toggleAcordeon('${item.id}')" style="cursor:pointer; font-size:1rem;" id="arrow-${item.id}">⬇️</span>
            </div>

            <div id="expand-${item.id}" style="display:none; margin-top:10px; font-size:0.75rem; color:#94a3b8; background:rgba(0,0,0,0.15); padding:10px; border-radius:8px;">
                <p style="color:#cbd5e1; margin-bottom:4px;"><strong>Detalles:</strong> ${item.descripcion_larga}</p>
                <p><strong>Plazo estimado:</strong> ${item.tiempoEntregaBase} | <strong>Revisiones:</strong> ${item.revisiones}</p>
                
                <div style="display:flex; gap:6px; margin-top:8px;">
                    <button onclick="window.open('https://t.me/ListaGoldenAgente?text=Consulta_Servicio_${item.id}', '_blank')" style="background:#334155; color:#fff; border:none; padding:5px 10px; border-radius:4px; font-size:0.65rem; cursor:pointer;">Pedir Presupuesto</button>
                    <button onclick="guardarEnListaDeseosLocalStorage('${item.id}', '${item.titulo}')" style="background:#ef4444; color:#fff; border:none; padding:5px 10px; border-radius:4px; font-size:0.65rem; cursor:pointer;">❤️ Añadir a Deseos</button>
                </div>
            </div>

            <div style="text-align:right; margin-top:8px;">
                ${botonAccionHTML}
            </div>
        </div>
    `;
}

function construirTarjetaCanalHTML(item) {
    return `<div class="servicio-card"><h3 style="color:#fff; font-size:0.9rem;">${item.titulo}</h3><p style="font-size:0.75rem; color:#94a3b8; margin:6px 0;">Suscriptores: ${item.suscriptores} | Categoría: ${item.categoria}</p><p style="font-size:0.75rem; color:#cbd5e1;">${item.descripcion_breve}</p><div style="text-align:right; margin-top:10px;"><strong style="color:#22d3ee; font-size:0.9rem; margin-right:12px;">${item.precio}€</strong><button class="btn-contratar" onclick="window.open('https://t.me/ListaGoldenAgente?text=Interes_Canal_${item.id}', '_blank')">Consultar Compra</button></div></div>`;
}

function construirTarjetaAnuncioHTML(item) {
    return `
        <div class="servicio-card">
            <h3 style="color:#fff; font-size:0.9rem;">${item.titulo}</h3>
            <p style="font-size:0.75rem; color:#cbd5e1; margin:6px 0;">${item.descripcion_larga}</p>
            <div style="text-align:right; margin-top:10px;">
                <strong style="color:#22d3ee; font-size:0.9rem; margin-right:12px;">${item.precio - item.descuento}€</strong>
                <button class="btn-contratar" onclick="abrirModalCheckout('${item.id}', 'anuncios')">Comprar Pack 🚀</button>
            </div>
        </div>
    `;
}

// =========================================================================
// ❤️ PERSISTENCIA REAL: MOTOR DE LISTA DE DESEOS LOCAL
// =========================================================================
function guardarEnListaDeseosLocalStorage(id, titulo) {
    let deseos = JSON.parse(localStorage.getItem('lista_deseos_golden')) || [];
    if (!deseos.some(d => d.id === id)) {
        deseos.push({ id: id, titulo: titulo });
        localStorage.setItem('lista_deseos_golden', JSON.stringify(deseos));
        alert("❤️ Se ha guardado en tu Lista de Deseos. Revísalo en la pestaña 'Mi Perfil'.");
    } else {
        alert("Este elemento ya está guardado en tu lista de deseos.");
    }
}

function eliminarDeseoLocal(id) {
    let deseos = JSON.parse(localStorage.getItem('lista_deseos_golden')) || [];
    deseos = deseos.filter(d => d.id !== id);
    localStorage.setItem('lista_deseos_golden', JSON.stringify(deseos));
    cargarDatosPanelPerfil(); // Refresco de vista instantáneo
}

// =========================================================================
// 👤 CARGA DINÁMICA DE LA VISTA DE PERFIL (5 PANELES INDEPENDIENTES)
// =========================================================================
function cargarDatosPanelPerfil() {
    const userTelegram = window.Telegram?.WebApp?.initDataUnsafe?.user;
    const firstName = userTelegram?.first_name || "Usuario Golden";
    const lastName = userTelegram?.last_name || "";
    const nombreCompleto = `${firstName} ${lastName}`.trim();
    const userTelegramID = userTelegram?.id || "1320417199";

    // Escribir datos maestros en cabecera
    document.getElementById('perf-nombre').innerText = `${nombreCompleto} (ID: ${userTelegramID})`;
    const esVip = window.LISTA_USUARIOS_PREMIUM.includes(userTelegramID.toString());
    document.getElementById('perf-rango').innerText = esVip ? "👑 MIEMBRO GOLDEN VIP" : "⚪ CUENTA ESTÁNDAR";

    // Extraer compras mapeadas desde el objeto de control
    const baseCompras = window.DB_COMPRAS_USUARIOS[userTelegramID] || [];

    const panelSubs = document.getElementById('panel-suscripciones');
    const panelServs = document.getElementById('panel-servicios');
    const panelProds = document.getElementById('panel-productos');
    const panelAnuncios = document.getElementById('panel-anuncios');
    const panelDeseos = document.getElementById('panel-deseos');

    // Reset estructural preventivo
    panelSubs.innerHTML = ""; panelServs.innerHTML = ""; panelProds.innerHTML = ""; panelAnuncios.innerHTML = ""; panelDeseos.innerHTML = "";

    let tieneSuscripcionActiva = false;

    // Clasificación y renderización reactiva de ítems comprados
    baseCompras.forEach(item => {
        let htmlCard = `
            <div class="panel-item-data">
                <p style="color:#fff; font-weight:700;">${item.titulo}</p>
                <p style="color:#94a3b8; font-size:0.7rem; margin-top:2px;">
                    ${item.fechaCompra ? `Fecha Compra: ${item.fechaCompra}` : `Vigencia: ${item.fechaInicio} al ${item.fechaFin}`}
                </p>
                <p style="color:#38bdf8; font-weight:bold; font-size:0.65rem; margin-top:3px;">Estado: ${item.estado}</p>
            </div>
        `;

        if (item.tipo === "suscripcion") { panelSubs.innerHTML += htmlCard; tieneSuscripcionActiva = true; }
        if (item.tipo === "servicio") panelServs.innerHTML += htmlCard;
        if (item.tipo === "producto") panelProds.innerHTML += htmlCard;
        if (item.tipo === "anuncio") panelAnuncios.innerHTML += htmlCard;
    });

    // 🚨 REGLA DE NEGOCIO: Si no se detecta ninguna suscripción, se inyecta el botón cargador al catálogo
    if (!tieneSuscripcionActiva) {
        panelSubs.innerHTML = `
            <div style="text-align:center; padding:8px 0;">
                <p style="color:#64748b; font-size:0.75rem;">No tienes ninguna suscripción activa actualmente.</p>
                <button class="btn-ver-catalogo" onclick="switchCatalog('servicios')">Ver servicios en el catálogo 🔍</button>
            </div>
        `;
    }

    // Asegurar mensajes vacíos si los paneles no registran historial
    if (panelServs.innerHTML === "") panelServs.innerHTML = `<p style='color:#64748b; font-size:0.7rem;'>No registras servicios en fase de desarrollo.</p>`;
    if (panelProds.innerHTML === "") panelProds.innerHTML = `<p style='color:#64748b; font-size:0.7rem;'>No has comprado productos directos.</p>`;
    if (panelAnuncios.innerHTML === "") panelAnuncios.innerHTML = `<p style='color:#64748b; font-size:0.7rem;'>No hay historial de campañas ejecutadas.</p>`;

    // Pintado reactivo de la Lista de Deseos desde el LocalStorage real
    let deseosLocales = JSON.parse(localStorage.getItem('lista_deseos_golden')) || [];
    if (deseosLocales.length === 0) {
        panelDeseos.innerHTML = `<p style='color:#64748b; font-size:0.7rem;'>Tu lista de deseos está actualmente vacía.</p>`;
    } else {
        deseosLocales.forEach(d => {
            panelDeseos.innerHTML += `
                <div class="panel-item-data" style="display:flex; justify-content:space-between; align-items:center; border-left:3px solid #ef4444;">
                    <span style="color:#fff; font-weight:600;">${d.titulo}</span>
                    <button onclick="eliminarDeseoLocal('${d.id}')" style="background:none; border:none; color:#ef4444; cursor:pointer; font-size:0.8rem; font-weight:bold;">❌</button>
                </div>
            `;
        });
    }
}

// =========================================================================
// 💳 PASARELA DE CONTROL Y CHECKOUT NATIVO
// =========================================================================
function abrirModalCheckout(idItem, baseCatalogo) {
    let fuente = baseCatalogo === 'servicios' ? window.CATALOGO_SERVICIOS : window.CATALOGO_ANUNCIOS;
    let item = fuente.find(i => i.id === idItem);
    if (!item) return;

    itemSeleccionadoParaCompra = item;
    const baseCalculada = item.precio - (item.descuento || 0);

    document.getElementById('select-entrega').value = "estandar";
    document.getElementById('select-pago').value = "PayPal";
    document.getElementById('modal-titulo').innerText = `Contratar: ${item.titulo}`;
    document.getElementById('modal-precio-final').innerText = baseCalculada;
    document.getElementById('checkout-modal').style.display = "flex";
}

function actualizarPrecioTotalModal() {
    if (!itemSeleccionadoParaCompra) return;
    const baseCalculada = itemSeleccionadoParaCompra.precio - (itemSeleccionadoParaCompra.descuento || 0);
    const tipoEnvio = document.getElementById('select-entrega').value;
    let costeExtra = tipoEnvio === 'urgente_48' ? 10 : (tipoEnvio === 'critico_24' ? 20 : 0);
    document.getElementById('modal-precio-final').innerText = baseCalculada + costeExtra;
}

function cerrarModalCheckout() { 
    document.getElementById('checkout-modal').style.display = "none"; 
    itemSeleccionadoParaCompra = null; 
}

function procesarEnvioPedidoTelegram() {
    if (!itemSeleccionadoParaCompra) return;
    const btnConfirmar = document.getElementById('btn-confirmar-modal');
    if (btnConfirmar) btnConfirmar.disabled = true;

    const userTelegramID = window.Telegram?.WebApp?.initDataUnsafe?.user?.id || "1320417199";
    const viaPago = document.getElementById('select-pago').value;
    const tiempoPrioridad = document.getElementById('select-entrega').value;
    const montoFinalCobro = document.getElementById('modal-precio-final').innerText;

    const payloadContratacion = {
        origen: "LISTA_GOLDEN_SAAS",
        solicitante_id: userTelegramID,
        servicio_id: itemSeleccionadoParaCompra.id,
        servicio_titulo: itemSeleccionadoParaCompra.titulo,
        opcion_entrega: tiempoPrioridad,
        metodo_pago: viaPago,
        total_pago: montoFinalCobro + "€"
    };

    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.sendData) {
        window.Telegram.WebApp.sendData(JSON.stringify(payloadContratacion));
        window.Telegram.WebApp.close();
    } else {
        alert(`[Simulación Entorno Local]: Pedido enviado de forma invisible al Bot.\nImporte: ${montoFinalCobro}€\nMétodo: ${viaPago}`);
        cerrarModalCheckout();
    }
}

// =========================================================================
// 🔔 MOTORES AUXILIARES AUTOMATIZADOS (FOMO E INTERACCIONES)
// =========================================================================
function toggleAcordeon(id) {
    const box = document.getElementById(`expand-${id}`);
    const icon = document.getElementById(`arrow-${id}`);
    if (box.style.display === "none") { 
        box.style.display = "block"; icon.innerText = "⬆️"; 
    } else { 
        box.style.display = "none"; icon.innerText = "⬇️"; 
    }
}

function iniciarSimuladorContadoresTarjeta() {
    setInterval(() => {
        const target = window.CATALOGO_SERVICIOS[Math.floor(Math.random() * window.CATALOGO_SERVICIOS.length)];
        if (target) {
            target.deseosIniciales += Math.random() > 0.4 ? 1 : 0;
            const textHTML = document.getElementById(`fomo-card-deseos-${target.id}`);
            if (textHTML) textHTML.innerHTML = `🔥 ${target.deseosIniciales} usuarios guardaron esto en su lista de deseos.`;
        }
    }, 9000);
}

function ejecutarFomoFlotanteSincronizado() {
    const banner = document.getElementById('fomo-notification');
    const fomoText = document.getElementById('fomo-text');
    if (!banner || !fomoText) return;
    
    const nombresFalsos = ["Mateo", "Valentina", "Lucas", "Camila", "Daniel", "Gabriela", "Santiago"];
    const baseInteracciones = Math.floor(Math.random() * 6) + 2;
    const servicioElegido = window.CATALOGO_SERVICIOS[Math.floor(Math.random() * window.CATALOGO_SERVICIOS.length)];
    
    fomoText.innerHTML = `<strong>${nombresFalsos[Math.floor(Math.random() * nombresFalsos.length)]}</strong> y ${baseInteracciones} personas más acaban de adquirir: <span style="color:#38bdf8; font-weight:800;">${servicioElegido.titulo}</span>`;
    
    banner.style.opacity = "1"; 
    banner.style.transform = "translateY(0px)";
    
    setTimeout(() => { 
        banner.style.opacity = "0"; 
        banner.style.transform = "translateY(30px)"; 
    }, 5500);
}

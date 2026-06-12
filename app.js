// =========================================================================
// 🌐 CONFIGURACIÓN GENERAL Y BASE DE DATOS EXTENDIDA CON DATOS REALES
// =========================================================================
window.LISTA_USUARIOS_PREMIUM = ["1320417199", "987654321"]; 

window.DB_COMPRAS_USUARIOS = {
    "1320417199": [
        { idItem: "SUB-GOLDEN", tipo: "suscripcion", titulo: "Suscripción Golden VIP Anual", fechaInicio: "01/01/2026", fechaFin: "01/01/2027", estado: "Activa 👑" },
        { idItem: "SERV-002", tipo: "servicio", titulo: "Estrategia de Crecimiento N°2", fechaInicio: "10/06/2026", fechaFin: "25/06/2026", estado: "En Producción 🛠️" },
        { idItem: "PROD-102", tipo: "producto", titulo: "Script Auto-Backup", fechaCompra: "12/05/2026", estado: "Entregado ✅" }
    ]
};

// Generación Inteligente de 22 Servicios Base para el Catálogo (Con Imágenes)
window.CATALOGO_SERVICIOS = [];
for (let i = 1; i <= 22; i++) {
    let cat = i % 3 === 0 ? "bot" : (i % i === 2 ? "grupo" : "canal");
    window.CATALOGO_SERVICIOS.push({
        id: `SERV-${String(i).padStart(3, '0')}`,
        tipo: "servicio",
        categoria: cat,
        titulo: `Estrategia Avanzada para ${cat.toUpperCase()} N°${i}`,
        rating: (4.5 + (i % 5) * 0.1).toFixed(1),
        imagen: `https://picsum.photos/id/${10 + i}/400/200`, // Imágenes reales variables
        descripcion_corta: `Pack optimizado para potenciar tu estructura en Telegram.`,
        descripcion_larga: `Configuración técnica milimétrica estructurada, revisión de embudos de conversión y posicionamiento orgánico indexado.`,
        precio: 40 + (i * 15),
        descuento: i % 2 === 0 ? 15 : 0,
        oferta: i % 3 === 0 ? "🔥 ¡Oferta Flash!" : "Tarifa Regular",
        tiempoEntregaBase: "72 horas",
        revisiones: 2,
        deseosIniciales: 102 + i
    });
}

window.CATALOGO_CANALES = [
    { id: "CHAN-001", tipo: "canal", titulo: "Canal de Apuestas Deportivas (Venta)", imagen: "https://picsum.photos/id/29/400/200", suscriptores: "14,200", categoria: "Deportes", precio: 290, descuento: 0, oferta: "Destacado ⭐", descripcion_breve: "Rentabilidad demostrable mediante auditorías." }
];

window.CATALOGO_ANUNCIOS = [
    { id: "ANUN-001", tipo: "anuncio", titulo: "Pack Anuncios Masivo Lista Golden", imagen: "https://picsum.photos/id/36/400/200", precio: 60, descuento: 10, oferta: "🔥 Ofertas Flash", descripcion_larga: "Captura leads cualificados de forma segmentada.", tiempoEntregaBase: "24 horas" }
];

let catalogoActualActivo = "servicios"; 
let filtroActualActivo = "todos"; 
let tarjetasDesplegadasActualmente = 10; 
let itemSeleccionadoParaCompra = null;

// =========================================================================
// 🚀 ARRANCADOR MAESTRO DE LA MINI APP
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
    if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();
    }
    
    if (!localStorage.getItem('lista_deseos_golden')) {
        localStorage.setItem('lista_deseos_golden', JSON.stringify([]));
    }

    // Extracción Sincronizada del Perfil de Telegram con Photo_URL
    const userTelegram = window.Telegram?.WebApp?.initDataUnsafe?.user;
    const firstName = userTelegram?.first_name || "Usuario Local";
    const lastName = userTelegram?.last_name || "";
    const urlFoto = userTelegram?.photo_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(firstName)}&background=1d4ed8&color=fff`;

    document.getElementById('top-user-name').innerText = firstName;
    document.getElementById('top-user-avatar').innerHTML = `<img src="${urlFoto}" alt="avatar">`;
    document.getElementById('page-user-avatar').innerHTML = `<img src="${urlFoto}" alt="avatar">`;

    renderizerEcosistemaActual(false);
    iniciarSimuladorContadoresTarjeta();

    if (window.fomoIntervalID) clearInterval(window.fomoIntervalID);
    setTimeout(ejecutarFomoFlotanteSincronizado, 2500);
    window.fomoIntervalID = setInterval(ejecutarFomoFlotanteSincronizado, 13000);
});

// =========================================================================
// 🧭 SISTEMA DE RUTA CENTRALIZADO (MENÚ INFERIOR CON ICONOS)
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

    if (seccion === "servicios" || seccion === "canales" || seccion === "anuncios") {
        document.getElementById(`nav-${seccion}`).classList.add('active');
        viewCatalog.style.display = "block";
        catalogoActualActivo = seccion;
        if (seccion === "servicios") filterBar.style.display = "flex";
        renderizerEcosistemaActual(false);
    } 
    else if (seccion === "deseos") {
        document.getElementById('nav-deseos').classList.add('active');
        viewDeseos.style.display = "block";
        cargarPaginaDeseosOriginales();
    } 
    else if (seccion === "perfil") {
        document.getElementById('nav-perfil').classList.add('active');
        viewPerfil.style.display = "block";
        cargarDatosPanelPerfil();
    }
}

function cambiarCategoria(cat) {
    filtroActualActivo = cat;
    document.querySelectorAll('.categories .filter-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`cat-${cat}`).classList.add('active');
    renderizerEcosistemaActual(false);
}

// =========================================================================
// ⚙️ MOTOR DE FILTROS AVANZADOS Y ORDENACIÓN (PUNTO 2)
// =========================================================================
function aplicarFiltrosYOrdenacion(listado) {
    // 1. Filtrar primero por categoría si aplica
    if (catalogoActualActivo === "servicios" && filtroActualActivo !== "todos") {
        listado = listado.filter(item => item.categoria === filtroActualActivo);
    }

    // 2. Ordenación Avanzada
    const criterio = document.getElementById('select-sort').value;
    if (criterio === "barato") {
        listado.sort((a, b) => (a.precio - (a.descuento || 0)) - (b.precio - (b.descuento || 0)));
    } else if (criterio === "descuento") {
        listado.sort((a, b) => (b.descuento || 0) - (a.descuento || 0));
    } else if (criterio === "ofertas") {
        listado = listado.filter(item => item.oferta.includes("Flash"));
    } else { // Destacados / Valoración por defecto
        listado.sort((a, b) => parseFloat(b.rating || 0) - parseFloat(a.rating || 0));
    }
    return listado;
}

// =========================================================================
// 📥 MOTOR LAZY LOAD
// =========================================================================
function renderizerEcosistemaActual(cargarMas = false) {
    const grid = document.querySelector('.catalog-grid');
    if (!grid) return;

    if (!cargarMas) { grid.innerHTML = ""; tarjetasDesplegadasActualmente = 10; }

    let listadoBase = [];
    if (catalogoActualActivo === "servicios") listadoBase = [...window.CATALOGO_SERVICIOS];
    if (catalogoActualActivo === "canales") listadoBase = [...window.CATALOGO_CANALES];
    if (catalogoActualActivo === "anuncios") listadoBase = [...window.CATALOGO_ANUNCIOS];

    listadoBase = aplicarFiltrosYOrdenacion(listadoBase);

    const bloquePaginado = listadoBase.slice(0, tarjetasDesplegadasActualmente);
    let html = "";
    
    bloquePaginado.forEach(item => {
        html += generarTarjetaInyectableHTML(item, false);
    });

    const trigger = document.getElementById('trigger-lazy-load');
    if (trigger) trigger.remove();

    if (cargarMas) grid.insertAdjacentHTML('beforeend', html);
    else grid.innerHTML = html;

    if (listadoBase.length > tarjetasDesplegadasActualmente) {
        grid.insertAdjacentHTML('beforeend', `
            <div id="trigger-lazy-load" style="text-align:center; padding:10px 0; width:100%;">
                <button onclick="tarjetasDesplegadasActualmente+=10; renderizerEcosistemaActual(true);" style="background:#1c2541; border:1px solid #334155; color:#38bdf8; padding:8px; border-radius:8px; font-size:0.75rem; font-weight:bold; cursor:pointer; width:100%;">Cargar más ⬇️</button>
            </div>
        `);
    }
}

// =========================================================================
// 🧱 FABRICADOR UNIFICADO DE TARJETAS (PUNTOS 3, 4, 5 Y 6)
// =========================================================================
function generarTarjetaInyectableHTML(item, esVistaDeseos = false) {
    const deseosLocales = JSON.parse(localStorage.getItem('lista_deseos_golden')) || [];
    const estaEnDeseos = deseosLocales.some(d => d.id === item.id);
    const precioFinal = item.precio - (item.descuento || 0);

    // Botón de deseos visible externamente
    const botonDeseosHTML = estaEnDeseos 
        ? `<button class="btn-wishlist active" onclick="controladorDeseosDirecto('${item.id}', '${item.titulo}', this)">❤️ Guardado</button>`
        : `<button class="btn-wishlist" onclick="controladorDeseosDirecto('${item.id}', '${item.titulo}', this)">❤️ Guardar</button>`;

    return `
        <div class="servicio-card" id="card-context-${item.id}">
            <div class="card-image-placeholder">
                <img src="${item.imagen || 'https://picsum.photos/400/200'}" alt="Preview">
            </div>
            
            <h3 class="card-title-clickable" onclick="toggleAcordeon('${item.id}')">👉 ${item.titulo}</h3>
            
            <div class="rating-clickable" onclick="window.open('https://t.me/ListaGoldenCanalResenas', '_blank')">
                ⭐ ${item.rating || '4.8'} <span style="color:#64748b; font-size:0.65rem;">(Ver reseñas en Telegram)</span>
            </div>

            <p style="font-size:0.75rem; color:#cbd5e1; margin:6px 0;">${item.descripcion_corta || item.descripcion_breve || ''}</p>
            
            <div style="margin:4px 0; font-size:0.8rem; font-weight:bold;">
                <span style="color:#22d3ee;">${precioFinal}€</span>
                <span style="color:#f43f5e; font-size:0.65rem; margin-left:6px;">${item.oferta || ''}</span>
            </div>

            <div id="expand-${item.id}" style="display:none; margin-top:8px; font-size:0.72rem; color:#94a3b8; background:rgba(0,0,0,0.2); padding:8px; border-radius:6px;">
                <p style="color:#cbd5e1; margin-bottom:4px;"><strong>Información Técnica:</strong> ${item.descripcion_larga || 'Especificación táctica Lista Golden para despliegues controlados en canales.'}</p>
                <p>Plazo base: ${item.tiempoEntregaBase || 'Inmediato'} | Revisiones incluidas: ${item.revisiones || 1}</p>
            </div>

            <div class="card-actions-row">
                ${botonDeseosHTML}
                <button class="btn-contratar" onclick="abrirModalCheckoutEspecifico('${item.id}', '${item.tipo}')">Comprar 🛍️</button>
            </div>
        </div>
    `;
}

// Control directo e instantáneo de la lista de deseos
function controladorDeseosDirecto(id, titulo, boton) {
    let deseos = JSON.parse(localStorage.getItem('lista_deseos_golden')) || [];
    if (deseos.some(d => d.id === id)) {
        deseos = deseos.filter(d => d.id !== id);
        boton.classList.remove('active');
        boton.innerText = "❤️ Guardar";
    } else {
        deseos.push({ id: id, titulo: titulo });
        boton.classList.add('active');
        boton.innerText = "❤️ Guardado";
    }
    localStorage.setItem('lista_deseos_golden', JSON.stringify(deseos));
    if (document.getElementById('lista-deseos-view').style.display === "block") {
        cargarPaginaDeseosOriginales(); // Refrescar vista completa si está en su pestaña
    }
}

// =========================================================================
// 💎 FORMULARIOS DE PEDIDO INDIVIDUALES E INTELIGENTES (PUNTOS 7 Y 8)
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
                <label>Opciones de Entrega Extra:</label>
                <select id="form-opcion" onchange="recalcularPrecioDinamicoModal(${precioBase}, 'servicio')">
                    <option value="estandar">Entrega Estándar (Precio Base)</option>
                    <option value="urgente_48">Prioridad Urgente 48h (+15€)</option>
                    <option value="express_24">Prioridad Crítica Express 24h (+30€)</option>
                </select>
            </div>
            <div class="modal-field">
                <label>Pasarela de Pago:</label>
                <select id="form-pago">
                    <option value="PayPal">PayPal / Tarjeta de Crédito</option>
                    <option value="USDT">Criptomonedas (USDT / TON)</option>
                </select>
            </div>
        `;
    } 
    else if (tipoItem === "producto") {
        formularioHTML = `
            <h2 class="modal-title">📦 Adquirir Producto: ${item.titulo}</h2>
            <hr class="modal-divider">
            <div class="modal-field">
                <label>Método de Pago Exclusivo:</label>
                <select id="form-pago">
                    <option value="PayPal">PayPal / Tarjeta</option>
                    <option value="USDT">USDT (Red TRC20)</option>
                    <option value="Estrellas">⭐ Estrellas de Telegram (Soporte Directo)</option>
                </select>
            </div>
            <input type="hidden" id="form-opcion" value="entrega_digital_inmediata">
        `;
    } 
    else if (tipoItem === "canal" || tipoItem === "anuncio") {
        formularioHTML = `
            <h2 class="modal-title">📢 Transferencia: ${item.titulo}</h2>
            <hr class="modal-divider">
            <p style="font-size:0.75rem; color:#94a3b8; margin-bottom:10px;">Se empaquetarán los datos del canal y se enviará la orden directa a administración.</p>
            <input type="hidden" id="form-opcion" value="transferencia_directa">
            <input type="hidden" id="form-pago" value="Garantia_Agente_Arbitro">
        `;
    }

    // Estructura común inferior del modal
    contenedorModal.innerHTML = `
        ${formularioHTML}
        <div class="modal-price-box">Total Neto a Transferir: <span id="modal-precio-voto">${precioBase}</span>€</div>
        <div class="modal-actions">
            <button class="btn-modal-cancelar" onclick="cerrarModalCheckout()">Cancelar</button>
            <button class="btn-modal-confirmar" onclick="compilarYEnviarDatosTelegram('${tipoItem}')">Confirmar Pedido 🚀</button>
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
// 📤 SISTEMA EXTRACTOR INTEGRADO PARA CAJÓN PRIVADO (PUNTOS 7 Y 8)
// =========================================================================
function compilarYEnviarDatosTelegram(tipoItem) {
    if (!itemSeleccionadoParaCompra) return;

    // Extracción forzada y mapeada de metadatos del usuario de Telegram
    const userTelegram = window.Telegram?.WebApp?.initDataUnsafe?.user;
    const tgID = userTelegram?.id || "1320417199";
    const tgName = userTelegram?.first_name || "Usuario Local Dev";
    const tgUser = userTelegram?.username ? `@${userTelegram.username}` : "Sin_Alias_Configurado";

    const opcionSeleccionada = document.getElementById('form-opcion')?.value || "N/A";
    const metodoPago = document.getElementById('form-pago')?.value || "N/A";
    const importeFinal = document.getElementById('modal-precio-voto')?.innerText || "0";

    // Payload unificado y estructurado listo para ser interpretado por tu Bot
    const payloadOrdenSaaS = {
        origen: "LISTA_GOLDEN_MINIAPP",
        tipo_operacion: tipoItem.toUpperCase(),
        usuario: {
            id: tgID,
            nombre: tgName,
            alias: tgUser
        },
        item: {
            id: itemSeleccionadoParaCompra.id,
            titulo: itemSeleccionadoParaCompra.titulo,
            precio_base: itemSeleccionadoParaCompra.precio + "€"
        },
        configuracion: {
            opcion: opcionSeleccionada,
            metodo_pago: metodoPago,
            monto_total_cobro: importeFinal + "€"
        }
    };

    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.sendData) {
        window.Telegram.WebApp.sendData(JSON.stringify(payloadOrdenSaaS));
        window.Telegram.WebApp.close();
    } else {
        console.log("PAYLOAD EXTRAÍDO ENVIADO EN ENTORNO LOCAL:", payloadOrdenSaaS);
        alert(`[Simulador PC]: Datos extraídos.\nUsuario: ${tgUser}\nID: ${tgID}\nItem: ${itemSeleccionadoParaCompra.titulo}\nTotal: ${importeFinal}€`);
        cerrarModalCheckout();
    }
}

// =========================================================================
// ❤️ PÁGINA INDIVIDUAL DE LISTA DE DESEOS CON DISEÑO ORIGINAL (PUNTO 9)
// =========================================================================
function cargarPaginaDeseosOriginales() {
    const contenedorGrid = document.getElementById('wishlist-original-grid');
    if (!contenedorGrid) return;
    
    contenedorGrid.innerHTML = "";
    let deseosLocales = JSON.parse(localStorage.getItem('lista_deseos_golden')) || [];

    if (deseosLocales.length === 0) {
        contenedorGrid.innerHTML = `<p style="color:#64748b; font-size:0.75rem; text-align:center; padding:30px; width:100%;">No tienes ningún servicio en tu lista de deseos.</p>`;
        return;
    }

    // Unificar catálogos en un pool global indexado para buscar los datos originales
    const poolGlobalProductos = [...window.CATALOGO_SERVICIOS, ...window.CATALOGO_CANALES, ...window.CATALOGO_ANUNCIOS];
    let htmlInyeccion = "";

    deseosLocales.forEach(deseo => {
        const itemOriginal = poolGlobalProductos.find(p => p.id === deseo.id);
        if (itemOriginal) {
            // Se invoca el mismo generador de tarjetas originales completo
            htmlInyeccion += generarTarjetaInyectableHTML(itemOriginal, true);
        }
    });

    contenedorGrid.innerHTML = htmlInyeccion;
}

// =========================================================================
// 👤 PERFIL DE USUARIO
// =========================================================================
function cargarDatosPanelPerfil() {
    const userTelegramID = window.Telegram?.WebApp?.initDataUnsafe?.user?.id || "1320417199";
    const baseCompras = window.DB_COMPRAS_USUARIOS[userTelegramID] || [];

    const panelSubs = document.getElementById('panel-suscripciones');
    const panelServs = document.getElementById('panel-servicios');
    const panelProds = document.getElementById('panel-productos');
    const panelAnuncios = document.getElementById('panel-anuncios');

    panelSubs.innerHTML = ""; panelServs.innerHTML = ""; panelProds.innerHTML = ""; panelAnuncios.innerHTML = "";
    let tieneSuscripcion = false;

    baseCompras.forEach(item => {
        let htmlCard = `
            <div class="panel-item-data">
                <p style="color:#fff; font-weight:700;">${item.titulo}</p>
                <p style="color:#94a3b8; font-size:0.65rem;">Vigencia: ${item.fechaInicio || item.fechaCompra} al ${item.fechaFin || 'Ilimitado'}</p>
                <p style="color:#38bdf8; font-size:0.65rem; font-weight:bold; margin-top:2px;">Estado: ${item.estado}</p>
            </div>
        `;
        if (item.tipo === "suscripcion") { panelSubs.innerHTML += htmlCard; tieneSuscripcion = true; }
        if (item.tipo === "servicio") panelServs.innerHTML += htmlCard;
        if (item.tipo === "producto") panelProds.innerHTML += htmlCard;
        if (item.tipo === "anuncio") panelAnuncios.innerHTML += htmlCard;
    });

    if (!tieneSuscripcion) {
        panelSubs.innerHTML = `
            <div style="text-align:center; padding:6px 0;">
                <p style="color:#64748b; font-size:0.7rem;">No tienes ninguna suscripción activa actualmente.</p>
                <button class="btn-ver-catalogo" onclick="navegarA('servicios')">Ver servicios en el catálogo 🔍</button>
            </div>
        `;
    }
}

// =========================================================================
// 🔔 AUTOMATIZACIONES SECUNDARIOS (FOMO & ACORDEÓN)
// =========================================================================
function toggleAcordeon(id) {
    const box = document.getElementById(`expand-${id}`);
    box.style.display = box.style.display === "none" ? "block" : "none";
}

function iniciarSimuladorContadoresTarjeta() {
    setInterval(() => {
        const target = window.CATALOGO_SERVICIOS[Math.floor(Math.random() * window.CATALOGO_SERVICIOS.length)];
        if (target) {
            target.deseosIniciales += Math.random() > 0.5 ? 1 : 0;
            const el = document.getElementById(`fomo-card-deseos-${target.id}`);
            if (el) el.innerHTML = `🔥 ${target.deseosIniciales} usuarios guardaron esto en su lista de deseos.`;
        }
    }, 9000);
}

function ejecutarFomoFlotanteSincronizado() {
    const banner = document.getElementById('fomo-notification');
    const fomoText = document.getElementById('fomo-text');
    if (!banner || !fomoText) return;
    const nombres = ["Hugo", "Valeria", "Leo", "Clara", "David", "Zoe"];
    const servicio = window.CATALOGO_SERVICIOS[Math.floor(Math.random() * window.CATALOGO_SERVICIOS.length)];
    fomoText.innerHTML = `<strong>${nombres[Math.floor(Math.random() * nombres.length)]}</strong> contrató: <span style="color:#38bdf8; font-weight:800;">${servicio.titulo}</span>`;
    banner.style.opacity = "1"; banner.style.transform = "translateY(0px)";
    setTimeout(() => { banner.style.opacity = "0"; banner.style.transform = "translateY(20px)"; }, 5000);
}

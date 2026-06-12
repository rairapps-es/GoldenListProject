// =========================================================================
// 🌐 CONFIGURACIÓN CORE Y REPOSITORIO DE DATOS MULTIMEDIA (PROYECTO PREMIUM)
// =========================================================================
window.LISTA_USUARIOS_PREMIUM = ["1320417199", "987654321"]; 

window.DB_COMPRAS_USUARIOS = {
    "1320417199": [
        { idItem: "SUB-GOLDEN", tipo: "suscripcion", titulo: "Suscripción Golden VIP Anual", fechaInicio: "01/01/2026", fechaFin: "01/01/2027", estado: "Activa 👑" },
        { idItem: "SERV-002", tipo: "servicio", titulo: "Estrategia Avanzada N°2", fechaInicio: "10/06/2026", fechaFin: "25/06/2026", estado: "En Desarrollo 🛠️" },
        { idItem: "PROD-102", tipo: "producto", titulo: "Script Auto-Backup Modular", fechaCompra: "12/05/2026", estado: "Entregado ✅" }
    ]
};

// Generador de Tarjetas con Identificadores de Imagen de Alta Calidad (Cyber/Tech)
// AGREGAR UN NUEVO SERVICIO PERSONALIZADO MANUALLY
window.CATALOGO_SERVICIOS.push({
    id: "SERV-001", // Asegúrate de que el ID sea único
    tipo: "suscripcion",
    categoria: "bot", // Puede ser: "bot", "grupo" o "canal"
    titulo: "🤖 Creación de Bot SaaS Automatizado Pro",
    rating: "5.0",
    imagen: "https://picsum.photos/id/1062/400/220", // URL de la imagen de portada
    descripcion_corta: "Despliegue de bots con base de datos en tiempo real.",
    descripcion_larga: "Desarrollo a medida con Node.js o Python, integración de pasarelas de pago (PayPal, USDT, Estrellas de Telegram) y panel de administración avanzado protegido.",
    precio: 150, // Precio original en euros
    descuento: 30, // Descuento en euros (El usuario pagará 120€)
    oferta: "🔥 ¡Oferta Flash!", // Etiqueta de marketing
    tiempoEntregaBase: "48 horas",
    revisiones: 3,
    deseosIniciales: 245
});

window.CATALOGO_SERVICIOS.push({
    id: "SERV-002", // Asegúrate de que el ID sea único
    tipo: "servicio",
    categoria: "grupo", // Puede ser: "bot", "grupo" o "canal"
    titulo: "🤖 Creación de Bot SaaS Automatizado Pro",
    rating: "5.0",
    imagen: "https://picsum.photos/id/1062/400/220", // URL de la imagen de portada
    descripcion_corta: "Despliegue de bots con base de datos en tiempo real.",
    descripcion_larga: "Desarrollo a medida con Node.js o Python, integración de pasarelas de pago (PayPal, USDT, Estrellas de Telegram) y panel de administración avanzado protegido.",
    precio: 150, // Precio original en euros
    descuento: 30, // Descuento en euros (El usuario pagará 120€)
    oferta: "🔥 ¡Oferta Flash!", // Etiqueta de marketing
    tiempoEntregaBase: "48 horas",
    revisiones: 3,
    deseosIniciales: 245
});

window.CATALOGO_SERVICIOS.push({
    id: "SERV-003", // Asegúrate de que el ID sea único
    tipo: "producto",
    categoria: "canal", // Puede ser: "bot", "grupo" o "canal"
    titulo: "🤖 Creación de Bot SaaS Automatizado Pro",
    rating: "5.0",
    imagen: "https://picsum.photos/id/1062/400/220", // URL de la imagen de portada
    descripcion_corta: "Despliegue de bots con base de datos en tiempo real.",
    descripcion_larga: "Desarrollo a medida con Node.js o Python, integración de pasarelas de pago (PayPal, USDT, Estrellas de Telegram) y panel de administración avanzado protegido.",
    precio: 150, // Precio original en euros
    descuento: 30, // Descuento en euros (El usuario pagará 120€)
    oferta: "🔥 ¡Oferta Flash!", // Etiqueta de marketing
    tiempoEntregaBase: "48 horas",
    revisiones: 3,
    deseosIniciales: 245
});


window.CATALOGO_CANALES = [
    { id: "CHAN-001", tipo: "canal", titulo: "Canal de Apuestas Deportivas (Venta)", imagen: "https://picsum.photos/id/1071/400/220", suscriptores: "14,200", categoria: "Deportes", precio: 290, descuento: 0, oferta: "Destacado VIP ⭐", descripcion_breve: "Rentabilidad y conversión demostrable mediante auditorías." },
{ id: "CHAN-002", tipo: "canal", titulo: "Canal de Apuestas Deportivas (Venta)", imagen: "https://picsum.photos/id/1071/400/220", suscriptores: "14,200", categoria: "Deportes", precio: 290, descuento: 0, oferta: "Destacado VIP ⭐", descripcion_breve: "Rentabilidad y conversión demostrable mediante auditorías." }

];

window.CATALOGO_ANUNCIOS = [
    { id: "ANUN-001", tipo: "anuncio", titulo: "Pack Anuncios Masivo Lista Golden", imagen: "https://picsum.photos/id/1081/400/220", precio: 60, descuento: 10, oferta: "🔥 Ofertas Flash", descripcion_larga: "Captura masiva de leads cualificados de forma hiper-segmentada dentro del ecosistema.", tiempoEntregaBase: "24 horas" },
{ id: "ANUN-002", tipo: "anuncio", titulo: "Pack Anuncios Masivo Lista Golden", imagen: "https://picsum.photos/id/1081/400/220", precio: 60, descuento: 10, oferta: "🔥 Ofertas Flash", descripcion_larga: "Captura masiva de leads cualificados de forma hiper-segmentada dentro del ecosistema.", tiempoEntregaBase: "24 horas" }

];

let catalogoActualActivo = "servicios"; 
let filtroActualActivo = "todos"; 
let tarjetasDesplegadasActualmente = 10; 
let itemSeleccionadoParaCompra = null;

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

// =========================================================================
// 📥 MOTOR DE RENDIMIENTO LAZY LOAD
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
    
    bloquePaginado.forEach(item => { html += generarTarjetaInyectableHTML(item); });

    const trigger = document.getElementById('trigger-lazy-load');
    if (trigger) trigger.remove();

    if (cargarMas) grid.insertAdjacentHTML('beforeend', html);
    else grid.innerHTML = html;

    if (listadoBase.length > tarjetasDesplegadasActualmente) {
        grid.insertAdjacentHTML('beforeend', `
            <div id="trigger-lazy-load" style="text-align:center; padding:10px 0; width:100%;" class="view-fade-in">
                <button onclick="tarjetasDesplegadasActualmente+=10; renderizerEcosistemaActual(true);" style="background:rgba(255,255,255,0.03); border:1px solid rgba(0,240,255,0.2); color:#00f0ff; padding:10px; border-radius:12px; font-size:0.75rem; font-weight:bold; cursor:pointer; width:100%; box-shadow: 0 0 10px rgba(0,240,255,0.05);">Desplegar Más Conexiones ⬇️</button>
            </div>
        `);
    }
}

// =========================================================================
// 🧱 COMPONENTE ARQUITECTÓNICO DE TARJETA (EFECTOS COMPLETO)
// =========================================================================
function generarTarjetaInyectableHTML(item) {
    const deseosLocales = JSON.parse(localStorage.getItem('lista_deseos_golden')) || [];
    const estaEnDeseos = deseosLocales.some(d => d.id === item.id);
    const precioFinal = item.precio - (item.descuento || 0);

    const botonDeseosHTML = estaEnDeseos 
        ? `<button class="btn-wishlist active" onclick="controladorDeseosDirecto('${item.id}', '${item.titulo}', this)">❤️ Guardado</button>`
        : `<button class="btn-wishlist" onclick="controladorDeseosDirecto('${item.id}', '${item.titulo}', this)">❤️ Guardar</button>`;

    return `
        <div class="servicio-card view-fade-in" id="card-context-${item.id}">
            <div class="card-image-placeholder">
                <img src="${item.imagen}" alt="Media Network">
            </div>
            
            <h3 class="card-title-clickable" onclick="toggleAcordeon('${item.id}')">👉 ${item.titulo}</h3>
            
            <div style="margin-bottom: 8px;">
                <div class="rating-clickable" onclick="window.open('https://t.me/ListaGolden', '_blank')">
                    ⭐ ${item.rating || '4.9'} <span style="color:#94a3b8; font-size:0.65rem; text-decoration:underline;">(Reseñas)</span>
                </div>
            </div>

            <p style="font-size:0.75rem; color:#94a3b8; line-height:1.4; margin-bottom:6px;">${item.descripcion_corta || item.descripcion_breve || ''}</p>
            
            <div style="margin:6px 0; font-size:0.85rem; font-weight:800;">
                <span style="color:var(--neon-cyan); font-size:1rem; text-shadow: 0 0 8px rgba(0,240,255,0.2);">${precioFinal}€</span>
                <span style="color:var(--neon-pink); font-size:0.68rem; margin-left:8px; text-transform:uppercase; letter-spacing:0.5px;">${item.oferta || ''}</span>
            </div>

            <div id="expand-${item.id}" class="acordeon-contenido">
                <p style="color:#cbd5e1; margin-bottom:4px;"><strong>Módulo Técnico:</strong> ${item.descripcion_larga || 'Especificación de ingeniería Lista Golden optimizada para canales de alta conversión.'}</p>
                <p style="color:#64748b; font-size:0.68rem;">Entrega: ${item.tiempoEntregaBase || 'Inmediato'} | Revisiones: ${item.revisiones || 1}</p>
            </div>

            <div class="card-actions-row">
                ${botonDeseosHTML}
                <button class="btn-contratar" onclick="abrirModalCheckoutEspecifico('${item.id}', '${item.tipo}')">Comprar 🛍️</button>
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
// 📥 EXTACTOR AUTOMÁTICO DE CREDENCIALES NATIVAS (MENSAJE PRIVADO)
// =========================================================================
function compilarYEnviarDatosTelegram(tipoItem) {
    if (!itemSeleccionadoParaCompra) return;

    const userTelegram = window.Telegram?.WebApp?.initDataUnsafe?.user;
    const tgID = userTelegram?.id || "1320417199";
    const tgName = userTelegram?.first_name || "Usuario Local Dev";
    const tgUser = userTelegram?.username ? `@${userTelegram.username}` : "Sin_Alias_Configurado";

    const opcionSeleccionada = document.getElementById('form-opcion')?.value || "N/A";
    const metodoPago = document.getElementById('form-pago')?.value || "N/A";
    const importeFinal = document.getElementById('modal-precio-voto')?.innerText || "0";

    const payloadOrdenSaaS = {
        origen: "LISTA_GOLDEN_NEXO_UI",
        tipo_operacion: tipoItem.toUpperCase(),
        comprador: { id: tgID, nombre: tgName, alias: tgUser },
        item: { id: itemSeleccionadoParaCompra.id, titulo: itemSeleccionadoParaCompra.titulo, precio_base: itemSeleccionadoParaCompra.precio + "€" },
        transaccion: { parametro: opcionSeleccionada, pasarela: metodoPago, monto_neto: importeFinal + "€" }
    };

    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.sendData) {
        window.Telegram.WebApp.sendData(JSON.stringify(payloadOrdenSaaS));
        window.Telegram.WebApp.close();
    } else {
        console.log("PAYLOAD EXTRAÍDO EN LOCALHOST:", payloadOrdenSaaS);
        alert(`[Extracción de Datos Realizada]\nAlias: ${tgUser}\nID: ${tgID}\nMódulo: ${itemSeleccionadoParaCompra.titulo}\nCajón: ${importeFinal}€ a través de ${metodoPago}`);
        cerrarModalCheckout();
    }
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
            <div class="panel-item-data view-fade-in">
                <p style="color:#fff; font-weight:700;">${item.titulo}</p>
                <p style="color:#64748b; font-size:0.65rem; margin-top:2px;">Vigencia: ${item.fechaInicio || item.fechaCompra} al ${item.fechaFin || 'Ilimitado'}</p>
                <p style="color:var(--neon-cyan); font-size:0.65rem; font-weight:bold; margin-top:3px;">Estado: ${item.estado}</p>
            </div>
        `;
        if (item.tipo === "suscripcion") { panelSubs.innerHTML += htmlCard; tieneSuscripcion = true; }
        if (item.tipo === "servicio") panelServs.innerHTML += htmlCard;
        if (item.tipo === "producto") panelProds.innerHTML += htmlCard;
        if (item.tipo === "anuncio") panelAnuncios.innerHTML += htmlCard;
    });

    if (!tieneSuscripcion) {
        panelSubs.innerHTML = `
            <div style="text-align:center; padding:4px 0;">
                <p style="color:#64748b; font-size:0.72rem;">No registras ninguna credencial de suscripción activa en la red.</p>
                <button class="btn-ver-catalogo" onclick="navegarA('servicios')">Explorar Servicios 🔍</button>
            </div>
        `;
    }

    if (panelServs.innerHTML === "") panelServs.innerHTML = `<p style='color:#64748b; font-size:0.7rem;'>0 módulos en cola de desarrollo.</p>`;
    if (panelProds.innerHTML === "") panelProds.innerHTML = `<p style='color:#64748b; font-size:0.7rem;'>0 productos de asignación directa.</p>`;
    if (panelAnuncios.innerHTML === "") panelAnuncios.innerHTML = `<p style='color:#64748b; font-size:0.7rem;'>0 pautas publicitarias registradas.</p>`;
}

// =========================================================================
// 🤖 SIMULADORES AUTOMÁTICOS ASÍNCRONOS
// =========================================================================
function iniciarSimuladorContadoresTarjeta() {
    setInterval(() => {
        const target = window.CATALOGO_SERVICIOS[Math.floor(Math.random() * window.CATALOGO_SERVICIOS.length)];
        if (target) {
            target.deseosIniciales += Math.random() > 0.5 ? 1 : 0;
            const el = document.getElementById(`fomo-card-deseos-${target.id}`);
            if (el) el.innerHTML = `🔥 ${target.deseosIniciales} nodos guardaron esto en su base de datos.`;
        }
    }, 9000);
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

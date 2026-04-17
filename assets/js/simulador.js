// =========================
// LIMPIAR ERRORES
// =========================
function limpiarErrores() {
    document.getElementById("errorIngresos").textContent = "";
    document.getElementById("errorEgresos").textContent = "";
    document.getElementById("errorMonto").textContent = "";
    document.getElementById("errorPlazo").textContent = "";
    document.getElementById("errorTasa").textContent = "";
}

// =========================
// LIMPIAR RESULTADOS
// =========================
function limpiarResultados() {
    document.getElementById("spnDisponible").innerText = "";
    document.getElementById("spnCapacidadPago").innerText = "";
    document.getElementById("spnInteresPagar").innerText = "";
    document.getElementById("spnTotalPrestamo").innerText = "";
    document.getElementById("spnCuotaMensual").innerText = "";

    let estado = document.getElementById("spnEstadoCredito");
    estado.innerText = "ANALIZANDO...";
    estado.classList.remove("aprobado", "rechazado");
}

// =========================
// VALIDAR
// =========================
function validar() {
    limpiarErrores();
    let valido = true;

    let ingresos = document.getElementById("txtIngresos").value;
    let egresos = document.getElementById("txtEgresos").value;
    let monto = document.getElementById("txtMonto").value;
    let plazo = document.getElementById("txtPlazo").value;
    let tasa = document.getElementById("txtTasaInteres").value;

    if (ingresos === "" || ingresos <= 0) {
        document.getElementById("errorIngresos").textContent = "Ingrese un valor mayor a 0";
        valido = false;
    }

    if (egresos === "" || egresos < 0) {
        document.getElementById("errorEgresos").textContent = "No puede ser negativo";
        valido = false;
    }

    if (monto === "" || monto < 100 || monto > 100000) {
        document.getElementById("errorMonto").textContent = "Entre 100 y 100000";
        valido = false;
    }

    if (plazo === "" || plazo < 1 || plazo > 30) {
        document.getElementById("errorPlazo").textContent = "Entre 1 y 30 años";
        valido = false;
    }

    if (tasa === "" || tasa < 1 || tasa > 50) {
        document.getElementById("errorTasa").textContent = "Entre 1% y 50%";
        valido = false;
    }

    return valido;
}

// =========================
// MOSTRAR ESTADO
// =========================
function mostrarEstado(id, estadoTexto) {
    let elemento = document.getElementById(id);

    elemento.innerText = estadoTexto;
    elemento.classList.remove("aprobado", "rechazado");

    if (estadoTexto === "CRÉDITO APROBADO") {
        elemento.classList.add("aprobado");
    } else {
        elemento.classList.add("rechazado");
    }
}

// =========================
// MOSTRAR NÚMEROS
// =========================
function texto(id, valor) {
    document.getElementById(id).innerText = valor.toFixed(2);
}

// =========================
// CALCULAR
// =========================
function calcular() {

    limpiarResultados();

    if (!validar()) return;

    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);
    let monto = parseFloat(document.getElementById("txtMonto").value);
    let plazo = parseFloat(document.getElementById("txtPlazo").value);
    let tasa = parseFloat(document.getElementById("txtTasaInteres").value);

    let disponible = calcularDisponible(ingresos, egresos);
    let capacidad = calcularCapacidadDePago(disponible);
    let interes = calcularInteresSimple(monto, tasa, plazo);
    let total = calcularTotalPagar(monto, interes);
    let cuota = calcularCuotaMensual(total, plazo);

    let estado = aprobarCredito(capacidad, cuota);

    texto("spnDisponible", disponible);
    texto("spnCapacidadPago", capacidad);
    texto("spnInteresPagar", interes);
    texto("spnTotalPrestamo", total);
    texto("spnCuotaMensual", cuota);

    mostrarEstado("spnEstadoCredito", estado);
}

// =========================
// REINICIAR
// =========================
function reiniciar() {
    document.getElementById("txtIngresos").value = "";
    document.getElementById("txtEgresos").value = "";
    document.getElementById("txtMonto").value = "";
    document.getElementById("txtPlazo").value = "";
    document.getElementById("txtTasaInteres").value = "";

    limpiarResultados();
    limpiarErrores();
}
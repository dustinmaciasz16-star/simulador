//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular() {
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);

    let disponible = calcularDisponible(ingresos, egresos);

    texto("spnDisponible", disponible);

    let capasidadDePago = calcularCapacidadDePago(disponible);

    texto("spnCapacidadPago", capasidadDePago);

    let monto = parseInt(document.getElementById("txtMonto").value);
    let plazo = parseInt(document.getElementById("txtPlazo").value);
    let tasa = parseInt(document.getElementById("txtTasaInteres").value);

    let interes = calcularInteresSimple(monto, tasa, plazo);

    texto("spnInteresPagar", interes);

    let valorPagar = calcularTotalPagar(monto, interes);

    texto("spnTotalPrestamo", valorPagar);

    let cuotasMensuales = calcularCuotaMensual(valorPagar, plazo);

    texto("spnCuotaMensual", cuotasMensuales);

    let analizarCredito = aprobarCredito(capasidadDePago, cuotasMensuales);

    texto2("spnEstadoCredito", analizarCredito)

}
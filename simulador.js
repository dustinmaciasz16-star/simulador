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

    let interes = calcularInteresSimple(monto, plazo, tasa);

    texto("spnInteresPagar", interes);
}
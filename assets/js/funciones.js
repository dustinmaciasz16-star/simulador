// =========================
// LOGICA DE NEGOCIO
// =========================

function calcularDisponible(ingresos, egresos){
    let disponible = ingresos - egresos;
    return disponible < 0 ? 0 : disponible;
}

function calcularCapacidadDePago(disponible){
    return disponible * 0.4;
}

function calcularInteresSimple(monto, tasa, plazo){
    return monto * (tasa / 100) * plazo;
}

function calcularTotalPagar(monto, interes){
    const SOLCA = 100;
    return monto + interes + SOLCA;
}

function calcularCuotaMensual(total, plazo){
    return total / (plazo * 12);
}

function aprobarCredito(capacidad, cuota){
    if(capacidad >= cuota){
        return "CRÉDITO APROBADO";
    } else {
        return "CRÉDITO RECHAZADO";
    }
}
//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos, egresos){
    let disponible = ingresos - egresos;
    if(disponible < 0){
        disponible = 0;
    }
    return disponible;
}

function calcularCapacidadDePago(montoDisponible){
    let capasidadDePago = montoDisponible / 2;

    return capasidadDePago;
}

function calcularInteresSimple(monto, tasa, plazoAnios){
    let interes = monto * (tasa / 100) * plazoAnios;
    
    return interes
}

function calcularTotalPagar(monto, interes){
    const SOLCA = 100;
    let valorPagar = monto + interes + SOLCA;

    return valorPagar;
}

function calcularCuotaMensual(total, plazoAnios){
    let plazoMes = plazoAnios * 12;
    let cuotasMensuales = total / plazoMes;

    return cuotasMensuales;
}

function aprobarCredito(capasidadPago, cuotasMensuales){
    if(capasidadPago >= cuotasMensuales){
        return true;
    } else {
        return false;
    }
}

function texto (id,vari){
    let texto1 = document.getElementById(id);
    texto1.innerText=vari.toFixed(2);    
}

function texto2 (id,vari){
    let texto2 = document.getElementById(id);
    texto2.innerText=vari;    
}
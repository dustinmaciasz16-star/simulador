function limpiarErrores() {
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
}

function limpiarResultados() {
    document.querySelectorAll("strong").forEach(e => e.textContent = "");
    let estado = document.getElementById("spnEstadoCredito");
    estado.textContent = "ANALIZANDO...";
    estado.classList.remove("aprobado","rechazado");
}

function validar() {
    limpiarErrores();
    let v = true;

    function error(id,msg){
        document.getElementById(id).textContent = msg;
        v = false;
    }

    let campos = [
        ["txtIngresos","errorIngresos", x=>x>0],
        ["txtArriendo","errorArriendo", x=>x>=0],
        ["txtAlimentacion","errorAlimentacion", x=>x>=0],
        ["txtVarios","errorVarios", x=>x>=0],
        ["txtMonto","errorMonto", x=>x>=100 && x<=100000],
        ["txtPlazo","errorPlazo", x=>x>=1 && x<=30],
        ["txtTasaInteres","errorTasa", x=>x>=1 && x<=50]
    ];

    campos.forEach(([id,err,cond])=>{
        let val = parseFloat(document.getElementById(id).value);
        if(isNaN(val) || !cond(val)) error(err,"Valor inválido");
    });

    return v;
}

function texto(id,val){
    document.getElementById(id).textContent = val.toFixed(2);
}

function mostrarEstado(id,estado){
    let e = document.getElementById(id);
    e.textContent = estado;
    e.classList.remove("aprobado","rechazado");
    e.classList.add(estado==="CRÉDITO APROBADO"?"aprobado":"rechazado");
}

function calcular(){

    limpiarResultados();
    if(!validar()) return;

    let ingresos = +txtIngresos.value;
    let gastos = +txtArriendo.value + +txtAlimentacion.value + +txtVarios.value;
    let monto = +txtMonto.value;
    let plazo = +txtPlazo.value;
    let tasa = +txtTasaInteres.value;

    let disponible = calcularDisponible(ingresos,gastos);
    let capacidad = calcularCapacidadDePago(disponible);
    let interes = calcularInteresSimple(monto,tasa,plazo);
    let total = calcularTotalPagar(monto,interes);
    let cuota = calcularCuotaMensual(total,plazo);

    texto("spnGastos",gastos);
    texto("spnDisponible",disponible);
    texto("spnCapacidadPago",capacidad);
    texto("spnInteresPagar",interes);
    texto("spnTotalPrestamo",total);
    texto("spnCuotaMensual",cuota);

    mostrarEstado("spnEstadoCredito", aprobarCredito(capacidad,cuota));
}

function reiniciar(){
    document.querySelectorAll("input").forEach(i=>i.value="");
    limpiarResultados();
    limpiarErrores();
}
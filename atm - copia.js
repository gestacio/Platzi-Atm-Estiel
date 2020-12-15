class Billete {
    constructor(valor, cantidad) {
        this.valor = valor;
        this.cantidad = cantidad;
    }
}


//-----------------------------------------------------------------------------
var caja = [
    new Billete(100, 10),
    new Billete(50, 20),
    new Billete(20, 25),
    new Billete(10, 20),
    new Billete(5, 20),
    new Billete(1, 50),
];

var extraer = document.getElementById("extraer");
extraer.addEventListener("click", imprimir);

var impresion = document.getElementById("impresion")

var division;
var papeles;
var entregar = [];


//-----------------------------------------------------------------------------
function imprimir() {
    var pedido = document.getElementById("pedido");
    pedido = parseInt(pedido.value);

    for (var billete of caja) {

        if (pedido > 0) {
            division = Math.floor(pedido / billete.valor);

            if (division > billete.cantidad) {
                papeles = billete.cantidad;
                console.log(papeles);
            } else {
                papeles = division;
                console.log(papeles);
            }

            entregar.push(new Billete(billete.valor, papeles));
            var resultado = billete.valor * papeles;
            pedido = pedido - resultado;

            billete.cantidad = billete.cantidad - papeles;
            
        }
    }

        if (pedido > 0){
            impresion.innerHTML = "SOY UN CAJERO POBRE!!!";            
        } else {
            for (var entregado of entregar){
                if (entregado.cantidad > 0){
                    impresion.innerHTML = impresion.innerHTML + entregado.cantidad + " Billetes de $" + entregado.valor + "<br>";
                }
            }
            for (billete of caja){
                impresion2.innerHTML = impresion2.innerHTML + "Te quedan " + billete.cantidad + " billetes de " + billete.valor + "$<br>";
        }
    }

        console.log(caja);
}


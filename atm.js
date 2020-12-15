class Billete {
    constructor(valor, cantidad) {
        //this.imagen = new Image();
        this.valor = valor;
        this.cantidad = cantidad;

        //this.imagen.src = imagenes[this.valor];
    }

}


/*var imagenes = [];
imagenes["dolar100"] = "dolar_100.png";
imagenes["dolar50"] = "dolar_50.png";
imagenes["dolar20"] = "dolar_20.png";
imagenes["dolar10"] = "dolar_10.png";
imagenes["dolar5"] = "dolar_5.png";
imagenes["dolar2"] = "dolar_2.png";
imagenes["dolar1"] = "dolar_1.png";*/


//-----------------------------------------------------------------------------
var caja = [
    new Billete(100, 10),
    new Billete(50, 20),
    new Billete(20, 25),
    new Billete(10, 20),
    new Billete(5, 20),
    new Billete(2, 25),
    new Billete(1, 20),
];





//-----------------------------------------------------------------------------
var extraer = document.getElementById("extraer");
extraer.addEventListener("click", imprimir);

var impresion = document.getElementById("impresion")
 
var division;
var papeles;
var entregar = [];


//-----------------------------------------------------------------------------
function imprimir() {
    var total_caja = 0;
    for (var total of caja){
        total_caja = total_caja + total.valor * total.cantidad;
    }

    entregar = [];
    impresion.innerHTML = "";
    impresion3.innerHTML = "";

    var pedido = document.getElementById("pedido");
    pedido = parseInt(pedido.value);

    if (pedido < 0){
        impresion.innerHTML = "Tu eres marico, pana...";
    }

    if (pedido > total_caja) {
        impresion.innerHTML = "SOY UN CAJERO POBRE!!!";
    } else {

        for (var billete of caja) {

            if (pedido > 0) {
                division = Math.floor(pedido / billete.valor);

                if (division > billete.cantidad) {
                    papeles = billete.cantidad;
                } else {
                    papeles = division;
                }

                entregar.push(new Billete(billete.valor, papeles));
                var resultado = billete.valor * papeles;
                pedido = pedido - resultado;

                billete.cantidad = billete.cantidad - papeles;

            }
        }
    }

    if (pedido <=0) {
        for ( billete of entregar) {
            if (billete.cantidad > 0) {
                impresion.innerHTML = impresion.innerHTML + "Se ha entregado " + billete.cantidad + " billetes de $ <img src=dolar_" + billete.valor + ".png><br>";
            }
        }

        for (billete of caja) {
            impresion3.innerHTML = impresion3.innerHTML + "En el cajero quedan " + billete.cantidad + " billetes de " + billete.valor + "$<br>";
        }
    }

    console.log(caja);
}


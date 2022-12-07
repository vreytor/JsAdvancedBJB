const monopolio = document.getElementById("monopolio");
const ajedrez = document.getElementById("ajedrez");
const lego = document.getElementById("lego");
const damas = document.getElementById("damas");
const laberinto = document.getElementById("laberinto");

const valorCompra = document.getElementById("compra");
const valorDescuento = document.getElementById("descuento");
const valorPago = document.getElementById("pago");

const btnPago = document.getElementById("btnPago");

let precioMonopolio = 70.99;
let precioAjedrez = 78.99;
let precioLego = 100.99;
let precioDamas = 58.50;
let precioLaberinto = 35.00;


btnPago.onclick = function(){
    /* Los principales usos del objeto Number(valor) son convertir un string
    u otro valor a uno de tipo numérico; si el argumento no puede ser convertido
    a un número, devuelve NaN. */
    let cantMonopolio = Number(monopolio.value);
    let cantAjedrez = Number(ajedrez.value);
    let cantLego = Number(lego.value);
    let cantDamas = Number(damas.value);
    let cantLaberinto = Number(laberinto.value);

    let cantJuguetes = cantMonopolio + cantAjedrez + cantLego + cantDamas + cantLaberinto;

    let costo = (cantMonopolio * precioMonopolio) + (cantAjedrez * precioAjedrez) + (cantLego * precioLego) +
    (cantDamas * precioDamas) + (cantLaberinto * precioLaberinto);

    if (cantJuguetes < 10) {
        descuento = costo * 0.035;
        importe = costo - descuento;
    } else if (cantJuguetes >= 10 && cantJuguetes <= 20){
        descuento = costo * 0.07;
        importe = costo - descuento;
    } else {
        descuento = costo * 0.095;
        importe = costo - descuento;
    }
    
    
    valorCompra.value = "S/ "+ costo.toFixed(2);
    valorDescuento.value = "S/ "+ descuento.toFixed(2);
    valorPago.value = "S/ "+ importe.toFixed(2);
    
}

const btn_pago = document.getElementById('btn_pago');
const p_pago = document.getElementById('p_pago');

btn_pago.addEventListener('click', calcular);

function calcular() {
    const monopolio = parseInt(document.getElementById('monopolio').value);
    const ajedrez = parseInt(document.getElementById('ajedrez').value);
    const lego = parseInt(document.getElementById('lego').value);
    const damas = parseInt(document.getElementById('damas').value);
    const laberinto = parseInt(document.getElementById('laberinto').value);

    let p_monopolio = monopolio * 70.99;
    let p_ajedrez = ajedrez * 78.99;
    let p_lego = lego * 100.99;
    let p_damas = damas * 58.50;
    let p_laberinto = laberinto * 35;

    let cantidad = monopolio + ajedrez + lego + damas + laberinto;
    let pago_i = p_monopolio + p_ajedrez + p_lego + p_damas + p_laberinto;

    if (cantidad < 10) {
        let descuento = pago_i*3.5/100;
        let pago_f = pago_i - descuento;

        p_pago.innerText = pago_f.toFixed(2);
    } else if (cantidad <= 20) {
        let descuento = pago_i*7/100;
        let pago_f = pago_i - descuento;
        
        p_pago.innerText = pago_f.toFixed(2);
    } else {
        let descuento = pago_i*9.5/100;
        let pago_f = pago_i - descuento;

        p_pago.innerText = pago_f.toFixed(2);
    }
}
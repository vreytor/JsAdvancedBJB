/* AppSueldo */

const btn_pago = document.getElementById('btn_pago');
const p_0 = document.getElementById('p_0'); // Campo con el resultado de sueldo básico
const p_1 = document.getElementById('p_1'); // Campo con el resultado de bonificación
const p_2 = document.getElementById('p_2'); // Campo con el resultado de sueldo neto

btn_pago.addEventListener('click', categoria);


// Pasos: 1, 2, 3


// 1. Categoría a la que pertenece cada trabajador
function categoria() {
    const categoriaSeleccionada = document.getElementById('categorias').value;
    const horas = parseInt(document.getElementById('horas').value);
    
    let horas_t = 0; // Variable para el pago por horas trabajadas;

    // 2. Horas trabajadas

    // Dependiendo de la categoría seleccionada (a, b, c) se ejecutaran diferentes acciones
    switch (categoriaSeleccionada) {
        case 'a':
            horas_t = horas * 40;
            p_0.innerText = 'S/' + horas_t;
            pago(horas_t); // Una vez ejecutada la función categoria() y se tenga el valor de horas_t, se ejecutará la función pago(horas_t)
            break; // En caso el value no sea 'a' se pasa al siguiente caso.
        
        case 'b':
            horas_t = horas * 35;
            p_0.innerText = 'S/' + horas_t;
            pago(horas_t);
            break; // En caso el value no sea 'b' se pasa al siguiente caso.

        case 'c':
            horas_t = horas * 30;
            p_0.innerText = 'S/' + horas_t;
            pago(horas_t);
            break;
    }
}

// 3. Bonificación de acuerdo a los años de servicio

// La función pago() llama al parámetro horas_t de la anterior función
function pago(horas_t) {
    const años = parseInt(document.getElementById('años').value);

    let bonificacion = 0; // Variable de la bonificación
    let sueldo_neto = 0; // Variable del sueldo neto

    if (años > 0) { // Si los años ingresados son mayores a 0
        if (años <= 3) { // Si los años son menores o igual a 3
            bonificacion = horas_t * 0.15;
            sueldo_neto = bonificacion + horas_t;
            p_1.innerText = 'S/' + bonificacion;
            p_2.innerText = 'S/' + sueldo_neto;

        } else if (años <= 7) { // Si los años son mayores a 3, pero menores o igual a 7
            bonificacion = horas_t * 0.2;
            sueldo_neto = bonificacion + horas_t;
            p_1.innerText = 'S/' + bonificacion;
            p_2.innerText = 'S/' + sueldo_neto;

        } else if (años <=12 ) { // Si los años son mayores a 7, pero menores o igual a 12
            bonificacion = horas_t * 0.3;
            sueldo_neto = bonificacion + horas_t;
            p_1.innerText = 'S/' + bonificacion;
            p_2.innerText = 'S/' + sueldo_neto;

        } else { // Si los años son mayores o igual a 13
            bonificacion = horas_t * 0.35;
            sueldo_neto = bonificacion + horas_t;
            p_1.innerText = 'S/' + bonificacion;
            p_2.innerText = 'S/' + sueldo_neto;
        } 
    } else { // Si el año ingresado es 0 o no se ingresó ningún valor
        alert('Ingrese la cantidad de años trabajados');
    }
}
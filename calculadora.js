console.log("==== Calculadora ====");

const comparar = function() {
    
    
    const numero1 = parseInt(document.getElementById("nmr1").value || 0);
    const numero2 = parseInt(document.getElementById("nmr2").value || 0);

    const  operator = document.getElementById("escolha").value

    let resultado = false;

    if (operator === "maior" && numero1 > numero2) {
        resultado = true;
    } else if (operator === "menor" && numero1 < numero2) {
        resultado = true;
    } else if (operator === "maiorigual" && numero1 >= numero2) {
        resultado = true;
    } else if (operator === "menorigual" && numero1 <= numero2) {
        resultado = true;
    } else if (operator === "diferente" && numero1 !== numero2) {
        resultado = true;
    } else if (operator === "igual" && numero1 === numero2) {
        resultado = true;
    }

    document.getElementById("result").value = resultado;
}
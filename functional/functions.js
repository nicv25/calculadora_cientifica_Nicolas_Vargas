let p = {
    teclas: document.querySelectorAll("#calculator-body button"),
    action: null,
    digit: null,
    operations: document.querySelector("#display"),
    canti_signos: 0,
    canti_decimal: false,
    resultado: false
};

let m = {
    inicio: function () {
        for (let i = 0; i < p.teclas.length; i++) {
            p.teclas[i].addEventListener("click", m.oprimir_tecla);
        }
    },

    oprimir_tecla: function (event) {
        const btn = event.currentTarget;
        const clases = btn.getAttribute("class");
        const texto = btn.textContent; 

        p.action = clases;   
        p.digit = texto;     

        m.calculadora(p.action);
    },

    calculadora: function (action) {
        switch (action) {
            case "numero":
                p.operations.value += p.digit;
                break;
            case "signo":
                p.operations.value += p.digit;
                break;
            case "decimal":
                p.operations.value += p.digit;
                break;
            case "equal":
                let expr = p.operations.value;

                expr = expr.replace(/×/g, "*")
                    .replace(/÷/g, "/")
                    .replace(/−/g, "-");

                try {
                    const resultado = eval(expr); 

                    p.operations.value = resultado;
                    p.resultado = true;
                } catch (e) {
                    p.operations.value = "Error";
                }
                break;
            case "limpiar":
                p.operations.value = "";
                p.resultado = false;
                break;
            default:
                console.log("clase no reconocida:", action);
                break;
        }
    }
};

document.addEventListener("DOMContentLoaded", m.inicio);
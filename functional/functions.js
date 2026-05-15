let p = {
    teclas = document.querySelectorAll("#calculator-body button"),
    action = null,
    digit = null,
    operations = document.querySelector("#operations"),
    canti_signos = 0,
    canti_decimal = 0,
    resultado = false
}

let m = {
    inicio: function () {
        for (let i = 0; i < p.teclas.length; i++) {
            p.teclas[i].addEventListener("click", m.oprimir_tecla)
        }
    },

    oprimir_tecla: function (tecla) {
        p.action = tecla.target.getAttribute("class")
        p.calculadora(p.action)

    },

    calculadora: function (action) {
        {
            switch (action) {
                case "numero":
                        console.log("numero")
                    break;
                case "signo":
                    console.log("signo")
                    break;
                case "decimal":
                    console.log("decimal")
                    break;
                case "igual":
                    console.log("equal")
                    break;
                case "limpiar":
                    console.log("limpiar")
                    break;
                default:
                    break;

            }
        }
    }
}
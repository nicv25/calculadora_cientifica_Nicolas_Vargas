let p = {
    teclas: document.querySelectorAll("#calculator-body button"),
    display: document.querySelector("#display"),
    resultado: false,
    decimalActivo: false
};

let m = {
    inicio: function () {
        for (let i = 0; i < p.teclas.length; i++) {
            p.teclas[i].addEventListener("click", m.oprimirTecla);
        }

    },

    oprimirTecla: function (event) {
        const btn = event.currentTarget;
        const texto = btn.textContent.trim();

        if (btn.classList.contains("numero")) {
            m.agregarNumero(texto);
        } else if (btn.classList.contains("decimal")) {
            m.agregarDecimal();
        } else if (btn.classList.contains("signo") && !btn.classList.contains("avanzado")) {
            m.agregarOperador(texto);
        } else if (btn.classList.contains("equal")) {
            m.calcularResultado();
        } else if (btn.classList.contains("limpiar")) {
            m.limpiarDisplay();
        } else if (btn.classList.contains("avanzado")) {
            m.operacionAvanzada(texto);
        }
    },


};

document.addEventListener("DOMContentLoaded", m.inicio);
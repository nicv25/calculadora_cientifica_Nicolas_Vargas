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

        document.addEventListener("keydown", m.leerTeclado);
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

      leerTeclado: function (event) {
        const tecla = event.key;

        if (!isNaN(tecla)) {
            m.agregarNumero(tecla);
        } else if (tecla === ".") {
            m.agregarDecimal();
        } else if (tecla === "+" || tecla === "-") {
            m.agregarOperador(tecla === "-" ? "−" : tecla);
        } else if (tecla === "*") {
            m.agregarOperador("×");
        } else if (tecla === "/") {
            event.preventDefault();
            m.agregarOperador("÷");
        } else if (tecla === "Enter" || tecla === "=") {
            event.preventDefault();
            m.calcularResultado();
        } else if (tecla === "Backspace" || tecla === "Delete") {
            m.limpiarDisplay();
        }
    },

    agregarNumero: function (numero) {
        if (p.resultado) {
            p.display.value = "";
            p.resultado = false;
        }

        p.display.value += numero;
    },

    agregarDecimal: function () {
        let display = p.display.value;
        let partes = display.split(/[+\−×÷]/);
        let ultimoNumero = partes[partes.length - 1];

        if (!ultimoNumero.includes(".")) {
            if (display === "" || /[+\−×÷]$/.test(display)) {
                p.display.value += "0.";
            } else {
                p.display.value += ".";
            }
        }
    },

    agregarOperador: function (operador) {
        let display = p.display.value;

        if (display === "") return;

        if (/[+\−×÷]$/.test(display)) return;

        p.display.value += operador;
        p.resultado = false;
    },

    calcularResultado: function () {
        let display = p.display.value;

        if (display === "") return;

        let expr = display
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/−/g, "-");

        try {
            let resultado = eval(expr);
            p.display.value = resultado;
            p.resultado = true;
        } catch (error) {
            p.display.value = "Error";
            p.resultado = true;
        }
    },

    limpiarDisplay: function () {
        p.display.value = "";
        p.resultado = false;
    },

};


document.addEventListener("DOMContentLoaded", m.inicio);
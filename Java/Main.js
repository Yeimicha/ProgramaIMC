
let imc = parseFloat(prompt("Ingrese el IMC del paciente (18.5-40.0):"));
let edad = parseInt(prompt("Ingrese la edad del paciente:"));

let clasificacion = "";
let alerta = false;


if (imc < 18.5) {
  clasificacion = "Bajo peso";
} else if (imc >= 18.5 && imc <= 24.9) {
  clasificacion = "Normal";
} else if (imc >= 25.0 && imc <= 29.9) {
  clasificacion = "Sobrepeso";
} else if (imc >= 30.0 && imc <= 34.9) {
  clasificacion = "Obesidad grado I";
} else if (imc >= 35.0 && imc <= 39.9) {
  clasificacion = "Obesidad grado II";
  if (edad > 60) {
    alerta = true;
  }
} else if (imc >= 40.0) {
  clasificacion = "Obesidad grado III";
  if (edad > 60) {
    alerta = true;
  }
}

let mensaje = `Clasificación del paciente: ${clasificacion}`;
if (alerta) {
  mensaje += "\n¡Alerta! Riesgo cardiovascular por edad y obesidad.";
}

alert(mensaje);

const msgResultado = document.querySelector("#valor");
const inputGasolina = document.getElementById("gasolina");
const inputEtanol = document.getElementById("etanol");

function calcular() {
  const gasolina = parseFloat(inputGasolina.value);
  const etanol = parseFloat(inputEtanol.value);
  const media = etanol / gasolina;

  if (media <= 0.7) {
    msgResultado.innerHTML = "Etanol é mais vantajoso";
  } else {
    msgResultado.innerHTML = "Gasolina é mais vantajoso";
  }
}

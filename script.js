let inputGasolina;
let inputEtanol;
let msgResultado = document.getElementById("valor");

function calcular() {
  inputGasolina = parseFloat(document.getElementById("gasolina").value.replace(",", "."));
  inputEtanol = parseFloat(document.getElementById("etanol").value.replace(",", "."));

  if (isNaN(inputGasolina) && isNaN(inputEtanol)) {
    swal({
      title: "Digite valores válidos para os preços dos combustíveis",
      text: "Tente novamente",
      icon: "error",
    });
    limpar();
  } else if (isNaN(inputGasolina)) {
    swal({
      title: "Digite um valor válido para o preço da Gasolina",
      text: "Tente novamente",
      icon: "error",
    });
    document.getElementById("gasolina").value = "";
  } else if (isNaN(inputEtanol)) {
    swal({
      title: "Digite um valor válido para o preço do Etanol",
      text: "Tente novamente",
      icon: "error",
    });
  }

  else {

    const mediaPreco = inputEtanol / inputGasolina;

    if (mediaPreco <= 0.7) {
      msgResultado.value = "Etanol é mais vantajoso!";
    } else {
      msgResultado.value = "Gasolina é mais vantajoso!";
    }
  }
}
function limpar() {
  document.getElementById("valor").value = "";
  document.getElementById("gasolina").value = "";
  document.getElementById("etanol").value = "";
}

const clearAll = document.getElementById("limpar");
clearAll.addEventListener("click", () => {
  limpar();
});

const calc = document.getElementById("calcular");
calc.addEventListener("click", () => {
  calcular();
});

const alertt = document.getElementById("alert");
alertt.addEventListener("click", () => {

  swal("Como esse calculo é feito?", "Para saber se compensa trocar a Gasolina pelo Etanol, é necessário fazer um cálculo que leva em consideração o rendimento de cada combustível.  O consumidor deve dividir o valor do litro de Etanol pelo valor do litro da Gasolina. Se der até 0,70, o álcool compensa mais.");
});
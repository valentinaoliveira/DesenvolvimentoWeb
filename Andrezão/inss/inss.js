const salarioBrutoInput = document.getElementById('salarioBruto');
const dependentesInput = document.getElementById('dependentes');
const calcularButton = document.getElementById('calcular');
const inssSpan = document.getElementById('inss');
const irSpan = document.getElementById('ir');
const salarioLiquidoSpan = document.getElementById('salarioLiquido');

calcularButton.addEventListener('click', () => {
  const salarioBruto = parseFloat(salarioBrutoInput.value);
  const dependentes = parseInt(dependentesInput.value);

  let inss = 0;
  let ir = 0;
  let salarioLiquido = 0;

  if (salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08;
  } else if (salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.09;
  } else if (salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11;
  } else {
    inss = 570.88;
  }

  if (salarioBruto <= 1903.98) {
    ir = 0;
  } else if (salarioBruto <= 2826.65) {
    ir = (salarioBruto * 0.075) - 142.80;
  } else if (salarioBruto <= 3751.05) {
    ir = (salarioBruto * 0.15) - 354.80;
  } else if (salarioBruto <= 4664.68) {
    ir = (salarioBruto * 0.225) - 636.13;
  } else {
    ir = (salarioBruto * 0.275) - 869.36;
  }

  salarioLiquido = salarioBruto - inss - ir;

  inssSpan.textContent = `${inss.toFixed(2)}%`;
  irSpan.textContent = `${ir.toFixed(2)}%`;
  salarioLiquidoSpan.textContent = R$ `${salarioLiquido.toFixed(2)}`;
});
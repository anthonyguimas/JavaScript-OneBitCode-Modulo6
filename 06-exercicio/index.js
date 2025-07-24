async function calcularIMC(peso, altura) {
  if (typeof peso !== "number" || typeof altura !== "number") {
    throw new Error("Peso e altura precisam ser números");
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      const imc = peso / (altura * altura);
      resolve(Number(imc.toFixed(2)));
    }, 100);
  });
}

function obterClassificacaoIMC(imc) {
  if (imc < 18.5) {
    return "magreza";
  }
  if (imc <= 24.9) {
    return "normal";
  }
  if (imc <= 29.9) {
    return "sobrepeso";
  }
  if (imc <= 39.9) {
    return "obesidade";
  }
  return "obesidade grave";
}

async function exibirResultadoIMC(peso, altura) {
  try {
    const imc = await calcularIMC(peso, altura);

    const classificacao = obterClassificacaoIMC(imc);

    console.log("\n=== RESULTADO DO IMC ===");
    console.log(`Peso: ${peso} kg`);
    console.log(`Altura: ${altura} m`);
    console.log(`IMC: ${imc}`);
    console.log(`Situação: ${classificacao}`);
    console.log("========================\n");
  } catch (erro) {
    console.error(`\nERRO: ${erro.message}`);
  }

  console.log("Cálculo finalizado!");
}

console.log("Testando a calculadora de IMC..\n");

exibirResultadoIMC(63, 1.74);
exibirResultadoIMC(50, 1.68);
exibirResultadoIMC(85, 1.7);
exibirResultadoIMC(95, 1.65);
exibirResultadoIMC(120, 1.6);

exibirResultadoIMC("70", 1.75);
exibirResultadoIMC(70, -1.75);

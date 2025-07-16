// Simula uma função assíncrona que busca dados após 2 segundos
function buscarDados() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucesso = true; // Altere para false para testar o catch
      if (sucesso) {
        resolve(" Dados recebidos com sucesso!");
      } else {
        reject(" Falha ao buscar os dados.");
      }
    }, 2000);
  });
}

//  Versão 1: usando .then() e .catch()
console.log(" Buscando dados (com .then)...");

buscarDados()
  .then((dados) => {
    console.log(dados);
  })
  .catch((erro) => {
    console.error(erro);
  });

//  Versão 2: usando async/await + try/catch
async function chamarDados() {
  console.log(" Buscando dados (com async/await)...");
  try {
    const resultado = await buscarDados();
    console.log(resultado);
  } catch (erro) {
    console.error(erro);
  }
}

chamarDados();

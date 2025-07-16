// Mostrar nome salvo ao carregar
const nomeSalvo = localStorage.getItem("usuario");
if (nomeSalvo) {
  document.getElementById("nomeSalvo").innerText = `Olá, ${nomeSalvo}!`;
}

// Salvar nome no localStorage
function salvarNome() {
  const nome = document.getElementById("inputNome").value;
  localStorage.setItem("usuario", nome);
  document.getElementById("nomeSalvo").innerText = `Olá, ${nome}!`;
}

// Relógio atualizado a cada segundo
setInterval(() => {
  const agora = new Date();
  const hora = agora.toLocaleTimeString();
  document.getElementById("relogio").innerText = `🕒 ${hora}`;
}, 1000);

// Mensagem de boas-vindas após 2 segundos
setTimeout(() => {
  if (nomeSalvo) {
    document.getElementById(
      "boasVindas"
    ).innerText = `Seja bem-vindo(a) de volta, ${nomeSalvo}!`;
  } else {
    document.getElementById(
      "boasVindas"
    ).innerText = `Seja bem-vindo(a)! Salve seu nome para continuar.`;
  }
}, 2000);

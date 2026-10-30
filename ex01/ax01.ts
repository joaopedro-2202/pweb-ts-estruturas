// 1) Funções com a lógica
function calcularMedia(n1: number, n2: number): number {
  return (n1 + n2) / 2;
}

function dadosValidos(n1: number, n2: number, frequencia: number): boolean {
  return n1 >= 0 && n1 <= 10 && n2 >= 0 && n2 <= 10 &&
         frequencia >= 0 && frequencia <= 100;
}

function situacao(media: number, frequencia: number): string {
  if (frequencia < 75) {
    return 'Reprovado por falta';
  } else if (media >= 7) {
    return 'Aprovado';
  } else if (media >= 4) {
    return `Exame final (precisa tirar ${(10 - media).toFixed(1)})`;
  } else {
    return 'Reprovado por nota';
  }
}

// 2) Elementos da página (os ids vêm do HTML)
const campoNome = document.getElementById('nome') as HTMLInputElement;
const campoN1 = document.getElementById('n1') as HTMLInputElement;
const campoN2 = document.getElementById('n2') as HTMLInputElement;
const campoFreq = document.getElementById('frequencia') as HTMLInputElement;
const botao = document.getElementById('calcular') as HTMLButtonElement;
const saida = document.getElementById('resultado') as HTMLElement;

// 3) Clique do botão
botao.addEventListener('click', () => {
  const nome = campoNome.value;
  const n1 = Number(campoN1.value);
  const n2 = Number(campoN2.value);
  const frequencia = Number(campoFreq.value);

  if (!dadosValidos(n1, n2, frequencia)) {
    saida.textContent = 'Dados inválidos';
    saida.className = 'erro';
    return; // retorno antecipado
  }

  const media = calcularMedia(n1, n2);
  const texto = situacao(media, frequencia);

  saida.textContent = `${nome}: média ${media.toFixed(1)}. ${texto}`;
  saida.className = texto === 'Aprovado' ? 'sucesso' : 'erro'; // ternário
});
// 1) Funções com a lógica
function calcularMedia(n1, n2) {
    return (n1 + n2) / 2;
}
function dadosValidos(n1, n2, frequencia) {
    return n1 >= 0 && n1 <= 10 && n2 >= 0 && n2 <= 10 &&
        frequencia >= 0 && frequencia <= 100;
}
function situacao(media, frequencia) {
    if (frequencia < 75) {
        return 'Reprovado por falta';
    }
    else if (media >= 7) {
        return 'Aprovado';
    }
    else if (media >= 4) {
        return `Exame final (precisa tirar ${(10 - media).toFixed(1)})`;
    }
    else {
        return 'Reprovado por nota';
    }
}
// 2) Elementos da página (os ids vêm do HTML)
const campoNome = document.getElementById('nome');
const campoN1 = document.getElementById('n1');
const campoN2 = document.getElementById('n2');
const campoFreq = document.getElementById('frequencia');
const botao = document.getElementById('calcular');
const saida = document.getElementById('resultado');
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
export {};
//# sourceMappingURL=ax01.js.map
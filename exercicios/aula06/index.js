// ========================================
// Aula 06 — Funções e Arrays
// ========================================
// Implemente cada função abaixo.
// Rode os testes com: npx vitest run exercicios/aula06
// Não mexa no arquivo index.test.js.

// Exercício 1 — criarSaudacao
export function criarSaudacao(nome) {
  return `Olá, ${nome}!`;
}

// Exercício 2 — filtrarAprovados
export function filtrarAprovados(alunos) {
  const aprovados = alunos.filter((aluno) => aluno.nota >= 60);
  return aprovados;
}

// Exercício 3 — extrairNomes
export function extrairNomes(alunos) {
  const nomes = alunos.map((aluno) => aluno.nome);
  return nomes;
}

// Exercício 4 — buscarAluno
export function buscarAluno(alunos, nome) {
  const nomebuscado = alunos.find(aluno => aluno.nome === nome);
  return nomebuscado;
}

// Exercício 5 — calcularMedia
export function calcularMedia(notas) {
  let soma = 0;

  if (notas.length===0){
    return 0;
  }

  for(const nota of notas){
    soma = nota + soma;
  }

  return soma / notas.length;
}

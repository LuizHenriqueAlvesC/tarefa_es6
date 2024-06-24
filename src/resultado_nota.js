const alunos = [
    {nome: 'Luiz', nota: 8},
    {nome: 'Ana Nishihata', nota: 10},
    {nome: 'Gian', nota: 4},
    {nome: 'Pablo', nota: 1},
    {nome: 'Roque', nota: 6}
];

function FiltraAlunosAprovados (alunos) {
    return alunos.filter(aluno => aluno.nota >= 6)
}

function FiltraAlunosReprovados (alunos) {
    return alunos.filter(aluno => aluno.nota < 6)
}

const alunosAprovados = FiltraAlunosAprovados(alunos);

const alunosReprovados = FiltraAlunosReprovados(alunos);

console.log(alunosAprovados);
console.log(alunosReprovados);

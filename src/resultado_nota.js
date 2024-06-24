const alunos = [
    {nome: 'Luiz', nota: 8},
    {nome: 'Ana Nishihata', nota: 10},
    {nome: 'Gian', nota: 4},
    {nome: 'Pablo', nota: 1},
    {nome: 'Roque', nota: 6}
];

function FiltraAlunosAprovados (alunos) {
    const AlunosAprovados = alunos.filter(aluno => aluno.nota >= 6)

    const mensagem1 = "Alunos aprovados";
    console.log(mensagem1);

    AlunosAprovados.forEach(alunos => {
        console.log(`Nome: ${alunos.nome}, Nota: ${alunos.nota}`)
    })
}

function FiltraAlunosReprovados (alunos) {
    const alunosReprovados = alunos.filter(alunos => alunos.nota < 6);

    const mensagem2 = "Alunos reprovados:";

    console.log(mensagem2);

    alunosReprovados.forEach(alunos => {
        console.log(`Nome: ${alunos.nome}, Nota: ${alunos.nota}`);
    });
}

FiltraAlunosAprovados(alunos);

FiltraAlunosReprovados(alunos);

// const alunosAprovados = FiltraAlunosAprovados(alunos);
// const alunosReprovados = FiltraAlunosReprovados(alunos);
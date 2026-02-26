//**Problema 4.** Faça um algoritmo que receba a matrícula e duas notas do aluno. 
// Calcular a média e mostrar a matrícula do aluno com as seguintes mensagens de acordo com os dados a seguir: 
// Fazer um vetor de objeto de aluno. O objeto aluno deve ter nome, nota1 e nota2. Ao final mostre a média geral dos alunos.

import prompts from 'prompts';


export async function executar() {
    
    (async () => {
               let continuar = true;
    const alunos = [];
        do {
            const response = await prompts([
    {
        type: 'number',
        name: 'matricula',
        message: 'Digite a matricula do aluno:',
        validate: value => Number.isInteger(value) && value > 0 ? true : 'Por favor, digite um número inteiro maior que 0'
    },
    {
        type: 'number',
        name: 'nota1',
        message: 'Digite a nota 1 do aluno:',
        validate: value => value >= 0 && value <= 10 ? true : 'Por favor, digite um número entre 0 e 10'
    },
    {
        type: 'number',
        name: 'nota2',
        message: 'Digite a nota 2 do aluno:',
        validate: value => value >= 0 && value <= 10 ? true : 'Por favor, digite um número entre 0 e 10'
    },
]);
    let media = (response.nota1 + response.nota2) / 2;
    let status = '';
    if (media > 7) {
        status = 'Aprovado';
    } else if (media == 7) {
        status = 'Recuperação';
    }else {
        status = 'Reprovado';
    }

    alunos.push({
        matricula: response.matricula,
        nota1: response.nota1,
        nota2: response.nota2,
        media: media,
        status: status
    });
    console.log(`\n------------------`);
    const cont = await prompts({
        type: 'confirm',
        name: 'continuar',
        message: 'Deseja adicionar outro aluno?',
        initial: true
    });

    continuar = cont.continuar;


}while (continuar);
    console.log(`\n------------------`);
    console.log(`Média geral dos alunos: ${alunos.reduce((acc, aluno) => acc + aluno.media, 0) / alunos.length}`);
    console.log(`\n------------------`);
    alunos.forEach(aluno => {
        console.log(`Matrícula: ${aluno.matricula} - Nota 1: ${aluno.nota1} - Nota 2: ${aluno.nota2} - Média: ${aluno.media.toFixed(2)} - Status: ${aluno.status}`);
    });
    
    })();
}

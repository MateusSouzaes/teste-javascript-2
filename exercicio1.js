import prompts from 'prompts';


export async function executar() {
    console.log('--- Exercício 1: Média ---');
    
const base = (i) => ({
    type: 'number',
    name: `nota${i}`,
    message: `Digite a nota ${i}:`,
    validate: value => (value >= 0 && value <= 10) ? true : 'A nota deve ser entre 0 e 10'
});


(async () => {
  
    const perguntas = [base(1), base(2), base(3), base(4)];


    const response = await prompts(perguntas);


    const soma = response.nota1 + response.nota2 + response.nota3 + response.nota4;
    const media = soma / 4;

    console.log(`\n------------------`);
    console.log(`A média do aluno é: ${media.toFixed(2)}`);
})();
    const response = await prompts(/* ... */);

}
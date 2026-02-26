//Problema 3. Crie uma variável para receber o salário de um funcionário e aumentá-lo em 20%. 
// Após o aumento, calcule o INSS desse funcionário que é de 8%.
// mostre o salário inicial, o salário com o aumento e o desconto do INSS o salário final.


import prompts from 'prompts';

export async function executar() {
    (async () => {
    const response = await prompts({
        type: 'number',
        name: 'salario',
        message: 'Digite o salário do funcionário:',
        validate: value => value > 0 ? true : 'Por favor, digite um número maior que 0'
    });

    const salario = response.salario;
    const salarioAumento = salario * 1.20;
    const inss = salarioAumento * 0.08;
    const salarioFinal = salarioAumento - inss;

    console.log(`\n------------------`);
    console.log(`Salário inicial: R$ ${salario.toFixed(2)}`);
    console.log(`Salário com aumento de 20%: R$ ${salarioAumento.toFixed(2)}`);
    console.log(`Desconto do INSS (8%): R$ ${inss.toFixed(2)}`);
    console.log(`Salário final: R$ ${salarioFinal.toFixed(2)}`);
})();
}
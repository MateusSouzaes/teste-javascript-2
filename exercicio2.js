import prompts from 'prompts';

export async function executar() {
    (async () => {
    const response = await prompts({
        type: 'number',
        name: 'valorN',
        message: 'Digite o valor N (limite do somatório):',
        validate: value => value > 0 ? true : 'Por favor, digite um número maior que 0'
    });

    const n = response.valorN;
    let soma = 0;

    for (let i = 1; i <= n; i++) {
        soma += i; 
    }

    console.log(`\n------------------`);
    console.log(`A soma de 1 até ${n} é: ${soma}`);
})();
}

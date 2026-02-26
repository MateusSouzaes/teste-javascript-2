import prompts from 'prompts';

import { executar as ex1 } from './exercicio1.js';
import { executar as ex2 } from './exercicio2.js';
import { executar as ex3 } from './exercicio3.js';
import { executar as ex4 } from './exercicio4.js';

(async () => {
    const response = await prompts({
        type: 'select',
        name: 'opcao',
        message: 'Escolha um exercício para executar:',
        choices: [
            { title: '1. Calcular Média', value: 1 },
            { title: '2. Somatório 1 a N', value: 2 },
            { title: '3. Salario', value: 3 },
            { title: '4. Notas', value: 4 },
            { title: 'Sair', value: 0 }
        ]
    });

    // Switch para rodar a função certa
    switch (response.opcao) {
        case 1:
            await ex1(); 
            break;
        case 2:
            await ex2(); 
            break;
        case 3:
            await ex3(); 
            break;
        case 4:
            await ex4(); 
            break;
        case 0:
            console.log('Saindo...');
            break;
        default:
            console.log('Opção inválida');
    }
})();
const PAGE_TEXT = {
    home: {
        description: 'Esta página foi desenvolvida pela equipe do Bug Buster Mentoria com o intuito educativo.',
        challenge: {
            header: 'Desafios Disponíveis:',
            login: 'Login',
            form: 'Formulários',
            table: 'Tabela dinâmica',
            others: 'E muito mais!'
        },
        footer: '© 2024 Bug Buster Mentoria.'
    },
    login: {
        instructions: {
            title: 'Instruções Login',
            firstRule: 'Quando utilizar username e senha corretos, deve retornar usuário logado.',
            secondRule: 'Login ou senha incorretos devem retornar uma mensagem de erro.',
            thirdRule: 'Três senhas incorretas bloqueiam a conta temporariamente.'
        },
        footer: '© 2024 Bug Buster Mentoria.'
    },
    form: {
        instructions: {
            firstRule: 'Preencha todos os campos obrigatórios: nome, email, senha, país e gênero.',
            secondRule: 'Escolha suas preferências de lazer marcando as opções correspondentes.',
            thirdRule: 'Após o envio do formulário, você receberá uma mensagem de confirmação indicando se o cadastro foi realizado com sucesso.'
        },
        footer: '© 2024 Bug Buster Mentoria.'
    },
    table: {
        instructions: {
            firstRule: 'Veja a tabela de personagens do Harry Potter abaixo.',
            secondRule: 'A ordem dos personagens muda a cada carregamento da página.',
            thirdRule: 'São exibidas imagem, nome, casa, data de nascimento e ator.'
        },
        footer: '© 2024 Bug Buster Mentoria.'
    }
}
module.exports = { PAGE_TEXT };
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
    }
}
module.exports = { PAGE_TEXT };
let token

describe('Teste Funcional - Login e Cadastro de Produtos', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.api_login('fulano@qa.com', 'teste').then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal('Login realizado com sucesso')

            token = response.body.authorization
        })
    })

    it('Deve cadastrar um produto com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/produtos',
            headers: {
                 authorization: token 
                },
            body:{
                "nome":"Produto a ser cadastrado 2",
                "preco":474,
                "descricao":"Breve descricao do produto",
                "quantidade": 5
            }
        }).then((response)=>{
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal('Cadastro realizado com sucesso')
        })
    })
})
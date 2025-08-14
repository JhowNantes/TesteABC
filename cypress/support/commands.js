Cypress.Commands.add('api_login', (user, password)=>{
    cy.request({
            method: 'POST',
            url: 'https://serverest.dev/login',
            body: { "email": user,
                    "password":password
             },
             failOnStatusCode: false
        }).then((response) => {
            return response
        })
})
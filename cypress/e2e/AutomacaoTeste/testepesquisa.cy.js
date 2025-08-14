describe('Teste de pesquisa de repositórios', () => {
  it('Deve buscar o repertório pelo nome', () => {

    cy.visit('https://localhost:44329/Home/GetRepositorie');
    cy.get('#Result_Name').type('developer');
    cy.get('button[type="submit"]').click();
    cy.contains('developer').should('be.visible');
  })
  it('Deve exibir mensagem de erro ao pesquisar sem digitar nada', () => {
    
    cy.visit('https://localhost:44329/Home/GetRepositorie');
    cy.get('#Result_Name').type('{enter}');
    cy.get('.toast-message').should('be.visible');
  });

  it('Favorita um repertório e valida de foi adicionado aos favoritos', () => {
    
    cy.visit('https://localhost:44329/Home/GetRepositorie');
    cy.get('#Result_Name').type('node').type('{enter}');
    cy.get('[data-name]').first().invoke('text').then((repoNome) => {
      cy.get('a[href="/Home/DetailsRepository/27193779?Login=nodejs"]').click();
      cy.wait(2000);
      cy.get('.btn-favorito').click();
      cy.get('.nav > :nth-child(3) > a').click();
      cy.contains(repoNome.trim()).should('be.visible');
    });
  });
})
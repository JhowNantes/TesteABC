describe('Teste de pesquisa de repositórios', () => {

  beforeEach(() => {
    cy.visit('https://localhost:44329/Home/GetRepositorie');
  });
  it('Deve buscar o repertório pelo nome', () => {

    cy.get('#Result_Name').type('developer');
    cy.get('button[type="submit"]').click();
    cy.contains('developer').should('be.visible');
  })
  it('Deve exibir mensagem de erro ao pesquisar sem digitar nada', () => {
    
    cy.get('#Result_Name').type('{enter}');
    cy.get('.toast-message').contains('O Campo Nome Repositório tem que ser Preenchido').should('be.visible')
  });

  it('Favorita um repertório e valida de foi adicionado aos favoritos', () => {

    cy.get('#Result_Name').type('node').type('{enter}');
    cy.get('[data-name]').first().invoke('text').then((repoNome) => {
      cy.get('a[href="/Home/DetailsRepository/27193779?Login=nodejs"]').click();
      cy.get('.btn-favorito').click();
      cy.get('.nav > :nth-child(3) > a').click();
      cy.contains(repoNome.trim()).should('be.visible');
    });
  });
})
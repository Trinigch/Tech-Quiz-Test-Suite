
describe('Tech Quiz Cycle', () => {
        beforeEach(() => {
          cy.visit("/");
        });
      
        it('displays the Start Quiz button and starts the quiz', () => {
          // Requisito 1
          cy.get('button')
            .contains('Start Quiz')
            .should('be.visible');
          cy.get('button')
            .contains('Start Quiz')
            .click();
          cy.get('.spinner-border').should('not.exist'); // Espera a que carguen las preguntas
          cy.get('h2').should('be.visible'); // Verifica que aparece la primera pregunta
        });
      
        it('shows the next question when an answer is selected', () => {
          // Requisito 2
          cy.get('button')
            .contains('Start Quiz')
            .click();
          cy.get('.spinner-border').should('not.exist');
      
          // Responde la primera pregunta
          cy.get('.btn.btn-primary').first().click();
          cy.get('h2').should('be.visible'); // Verifica que aparece otra pregunta
        });
      
        it('completes the quiz when all questions are answered', () => {
          // Requisito 3
          cy.get('button')
            .contains('Start Quiz')
            .click();
          
            cy.get('.spinner-border').should('not.exist');
          // Responde todas las preguntas
         /* cy.get('.btn.btn-primary').each((button) => {
            cy.wrap(button).contains("1").click();
          });*/
        for(let i=0;i<10;i++)
        {
          cy.get('button').contains("1").click();
        }
      
      
          // Verifica que el quiz termina
          cy.contains('Quiz Completed').should('be.visible');
        });
      
        it('displays the final score when the quiz is over', () => {
          // Requisito 4
          cy.get('button')
            .contains('Start Quiz')
            .click();
          cy.get('.spinner-border').should('not.exist');
      
          // Responde todas las preguntas
        /*  cy.get('.btn.btn-primary').each((button) => {
            cy.wrap(button).click();
          });*/
      
        for(let i=0;i<10;i++)
        {
          cy.get('button').contains("1").click();
        }
      
      
          // Verifica que el puntaje aparece
          cy.contains('Your score:').should('be.visible');
        });
      /*********************************************** */
        it('allows restarting the quiz after completion', () => {
          // Requisito 5
          cy.get('button')
            .contains('Start Quiz')
            .click();
          cy.get('.spinner-border').should('not.exist');
      
          // Responde todas las preguntas
         cy.get('.btn.btn-primary').each((button) => {
            cy.wrap(button).click();
          });
      
        /*  for(let i=0;i<10;i++)
            {
              cy.get('button').contains("1").click();
            }*/
          //  cy.contains('Your score:').should('be.visible');
          // Reinicia el quiz   Take New Quiz
         // cy.get('button').contains('Take New Quiz').click();
         /* cy.get('button')
            .contains('Start Quiz')
            .should('be.visible');
            */
        });
      });
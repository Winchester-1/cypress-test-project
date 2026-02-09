class ExpensesPage {

  // Page selectors
  selectors = {
    addExpenseButton: 'button.car_add-expense',
    addExpenseModal: '.modal-content',
    expenseCar: '#addExpenseCar',
    expenseDate: '#addExpenseDate',
    expenseMileage: '#addExpenseMileage',
    expenseLiters: '#addExpenseLiters',
    expenseTotalCost: '#addExpenseTotalCost',
    addButton: 'button.btn-primary[type="button"]'
  }

  // Actions
  clickAddExpenseButton() {
    cy.get(this.selectors.addExpenseButton).click();
  }

  isAddExpenseModalOpened() {
    cy.get(this.selectors.addExpenseModal).should('be.visible');
  }

  checkExpenseCarValue(value) {
    cy.get(this.selectors.expenseCar).find('option:selected').should('have.text', value);
  }

  checkExpenseDateValue(value) {
    cy.get(this.selectors.expenseDate).should('have.value', value);
  }

  typeExpenseMileage(value) {
    cy.get(this.selectors.expenseMileage).clear().type(value).should('have.value', value);
  }

  typeExpenseLiters(liters) {
    cy.get(this.selectors.expenseLiters).type(liters);
  }

  typeExpenseTotalCost(cost) {
    cy.get(this.selectors.expenseTotalCost).type(cost);
  }

  clickAddButton() {
    cy.get(this.selectors.addButton).click();
  }

  // Element getters
  getAddExpenseButton() {
    return cy.get(this.selectors.addExpenseButton);
  }

  getAddExpenseModal() {
    return cy.get(this.selectors.addExpenseModal);
  }

  getExpenseCar() {
    return cy.get(this.selectors.expenseCar);
  }

  getExpenseDate() {
    return cy.get(this.selectors.expenseDate);
  }

  getExpenseMileage() {
    return cy.get(this.selectors.expenseMileage);
  }

  getExpenseLiters() {
    return cy.get(this.selectors.expenseLiters);
  }

  getExpenseTotalCost() {
    return cy.get(this.selectors.expenseTotalCost);
  }

  getAddButton() {
    return cy.get(this.selectors.addButton);
  }
}

export default ExpensesPage;
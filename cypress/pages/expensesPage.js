class ExpensesPage {

  // Page selectors
  selectors = {
    expensePage: 'a.btn-sidebar[routerlink="expenses"]',
    carSelect: '#carSelectDropdown',
    expanseTable: 'table.expenses_table',
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

  clickExpensePage() {
    cy.get(this.selectors.expensePage).click();
  }

  checkExpenseTableRow(expenseData) {
    const expectedLiters = `${expenseData.liters}L`;
    const expectedTotalCost = `${Number(expenseData.totalCost).toFixed(2)} USD`;

    cy.get(this.selectors.expanseTable)
      .find('tbody tr')
      .first()
      .within(() => {
        cy.get('td').eq(0).should('have.text', expenseData.date);
        cy.get('td').eq(1).should('have.text', expenseData.mileage);
        cy.get('td').eq(2).should('have.text', expectedLiters);
        cy.get('td').eq(3).should('have.text', expectedTotalCost);
      });
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

  getCarSelector() {
    return cy.get(this.selectors.carSelect);
  }

}

export default ExpensesPage;

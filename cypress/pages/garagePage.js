class GaragePage {

  // Page selectors
  selectors = {
    addCarButton: 'button.btn-primary',
    addCarModal: '.modal-content',
    carBrand: '#addCarBrand',
    carModel: '#addCarModel',
    carMileage: '#addCarMileage',
    addButton: 'button.btn-primary[type="button"]',
    editButton: 'button.btn-edit',
    removeCarButton: 'button.btn-outline-danger[type="button"]',
    removeButton: 'button.btn-danger[type="button"]'
  }

  // Actions
  clickAddCarButton() {
    cy.get(this.selectors.addCarButton).contains('Add car').click();
  }

  isAddCarModalOpened() {
    cy.get(this.selectors.addCarModal).should('be.visible');
  }

  selectCarBrand(brand) {
    cy.get(this.selectors.carBrand).select(brand);
  }

  selectCarModel(model) {
    cy.get(this.selectors.carModel).select(model);
  }

  typeCarMileage(mileage) {
    cy.get(this.selectors.carMileage).type(mileage);
  }

  clickAddButton() {
    cy.get(this.selectors.addButton).should('not.be.disabled').click();
  }

  createCar(brand, model, mileage) {
    this.clickAddCarButton();
    this.isAddCarModalOpened();
    this.selectCarBrand(brand);
    this.selectCarModel(model);
    this.typeCarMileage(mileage);
    this.clickAddButton();
  }

  clickEditButton() {
    cy.get(this.selectors.editButton).click();
  }

  clickRemoveCarButton() {
    cy.get(this.selectors.removeCarButton).click();
  }

  clickRemoveButton() {
    cy.get(this.selectors.removeButton).click();
  }

  // Element getters
  getAddCarButton() {
    return cy.get(this.selectors.addCarButton);
  }

  getAddCarModal() {
    return cy.get(this.selectors.addCarModal);
  }

  getCarBrand() {
    return cy.get(this.selectors.carBrand);
  }

  getCarModel() {
    return cy.get(this.selectors.carModel);
  }

  getCarMileage() {
    return cy.get(this.selectors.carMileage);
  }

  getAddButton() {
    return cy.get(this.selectors.addButton);
  }
}

export default GaragePage;

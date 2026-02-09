import GaragePage from "../../pages/garagePage.js";
import ExpensesPage from "../../pages/expensesPage.js";

describe('Add Car With Expenses Test', () => {
  const garagePage = new GaragePage();
  const expensesPage = new ExpensesPage();
  const validCarData = {
    brand: 'Audi',
    model: 'TT',
    mileage: '500'
  };

  const today = new Date();
  const day = today.getDate();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  const formattedDate = `${day}.${month}.${year}`;

  const validExpensesData = {
    vehicle: `${validCarData.brand} ${validCarData.model}`,
    date: formattedDate,
    mileage: '600',
    liters: '20',
    cost: '1000'
  };

  beforeEach(() => {
    cy.loginEnv();
  });

  it('should fill all the add car fields and click add button', () => {
    garagePage.clickAddCarButton();
    garagePage.isAddCarModalOpened();

    garagePage.selectCarBrand(validCarData.brand);
    garagePage.getCarBrand().find('option:selected').should('have.text', validCarData.brand)

    garagePage.selectCarModel(validCarData.model);
    garagePage.getCarModel().find('option:selected').should('have.text', validCarData.model)

    garagePage.typeCarMileage(validCarData.mileage);
    garagePage.getCarMileage().blur()

    garagePage.clickAddButton();
  });

  it('should fill all the expenses fields and click add button', () => {
    expensesPage.clickAddExpenseButton();
    expensesPage.isAddExpenseModalOpened();

    expensesPage.checkExpenseCarValue(validExpensesData.vehicle);
    expensesPage.checkExpenseDateValue(validExpensesData.date);
    expensesPage.typeExpenseMileage(validExpensesData.mileage);
    expensesPage.typeExpenseLiters(validExpensesData.liters);
    expensesPage.typeExpenseTotalCost(validExpensesData.cost);

    expensesPage.clickAddButton();
  });

  it('should delete added car before new run', () => {
    garagePage.clickEditButton();
    garagePage.clickRemoveCarButton();
    garagePage.clickRemoveButton();
  });
});
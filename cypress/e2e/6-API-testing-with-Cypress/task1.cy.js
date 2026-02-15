import GaragePage from "../../pages/garagePage.js";
import ExpensesPage from "../../pages/expensesPage.js";

describe('Add Car With Expenses API Test', () => {
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
  const apiFormattedDate = `${year}-${month}-${String(day).padStart(2, '0')}`;

  const validExpensesData = {
    vehicle: `${validCarData.brand} ${validCarData.model}`,
    date: formattedDate,
    reportedAt: apiFormattedDate,
    mileage: '600',
    liters: '20',
    cost: '1000'
  };

  beforeEach(() => {
    cy.login();
  });

  it('should create new car, validate the creation request and save car ID', () => {
    cy.intercept('POST', '**/api/cars').as('createCar');

    garagePage.createCar(validCarData.brand, validCarData.model, validCarData.mileage);

    cy.wait('@createCar').then(({ response }) => {
      expect(response.statusCode).to.eq(201);

      const createdCarId = response.body.data.id;
      expect(createdCarId).to.exist;

      cy.writeFile('cypress/fixtures/cars.json', {
        id: createdCarId,
        brand: validCarData.brand,
        model: validCarData.model,
        mileage: validCarData.mileage
      });
    });

  });

  it('should get cars list and contain saved car data from fixture', () => {
    cy.fixture('cars').then((savedCar) => {
      cy.request('GET', '/api/cars').then(({ status, body }) => {
        expect(status).to.eq(200);
        expect(body.status).to.eq('ok');
        expect(body.data).to.be.an('array');

        const matchingCar = body.data.find((car) =>
          car.id === savedCar.id &&
          car.brand === savedCar.brand &&
          car.model === savedCar.model &&
          car.mileage === Number(savedCar.mileage)
        );

        expect(matchingCar).to.exist;
      });
    });
  });

  it('should create expense for saved car id and validate response', () => {
    cy.fixture('cars').then((savedCar) => {
      cy.createExpense({
        carId: savedCar.id,
        reportedAt: validExpensesData.reportedAt,
        mileage: Number(validExpensesData.mileage),
        liters: Number(validExpensesData.liters),
        totalCost: Number(validExpensesData.cost),
        forceMileage: false
      }).then(({ status, body }) => {
        expect(status).to.eq(200);
        expect(body.status).to.eq('ok');
        expect(body.data).to.include({
          carId: savedCar.id,
          mileage: Number(validExpensesData.mileage),
          liters: Number(validExpensesData.liters),
          totalCost: Number(validExpensesData.cost)
        });
        expect(body.data.reportedAt).to.include(validExpensesData.reportedAt);
      });
    });
  });

  it('should display created expense in expenses table for selected car', () => {
    cy.fixture('cars').then((savedCar) => {
      expensesPage.clickExpensePage();
      expensesPage.getCarSelector().should('have.text', `${savedCar.brand} ${savedCar.model}`);
      expensesPage.checkExpenseTableRow({
        date: validExpensesData.date,
        mileage: validExpensesData.mileage,
        liters: validExpensesData.liters,
        totalCost: validExpensesData.cost
      });
    });
  });
});

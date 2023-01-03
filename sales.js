const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];

const calculateSalesTax = function(salesData, taxRates) {
  let result = {};
  for (e of salesData) {
    let companyName = e.name;
    let taxRate = taxRates[e.province];
    let salesSum = e.sales.reduce(function(a, b) {
      return a + b;
    }, 0);
    if (!result[companyName]) {
      result[companyName] = {
        totalSales: salesSum,
        totalTaxes: salesSum * taxRate
      };
    } else {

      result[companyName].totalSales += salesSum;
      result[companyName].totalTaxes += salesSum * taxRate;

    }
  }

  return result;
};

const results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

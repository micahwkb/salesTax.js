var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var output = {};
  salesData.forEach(function(company) {
    var totalSales = company.sales.reduce(function(prev, curr) {
      return prev + curr;
    });
    var province = company.province;
    var totalTaxes = totalSales * taxRates[province];
    // build array key in "output" for this company
    if (!output.hasOwnProperty(company.name)) {
      output[company.name] = {
        totalSales: totalSales,
        totalTaxes: totalTaxes
        }
    } else {
      output[company.name].totalSales += totalSales;
      output[company.name].totalTaxes += totalTaxes;
    }
  });
    return output;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

/*
make function calculateSalesTax that calculates:
- total sales
- total sales tax
... for above data
*/


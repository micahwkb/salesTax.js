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

console.log(calculateSalesTax())

function calculateSalesTax(salesData, taxRates) {
  for (var index in companySalesData) {
    var perCompany = companySalesData[index];
   // console.log(perCompany);
   // console.log(perCompany.province)
    var taxRate = salesTaxRates[perCompany.province];
    // console.log(taxRate);

  }

}

//     for (var prov in perCompany) {
//       if (perCompany.hasOwnProperty('province')) {
//         console.log(perCompany.province);
//       } else return "No province provided for " + perCompany;
//     }

// var results = salesTaxReport(companySalesData, salesTaxRates);

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


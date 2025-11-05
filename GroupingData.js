
// Cout every servey and group them by their response

const serveyResponse = ["A", "C", "B", "D", "A", "A", "C", "B", "D", "C", "B", "A", "D", "C", "A", "B", "D", "B", "C", "A"];

const count = serveyResponse.reduce((table, response)=>{
    // if(table[response]){
    //     table[response] += 1;

    // }else{
    //     table[response] = 1;
    // }

    table[response] = (table[response] || 0) +1;
    return table;
},{})

console.log(count);



// Cout total sales and quantity grouped by category

const sales = [
  {
    "category": "Smartphones",
    "item": "Samsung Galaxy S24",
    "price": 899.99,
    "quantity": 25
  },
  {
    "category": "Laptops",
    "item": "Apple MacBook Air M3",
    "price": 1199.00,
    "quantity": 15
  },
  {
    "category": "Smartphones",
    "item": "Sony Bravia 55-inch 4K OLED",
    "price": 1299.99,
    "quantity": 10
  },
  {
    "category": "Headphones",
    "item": "Bose QuietComfort 45",
    "price": 329.00,
    "quantity": 40
  },
  {
    "category": "Smartwatches",
    "item": "Apple Watch Series 10",
    "price": 499.00,
    "quantity": 30
  },
  {
    "category": "Smartphones",
    "item": "PlayStation 5 Slim",
    "price": 499.99,
    "quantity": 20
  }
];

const totalSales = sales.reduce((table, sale)=>{
    const {category,price,quantity} = sale;

    if(!table[category]){
        table[category] = {
        toatalRevenue: 0,
        totalQuantity: 0,
    };
    }

    table[category].toatalRevenue += price* quantity;
    table[category].totalQuantity += quantity;

    return table;
},{})

console.log(totalSales)




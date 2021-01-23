var price_1 = 80;
var price_2 = 140;

var quantity_1 = 6;
var quantity_2 = 3;

var tax_1 = 5;
var discount = 8;

var item_cost = price_1 * quantity_1 + price_2 * quantity_2;
var cost_with_tax = item_cost + (item_cost * tax_1) / 100;
var discounted_cost = cost_with_tax - (cost_with_tax * discount) / 100;

var tip = 50;

var total_bill = discounted_cost + tip;

console.log("Total Bill - " + total_bill);

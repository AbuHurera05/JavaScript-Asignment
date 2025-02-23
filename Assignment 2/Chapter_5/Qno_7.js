var pot=650;
var qoi=3;
var pot2=100;
var qoi2=7;
var shipping=100;

document.write("<h1>Shopping Cart</h1>");

document.write("<br>Price of item 1 is "+pot);
document.write("<br>Quantity of item 1 is "+qoi);
document.write("<br>Price of item 2 is "+pot2);
document.write("<br>Quantity of item 2 is "+qoi);
document.write("<br>Shipping Charges "+shipping)

var sum=pot+qoi+pot2+qoi2+shipping;
document.write("<br><br>Total cost of your order is "+sum)
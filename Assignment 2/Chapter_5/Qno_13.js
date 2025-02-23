var snack="chocolate chip";
var age=15;
var maxage=65;
var amountperday=3;
var total=(maxage-age)*amountperday;

document.write("<h1>The Lifetime Supply Calculator</h1>")
document.write("<br><br>Favourite Snacks: "+snack)
document.write("<br>Current age: "+age)
document.write("<br>Estimated Maximu Age: "+maxage)
document.write("<br>Amount o snaks per day: "+amountperday)
document.write("<br>You will need "+total+" "+snack+" to last you until the ripe old age of "+maxage)
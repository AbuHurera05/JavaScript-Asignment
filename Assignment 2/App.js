Chapter: 01
_____________________Qno:1 and Qno: 2______________
alert("Error Please enter a valid Password");

_____________________Qno:3_________________________

alert("Welcome to JS Land \n Happy Codding!");

_____________________Qno:4_________________________

alert ("Welcom to JS Land");
alert("Happy Coding!\nPrevent this page from creating additional dialogs.");

__________________Qno: 5__________________________

alert("Hello... I can run JS throug my web browser's console");

___________________Qno: 6 & Qno: 7________________

alert("Hi I am using Alert....");


Chapter: 03

_____________________Qno:1_________________________
var age=20;
alert("I am "+age+" years old");

_____________________Qno:2_________________________
let visitCount = localStorage.getItem('visitCount');

if (visitCount === null) {
    visitCount = 0;
}

visitCount++;

localStorage.setItem('visitCount', visitCount);

alert(`You have visited this site ${visitCount} times.`);


_____________________Qno:3_________________________
var birthYear = 2002; 

        document.write("My birth year is "+birthYear);
        document.write("<br>Data type of my declared variable is number.");

_____________________Qno:4_________________________
var name=prompt("Enter your name: ");
var product=prompt("Enter procuct title: ");
var quantity=prompt("Enter number Quantity: ");

document.write(name+" ordered "+quantity+" "+product+"(s) on ");


Chapter: 4

1. Declare 3 variable in one statement
var v1=5,v2=6,v3=8;


// 2. Declar 5 legal variable
var _variable1;
var $variable2;
var my_name;
var FName;
var part1_2k24;

// Declare 5 illegal variable

// var 89;
// var my name;
// var a+b;
// var a-b;
// var !$variable2;
document.write("<h1>Rules for naming JS Variables</h1>");

document.write("Variable names can only contain numbers,$,and __. For example: $my_1srVarible <br>");
document.write("Variable must begin with a letter,$ or_ For example: $name,_name or name<br>");
document.write("Variable names are case sensitive<br>");
document.write("Variable names should no be JS keywords");

Chapter: 5

_____________________Qno:1and Qno:2_________________________
var num1=3;
var num2=5;
var sum=num1+num2;
var sub=num1-num2;
var mul=num1*num2;
var div=num1/num2;
var mod=num1%num2;
document.write("Sum of "+num1+" and "+num2+" is "+sum);

document.write("<br>Subtraction of "+num1+" and "+num2+" is "+sub);
document.write("<br>Multiplication of "+num1+" and "+num2+" is "+mul);
document.write("<br>Division of "+num1+" and "+num2+" is "+div);
document.write("<br>Modulus of "+num1+" and "+num2+" is "+mod);

_______________________Qno:3________________________
var num1;
document.write("Value after variable declaration is: "+num1)
num1=5;
document.write("<br>Initial value: "+num1);
num1++;
document.write("<br>Value after increment is: "+num1);
num1=num1+7;
document.write("<br>Value after addition is: "+num1);
num1--;
document.write("<br>Value after decrement is: "+num1);
num1=num1%3;
document.write("<br>The reminder is: "+num1)

_____________________Qno:4_________________________
var price=600;
var ticket=5;
var totalPrice=price*ticket;
document.write("Total cost to by "+ticket+" tickets to a movie is "+totalPrice+"PKR");

_____________________Qno:5_________________________
var table=prompt("Please enter table number:");
document.write("Table of "+table);
document.write("<br>"+table+"X"+1+" ="+table*1)
document.write("<br>"+table+"X"+2+" ="+table*2)
document.write("<br>"+table+"X"+3+" ="+table*3)
document.write("<br>"+table+"X"+4+" ="+table*4)
document.write("<br>"+table+"X"+5+" ="+table*5)
document.write("<br>"+table+"X"+6+" ="+table*6)
document.write("<br>"+table+"X"+7+" ="+table*7)
document.write("<br>"+table+"X"+8+" ="+table*8)
document.write("<br>"+table+"X"+9+" ="+table*9)
document.write("<br>"+table+"X"+10+" "+table*10)

_____________________Qno:6_________________________
var celsius=27;
var f=(celsius*9/5)+32;
document.write(celsius+"C"+" is "+f+"F<br>")

var faranheeit=98;
var c=(faranheeit-32)*5/9;
document.write(faranheeit+"F"+" is "+c+"C")

_____________________Qno:7_________________________
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

_____________________Qno:8_________________________
var totalMarks=980;
var marksObtained=804;
var percentage=(marksObtained/totalMarks)*100;
document.write("<h1>Marks Sheet</h2>");
document.write("<br><br>Total marks: "+totalMarks);
document.write("<br>Marks obtained: "+marksObtained);
document.write("<br>Percentage: "+percentage)

_____________________Qno:9_________________________
var usDollar=10;
var saudiRiyal=25;
var dollartoRupee=usDollar*104.80;
var riyalToRupee=saudiRiyal*28;
var total=dollartoRupee+riyalToRupee;

document.write("<h1>Currency in PKR</h1>");
document.write("<br><br>Total Currency in PKR: "+total)

_____________________Qno:10_________________________
var num=12;
var operation=(num+5*10)/2;
document.write("Answer is: "+operation);

_____________________Qno:11_________________________
var year=2024;
var bYear=2002;
var age=year-bYear;

document.write("<h1>Age Calculator</h1>");

document.write("<br>Current Year: "+year+"<br>Birth Year: "+bYear+"<br>Your age is: "+age);

_____________________Qno:12_________________________
var radius=20;
var circumference=2*3.142*radius;
var area=3.142*radius*radius;

document.write("<h1>The Geometrizer</h1>");

document.write("<br>Radius of a circle: "+radius);
document.write("<br>The circumference is: "+circumference);
document.write("<br>The area is: "+area);

_____________________Qno:13_________________________
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


Chapter: 6

Qno: 1
var a=10;

document.write("<br>The value ++a is:"+a);
document.write("<br>.......................................")

document.write("<br><br>The value ++a is:"+ ++a)
document.write("<br>Now the value of a is: "+a)

document.write("<br><br>The value a++ is:"+a++)
document.write("<br>Now the value of a is: "+a)

document.write("<br><br>The value --a is:"+ --a)
document.write("<br>Now the value of a is: "+a)

document.write("<br><br>The value a-- is:"+a--)
document.write("<br>Now the value of a is: "+a)

Qno: 2
var a=2,b=1;
var result= ++b;

--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b+ b--;
document.write("a is: "+a);
document.write("<br>b is: "+b);
document.write("<br>Result is: "+result);

// Qno: 3
var name=prompt("Enter you name: ");
document.write("My name is: "+name);

Qno: 5
var table= prompt("Enter number:");

if(table==5){
    

document.write("Table of "+table);
document.write("<br>"+table+"X"+1+" ="+table*1)
document.write("<br>"+table+"X"+2+" ="+table*2)
document.write("<br>"+table+"X"+3+" ="+table*3)
document.write("<br>"+table+"X"+4+" ="+table*4)
document.write("<br>"+table+"X"+5+" ="+table*5)
document.write("<br>"+table+"X"+6+" ="+table*6)
document.write("<br>"+table+"X"+7+" ="+table*7)
document.write("<br>"+table+"X"+8+" ="+table*8)
document.write("<br>"+table+"X"+9+" ="+table*9)
document.write("<br>"+table+"X"+10+" "+table*10)
}
else if(table>0){
    document.write("Table of "+table);
document.write("<br>"+table+"X"+1+" ="+table*1)
document.write("<br>"+table+"X"+2+" ="+table*2)
document.write("<br>"+table+"X"+3+" ="+table*3)
document.write("<br>"+table+"X"+4+" ="+table*4)
document.write("<br>"+table+"X"+5+" ="+table*5)
document.write("<br>"+table+"X"+6+" ="+table*6)
document.write("<br>"+table+"X"+7+" ="+table*7)
document.write("<br>"+table+"X"+8+" ="+table*8)
document.write("<br>"+table+"X"+9+" ="+table*9)
document.write("<br>"+table+"X"+10+" "+table*10)
}
else{
    
document.write("Table of "+table);
document.write("<br>"+5+"X"+1+" ="+5*1)
document.write("<br>"+5+"X"+2+" ="+5*2)
document.write("<br>"+5+"X"+3+" ="+5*3)
document.write("<br>"+5+"X"+4+" ="+5*4)
document.write("<br>"+5+"X"+5+" ="+5*5)
document.write("<br>"+5+"X"+6+" ="+5*6)
document.write("<br>"+5+"X"+7+" ="+5*7)
document.write("<br>"+5+"X"+8+" ="+5*8)
document.write("<br>"+5+"X"+9+" ="+5*9)
document.write("<br>"+5+"X"+10+" "+5*10)
}


Qno: 6

var sub1=prompt("Enter first subject name: ");
var sub2=prompt("Enter second subject name: ");
var sub3=prompt("Enter third subject name: ");
var totalMarks=100;
var sub1Marks=prompt("Enter first subject marks: ")
var sub2Marks=prompt("Enter second subject marks: ")
var sub3Marks=prompt("Enter third subject marks: ")


var percentage1=(sub1Marks/totalMarks)*100;
var percentage2=(sub2Marks/totalMarks)*100;
var percentage3=(sub3Marks/totalMarks)*100;

var totaMrks=totalMarks*3;
var totalObtianedMarks=sub1Marks+sub2Marks+sub3Marks;
var percentage=percentage1+percentage2+percentage3


document.write("<b>Subject Total Marks Obtained Marks Percentage</b>")
document.write("<br>"+sub1+"&nbsp&nbsp&nbsp"+totalMarks+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+sub1Marks+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+percentage1+"%")
document.write("<br>"+sub1+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+totalMarks+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+sub2Marks+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+percentage2+"%")
document.write("<br>"+sub1+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+totalMarks+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+sub3Marks+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+percentage3+"%")
document.write("&nbsp&nbsp&nbsp&nbsp&nbsp"+totaMrks+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+percentage+"%");




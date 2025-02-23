var a=2,b=1;
var result= ++b;

--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b+ b--;
document.write("a is: "+a);
document.write("<br>b is: "+b);
document.write("<br>Result is: "+result);
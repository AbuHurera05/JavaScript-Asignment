// Chapter 35-38

// Qno: 1
// function curretDate(){
//     const now =new Date();
//     document.write(now);
// }
// curretDate();

// Qno:2
// function names(firstName,LastName){
//     document.write("Hello "+firstName+" "+LastName);
// }
// names("Abu","Hurera");

// Qno: 3

// var num1=+prompt("Enter first number: ")
// var num2=+prompt("Enter second number: ")

// function sum(num1,num2){
//     document.write("The sum of "+num1+" and "+num2+" is "+(num1+num2));
// }

// sum(num1,num2);

// Qno: 4
// function calculator(num1,num2,operator){
//     switch(operator){
//         case '+':
//             return num1+num2;
//         break;
//         case '-':
//             return num1-num2;
//         break;
//         case '*':
//             return num1*num2;
//         break;
//         case '/':
//             return num1/num2;
//         break;
//         default:
//             return null;
//     }
// }

// document.write(calculator(33,5,'+'));

// Qno: 5
// function square(num){
//     document.write("The square of "+num+" is "+(num*num));
// }
// square(3);

// Qno: 6
// function factorial(number) {
//     var result = 1;
//     for (var i = 2; i <= number; i++) {
//         result *= i;
//     }
//     return result;
// }
// document.write(' '+factorial(5));

// Qno: 7
// var start=+prompt("Enter Start Number: ")
// var end=+prompt("Enter end Number: ");
// function counting(start,end){
//     for(i=start;i<=end;i++){
//         document.write(i+"<br>")
//     }
// }
// counting(start,end);


// Qno: 8

// function calcHypotenuse (base,perpendicular){

//     function calcSquare(value){
//         return value*value;
//     }
//     var hypotenuse=calcSquare(base)+calcSquare(perpendicular);
//     return Math.sqrt(hypotenuse)

// }
// document.write(calcHypotenuse(55,8));

// Qno: 9
// var width=30;
// var height=4;
// function area(width,height){
//     var a=width*height;
//     document.write('<br>Area of rectangular is: '+a);
// }
// area(width,height);
// area(33,4);

// Qno: 10
// function palindrome(str){
// str.toLowerCase()
// var nstr=""
//     for(i=str.length-1;i>=0;i--){
//     nstr+=str[i]; 
//     }
//     if(str===nstr){
//     document.write("It is palindrome.")
//     }
//     else{
//     document.write("It is not palindrome")
//     }
// }
// palindrome("madam");

// Qno: 11
// function upperCase(str){
//     var words =str.split(' ')
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
// }
// document.write(words.join(' '));
// }
// var inputwords="the quick brown fox"
// upperCase(inputwords)


// Qno: 12
// function longestWord(str){
//     var word=str.split(' ');
//     var longestWord='';
//     for(i=0;i<word.length;i++){
//         if(word[i].length>longestWord.length)
//             longestWord=word[i];
//     }
//     document.write(longestWord)
// }
// longestWord('Web Development Tutorial')

// Qno: 13
// function occurences(str,letter){
//     str.toLowerCase()
//     letter.toLowerCase()
//     var count=0;
//     for(i = 0; i<str.length;i++){
//         if(str[i]===letter){
//             count++;
//         }
//     }
//     document.write(count)
// }
// occurences('JSResourceS.com','o')

// Qno: 14
// function calcCircumference(radius){
//     var result=((2*3.14159)*radius);
//     document.write("The circumference is "+result)
// }
// calcCircumference(55)


// document.write("<br><br>")


// function calcArea(radius){
//     var result=(3.14159)*(radius*radius);
//     document.write("The Area of circle is "+result)
// }
// calcArea(53)

// _________________________________________PDF 2______________________________________________

// Qno:1 
// function power(a,b){
//     var sum=1;
   
//    for(i=1;i<=b;i++){
//    sum=sum*a;      
//    }
//    document.write('The a raised to b is '+sum)
// }
// power(2,10);

// // Qno: 02
// var year=+prompt("Enter the year to check the year is leap or not");
// function leapYear(year){
//     if(year%4===0){
//         document.write(year+' is leap year');
//     }
//     else{
//         document.write(year+' is not a leap year');
//     }
// }
// leapYear(year);

// Qno: 03
// function sum(a,b,c){
//     var sum=(a+b+c)/2
// }
// function area(a,b,c){
//     function sum(){
//         var sum1=(a+b+c)/2
//         return sum1;
//     } 
//     var area1=(sum()*((sum()-a)*(sum()-b)*(sum()-c)))
//     document.write("The area is: "+area1);
// }
// area(4,5,6)

// Qno: 04
// function average(a,b,c){
//     return (a+b+c)/3;
// }
// function percentage(a,b,c,total){
//     return (((a+b+c)/total)*100);
// }
// function mainfunction(){
//     var student1=+prompt("Enter first subject marks: ")
//     var student2=+prompt("Enter second subject marks: ")
//     var student3=+prompt("Enter third subject marks: ")
//     document.write('<br>average: '+ average(student1,student2,student3));
//     var total=student1+student2+student3;
//     document.write('<br>Percentage: ' + percentage(student3,student2,student3,total));
// }
// mainfunction();

// Qno: 5
// function indexof(word, char ){
//     for(var i=0;i<word.length;i++){
//         if (word[i]===char){
//             return i;
//         }
//     }
//     return -1;
// }
// var word='hellow';
// var character='w';
// document.write("The index of "+character+' is: '+indexof(word,character))

// Qno: 6
// var sentance=prompt("Write a sentence which have only 24 character;")
// function vowel(sentance){
//     var result="";
//     for(var i=0;i<sentance.length;i++){
//         var char =sentance[i];
//         if(char !=='a'&&char !=='e'&&char !=='i'&& char !=='o'&&char !=='u'){
//             result+=sentance[i]
//     }
// }
// return result;
// }

// document.write(vowel(sentance));


// Qno: 7
// var input = prompt("Enter text to check vowel pairs:");
// var words = input.split(" "); 
// document.write('Such occurences are: ')
// for (var i = 0; i < words.length; i++) {
//     var word = words[i]; 
//     for (var j = 0; j < word.length - 1; j++) {
//         var  char1 = word[j].toLowerCase(); 
//         var char2 = word[j + 1].toLowerCase(); 

//         var pairs='';
//         switch (char1) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 switch (char2) {
//                     case 'a':
//                     case 'e':
//                     case 'i':
//                     case 'o':
//                     case 'u':
//                         document.write(char1+''+char2+" ")
                        
//                         break;
//                 }
//                 break;
//         }
//     }
// }

// Qno: 8
// var input=prompt("Enter distance between two cities in KM");
// function meter(kilometer){
//     var meter = kilometer*1000;
//     document.write(input+" KM = "+meter+" Meter")

// }
// function feet(kilometer){
//     var feet=kilometer*3280.84;
//     document.write("<br>"+input+" KM = "+feet+" Feet")
// }
// function inches(kilometer){
//     var inches=kilometer*39370.1;
//     document.write("<br>"+input+" KM = "+inches+" Inches")
// }
// function centemeter(kilometer){
//     var centemeter=kilometer*100000;
//     document.write("<br>"+input+" KM = "+centemeter+" Centimeter")
// }
// meter(input);
// feet(input);
// inches(input);
// centemeter(input);

// Qno: 9
// var overTimeWorkHour =+prompt("Enter working hour ");
// var overTimePay=0;
// if(overTimeWorkHour>40){
//     var overWork=overTimeWorkHour-40;
//    overTimePay= overWork*12;
//    document.write("Your over time salary is: Rs."+overTimePay);

// }
// else{
//     document.write("No overtime pay. Employee worked 40 hours or less.");
// }



// Qno: 10
// function notes(price){

//     var note1=Math.floor(price/100);
//     price=(price%100);
//     var note2=Math.floor(price/50);
//     price=(price%50);
//     var note3=Math.floor(price/10);
//     price=(price%10);
    
//     document.write("you will have "+note1+" hundreds notes "+note2+" fifty notes "+note3+" ten notes")

// }
// notes(470);
// ____________________________________________PDF 3____________________________________________

// Qno:1 
// var total=0;
// var itemsArray = [
//     {name:'juice',price:50,quantity:'3'},
//     {name:'cookie',price:30,quantity:'9'},
//     {name:'shirt',price:880,quantity:'1'},
//     {name:'pen',price:100,quantity:'2'}];
//     for(var i=0;i<itemsArray.length;i++){
//         document.write("Price of "+itemsArray[i].name+" is "+itemsArray[i].price+"<br>");
//         total+=itemsArray[i].price;
//     }
//     document.write("___________________<br>")
//     document.write("The total Price: "+total)
//     document.write("<br>___________________<br>")

// Qno: 02
// var object={name:"Abu Hurera",Age:2,Email:"jujnjuue@gmail.com",Password: 483883,Gender:"M",City:"Tando Bago",Country:"Pakistan"  };
// if(object.hasOwnProperty('Age')){
//     document.write("Age property is exist<br>")
// }
// else{
//     document.write('Age property does not exist<br>')
// }
// if(object.hasOwnProperty('Country'))
// {
//     document.write("Country property is exist<br>")
// }
// else
// {
//     document.write('Country property does not exist<br>')
// }
// if(object.hasOwnProperty('firstName'))
// {
//     document.write("FirstName poperty is exist<br>")
// }
// else
// {
//     document.write('Firstname property does not exist<br>')
// }
// if(object.hasOwnProperty('LastName'))
// {
//     document.write("LastName poperty is exist<br>")
// }
// else
// {
//     document.write('Lastname property does not exist<br>')
// }

// Qno: 3
// function Person(firstName, lastName, age, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;  // Fixed typo here
//     this.age = age;
//     this.city = city;
// }

// var record1 = new Person('Abu', 'Hurera', 22, 'Tando Bago');
// var record2 = new Person('Muhammad', 'Aslam', 23, 'Talhar');
// var record3 = new Person('Muhammad', 'Talha', 20, 'Badin');
// var record4 = new Person('Abdul', 'Rehman', 19, 'Golarchi');

// document.write(record1.firstName + " " + record1.lastName + " " + record1.age + " " + record1.city + "<br>");
// document.write(record2.firstName + " " + record2.lastName + " " + record2.age + " " + record2.city + "<br>");
// document.write(record3.firstName + " " + record3.lastName + " " + record3.age + " " + record3.city + "<br>");
// document.write(record4.firstName + " " + record4.lastName + " " + record4.age + " " + record4.city + "<br>");

// Qno: 4
// window.onload = function() {
    // localStorage.clear();
//     displayRecords();
// };

// document.write("<h2>Population Record Entry</h2>");
// document.write(
//     "<form id='recordForm'>",
//     "<label for='name'>Name:</label> ",
//     "<input type='text' id='name' name='name' required><br><br>",
//     "<label>Gender:</label>",
//     "<label><input type='radio' name='gender' value='Male' required> Male</label>",
//     "<label><input type='radio' name='gender' value='Female'> Female</label><br><br>",
//     "<label for='address'>Address:</label>",
//     "<input type='text' id='address' name='address' required><br><br>",
//     "<label for='education'>Education:</label>",
//     "<select id='education' name='education' required>",
//     "<option value='Student'>Select Degree</option>",
//     "<option value='High School'>High School</option>",
//     "<option value='Bachelors'>Bachelor's</option>",
//     "<option value='Masters'>Master's</option>",
//     "<option value='PhD'>PhD</option>",
//     "</select><br><br>",
//     "<label for='profession'>Profession:</label>",
//     "<select id='profession' name='profession' required>",
//     "<option value='Select Degree'>Select Profession</option>",
//     "<option value='Student'>Student</option>",
//     "<option value='Teacher'>Teacher</option>",
//     "<option value='Engineer'>Engineer</option>",
//     "<option value='Doctor'>Doctor</option>",
//     "</select><br><br>",
//     "<button type='submit'>Add Record</button>",
//     "</form>",
//     "<h2>Saved Records</h2>",
//     "<ul id='recordsList'></ul>"
// );

// function Record(name, gender, address, education, profession) {
//     this.name = name;
//     this.gender = gender;
//     this.address = address;
//     this.education = education;
//     this.profession = profession;
// }

// function addRecord(event) {
//     event.preventDefault();

//     const name = document.getElementById("name").value;
//     const gender = document.querySelector('input[name="gender"]:checked').value;
//     const address = document.getElementById("address").value;
//     const education = document.getElementById("education").value;
//     const profession = document.getElementById("profession").value;

//     const newRecord = new Record(name, gender, address, education, profession);
//     saveRecord(newRecord);
//     displayRecords();
//     document.getElementById("recordForm").reset();
// }

// function saveRecord(record) {
//     let records = JSON.parse(localStorage.getItem("records")) || [];
//     records.push(record);
//     localStorage.setItem("records", JSON.stringify(records));
// }

// function displayRecords() {
//     const recordsList = document.getElementById("recordsList");
//     recordsList.innerHTML = "";

//     const records = JSON.parse(localStorage.getItem("records")) || [];
//     records.forEach((record, index) => {
//         const li = document.createElement("li");
//         li.textContent = `${index + 1}. Name: ${record.name}, Gender: ${record.gender}, Address: ${record.address}, Education: ${record.education}, Profession: ${record.profession}`;
//         recordsList.appendChild(li);
//     });
// }

// document.getElementById("recordForm").addEventListener("submit", addRecord);


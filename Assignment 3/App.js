// Chapter 01:

// Qno: 01
// var studentNames=[];

// Qno:2
//  studentNames=new Array();

//  Qno:3
// var stringArray=['ali','Aslam','Junaid'];

// Qno:4
// var numArray=[1,3,4,5];

// Qno:5
// var booleanArray=[true,false,true,false];

// Qno:6
// var mixedArray=['muhammad',6,true,8.99];
// document.write(mixedArray)

// Qno: 7
// var qualification=['SSC','HSC','BCS','BS','BCOM','MS','M.Phil','PhD'];
// document.write('<b>Qualification<br></b> ')
// document.write('<br>1) '+qualification[0]);
// document.write('<br>2) '+qualification[1]);
// document.write('<br>3) '+qualification[2]);
// document.write('<br>4) '+qualification[3]);
// document.write('<br>5) '+qualification[4]);
// document.write('<br>6) '+qualification[5]);
// document.write('<br>7) '+qualification[6]);
// document.write('<br>8) '+qualification[7]);

// Qno:8
// var student=['Michael','John','Tony'];
// var studentMarks=[320,230,480];

// document.write('Score of '+student[0]+' is '+studentMarks[0]+' percentage: '+(studentMarks[0]/500)*100+'%');
// document.write('<br>Score of '+student[1]+' is '+studentMarks[1]+' percentage: '+(studentMarks[1]/500)*100+'%');
// document.write('<br>Score of '+student[2]+' is '+studentMarks[2]+' percentage: '+(studentMarks[2]/500)*100+'%');

// Qno9?
 // Initialize the array with color names
//  var colors = ["Red", "Green", "Blue", "Yellow"];
//  document.write("Initial colors: " + colors+", ");

//  // (a) Ask the user to add a color at the beginning
 
//  document.write("<br>Add colors: "+colors.unshift("Camel","White"));
//  document.write("<br>Colors after adding at the beginning: " + colors+", ");

//  // (b) Ask the user to add a color at the end
 
//  document.write(colors.push("Orange"));
//  document.write("<br>Colors after adding at the end: " + colors+", ");

//  // (c) Add two more colors to the beginning
//  document.write(colors.unshift("Purple", "Pink"));
//  document.write("<br>Colors after adding two colors at the beginning: " +colors+", ");

//  // (d) Delete the first color
//  document.write(colors.shift());
//  document.write("<br>Colors after deleting the first color: " + colors+", ");

//  // (e) Delete the last color
//  document.write(colors.pop());
//  document.write("<br>Colors after deleting the last color: " + colors+", ");

// //  // (f) Ask the user for an index to add a new color
//  var indexToAddColor = parseInt(prompt("At which index would you like to add a color?"));
//  var colorToAddAtIndex = prompt("Enter the color name to add at index " + indexToAddColor + ":");
//  colors.splice(indexToAddColor, 0, colorToAddAtIndex);
//  document.write("<br>Colors after adding at index " + indexToAddColor + ": " + + colors+", ");

//  // (g) Ask the user for an index and number of colors to delete
//  var indexToDeleteColors = parseInt(prompt("At which index would you like to delete color(s)?"));
//  var numberOfColorsToDelete = parseInt(prompt("How many colors would you like to delete?"));
//  colors.splice(indexToDeleteColors, numberOfColorsToDelete);
//  document.write("<br>Colors after deleting colors: " + + colors+", ");


// Qn:10
// var score=[320,230,480,120];
// document.write('Score of Students: '+score);
// document.write('<br>Ordered Scores of Students: '+score.sort())

// Qno: 11
// var cities=['Karachi','Lahore','Islamabad','Quetta','Peshawar'];
// document.write('Cities list:')
// document.write('<br>'+cities);
// document.write('<br><br>Selected cities List:')
// Scities=cities.slice(2,4);

// document.write("<br>"+Scities);

// // Qno: 12
// var arr=['This ','is ','my ','car '];
// document.write('<b>Array:</b><br>'+arr);

// document.write('<br><b>String:</b>');
// document.write('<br>'+arr[0]+arr[1]+arr[2],arr[3]);

// Qno:13

// var arr=[];
// arr.push('keyboard');
// arr.push('mouse');
// arr.push('printer');
// arr.push('monitor');
// document.write('Devices:<br>'+arr);
// document.write('<br>Out:<br>'+arr.shift());
// document.write('<br>Out:<br>'+arr.shift());
// document.write('<br>Out:<br>'+arr.shift());
// document.write('<br>Out:<br>'+arr.shift());


// // Qno: 14
// var arr=[]
// arr.push('keyboard');
// arr.push('mouse');
// arr.push('printer');
// arr.push('monitor');
// document.write('Devices:<br>'+arr);
// document.write('<br>Out:<br>'+arr.pop())
// document.write('<br>Out:<br>'+arr.pop())
// document.write('<br>Out:<br>'+arr.pop())
// document.write('<br>Out:<br>'+arr.pop())

// QNO: 15
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

   
//     document.write('<select>');
//     manufacturers.forEach(manufacturer => {
//         document.write('<option>' + manufacturer + '</option>');
//     });
//     document.write('</select>');

// ___________________Chapter 02:_______________________

// QN: O1
// var arry=[['',''],['']];


// QNO: 02

// var arr=[
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1],
// ];

// for (var i =0;i<arr.length;i++){
//     for(var j=0;j<arr[i].length;j++){
//         document.write(arr[i][j]+" ")

//     }
//     document.write('<br>')
// }

// QNO: 03
// for(i=1;i<=10;i++){
//     document.write(i+"<br>")
   
// }

// QNO: 04


// var table=+prompt("Enter a number to show its multiplication ");
// var table_length =+prompt("Enter length multipliction table");
// document.write("<br>Multiplication table of "+table);
// document.write("<br>Length "+table_length+"<br>")
// for(var i=1;i<=table_length;i++){
//     document.write('<br>')
//     document.write(table+" X "+i+" = "+table*i)
// }


// QNO: 05

// var fruits = ['apple', 'banana', 'mango', 'orange',
//     'strawberry']
//     for(var i=0; i<fruits.length;i++){
//         document.write(fruits[i])
//         document.write('<br>')
//     }
//     document.write("<br>")
//     for (j=0;j<fruits.length;j++){
//         document.write("Element at index "+j+" is "+fruits[j])
//         document.write('<br>')
//     }
// QNO: 06


// document.write("<b>Counting:</b><br><br>")
// for(var i=0;i<=15;i++){
//     document.write(" "+i+",")
// }


// document.write("<br><br><b>Reverse counting:</b><br><br>")
// for(var i=10;i>=0;i--){
//     document.write(" "+i+",")
// }

// document.write("<br><br><b>Even:</b><br><br>")
// for(var i = 2;i<=20;i++){
//     if(i%2==0){
//         document.write(" "+i+",")
//     }
// }
// document.write("<br><br><b>Odd:</b><br><br>")
// for(var i = 0;i<=20;i++){
//     if(i%2==1){
//         document.write(" "+i+",")
//     }
// }

// document.write("<br><br><b>Series:</b><br><br>")
// for(var i = 1;i<=10;i++){
//     if(i<20){
//         document.write((2 * i)+"k, ")
//     }
// }

// QNO: 7

// var arr = ['cake','apple pie', 'cookie','chips','patties']
// var input = prompt("Welcom to ABC Bakery.What do you want to order sir/ma'am?");
// var check=false
// var index=-1;
// for(i=0; i<arr.length;i++){
//     if(arr[i].toLowerCase()==input){
        
//         check=true;
//         index=i;
//         i=arr.length
//     }

// }
// if(check){
//     document.write(input+" is available at index "+ index+" in our bakery")
// }
// else {
//     document.write("We are sorry, "+input+" is not availble in our bakery")
// }

// QNO: 08
// var arr =[24,53,78,91,12];
// document.write("Array items: "+arr)
// var largestNumber =arr[0];
// for(var i=1;i<arr.length;i++){
//     if(arr[i]>largestNumber){
//         largestNumber=arr[i];
//         }
//         }
//         document.write("<br>The largest number is: "+largestNumber);

// QNO: 09

// var arr =[25,53,78,91,12];
// document.write("Array items: "+arr)
// var smallestNumber =arr[0];
// for(var i=1;i<arr.length;i++){
//     if(arr[i]<smallestNumber){
//         smallestNumber=arr[i];
//         }
//     }
//     document.write("<br>The smallest number is: "+smallestNumber);


// QNO:10

// for (var i=1;i<=100;i++){
//     if(i%5===0){
//         document.write(i+", ");
//     }
// }




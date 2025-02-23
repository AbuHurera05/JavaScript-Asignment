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


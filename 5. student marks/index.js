// Create a CLI app which takes name, unit test marks, pre final marks, final marks of 5 students. And then print who has the highest marks. What if I ask you to print the average as well?

var readlineSync = require('readline-sync');


var studentArray = [];
for (var i = 0; i < 5; i++) {
  var studentName = readlineSync.question("What is Your Name?? : ");
  var unitTestMarks = readlineSync.question("What is Your unit test marks?? : ");
  var preFinalMarks = readlineSync.question("What is Your pre final marks?? : ");
  var finalMarks = readlineSync.question("What is Your final?? : ");
  console.log("---------------------------------------");
  var totalmarks  = Number(unitTestMarks) + Number(preFinalMarks) + Number(finalMarks);
  studentArray.push({ studentName, unitTestMarks, preFinalMarks, finalMarks, totalmarks });
  
}

function highestMarks(studentArray){
  var maxMarks = 0;
  var maxName = "";
  for(var i =0; i<studentArray.length; i++){
    if(maxMarks < studentArray[i].totalmarks){
      maxMarks = studentArray[i].totalmarks;
      maxName = studentArray[i].studentName;  
    }
  }
  return {maxMarks, maxName};
}

function averageMarks(studentArray){
  var total = 0;
  var average = 0;
  for(var i =0; i<studentArray.length; i++){
      total += studentArray[i].totalmarks;
  }
  average = total / studentArray.length;
  return average;
}

console.log("Highest marks is " + highestMarks(studentArray).maxMarks + " of " + highestMarks(studentArray).maxName);
console.log("Average marks of all student is " + averageMarks(studentArray));
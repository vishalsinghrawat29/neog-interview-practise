// Create a CLI app which would detect fake news. This app will take news as input and then source.
// If source is Facebook or whatsapp then it will output user saying, "Don't believe things on FB and Whatsapp". Can you extend this to include telegram as well?

var readlineSync = require('readline-sync');

var newsName = readlineSync.question("What is the news ?? \n");
var newsSource = readlineSync.question("What is the source of news?? \n").toLowerCase();

if (newsSource === "facebook" || newsSource === "whatsapp" || newsSource === "telegram") {
  console.log("Don't believe things on FB, telegram and Whatsapp");
} else {
  console.log("Yes you got right news!!");
}
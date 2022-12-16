

let names= ["Guadalupe","Ollie","Aki"]
let eventName = "birthday"
 function writeCards(names, eventName) {
const messages=[]
for (let i = 0; i< names.length; i++){
 let newMessage=`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
messages.push(newMessage);


} return messages;

 }

  function countDown(integer) {
let countDown=integer; 
while (countDown >= 0){
    console.log (countDown--);

}

  }
    
 

 

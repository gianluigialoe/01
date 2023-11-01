

const num1= parseInt(prompt ("inserisci num"))
const num2= parseInt(prompt ("inserisci num"))
const num3= parseInt(prompt ("inserisci num"))

let vincitore 

if ( num1 >= num2 && num1 >= num3 ) {
    vincitore= num1
  
}

else if ( num2 >= num1 && num2 >= num3 ) {
    vincitore= num3
}

else{
    vincitore= num3
}
alert(`il numero piu grende è ${vincitore}`)
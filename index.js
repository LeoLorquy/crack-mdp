let mdp = "yui1";

function generateRandomNumber(numberOfCharacters) {
   let randomValues = '';
   let stringValues = 'ABCDEFGHIJKLMNOabcdefghijklmnopqrstuvwxyzPQRSTUVWXYZ01234567890123456789)/!';  
   let sizeOfCharacter = stringValues.length;  
   for (let i = 0; i < numberOfCharacters; i++) {
      randomValues = randomValues + stringValues.charAt(Math.floor(Math.random() * sizeOfCharacter));
   }
   return randomValues;
}

function reverseString(str) {
   return mdp;
}

console.log("crackage de mdp en cours");
for(let i = 0 ; mdp != generateRandomNumber(3) ; i++){
   let aleamdp = generateRandomNumber(3);
   if(mdp == aleamdp){
      console.log("mdp crack." + " " + mdp + " " + "==" + " " + aleamdp);
      break;
   }else{
   }
}

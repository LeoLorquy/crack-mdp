let mdp = "jGU4L";
let numberof = 5;

function mdpCrack1(numberOfCharacters) {
   let randomValues = '';
   let stringValues = 'ABCDEFGHIJKLMNOabcdefghijklmnopqrstuvwxyzPQRSTUVWXYZ01234567890123456789)/!';  
   let sizeOfCharacter = stringValues.length;  
   for (let i = 0; i < numberOfCharacters; i++) {
      randomValues = randomValues + stringValues.charAt(Math.floor(Math.random() * sizeOfCharacter));
   }
   return randomValues;
}
function mdpCrack2(numberOfCharacters) {
   let randomValues = '';
   let stringValues = 'ABCDEFGHIJKLMNOabcdefghijklmnopqrstuvwxyzPQRSTUVWXYZ01234567890123456789)/! ';  
   let sizeOfCharacter = stringValues.length;  
   for (let i = 0; i < numberOfCharacters; i++) {
      randomValues = randomValues + stringValues.charAt(Math.floor(Math.random() * sizeOfCharacter));
   }
   return randomValues;
}
function mdpCrack3(numberOfCharacters) {
   let randomValues = '';
   let stringValues = 'ABCDEFGHIJKLMNOabcdefghijklmnopqrstuvwxyzPQRSTUVWXYZ01234567890123456789';  
   let sizeOfCharacter = stringValues.length;  
   for (let i = 0; i < numberOfCharacters; i++) {
      randomValues = randomValues + stringValues.charAt(Math.floor(Math.random() * sizeOfCharacter));
   }
   return randomValues;
}
function mdpCrack4(numberOfCharacters) {
   let randomValues = '';
   let stringValues = 'ABCDEFGHIJKLMNOabcdefghijklmnopqrstuvwxyzPQRSTUVWXYZ';  
   let sizeOfCharacter = stringValues.length;  
   for (let i = 0; i < numberOfCharacters; i++) {
      randomValues = randomValues + stringValues.charAt(Math.floor(Math.random() * sizeOfCharacter));
   }
   return randomValues;
}
function mdpCrack5(numberOfCharacters) {
   let randomValues = '';
   let stringValues = '01234567890123456789';  
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
for(let i = 0 ; mdp != mdpCrack1(numberof) ; i++){
   let aleamdp = mdpCrack1(numberof);
   if(mdp == aleamdp){
      console.log("mdp crack." + " " + mdp + " " + "==" + " " + aleamdp);
      break;
   }else{
   }

   let aleamdp1 = mdpCrack2(numberof);
   if(mdp == aleamdp){
      console.log("mdp crack." + " " + mdp + " " + "==" + " " + aleamdp);
      break;
   }else{
   }

   let aleamdp2 = mdpCrack3(numberof);
   if(mdp == aleamdp){
      console.log("mdp crack." + " " + mdp + " " + "==" + " " + aleamdp);
      break;
   }else{
   }

   let aleamdp3 = mdpCrack4(numberof);
   if(mdp == aleamdp){
      console.log("mdp crack." + " " + mdp + " " + "==" + " " + aleamdp);
      break;
   }else{
   }

   let aleamdp4 = mdpCrack5(numberof);
   if(mdp == aleamdp){
      console.log("mdp crack." + " " + mdp + " " + "==" + " " + aleamdp);
      break;
   }else{
   }

   let dico = ["password", "princess", 123456, "sunshine", "princess1", "abc123", "jordan23", "blessed1", "Password1", "password1", "jasmine1", "blink182", "sunshine1", "happy123", "butterfly", "whatever", "Princess1", "tinkerbell", "michael1", "bubbles", "shopping", "purple", "brooklyn", "tigger", "michelle", "ladybug", "iloveyou", "freedom", "Forever21", "diamond", "babygirl", "1qaz2wsx", "william1", "Welcome1", "passw0rd", "money123", "Anthony1", "trustno1", "qwerty", "jessica1", "iloveyou1", "freedom1", "destiny1", "chocolate", "brianna1", "Blessed1", "baseball", "anthony1", "abcd1234", "zachary1", "Sunshine1", "purple12", "nicole", "love5683", "Jessica1", "jennifer", "isabella1", "Iloveyou1", "forever21", "football", "danielle1", "Brooklyn1", "brandon1", "bella123", "whatever1", "scooter1", "red123", "qwer1234", "purple123", "P@ssw0rd", "poohbear", "monkey", "Michelle1", "love1234", "Jordan23", "jennifer1", "hello123", "Elizabeth1", "elizabeth", "cupcake", "apple123", "angel123", "yankees1", "superman1", "skittles", "shadow", "monkey123", "Matthew1", "maggie", "madison1", "madison", "hunter", "freckles", "buddy123", "bubbles1", "blessed", "beautiful1", "babygirl1", "1q2w3e4r", "123456789", "12345678", "victoria", "superman", "summer", "serenity", "q1w2e3r4", "Precious1", "peace123", "Pa55word", "orange", "november", "nicholas1", "my2girls", "mustang1", "monster1", "midnight", "michael", "matthew1", "letmein", "lakers24", "jordan", "jesus1", "Jasmine1", "iloveme2", "icecream", "Hellokitty1", "hellokitty", "heather1", "ginger", "Football1", "dolphin1", "danielle", "Christian1", "charlie1", "charlie", "Brandon1", "bailey", "Aaliyah1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1", "whatever1"]
   if(mdp == dico[i]){
      console.log("mdp crack." + " " + mdp + " " + "==" + " " + dico[i]);
      break;
   }else{
   }

   console.log(aleamdp)
   console.log(aleamdp1)
   console.log(aleamdp2)
   console.log(aleamdp3)
   console.log(aleamdp4)
   console.log(dico[i])
}
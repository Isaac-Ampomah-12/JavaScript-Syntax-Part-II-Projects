let input = 'a whale of a deal!';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let i = 0; i < input.length; i++){
  //console.log("i is " + i);
  for (j = 0; j < vowels.length; j++){
    //console.log(j);
    if(input[i] === vowels[j]){
      resultArray.push(input[i]);
      
      
      //console.log(input[i]);
      //resultArray.push(input[i])
      //console.log(resultArray);
      // if(){

      // }
    }
  }
  if(input[i] === 'e' || input[i] === 'u'){
        resultArray.push(input[i]);
      }
}
console.log(resultArray);
resultString = resultArray.join('');
console.log(resultString.toUpperCase());

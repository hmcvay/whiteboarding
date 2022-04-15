let input = "Jasmine Ann Jones";
let output = [];

function replaceSpace(input) {
  let inputArray = input.split("");
  for(let i=0; i<inputArray.length; i++) {
    if(inputArray[i] !== " ") {
      output.push(inputArray[i]);
    }
    else{
      output.push("%20");
    }
  }
  let result = output.join("").toString();
  return result;
}

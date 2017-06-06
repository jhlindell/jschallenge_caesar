function decode(string){
  let array = string.split('');
  for(let i =0; i < array.length; i++) {
    let index = array[i].charCodeAt(array[i]);

    if(index >= 65 && index <=90){
      index -= 3;
      if(index < 65){
        let remainder = 65 - index;
        index = 90 - remainder;
        array[i] = index;
      } else {
        array[i] = index;
      }
    }
    if(index >= 97 && index <= 122){
      index -= 3;
      if(index < 97){
        let remainder = 97 - index;
        index = 122 - remainder;
        array[i] = index;
      } else {
        array[i] = index;
      }
    }
  }
  for(let j = 0; j<array.length; j++){
    array[j] = array[j].fromCharCode(array[j]);
  }
  return array.join('');
}

function encode(){

}
module.exports = {decode, encode};

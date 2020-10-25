module.exports = function reverse (n) {
  var result = '';
  
  while(n>0){
   result = result + (n%10);
   n = parseInt(n/10);
  }
  
  return result;
}



var leapYears = function(num) {
  if(num % 100 === 0 && num % 400 === 0 && num % 4 === 0){
    return true;
  }else if(num % 4 ===0){
    return true;
  }else{
    return false;
  }
}

module.exports = leapYears

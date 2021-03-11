exports.min = function min (array) {
/*if (array.length === 0 && Array.isArray(array) == false ) {
  return 0; 
}else {
  return Math.min.apply(null, array);
}*/

  
if (array == undefined || array == null || array.length == 0) {
  return 0;
} else {
  return Math.min.apply(null, array);
}
}


exports.max = function max (array) {
  if (array == undefined || array == null || array.length == 0) {
    return 0; 
  }else {
    return Math.max.apply(null, array);
}
}

exports.avg = function avg (array) {
  if (array == undefined || array == null || array.length == 0) {
    return 0; 
} else{
   //var result = (arr.reduce((sum, current) => sum + current, 0)) / array.length;
   //return result;
   let result = (array.reduce((sum, current) => sum + current, 0)) / array.length;
   return result;
}
}
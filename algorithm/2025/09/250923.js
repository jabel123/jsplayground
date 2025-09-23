// 8kyu Find out whether the shape is a cube

const cubeChecker = (volume, side) => volume > 0 && side > 0 && volume === side ** 3;



/**
 * best solution
 * 
 * lbesp, leventdeniz, Sedran, Zo., Liudmila91, VilenaArturovna, Ram4ik (+ 46)
var cubeChecker = function(volume, side){
  return Math.pow(side, 3) === volume && side > 0;
};
 */
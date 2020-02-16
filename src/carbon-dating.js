const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(sampleActivity === "string" && 0 < sampleActivity < MODERN_ACTIVITY){
let t;
  let k = 0.693 / HALF_LIFE_PERIOD;
  return t = Math.ceil(Math.log((MODERN_ACTIVITY / parseFloat(sampleActivity))/ k));
  } else {
    return false;
  }
};

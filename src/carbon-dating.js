 const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== "string") return false;
  if(isNaN(parseFloat(sampleActivity))  === true ) return false;  
  if(0 >= sampleActivity ||  sampleActivity > 15) return false;
  let t = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) /(0.693 / 5730));
  return t;
}

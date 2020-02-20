module.exports = function createDreamTeam(members) {
  if(members === null || members === undefined || !Array.isArray(members)) return false;
  let members1 = [];
  for(let i = 0; i < members.length; i++)  { 
    members[i] = members[i].trim();
    for(let j = 0; j < 1; j++) {        
        members1.push(members[i][0]);
      }
    }
  let str = members1.sort().join("").toUpperCase();
  return str;
};
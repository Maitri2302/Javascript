const accountId=2111
var accountName= "ABC" //not preferrably used because of issue in block scope and functional scope
let accountPassword= "Adbg2111"
accountCity="Jaipur"
let accountState;

// accountId=232 cannot be re-assignes since it has const keyword
accountName="CCD"
accountPassword="Adi"
accountCity="Banglore"

console.log(accountId);
console.log(accountName);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId,accountName,accountPassword,accountCity,accountState])





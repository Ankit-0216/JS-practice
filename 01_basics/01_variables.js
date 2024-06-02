const accountId = 14123
let accountEmail = "test@gmail.com"
var accountPassword = "12345"
accountCity = "Bangalore" // not preferrd
let accountState

// accountId = 2 // not allowed

accountEmail = "ankit@gmail.com"
accountPassword = "98765"
accountCity = "Bhubaneswar"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

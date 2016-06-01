/**
 * Created by rasmus on 2/14/16.
 */
'use strict'

console.log("---Reusable Modules and Closures---")
//"import" the modulePerson.js file and assign it to variable
var modPers = require("./modulePerson.js");
//Use functions from module
modPers.setAgeFunction(43);
modPers.setNameFunction("Rasmus");
console.log(modPers.getInfoFunction());
const promisesAplusTests = require("promises-aplus-tests");
const Promise1 = require('./promise')

promisesAplusTests(Promise1, function (err) {
    // All done; output is in the console. Or check `err` for number of failures.
    console.log(err)
});
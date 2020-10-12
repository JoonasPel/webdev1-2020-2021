/**
 * TODO: implement a function 'f' that returns the value of a parameter inside a Promise
 * @param {number} value
 * @throws an error, if the parameter 'value' is not a number. The error message must
 * be of format 'Parameter is not a number!'
 */
const f = (value) => {

  const promise_value = new Promise(
    function (resolve, reject) {

      if(typeof value != "number") {
        reject('Parameter is not a number!');
      } else {
        resolve(value);
      }

    });
  return promise_value;
};

/**
 * TODO: Implement a function 'g' that calls the previously made function 'f'.
 * It waits for the result of f and returns the natural logarithm (Math.log) of f's value.
 * Handle exceptions gracefully by returning the thrown error message.
 * @param {number} value
 */
const g = (value) => {

};

/**
 * TODO: Implement a function 'checkIfFunction'.
 * The function checks the type of a parameter.
 * However, since we are now practicing
 * Promises, the value is returned as a "promisified" value
 * @param {*} param the value is checked to be a function
 * @returns resolved Promise with value true if parameter is a function or 
 * a rejected Promise with message "Not a function!" otherwise
 */
const checkIfFunction = (param) => {

  const prom = new Promise(
    function (resolve, reject) {

      if(typeof param == "function") {
        resolve(true);
      } else {
        reject('Not a function!');
      }
    });

  return prom;
}

/**
 * TODO: Implement a function 'p' that returns a resolved Promise after a given time.
 * If time > 2000 milliseconds, the Promise must be rejected with message "Too long time!".
 * If time is not a number the Promise must be rejected with message "Not a number!".
 * @param {number} time
 * @returns {an empty Promise after a given time}, if time is acceptable
 */
const p = (time) => {

  const prom_timeout = new Promise(
    function (resolve, reject) {
      if (typeof time != "number") {
        reject('Not a number!');
      } else if (time > 2000) {
        reject("Too long time!");
      } else {
        setTimeout(resolve(), time);
      }
    });

    return prom_timeout;
};

//TODO: Verify that all functions are exported for tests
exports.f = f;
exports.g = g;
exports.checkIfFunction = checkIfFunction;
exports.p = p;

// TODO: Install testing packages with npm install
//Done (npm install mocha)

// TODO: Run the tests with npm test

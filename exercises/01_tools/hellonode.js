const _ = require("lodash");
const ver = _.VERSION;
console.log(ver);    

function hellonode(array)
{
    let first_element = _.first(array);
    let last_element = _.last(array)
    console.log(first_element,last_element);
}

module.exports = hellonode;
const _ = require("lodash");
const { last } = require("lodash");
const ver = _.VERSION;
console.log(ver);    

function hellonode(array)
{
    let first_element = _.first(array);
    let last_element = _.last(array);

    return first_element + last_element
}

module.exports = hellonode;
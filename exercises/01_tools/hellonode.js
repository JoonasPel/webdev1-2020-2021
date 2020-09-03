const _ = require("lodash");


function hellonode(array)
{
    let first_element = _.first(array);
    let last_element = _.last(array)
    console.log('${first_element} ${last_element}');
}

module.exports = hellonode
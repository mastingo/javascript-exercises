const repeatString = function( string, num) {
    word = ''
    if(num < 0 ){
        return('ERROR')
    }
    for(let i = 0; i < num; i++){
        word = word + string
    }
    return word
};

// Do not edit below this line
module.exports = repeatString;

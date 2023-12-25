var availableChars = 'abcdefghijklmnopqrstuvwxyz1234567890';

function generateRandomPassword(passwordLength){
    var randomStr = '';
    for(var i=0;i<passwordLength;i++){
        var randomIndex = getRandomNumber(1, availableChars.length-1);
        randomStr += availableChars[randomIndex];
    }
    return randomStr;
}
function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(`Random Password: ${generateRandomPassword(10)}`);
function getFirstNumber(str, pres) {
    if (!pres) {
        switch (str) {
            case `0`: return "zero"; break;
            case `1`: return "one"; break;
            case `2`: return "two"; break;
            case `3`: return "three"; break;
            case `4`: return "four"; break;
            case `5`: return "five"; break;
            case `6`: return "six"; break;
            case `7`: return "seven"; break;
            case `8`: return "eight"; break;
            case `9`: return "nine"; break;
            default: return ""
        }
    }
    else return ''
}
function getFirstNumber3(str) {
    switch (str) {
        case `1`: return "one"; break;
        case `2`: return "two"; break;
        case `3`: return "three"; break;
        case `4`: return "four"; break;
        case `5`: return "five"; break;
        case `6`: return "six"; break;
        case `7`: return "seven"; break;
        case `8`: return "eight"; break;
        case `9`: return "nine"; break;
        default: return ""
    }
}
function getSecondNumber(str, strOne) {
    switch (str) {
        case `1`:
            {
                switch (strOne) {
                    case `0`: return "ten"; break;
                    case `1`: return "eleven"; break;
                    case `2`: return "twelve"; break;
                    case `3`: return "thirteen"; break;
                    case `4`: return "fourteen"; break;
                    case `5`: return "fifteen"; break;
                    case `6`: return "sixteen"; break;
                    case `7`: return "seventeen"; break;
                    case `8`: return "eighteen"; break;
                    case `9`: return "nineteen"; break;
                    default: return ""
                }
            }
            break;
        case `2`: return "twenty"; break;
        case `3`: return "thirty"; break;
        case `4`: return "forty"; break;
        case `5`: return "fifty"; break;
        case `6`: return "sixty"; break;
        case `7`: return "seventy"; break;
        case `8`: return "eighty"; break;
        case `9`: return "ninety"; break;
        default: return ""
    }

}

function getThirdNumber(str) {
    switch (str) {
        case `1`: return "one hundred"; break;
        case `2`: return "two hundred"; break;
        case `3`: return "three hundred"; break;
        case `4`: return "four hundred"; break;
        case `5`: return "five hundred"; break;
        case `6`: return "six hundred"; break;
        case `7`: return "seven hundred"; break;
        case `8`: return "eight hundred"; break;
        case `9`: return "nine hundred"; break;
        default: return ""
    }
}

module.exports = function toReadable(number) {
    let stringNumber = String(number);

    switch (stringNumber.length) {
        case 1: return getFirstNumber(stringNumber[0]); break;
        case 2: {
            let firNum = '';
            if (getFirstNumber(stringNumber[1]) && stringNumber[0]!=1 && stringNumber[1]!=0) firNum = ` ${getFirstNumber(stringNumber[1])}`;


            return getSecondNumber(stringNumber[0], stringNumber[1]) + firNum; break;
        }
        case 3: {
            let secNum = '';
            if (getSecondNumber(stringNumber[1], stringNumber[2])) secNum = ` ${getSecondNumber(stringNumber[1], stringNumber[2])}`;
            let firNum = '';
            if (getFirstNumber(stringNumber[2]) && stringNumber[1]!=1 && stringNumber[2]!=0) firNum = ` ${getFirstNumber(stringNumber[2])}`;
            return `${getThirdNumber(stringNumber[0])}` + secNum + firNum;


            break;
        }

        default: return ""
    }

}

//console.log(toReadable(122))

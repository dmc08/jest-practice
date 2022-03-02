export function clean(phoneNumber) {
    let phoneNum = phoneNumber.split('')
    let phonestring = ""
    for (let digit of phoneNum) {
        isAlpha(digit)
        if (Number.isInteger(parseInt(digit))) {
            phonestring += digit
        }
    }
    if (phonestring.length == 9 || phonestring.length > 11) {
        throw new Error('Incorrect number of digits')
    }
    if (phonestring.length == 11) {
        if (phonestring[0] != 1) {
            throw new Error('11 digits must start with 1')
        }
        phonestring = phonestring.slice(1)
    }

    if (phonestring[0] == 0 || phonestring[0] == 1) {
        throw new Error('Area code cannot start with zero or one')
    }
    if (phonestring[3] == 0 || phonestring[3] == 1) {
        throw new Error('Exchange code cannot start with zero or one')
    }
    if (phonestring.length == 11 && phonestring[1] == 0 || phonestring[1] == 1) {
        throw new Error('Area code cannot start with zero or one')
    }

    function isAlpha(ch) {
        if (/^[A-Z]$/i.test(ch)) {
            throw new Error('Letters not permitted')
        } else if (/[,\/#!$%\^&\*;:{}=\_`~]/i.test(ch)) {
            throw new Error('Punctuations not permitted')
        }
    }


    return phonestring
}
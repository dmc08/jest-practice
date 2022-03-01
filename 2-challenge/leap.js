
export function isLeap(year) {
    if (year % 4 != 0 || year % 2 == 0 && year % 4 != 0) {
        return false
    } else if (year % 4 == 0 && year % 100 != 0) {
        return true
    } else if (year % 4 == 0 && year % 5 == 0) {
        return true
    } else if (year % 100 == 0 && year % 400 !== 0 || year % 3 !== 0) {
        return false
    }
    else if (year % 400 == 0) {
        return true
    }
    else if (year % 400 == 0 && year % 125 != 0) {
        return true
    }
    else if (year % 200 == 0 && year % 400 !== 0) {
        return false
    }

}


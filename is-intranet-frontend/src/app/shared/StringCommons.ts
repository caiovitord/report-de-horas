
export class StringCommons {

    static minimize(str: string, maxChar) {
        if (str.length > maxChar) {
            return str.substring(0, maxChar) + '...';
        } else {
            return str;
        }
    }

    static getDateStringFromDate(date: Date) {
        console.log(date);
        return date.getFullYear() + '-' + StringCommons.pad(date.getMonth() + 1, 2) + '-' + StringCommons.pad(date.getDay() + 1, 2);
    }

    static pad(str, size) {
        let s: string = String(str);
        while (s.length < size) { s = '0' + s; }
        return s;
    }

}


export class StringCommons {

    static minimize(str: string, maxChar) {
        if (str.length > maxChar) {
            return str.substring(0, maxChar) + '...';
        } else {
            return str;
        }
    }


}

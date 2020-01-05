class Fixture {
    constructor() {
    }

    static createEmail(length) {
        let values = "abcdefgh123456789";
        let email = '';
        let domen = '';
        let temp;
        for (let i = 0; i < length; i++) {
            temp = values.charAt(Math.round(Math.random() * values.length));
            email += temp;
        }
        for (let i = 0; i < 5; i++) {
            domen += values.charAt(Math.round(Math.random() * values.length))
        }
        return `${email}@${domen}.com`
    }

    static generateID(length) {
        let result = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        let charactersLength = characters.length
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result
    }

    static generateText(length) {
        let result = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        let charactersLength = characters.length
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result
    }

    static generateNumber() {
        let numbers = Math.floor(Math.random() * 9_000_000_000) + 1_000_000_00
        return numbers.toString()
    }

    static generatePhoneNumber() {
        let numbers = Math.floor(Math.random() * 9_000_000_000) + 1_000_000_00
        return numbers.toString()
    }

    static generateCurrentDate() {
        return new Date()
    }

    static generateRandomDate(start, end) {
        let diff = end.getTime() - start.getTime();
        let new_diff = diff * Math.random();
        return new Date(start.getTime() + new_diff);
    }
}

module.exports = Fixture;

export class BankAccount {
    constructor() {

    }
    open() {
        if (this.balance) {
            throw new ValueError
        } else {
            this.balance = 0
        }
    }

    close() {
        if (isNaN(this.balance)) {
            throw new ValueError
        }
        else {
            this.balance = NaN
        }
    }

    deposit(amount) {
        if (isNaN(this.balance) || (amount < 0)) {
            throw new ValueError
        }
        else {
            this.setBalance(amount)
        }
    }
    withdraw(amount) {
        if (isNaN(this.balance)) {
            throw new ValueError
        } else if (amount > this.balance) {
            throw new ValueError
        } else if (amount < 0) {
            throw new ValueError
        }
        else {
            this.balance -= amount
        }
    }
    getBalance() {
        if (isNaN(this.balance)) {
            throw new ValueError
        }
        else {
            return this.balance
        }
    }
    setBalance(amount) {
        return this.balance += amount
    }
}
export class ValueError extends Error {
    constructor() {
        super('Bank error occured')
    }
}
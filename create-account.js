
function createAccount(pin, balance=0) {
    return{
        checkBalance(input){
            if(input===pin)return `$${balance}`
            return 'Invalid PIN.'
        },
        deposit(input, amount=0){
            if(input===pin) {
                balance+= amount;
                return `Succesfully deposited $${amount}. Current balance: $${balance}.`
            }
            return'Invalid PIN.'
        },
        withdraw(input, amount=0){
            if(input===pin){
                if(balance<amount) return "Withdrawal amount exceeds account balance. Transaction cancelled."
                
                balance-=amount;
                return `Succesfully withdrew $${amount}. Current balance: $${balance}.`
                
            }
            else return'Invalid PIN.'
        },
        changePin(oldP,newP){
            if(newP.length!==4) return 'Pin must be 4 digits';
            if(oldP!==pin) return 'Invalid PIN.';
            pin=newP;
            return 'PIN successfully changed!';
        }
    }
}
module.exports = { createAccount };

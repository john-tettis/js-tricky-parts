function guessingGame(){
    let number  = Math.floor(Math.random()*100);
    let count = 0;
    let win = false;
    return (guess)=>{
        if(win)return 'The game is over, you already won!'
        count++;
        if(guess===number){
            win=true;
            return `You win! You found ${number} in ${count} ${count===1 ? 'guess':'guesses'}.`

        } 
        if(guess>number){
            return `${guess} is too high!`
        }
        else{
            return `${guess} is too low!`
        }
    }
}

module.exports = { guessingGame };

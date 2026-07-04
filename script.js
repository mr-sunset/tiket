document.addEventListener('DOMContentLoaded', () => {
    let money = document.getElementById('money');
    let amountWon = document.getElementById('amount-won');
    const getTicket = document.getElementById('try-luck');
    const resetButton = document.getElementById('reset-icon');

    let balance = 0;

    // Choose a random number that becomes the prize
    function getRandomInt() {
        const weightedRandom = Math.random() ** 5; // Raise to the 5th power so a large win is rare
        return Math.floor(weightedRandom * (1000 - 10 + 1)) + 10; 
    }

    // Confetti function so the config isn't pasted everywhere
    function celebrate() {
        confetti({
            velocity: 300,
            count: 100
        });
    }

    // Get a random number, throw confetti if high, and update both texts
    getTicket.addEventListener('click', () => {
        let moneyWon = getRandomInt();

        if (moneyWon >= 300) {
            celebrate();
        }

        balance = (+balance) + moneyWon

        money.innerHTML = balance.toLocaleString();
        amountWon.innerHTML = moneyWon.toLocaleString();

        money.classList.add('pop');
        setTimeout(() => {
            money.classList.remove('pop');
        }, 200);
    });

    resetButton.addEventListener('click', () => {
        balance = 0;
        money.innerHTML = 0;
        amountWon.innerHTML = 0;
    })
})
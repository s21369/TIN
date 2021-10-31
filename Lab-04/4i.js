let amount = 46;
let coins = [25, 10, 5, 2, 1];

function amountToCoins(a, c) {
    let neededCoins = [];
    while (a > 0) {
        for (let i = 0; i < c.length; i++) {
            if (a - c[i] >= 0) {
                a -= c[i];
                neededCoins.push(c[i]);
                break;
            }
        }
    }
    return neededCoins;
}

console.log(`${amount} in coins is ${amountToCoins(amount, coins)}`);
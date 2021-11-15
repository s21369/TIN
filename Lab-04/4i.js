const amount = 46;
const coins = [25, 10, 5, 2, 1];

function amountToCoins(a, c) {
    const neededCoins = [];
    while (a > 0) {
        for (let i = 0; i < c.length; i++) {
            if (a - c[i] >= 0) {
                // eslint-disable-next-line no-param-reassign
                a -= c[i];
                neededCoins.push(c[i]);
                break;
            }
        }
    }
    return neededCoins;
}

console.log(`${amount} in coins is ${amountToCoins(amount, coins)}`);

let str = "Lorem ninja ipsum dolor sit amet, consectetuer adipiscing elit";

function longestWord(str) {
    let words = str.split(" ");
    let wordsLength = words.map(word => word.length);
    return words[wordsLength.indexOf(Math.max(...wordsLength))];
}

console.log(`Longest word in "${str}" is "${longestWord(str)}"`);
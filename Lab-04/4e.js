const regex = /[^a-zA-Z\s]/g;
const string = "Lorem ninja ipsum dolor sit amet, consectetuer adipiscing elit";

function longestWord(str) {
    const words = str.replaceAll(regex, "").split(" ");
    const wordsLength = words.map((word) => word.length);
    return words[wordsLength.indexOf(Math.max(...wordsLength))];
}

console.log(`Longest word in "${string}" is "${longestWord(string)}"`);

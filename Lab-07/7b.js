const fs = require("fs");
const path = require("path");

const dirPath = path.join(process.cwd(), process.argv[2]);
if (!fs.existsSync(dirPath)) {
    console.error(`${dirPath}\nDirectory does not exist!`);
    process.exit(1);
}

fs.watch(dirPath, "UTF8", (eventType, filename) => {
    if (eventType === "change") {
        console.log(`Changed: ${filename}\nContent: \n${fs.readFileSync(path.join(dirPath, filename))}`);
    }
});

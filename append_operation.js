const fs = require("fs");
const newDataToAppend = "\nThis is additional data appended to the file.";
fs.appendFile("example.txt", newDataToAppend, (err) => {
    if (err) {
        console.error("Error appending to the file:", err);
    } else {
        console.log("Data appended successfully.");
    }
});

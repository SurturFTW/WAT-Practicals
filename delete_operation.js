const fs = require("fs");
fs.unlink("example.txt", (err) => {
    if (err) {
        console.error("Error deleting the file:", err);
    } else {
        console.log("File deleted successfully.");
    }
});

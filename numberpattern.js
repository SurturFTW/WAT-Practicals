function printPattern(rows) { 
    for (let i = rows; i >= 1; i--) { 
        let pattern = ''; 
        for (let j = 1; j <= i; j++) { 
            pattern += j + ' '; 
        } 
        console.log(pattern); 
    } 
} 

const numRows = 5;
printPattern(numRows); 
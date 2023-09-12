for (var num = 0; num <= 100; num++) {
    var notPrime = false;
    for (var i = 2; i <= num; i++) {
        if (num % i == 0 && i != num) {
            notPrime = true;
        }
    }
    if (notPrime == false) {
        console.log(num);
    }
}

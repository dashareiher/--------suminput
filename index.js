function sumInput() {

    const numbers = [];

    let sum = 0;

    while (true) {
        let value = Number(prompt("Введите число", ''));
        if (!value) break;
        numbers.push(value)
        sum += value;
    }

    alert(numbers.sort(
        function compare(a, b) {
            if (a > b) return 1;
            if (a == b) return 0;
            if (a < b) return -1;
        }
    ));
    return sum;
}

alert(sumInput())


function tinhtong() {
    let i = 0;
    let sum = 0;
    while (i < 6) {
        sum += i;
        i++;
    }
    document.getElementById("kq").textContent = sum;
}
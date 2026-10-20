function chuvi(a, b) {
    return (a + b) * 2;
}

function dientich(a, b) {
    return a * b;
}
var a = parseInt(prompt("Nhập số a"));
var b = parseInt(prompt("Nhập số b"));
var chuvi = chuvi(a, b);
var dientich = dientich(a, b);
document.write("Chu vi hình chữ nhật là: " + chuvi);
document.write("<br>Diện tích hình chữ nhật là: " + dientich);
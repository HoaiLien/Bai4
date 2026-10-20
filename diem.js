function tinhDTB() {
    let S1 = parseFloat(document.getElementById("s1").value);
    let S2 = parseFloat(document.getElementById("s2").value);
    return (S1 + S2) / 2;
}

function xepLoai(diemTB) {
    if (diemTB >= 9) {
        return "Xuất sắc";
    } else if (diemTB >= 8) {
        return "Giỏi";
    } else if (diemTB >= 7) {
        return "Khá";
    } else if (diemTB >= 5) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}

function ketQua() {
    let diemTB = tinhDTB().toFixed(2);
    document.getElementById("dtb-span").textContent = diemTB;
    document.getElementById("dtb-span").style.color = "red";
    document.getElementById("dtb-span").style.backgroundColor = "yellow";
    let xepLoaiHS = xepLoai(diemTB);
    document.getElementById("set-span").textContent = xepLoaiHS;
    document.getElementById("set-span").style.color = "green";
    document.getElementById("set-span").style.backgroundColor = "pink";
}
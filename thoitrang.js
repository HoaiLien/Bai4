// Khai báo mảng sản phẩm nam
var man = [{
        id: 1,
        name: "Quần Jeans ",
        code: "TC1025011BA",
        price: "250.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx264l0HaJCAI3elF9M42TCNS5LqY0vJD7qGFYQDdeiQ&s=10"
    },
    {
        id: 2,
        name: "Quần baggy jeans ",
        code: "TC1025011BA",
        price: "398.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHm5YqdKRXAtz4RtmnimoVlnC19P03GYPoQss_aKg_A&s=10"
    },
    {
        id: 3,
        name: "The Cosmo (Đen) Quần short khaki",
        code: "TC1025011BA",
        price: "300.000",
        image: "https://cdn.hstatic.net/products/1000026602/0905_men_0543_3b1051611b304e66ad45fbe9cd886e3e_master.jpg"
    },
    {
        id: 4,
        name: "The Cosmo (Đen) Quần short khaki",
        code: "TC1025011BA",
        price: "300.000",
        image: "https://cdn.hstatic.net/products/1000026602/0905_men_0898_c9f57ef55e0a43d9b03bebd103042fa6_master.jpg"
    }
];
// Khai báo mảng sản phẩm nữ
var woment = [{
        id: 1,
        name: "Váy Fashion",
        code: "TC1025011BA",
        price: "250.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJT5zEczBwFGzWg2h3uysB_CXlL9NDKslvBgCvAH7Vg&s=10"
    },
    {
        id: 2,
        name: "Set váy ",
        code: "TC1025011BA",
        price: "398.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxqbnXmbyN8e5RdVt8j-60GMP3Pc2wJyB-UiSsqxFiFQ&s=10"
    },
    {
        id: 3,
        name: "Áo khoác",
        code: "TC1025011BA",
        price: "300.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhS6CkQuE0Cg86AncAi829dZv0MV0rvkNLhoZHbwC6pg&s=10"
    },
    {
        id: 4,
        name: "Áo thun",
        code: "TC1025011BA",
        price: "300.000",
        image: "https://content.pancake.vn/1/s800x800/fwebp80/3f/5f/5d/8d/7084fd4b0b78247c85cbd6026dcdf1ab3965a648a705581a03f6530d-w:800-h:800-l:266016-t:image/jpeg.jpeg"
    }
];
// Hàm hiển thị danh sách sản phẩm
function listProducts() {
    // Hiển thị danh sách sản phẩm nam
    for (let i = 0; i <= man.length - 1; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem; ">';
        demo += '<img src="' + man[i].image + '" class="card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + man[i].name + '</h5>';
        demo += '<p class="card-text">' + man[i].price + '</p>';
        demo += '<a href="#" class="btn btn-primary" style="background-color: red;" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML += demo;
    }
    // Hiển thị danh sách sản phẩm nữ
    for (let i = 0; i <= woment.length - 1; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img src="' + woment[i].image + '" class="card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + woment[i].name + '</h5>';
        demo += '<p class="card-text">' + woment[i].price + '</p>';
        demo += '<a href="#" class="btn btn-primary" style="background-color: red;" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("woment").innerHTML += demo;
    }
}

// Hàm thông báo khi đặt mua
function oder() {
    alert("thank you your order ");
}
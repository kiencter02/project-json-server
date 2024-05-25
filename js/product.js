import { drawProduct } from "./drawProduct.js";
import { buttonSearch, inputSearch, params, filter, paginationNext, paginationPre, paginationNumber, products } from "./variable.js";

// * Vẽ danh sách sản phẩm 
    // Gọi đến hàm drawProduct() trong file drawProduct.js để trả ra 
    // giao diện khi vào web lần đầu
drawProduct();
// * Hết vẽ danh sách sản phẩm

// * Tìm kiếm
    // khi click và nhập giá trị tìm kiếm thì nó sẽ gán lại giá 
    // trị vào params và gọi lại hàm drawProduct()
    // Bên hàm drawProduct() khi giá trị bằng rỗng thì sẽ trả về tất cả sản phẩm
    // Khi giá trị nhập có trùng giá trị với sản phẩm thì sẽ render ra những sản phẩm đó
const search = () => {
    let valueSeacrh = inputSearch.value;
    params.q = valueSeacrh;
    drawProduct();
}
buttonSearch.addEventListener("click", function () {
    search();
});
    //Khi nhập giá trị vào ô tìm kiếm thì nó sẽ gọi sự kiện onkeyup(có nghĩa là khi nhập vào nó sẽ ghi lại những phím mình gõ)
inputSearch.addEventListener("keyup", function(e){
    if(e.key == "Enter"){ //Khi nhấn phím Enter thì nó sẽ vẽ lại giao diện
        search();
    }
})
// * Hết tìm kiếm

// * Filer
filter.addEventListener("change", function (e){
    console.log(e.target.value);
    switch (e.target.value) {
        case "mac-dinh":
            params.sort=``;
            params.order=``;
            break;
        case "gia-thap-den-cao":
            params.sort=`price`;
            params.order=`asc`;
            break;
        case "gia-cao-den-thap":
            params.sort=`price`;
            params.order=`desc`;
            break;
        case "giam-gia-nhieu-nhat":
            params.sort=`discountPercentage`;
            params.order=`desc`;
            break;
        case "tu-a-den-z":
            params.sort=`title`;
            params.order=`asc`;
            break;
        case "tu-z-den-a":
            params.title=`title`;
            params.order=`desc`;
            break;
        default:
            break;
    }
    drawProduct();
})
// * Hết Filter

// * Phân trang
paginationPre.addEventListener("click", function(e){
    if (params.page > 1) {
        params.page = params.page - 1;
        paginationNumber.innerHTML = params.page;
        drawProduct();
    }
})
paginationNext.addEventListener("click", function(e){
    params.page = params.page + 1;
    console.log(params.page);
    paginationNumber.innerHTML = params.page;
    drawProduct();
})
// * Phân trang

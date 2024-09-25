// File này để lấy API và trả ra giao diện
import { API_PRODUCT } from "./constant.js";
import { getApi } from "./getApi.js";
import { products, params } from "./variable.js";

// Bên hàm drawProduct() khi giá trị bằng rỗng thì sẽ trả về tất cả sản phẩm
// Khi giá trị nhập có trùng giá trị với sản phẩm thì sẽ render ra những sản phẩm đó
export const drawProduct = () => {
    // console.log(params); 
    let category = "";
    if (params.category != ""){
        category = `&category=${params.category}`;
    }
    let api = `${API_PRODUCT}?&q=${params.q}&_sort=${params.sort}&_order=${params.order}&_page=${params.page}&_limit=${params.limit}${category}`; // khi có giá trị mới sẽ update
    getApi(api)
        .then((data) => {
            const htmlArray = data.map((item) => {
                let discount = item.discountPercentage.toFixed(0);
                return `
                <div class="product-item">
                    <div class="product-item__image">
                        <img src="${item.thumbnail}" alt="${item.title}" />
                        <span class="product-item__discount">Giảm giá ${discount} %</span>
                    </div>
                    <div class="product-item__content">
                        <h3 class="product-item__title">
                            ${item.title}
                        </h3>
                        <div class="product-item__footer">
                            <span class="product-item__price">${item.price} $</span>
                            <span class="product-item__stock">Còn lại: ${item.stock} sản phẩm</span>
                        </div>
                    </div>
                </div>
            `;
            });
            const htmlString = htmlArray.join("");
            products.innerHTML = htmlString;
        })
}

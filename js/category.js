import { API_CATEGORY } from "./constant.js";
import { getApi } from "./getApi.js";
import { category, params } from "./variable.js";
import { drawProduct } from "./drawProduct.js";

getApi(API_CATEGORY)
    .then ((data) => {
        const htmlArray = data.map((item) => {
            return `
                <div class="category-item" data-category="${item}">
                    ${item}
                </div>
            `;
        });
        const htmlString = htmlArray.join("");
        category.innerHTML = htmlString;

        // * lọc theo danh mục sản phẩm
        category.querySelectorAll(".category-item").forEach(item => {
            item.addEventListener("click", function(){
                params.category = item.dataset.category;
                drawProduct();
            });
        });
        // * xử lý sự kiện trả về tất cả sản phẩm
        let allCategory = document.querySelector("#all-category");
        allCategory.addEventListener("click", function () {
            params.category = "";
            drawProduct();
        });
    });


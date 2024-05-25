export let params = { // chứa các thông số
    q: "", // search
    sort: "",
    order: "",
    page: 1,
    limit: "8",
    category: ""
}; 

export let category = document.querySelector("#category");
export let products = document.querySelector("#products");
export let buttonSearch = document.querySelector("#search button");
export let inputSearch = document.querySelector("#search input");
export let filter = document.querySelector("#filter");
export let paginationNext = document.querySelector("#pagination-next");
export let paginationPre = document.querySelector("#pagination-pre");
export let paginationNumber = document.querySelector("#pagination-number");

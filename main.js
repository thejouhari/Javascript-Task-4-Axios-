async function getProducts(){
    const response = await axios.get("https://dummyjson.com/products")
    const products = response.data.products;

    const result = products.map(function(ele){
        return`
        <div class=product>
        <h2>${ele.title}</h2>
        <img src="${ele.thumbnail}" />
        <a href="details.html?id=${ele.id}">Details</a>
        </div>
        `
    }).join('');

    document.querySelector(".products").innerHTML=result;
};




async function getDetails(){

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const response = await axios.get(`https://dummyjson.com/products/${id}/`)
    const img_details = response.data.images;
    const {description,price,discountPercentage,rating} = response.data;

    document.querySelector(".description").textContent=`Description : ${description}`;
    document.querySelector(".rating").textContent=`Rating : ${rating}`;
    document.querySelector(".price").textContent=`Price : ${price}`;
    document.querySelector(".discountPercentage").textContent=`Discount Percentage : ${discountPercentage}`;
    

    const result = img_details.map(function(ele){
        return`
        <img src="${ele}" />
        `
    });

    document.querySelector(".img_details").innerHTML=result;
};


getProducts();
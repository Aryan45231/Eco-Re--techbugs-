import regular_products from "../Regular_product_section/rgular_products.js";
class Regular{
    products=()=>{
        return(
            regular_products.map((element)=>{
                return(
                    `
                    <a href="./product_detail.html?${element.id}">
                    <div class="card" onclick="">
        <img src="${element.image}" alt="">
        <h2>
            ${element.name}
        </h2>
        <span style="color: green; font-size:4rem">${element.price}</span>
        <span style="font-size: 2rem; color: red;">${element.discount}</span>
    </div> </a>
                    `
                )
            }
         )
     )
  }
 };
 let regu=new Regular;
 export default regu;
 
import deal_products from "./deal_proucts.js";
class Deal_section {
    design=()=>{
        return(
            deal_products.map((element)=>{
                return(`
                <a href="./product_detail.html?${element.id}">
                <div class="card">
                    <h2>${element.name}</h2>
                    <img src="${element.image}" alt="">
                   <div class="price" style="font-size: 40px;">
                       <span>Price: </span>
                       <span style="color: red;">${element.price}</span>
                   </div>
                </div>
                </a>
                `)
            })
        )
    }
};
const deal=new Deal_section;
export default deal;

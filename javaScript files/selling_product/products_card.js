import selling_products from "./user products.js";
class Selling_card_design{
    prod=()=>{
        return(
        selling_products.map((ele)=>{
                return(`</a href="# "><div class="selling_card">
        <div class="product_details"><a href=""><img src="${ele.Image}" alt=""></a>
            <a href="" class="Product_name"><span>${ele.Name}</span></a></div>
        <div class="price">
            <span>Expected Price:</span>
            <span style="color:red ; margin-right: 10px;">${ele.Expeted_price}</span>
        </div>
        <div class="price">
            <span>Sold in :</span>
            <span style="color: green;margin-right: 10px;">${ele.sold_price}</span>
        </div>
        </div>
        </a>`)}
                )
                );
            };
  };
  const selling_card=new Selling_card_design;
  export default selling_card;
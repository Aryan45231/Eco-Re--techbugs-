import deal_products from "../shopping_product_page/Deal_of_the_day_section/deal_proucts.js";
import regular_products from "../shopping_product_page/Regular_product_section/rgular_products.js";
const new_array =deal_products.concat(regular_products);    
// console.log(new_array)
const id= document.location.search
// console.log(id);
const i= Number(id[1]);
// console.log(i);
const object_holder= new_array[i];
// console.log(object_holder);
class Design{
    detail=(element)=>{
        return(
            `
            <div class="container">
            <div class="img">
                <img src="${element.image}" alt="">
            </div>n
            <div class="order">
               <div class="details">
                   <h1> ${element.name}</h1>
                   <p style="font-size: 20px;margin: 5px 10px;"> 
                       ${
                           element.description
                       }
                   </p></div>
                   <h1 style="text-align: right; margin-right: 20px; color:green;">In Stock</h1>
           </div>
            <div class="dis">
               <h1><u>${element.name}</u></h1>
               <div class="price">
                   <span>Price</span>
                   <h1 style="font-size:30px; margin: 10px; color: red;"><u>${element.price}</u></h1>
               </div>
               <div class="price">
                  <span>1ty</span>
                   <select name="quantity" id="" style="width:30px; height: 30px; margin:10px 30px;">
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3  </option>
                       <option value="4">4</option>
                   </select>
               </div>
                   <a href=""><button>Order Now</button></a>
            </div>
        </div>
            `
        )
    }
};
const product_design= new Design;
var holder = document.createElement("div");
document.body.appendChild(holder);
holder.innerHTML=product_design.detail(object_holder);
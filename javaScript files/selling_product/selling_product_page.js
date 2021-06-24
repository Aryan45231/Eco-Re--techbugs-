import selling_card from "./products_card.js";
import user from "../user_details/user_page_design.js";
const sell=document.createElement("div");
document.body.appendChild(sell)
const selling =document.createElement("div");
selling.className="selling";
sell.appendChild(selling);
const your_products = document.createElement("div");
selling.appendChild(your_products);
your_products.className="your_products";
const container = document.createElement("div");
your_products.innerHTML=`  <h1> <u>Your Products</u>  </h1>`;
your_products.appendChild(container);
container.className="selling_card_container";
container.innerHTML=selling_card.prod();
var profile=document.createElement("div");
selling.appendChild(profile);
profile.className="selling_details";
profile.innerHTML= user.user_detail();
// footer 

// const foot_contain=document.createElement("div");
// sell.appendChild(foot_contain);
// foot_contain.innerHTML=foot.footer();
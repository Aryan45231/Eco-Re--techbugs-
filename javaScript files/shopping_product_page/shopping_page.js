// front layout catagary
import front_layout from "./front_section.js";
var front_sec = document.createElement("div");
document.body.appendChild(front_sec);
front_sec.innerHTML=front_layout.front()
//Deal of the day section
import deal from  "./Deal_of_the_day_section/deal_section.js";
import adv from "./Deal_of_the_day_section/advertisment.js";
var deals=document.createElement("div");
document.body.appendChild(deals);
deals.className="deal";
var prodducts=document.createElement("div");
deals.appendChild(prodducts);
prodducts.className='products';
var product_container=document.createElement("div");
prodducts.appendChild(product_container);
product_container.className="product_container";
product_container.innerHTML=deal.design();
 const advirtisment =document.createElement("div");
 prodducts.appendChild(advirtisment);
 advirtisment.className="advirtisment";
 advirtisment.innerHTML=` <a href="">
 <img src="${adv}" alt="">
</a>`;
    // // regular product_section\
import regular_products from "./Regular_product_section/rgular_products.js";
import regu  from "./Regular_product_section/rgular.js";
var regular=document.createElement("div");
document.body.appendChild(regular);
regular.className="regular products";
regular.innerHTML=regu.products();
// footer
// import foot from "../footer/foot.js";
// const foot_contain=document.createElement("div");
// sell.appendChild(foot_contain);
// foot_contain.innerHTML=foot.footer();
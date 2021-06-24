// nav bar 
import navbar from "./indexnav.js"
 var nav_container=document.createElement("div");
 document.body.appendChild(nav_container);
 nav_container.innerHTML=navbar.nav();
 // home page body section
 import home_page from "./home page/home_design.js"
 var home_body= document.createElement("div");
 document.body.appendChild(home_body);
 home_body.innerHTML=home_page.home();
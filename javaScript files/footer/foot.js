class Footer{
    footer= ()=>{
        return(
            `
            <!-- footer        -->
            <div class="footer_container">
                <div class="about_eco-re">
                    <div class="brands">
                      <H3>Eco-Re</H3>
                      <img src="../images/logo.png" alt="">
                    </div>
                    <p style="font-size: 20px;">
                      We are here to help you "to not waste your waste" <br>
                      Eco re , a website for recycling waste products .. Think about recycling and reusing thing and be kind to nature and earth <br>
                      Recycling saves energy and water, lowers pollution and greenhouse gas emissions, improves air and water quality, preserves landfill space and conserves natural resources.  

" Always be the first in recycling and reusing waste products..
                    </p>
                </div>
                <div class="explore">
                  <h3><u> Explore</u></h3>
                  <li><a href="../html Files/indec.html">Home</a></li>
                  <li><a href="../html Files/ABOUT.HTML">About</a></li>
                  <li><a href="../html Files/sign-in.html">sign-in</a></li>
                  <li><a href="../html Files/shopping_page.html">Shopping Page</a></li>
                </div>
                <div class="contact">
                  <h3><u> Contact Us </u></h3>
                  <li>
      
                      <a href=""> United Institute Of Management Akahabad Uttar Pradesh Indis</a>
                  </li>
                  <li>
                      <a href="">7309140755 , 7803425678</a>
                  </li>
                  <li>
                      <a href=""> eco.retb@gmail.com
                    </a>
                  </li>
                </div>
            </div>
            `
        )
    }
};
const foot= new Footer;
const ft=document.createElement("div");
document.body.appendChild(ft)
ft.innerHTML= foot.footer()
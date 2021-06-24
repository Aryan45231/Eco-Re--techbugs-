class Home{
    home=()=>{
        return(`   <!-- cards -->
        <div class="card_container">
            <a href="../html Files/waste_selling_page.html">
            <div class="card">
                 <h1>Sell Waste <br> Products</h1>
            </div>
             </a>
             <a href="../html Files/shopping_page.html">
            <div class="card">
                <h1>Buy Recycle <br>Products</h1>
          </div>
            </a>
        </div>
    
        <!-- discription     -->
        <div class="dis">
            <h1>Give The waste To Buy The Best</h1> 
        </div>
        <!-- sign-in -->
        <div class="sign-in">
            <a href="../html files/sign-in.html"><button>sign-in  </button></a>
        </div>`)
    }
};
var home_page = new Home;
export default home_page;
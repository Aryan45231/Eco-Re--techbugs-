class Nav{
    nav=()=>{
        return(`
        <!-- nav bar -->
    <div class="nav" >
        <div class="brand">
            <a href=""><img src="../images/logo.png" alt=""></a>
           <a href=""><h2><b>Eco-Re</b></h2></a>
        </div>
        <div class="menu">
            <a href="../html Files/ABOUT.HTML">About-us</a>
        </div>
    </div>
        `)
    }
};
var navbar=new Nav;
export default navbar;
class Nav {
    nav=()=>{
        return(`
        <div class="nav">
       <div class="rightnavpart">
       
        <div class="brand">
            <a href="../html Files/indec.html "><img src="../images/logo.png" alt=""></a>
            <a href="../html Files/indec.html">Eco-Re</a>
        </div>
       </div>
       <div class="leftnavpart">
           <div class="menu">
                <a href="../../html Files/sign-in.html"> Sign-in </a>
               <a href="../../html Files/indec.html">Home</a>
               <a href="../../html Files/ABOUT.HTML">About</a>
               <a href="">cart</a>
           </div>
       </div>
    </div>
    <div class="ham_items" id="ham_items">
        <div class="profile">
            <a href=""><img src="https://m.media-amazon.com/images/I/81DuycYl7ZL._AC_UL480_FMwebp_QL65_.jpg" alt=""></a>
            <a href="">Aryan Jaiswal</a>
        </div>
       
    </div>  `)}};
    const nav_bar= new Nav;
    const navbar = document.createElement("div");
    document.body.appendChild(navbar);
    navbar.innerHTML=nav_bar.nav();
    var ham=()=>{
        document.getElementById("icon").classList.toggle("hamicon");
        document.getElementById("ham_items").classList.toggle("show_items")
    }
const sign_up = document.createElement("div");
document.body.appendChild(sign_up);
sign_up.innerHTML=`
<div class="form_container">
<div class="brand trans">
<a href="../html Files/indec.html">Eco-Re</a>
<a href="../html Files/indec.html">
<img src="../images/logo.png" alt=""></a>
</div>
<form action="Sign-Up">
    <h1><u><b>Sign-Up</b></u></h1>
    <h3>Name</h3>
    <input type="text" placeholder="Name" required><br>
    <h3>Phine No:</h3>
    <input type="number" placeholder="Phone Number" required> <br>
    <h3>Date Of Birth</h3>
    <input type="date">
    <h3>Address</h3>
    <input type="text" placeholder="Address" required>
    <h3>Email-Addreaa</h3>
    <input type="email" placeholder="Email-address" required>
    <h3>Password</h3>
    <input type="password" placeholder="Password" required > <br>
   <button type="submit"> Sign-Up</button>
   <h3>Existing account? <a href="../html Files/sign-in.html"> Sign-in</a></h3>
</form>
</div>
`
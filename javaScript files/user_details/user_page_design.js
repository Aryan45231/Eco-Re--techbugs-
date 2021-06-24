import userdetails  from "./user_details.js"
class User{
    user_detail=()=>{
        return(
            userdetails.map((detail)=>{
                return(
                  `<div class="user_profile">
      <div class="user_name">
          <img src="${detail.Profile_image}" alt="">
      <h1>${detail.Name}</h1>
      </div>
      <div class="detail productsell">
          <span>Number of Product sold</span>
          <span>5</span>
      </div>
      <div class="detail name">
          <span>Name</span>
          <span>${detail.Name}</span>
      </div>
      <div class="detail phonenumber">
          <span>Phone:</span>
          <span>${detail.phone_number}</span>
      </div>
      <div class="detail email">
          <span>Email</span>
          <span>${detail.email}</span>
      </div>
      <div class="detail address">
          <span>Address</span>
          <span>${detail.address}</span>
      </div>
      <a href=""><button>Edit Profile</button></a>
   </div> `
                )
            })
        )
    }
};
const user=new User;
export default user;
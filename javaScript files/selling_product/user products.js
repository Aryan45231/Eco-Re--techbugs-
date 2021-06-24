const selling_products=[
    // products details
    {
        id:0,
        Image:"../../images/selling_product/broken_cabinet.jpg",
        Name:"Broken Cabinet",
        Expeted_price:2700,
        sold_price: 2300
    },
    {
        id:1,
        Image:"../../images/selling_product/broken_mirror.jpg",
       Name:"Broken Mirror",
       Expeted_price:1800,
       sold_price: 1500
    },
    {
        id:2,
        Image:"../../images/selling_product/broken_keyboard.jpg",
       Name:"Broken Keyboard",
       Expeted_price:500,
       sold_price: 350
    },
    {
        id:3,
        Image:"../../images/selling_product/used_tyres.jpg",
       Name:"Used Rubber Tyres",
       Expeted_price:2400,
       sold_price: 2100
    },  
    {
        id:4,
        Image:"../../images/selling_product/rusted_wrench_set.jpg",
       Name:"Rusted Wrench Set",
       Expeted_price:850,
       sold_price: 500
    }
];
selling_products.push({
id:selling_products.length-1,
Image:"https://th.bing.com/th?q=Plus+Sign+Template&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.56&pid=InlineBlock&mkt=en-IN&adlt=moderate&t=1&mw=247",
Name:"Add Product",
Expeted_price:"---",
sold_price:'---'
});
export default selling_products;
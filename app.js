// console.log('hello bawapat');

const  
    products= [
      {
        id: 1,
        name: "Smartphone",
        description: "Latest model with advanced features",
        price: 699.99,
        category: "Electronics",
        stock: 50,
        images: ["image1.jpg", "image2.jpg"],
        ratings: 4.5,
      },
        {
          id: 1,
          name: "Smartphone",
          description: "Latest model with advanced features",
          price: 699.99,
          category: "Electronics",
          stock: 50,
          images: ["image1.jpg", "image2.jpg"],
          ratings: 4.5
        },
        {
          id: 2,
          name: "Laptop",
          description: "High-performance laptop for gaming and work",
          price: 1199.99,
          category: "Electronics",
          stock: 30,
          images: ["image3.jpg", "image4.jpg"],
          ratings: 4.7
        },
        {
          id: 3,
          name: "Headphones",
          description: "Noise-cancelling over-ear headphones",
          price: 199.99,
          category: "Accessories",
          stock: 100,
          images: ["image5.jpg", "image6.jpg"],
          ratings: 4.3
        }
      ];
      
      
      

    

console.log(products)
const div=document.querySelector('div')
for (let i = 0; i < products.length; i++) {
console.log(products[i]);
div.innerHTML +=`<h1>${products[i].name}<h1>
<h5>${products[i].id}<h5>
<h5>${products[i].price}<h5>
<h5>${products[i].ratings}<h5>
<h5>${products[i].category}<h5>
<h5>${products[i].stock}<h5>
<h5>${products[i].description}<h5>





`
    
}
         
const panier = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 }
  ];
  
  const totalTTC = panier
    .map(p => p.price * 1.25)
    .reduce((price,newprice) =>price+newprice,0);
  
  console.log(totalTTC); 
  


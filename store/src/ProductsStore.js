const productsArray = [
  {
    id: "price_1MlssHJatKHrupv6CjiaGMFQ",
    title: "Logitech G502 HERO",
    price: 34.99,
    // imgUrl: "/src/images/ProductStoreImage.png"
  },
  {
    id: "price_1MlsvXJatKHrupv6IKVNv9xf",
    title: "MAD CATZ R.A.T.",
    price: 108.44,
  },
  {
    id: "price_1MlsytJatKHrupv6C5Y0hrAI",
    title: "STEELSERIES Aerox 5",
    price: 49.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }
  return productData; 
}

export { productsArray, getProductData };

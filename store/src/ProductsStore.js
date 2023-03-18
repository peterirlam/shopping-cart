const productsArray = [
  {
    id: "price_1MlssHJatKHrupv6CjiaGMFQ",
    title: "Logitech G502 HERO",
    description: "11 programmable buttons and dual mode hyper-fast scroll wheel: The Logitech wired gaming mouse gives you fully customisable control over your gameplay.",
    price: 34.99,
    // imgUrl: "/src/images/ProductStoreImage.png"
  },
  {
    id: "price_1MlsvXJatKHrupv6IKVNv9xf",
    title: "MAD CATZ R.A.T.",
    description: "Armed with the top of the range Pixart PMW 3389 optical sensor, the R.A.T. 8+ is capable of keeping up with extreme movement speeds of up to 400 inches per second and 50G of acceleration.",
    price: 108.44,
  },
  {
    id: "price_1MlsytJatKHrupv6C5Y0hrAI",
    title: "STEELSERIES Aerox 5",
    description: "With the perforated design, the RGB lighting shines through - there are 3 zones to be set up with colours and effects, plus you can sync with all your other SteelSeries peripherals.",
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

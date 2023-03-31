// sk_test_51MlsYIJatKHrupv6K1jpugHYafS21yPiCfiSzIcx1eGhdqSUr8aGt8ZUfip6CNbWedz4CXFM0SuCPPaRb82b58K400lMHcanY1;

// Logitech G502 HERO: price_1MlssHJatKHrupv6CjiaGMFQ
// MAD CATZ R.A.T.: price_1MlsvXJatKHrupv6IKVNv9xf
// STEELSERIES Aerox 5 RGB Optical Gaming Mouse: price_1MlsytJatKHrupv6C5Y0hrAI

const express = require("express");
var cors = require("cors");
const stripe = require("stripe")("sk_test_51MlsYIJatKHrupv6K1jpugHYafS21yPiCfiSzIcx1eGhdqSUr8aGt8ZUfip6CNbWedz4CXFM0SuCPPaRb82b58K400lMHcanY1");
const path = require("path");
// create express server
const app = express();
const port = process.env.PORT || 5000;
// use our middleware cors
app.use(cors());
// recommended by stripe docs as it wants our express app to use this
app.use(express.static(path.join(__dirname, "store/build")));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  console.log(req.body);
  // converting our array into the lineItems array that Stripe wants
  const items = req.body.items;
  let lineItems = [];
  // create a new array in the format that Stripe wants for us to process payments
  items.forEach((item) => {
    lineItems.push({ price: item.id, quantity: item.quantity });
  });
  // initiate session with stripe
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "https://gaming-mouse-app.herokuapp.com/success",
    cancel_url: "https://gaming-mouse-app.herokuapp.com/cancel",
  });

  res.send(JSON.stringify({ url: session.url }));
});
app.get("/test", (req, res) => {
  res.send("Api is working");
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/store/build/index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NN9ECSGe9zqVhkuOjHcdhkjoBsX7QKdVLsUeUzdvd49JxgKztm2mAzhXhk4LNjdr4k6WolbVJMOf0SkukrvSBNK00JtmU59wu"
);
const functions = require("firebase-functions");

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Recieved! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

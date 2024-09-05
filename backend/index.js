const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
require('dotenv').config();
const db = process.env.MONGO_DB_URI;

app.use(express.json());
app.use(cors());

// db connect mongodb
mongoose.connect(`${db}`);

// api creation
app.get("/", (req, res) => {
  res.send("Express app is running");
});

// image storage
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage: storage });

// creating upload endpoint for images
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    imageUrl: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

// schema for create product
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    normalPrice: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
      required: true,
    },
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let lastProductArray = products.slice(-1);
    let lastProduct = lastProductArray[0];
    id = lastProduct.id + 1;
  } else {
    id = 1;
  }
  const product = new Product({
    id: id,
    ...req.body,
  });
  console.log(product);
  await product.save();
  console.log("Saved");
  res.json({
    success: true,
    title: req.body.title,
  });
});

// Creating API deleting product
app.post("/deleteproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Deleted");
  res.json({
    success: true,
    title: req.body.title,
  });
});

// Creating API getting all product
app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("All Products fetched");
  res.send(products);
});

// schema for user
const Users = mongoose.model("Users", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cart: {
    type: Object,
  },
});

// creating endpoint register
app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({ status: false, errors: "Email is already use" });
  }
  let cart = [];
  const user = new Users({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    cart: cart,
  });
  await user.save();
  const data = {
    user: {
      id: user.id,
    },
  };

  const token = jwt.sign(data, "secret_ecom");
  res.json({ success: true, token });
});

// creating endpoint login
app.post("/signin", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passwordCompare = req.body.password === user.password;
    if (passwordCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_ecom");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, errors: "Wrong password" });
    }
  } else {
    res.json({ success: false, errors: "Wrong email" });
  }
});

//middleware fetch user
const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).ssend({ errors: "Please authenticate using validate token" });
  } else {
    try {
      const data = jwt.verify(token, "secret_ecom");
      req.user = data.user;
      next();
    } catch (error) {
      res.static(401).send({ errors: "Please authenticate using validate token" });
    }
  }
};

// endpoint addtocart
app.post("/addtocart", fetchUser, async (req, res) => {
  try {
    let userData = await Users.findOne({ _id: req.user.id });
    const cartProducts = req.body.cartProducts;
    const checkExist = userData.cart.find((product) => product.id === cartProducts.id);
    if (checkExist) {
      checkExist.qty += 1;
    } else {
      userData.cart.push(cartProducts);
    }
    await Users.findOneAndUpdate({ _id: req.user.id }, userData);
    console.log(cartProducts);
    console.log(userData);
  } catch (error) {
    console.error(error);
  }
});
// endpoint remove product
app.post("/deletefromcart", fetchUser, async (req, res) => {
  try {
    let userData = await Users.findOne({ _id: req.user.id });
    const cartProducts = req.body.deleteCart;
    const checkExist = userData.cart.find((product) => product.id === cartProducts.id);
    if (checkExist) {
      userData.cart = userData.cart.filter((product) => product.id !== cartProducts.id);
    }
    await Users.findOneAndUpdate({ _id: req.user.id }, userData);
    console.log(cartProducts);
    console.log(userData);
  } catch (error) {
    console.error(error);
  }
});
// endpoint plus cart
app.post("/pluscart", fetchUser, async (req, res) => {
  try {
    let userData = await Users.findOne({ _id: req.user.id });
    const cartProducts = req.body.plusQty;
    const checkExist = userData.cart.find((product) => product.id === cartProducts.id);
    if (checkExist) {
      checkExist.qty += 1;
    }
    await Users.findOneAndUpdate({ _id: req.user.id }, userData);
    console.log(cartProducts);
    console.log(userData);
  } catch (error) {
    console.error(error);
  }
});
// endpoint plus cart
app.post("/minuscart", fetchUser, async (req, res) => {
  try {
    let userData = await Users.findOne({ _id: req.user.id });
    const cartProducts = req.body.minusQty;
    const checkExist = userData.cart.find((product) => product.id === cartProducts.id);
    if (checkExist) {
      checkExist.qty -= 1;
    }
    await Users.findOneAndUpdate({ _id: req.user.id }, userData);
    console.log(cartProducts);
    console.log(userData);
  } catch (error) {
    console.error(error);
  }
});
// endpoint getcart from user
app.post("/getcart", fetchUser, async (req, res) => {
  let userData = await Users.findOne({ _id: req.user.id });
  res.json(userData.cart)
})

app.listen(port, (error) => {
  if (!error) {
    console.log("Server running on port " + port);
  } else {
    console.log("Error : " + error);
  }
});

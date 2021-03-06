const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const stripeRoute = require('./routes/stripe');
const emailRoute = require('./routes/email');

// Connect MongoDB

console.log(process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('DB connected!'))
  .catch((err) => console.error(err));

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// CRUD routes for users
app.use('/api/users', userRoute);

// CRUD routes for products
app.use('/api/products', productRoute);

// CRUD routes for carts
app.use('/api/carts', cartRoute);

// CRUD routes for orders
app.use('/api/orders', orderRoute);

// Login and Register routes
app.use('/api/auth', authRoute);

// Stripe Payment
app.use('/api/checkout', stripeRoute);

// Newsletter Route
app.use('/api/newsletter', emailRoute);

app.listen(process.env.PORT || 5000, () => console.log('Server started'));

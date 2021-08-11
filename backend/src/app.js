const express = require('express');
const app = express();
const env = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 2000;

//Routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const initialDataRoutes = require('./routes/admin/initialData');
const pageRoutes = require('./routes/admin/page');
const addressRoutes = require('./routes/address');
const orderRoutes = require('./routes/order');
const adminOrderRoute = require('./routes/admin/order.routes');

//Environment variables or constants
env.config;

//mongodb connection
mongoose.connect(`mongodb+srv://root:admin@cluster0.85bcs.mongodb.net/ecommerce?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('database connected');
}).catch((error)=> {
    console.log(error);
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public',express.static(path.join(__dirname, 'uploads')))
app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);
app.use('/api', initialDataRoutes);
app.use('/api', pageRoutes);
app.use('/api', addressRoutes);
app.use('/api', orderRoutes);
app.use('/api', adminOrderRoute);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
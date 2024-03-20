const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");
const app = express()

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use('/api/products', productRoute);


app.get('/',(req, res) => {
    res.send("Hello from Node API server")
});

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


app.get('/api/product/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});




mongoose.connect("mongodb+srv://shrinivas:Pass7767@backenddb.ve8idfi.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connectd to database!");
    app.listen(3000, () =>{
        console.log('server is running on port 3000');
    });
})
.catch(() => {
    console.log("connection failed!")
})



const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Pizza = require('./models/pizzaModel.js');  // Adjust path as needed
const pizzasRoute = require('./routes/pizzaRoutes.js')
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://cart_224:Capa11086@cluster0.yhuey.mongodb.net/pizza-palase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Mongodb connected successfully!!'))
.catch(err => console.log('Failed to connect to MongoDB:', err));

app.get('/getpizzas', async (req, res) => {
    try {
        const pizzas = await Pizza.find({});
        res.send(pizzas);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

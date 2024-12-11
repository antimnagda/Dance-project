const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/customer');


const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: String,
    address: String,
    info: String
});

const contact = mongoose.model('contact', contactSchema);



// ENDPOINTS
app.get('/', (req, res) => {

    res.status(200).render('home.pug');
}
)
app.get('/register', (req, res) => {

    res.status(200).render('register.pug');
}
)
app.post('/register', (req, res) => {
    var myData = new contact(req.body);
    myData.save().then(() => {
        res.send("this data has been saved to the database")
    }).catch(() => {
        res.status(400).send("data is not saved to data base")
    })
})
// console.log(customer.elements);
// fetch('customer', {
//     method: 'POST',
//     body: new FormData(customer)
// })
// .then(response => response.json())
// .then(data => console.log(data));




// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});

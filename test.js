const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/customer')
    .then(() => {
        // Connect to the database directly
        const contact = require('./your-contact-model'); // Assuming your model is in a separate file

        const testData = { name: 'Test User', email: 'test@example.com',};
        const newContact = new contact(testData);

        newContact.save()
            .then(() => console.log('Data saved successfully'))
            .catch(error => console.error('Error saving data:', error));
    })
    .catch(error => console.error('Error connecting to database:', error));
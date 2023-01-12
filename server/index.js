const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


require('dotenv').config();
app.use(cors());
app.use(express.json());


const UserModel = require('./models/User');

mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true,
},() => {
    console.log("Connected to Database Successfully");
});

app.post('/addUser', async(req,res) => {
    // Grab data from frontend
    const user = req.body.username;
    const email = req.body.usermail;
    const message = req.body.usermessage;

    const NewUser = new UserModel({
        username: user,
        usermail: email,
        usermessage: message,
    });

    try {
        await NewUser.save();
        res.send("User Added Successfully");
    } catch (error) {
        console.log(error);
    }
});


const port = 5000;
app.listen(() => console.log(`Server running on port ${port}`));
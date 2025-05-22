const express = require('express');
const app = express();

const db = require('./db');
require('dotenv').config();

const Person = require('./models/Person');
const MenuItem = require('./models/MenuItem')

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body
const PORT = process.env.PORT || 3000;



app.get('/', (req, res) => {
  res.send('Welcome to my Hotel, How can I help You.');
})




 //POST Method to add a Menu Item
 app.post('/menu', async(req, res) => {
  try {
    const data = req.body
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
    console.log('data saved');
    res.status(200).json(response);
  } catch(err) {
    console.log(err);
    res.status(500).json( {error: 'Internal Server Error'});
  }
 })

 //Get Method to get the Menu items
 app.get('/menu', async(req, res) => {
     try{
      const data = await MenuItem.find();
      console.log('data fetched');
      res.status(200).json(data);

     }catch(err){
          console.log(err);
          res.status(500).json({error: 'Internal Server Error'});
     }
 })


 // Import the router files
 const personRoutes = require('./routes/personRoutes');

 // Use the Routes
 app.use('/person', personRoutes)



app.listen(PORT, () => {
  console.log('listening on port 3000');
});

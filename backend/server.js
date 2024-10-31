const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/index');
require('dotenv').config();
require('express-async-errors');
const mainRouter = require("./routes/user")

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use("/api/v1", mainRouter);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Atlas connected'))
.catch((err) => console.error('Error connecting to MongoDB Atlas:', err));


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const leagueSchema = new mongoose.Schema({
    leagueName: String,
    leagueType: String,
    numPlayers: Number,
  });
  
  const League = mongoose.model('League', leagueSchema);
  
  // Route to create a new league
  app.post('/api/leagues', async (req, res) => {
    const { leagueName, leagueType, numPlayers } = req.body;
  
    if (!leagueName || !leagueType || !numPlayers) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      const newLeague = new League({
        leagueName,
        leagueType,
        numPlayers,
      });
  
      await newLeague.save();
      res.status(201).json({ message: 'League created successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Error creating league' });
    }
  });

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
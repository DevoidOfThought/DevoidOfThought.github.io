const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://mernchat:L5l3OJDb5Ocuxlt4@cluster0.spcbjww.mongodb.net/?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})


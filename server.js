const mongoose = require('mongoose');

const app = require('./app');

const { DB_HOTS, PORT } = process.env;

mongoose.connect(DB_HOTS)
  .then(()=> {
    app.listen(PORT, () => {
      console.log('Database connection successful');
    })
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  })
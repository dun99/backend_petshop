const mongoose = require('mongoose');
async function connect() {
  try {
    // await mongoose.connect('mongodb://localhost:27017/petdb');
    await mongoose.connect(
      'mongodb+srv://dun0624:zinu@cluster0.dau4p.mongodb.net/petdb?retryWrites=true&w=majority'
    );
    console.log('success');
  } catch (err) {
    console.log('failed');
    return err;
  }
}

module.exports = { connect };

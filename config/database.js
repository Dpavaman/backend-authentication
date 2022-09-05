const mongoose = require('mongoose');

const { MONGODB_URL } = process.env;

exports.connect = () => {
    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("DB CONNECTION ESTABLISHED")).catch((error) => {
        console.log('DB CONNECTION FAILED', error)
        process.exit(1)
    })
}
const app = require('./index')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })

mongoose.connect(process.env.CONN_STR, {
    useNewUrlParser: true
}).then((conn) => {
    console.log("DB Connection Successfull");
    // console.log(conn);
}).catch((err) => {
    console.log(err.message);
})

// CREATE SERVER
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});
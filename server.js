const app = require('./index')

// CREATE SERVER
const PORT = 8001;
app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});
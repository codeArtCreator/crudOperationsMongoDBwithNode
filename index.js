const express = require('express')
const fs = require('fs')

const app = express()
const mobiles = JSON.parse(fs.readFileSync('./data/mobiles.json'))

//GET - api/mobiles
app.get('/api/v1/mobiles', (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            mobiles: mobiles
        }
    })
})


//CREATE SERVER
const PORT = 8001
app.listen(PORT, () => {
    console.log('Server Running');
})
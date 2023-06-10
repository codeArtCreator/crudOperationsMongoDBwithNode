const express = require('express')
const fs = require('fs')

const app = express()
const mobiles = JSON.parse(fs.readFileSync('./data/mobiles.json'))
app.use(express.json())

//GET - api/mobiles
app.get('/api/v1/mobiles', (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            mobiles: mobiles
        }
    })
})

//POST - api/mobiles
app.post('/api/v1/mobiles', (req, res) => {
    const newId = mobiles[mobiles.length - 1].id + 1
    const newMobile = Object.assign({ id: newId }, req.body)
    console.log(req.body);

    mobiles.push(newMobile)
    fs.writeFile('./data/mobiles.json', JSON.stringify(mobiles), (err) => {
        res.status(201).json({
            status: "success",
            data: {
                mobile: newMobile,
            }
        })
    })
})


//CREATE SERVER
const PORT = 8001
app.listen(PORT, () => {
    console.log('Server Running');
})
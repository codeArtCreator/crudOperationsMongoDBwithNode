const express = require('express');
const fs = require('fs');

const app = express();
const mobiles = JSON.parse(fs.readFileSync('./data/mobiles.json'));
app.use(express.json());

//ROUTE HANDLER FUNCTIONS
const getAllMobiles = (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            mobiles: mobiles
        }
    });
}
//CREATE MOBILE
const createMobile = (req, res) => {
    const newId = mobiles[mobiles.length - 1].id + 1;
    const newMobile = { id: newId, ...req.body };
    mobiles.push(newMobile);
    fs.writeFile('./data/mobiles.json', JSON.stringify(mobiles), (err) => {
        res.status(201).json({
            status: "success",
            data: {
                mobile: newMobile,
            }
        });
    });
}
//GET MOBILE
const getMobile = (req, res) => {
    const id = req.params.id * 1;
    const mobileById = mobiles.find(mobile => mobile.id === id);

    if (!mobileById) {
        return res.status(404).json({
            status: "fail",
            message: `No data found with id: ${id}`
        });
    }
    res.status(200).json({
        status: "success",
        data: {
            mobile: mobileById
        }
    });
}
//UPDATE MOBILE
const updateMobile = (req, res) => {
    const id = req.params.id * 1;
    const mobileToUpdate = mobiles.find(mobile => mobile.id === id);

    if (!mobileToUpdate) {
        return res.status(404).json({
            status: "failed",
            message: `No mobile found with id: ${id}`
        });
    }

    Object.assign(mobileToUpdate, req.body); // TO UPDATE

    fs.writeFile('./data/mobiles.json', JSON.stringify(mobiles), (err) => {
        res.status(200).json({
            status: "success",
            data: {
                mobile: mobileToUpdate
            }
        });
    });
}
//DELETE MOBILE
const deleteMobile = (req, res) => {
    const id = req.params.id * 1;
    const mobileToDelete = mobiles.find(mobile => mobile.id === id);

    if (!mobileToDelete) {
        return res.status(404).json({
            status: "failed",
            message: `No mobile found with id: ${id}`
        });
    }

    const index = mobiles.indexOf(mobileToDelete);
    mobiles.splice(index, 1); // DELETE ITEM

    fs.writeFile('./data/mobiles.json', JSON.stringify(mobiles), (err) => {
        res.status(204).json({
            status: "success",
            data: {
                mobile: null
            }
        });
    });
}
//
// app.get('/api/v1/mobiles', getAllMobiles);
// app.post('/api/v1/mobiles', createMobile);
// app.get('/api/v1/mobiles/:id', getMobile);
// app.patch('/api/v1/mobiles/:id',updateMobile);
// app.delete('/api/v1/mobiles/:id', deleteMobile);

app.route('/api/v1/mobiles')
    .get(getAllMobiles)
    .post(createMobile)
app.route('/api/v1/mobiles/:id')
    .get(getMobile)
    .patch(updateMobile)
    .delete(deleteMobile)

// CREATE SERVER
const PORT = 8001;
app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});

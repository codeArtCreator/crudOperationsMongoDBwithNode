const fs = require('fs');

const mobiles = JSON.parse(fs.readFileSync('./data/mobiles.json'));


exports.checkId = (req, res, next, value) => {
    const id = value * 1;
    const mobile = mobiles.find(mobile => mobile.id === id);
    if (!mobile) {
        return res.status(404).json({
            status: "failed",
            message: `No mobile found with id: ${id}`
        });
    }

    next();
}

//ROUTE HANDLER FUNCTIONS
exports.getAllMobiles = (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            mobiles: mobiles
        }
    });
}
//CREATE MOBILE
exports.createMobile = (req, res) => {
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
exports.getMobile = (req, res) => {
    const id = req.params.id * 1;
    const mobileById = mobiles.find(mobile => mobile.id === id);

    // if (!mobileById) {
    //     return res.status(404).json({
    //         status: "fail",
    //         message: `No data found with id: ${id}`
    //     });
    // }
    res.status(200).json({
        status: "success",
        data: {
            mobile: mobileById
        }
    });
}
//UPDATE MOBILE
exports.updateMobile = (req, res) => {
    const id = req.params.id * 1;
    const mobileToUpdate = mobiles.find(mobile => mobile.id === id);

    // if (!mobileToUpdate) {
    //     return res.status(404).json({
    //         status: "failed",
    //         message: `No mobile found with id: ${id}`
    //     });
    // }

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
exports.deleteMobile = (req, res) => {
    const id = req.params.id * 1;
    const mobileToDelete = mobiles.find(mobile => mobile.id === id);

    // if (!mobileToDelete) {
    //     return res.status(404).json({
    //         status: "failed",
    //         message: `No mobile found with id: ${id}`
    //     });
    // }

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
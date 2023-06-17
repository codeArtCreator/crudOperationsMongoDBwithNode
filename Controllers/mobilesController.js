const fs = require('fs');
const Mobile = require('../Models/mobileModel');

//ROUTE HANDLER FUNCTIONS
//GET ALL MOBILES
exports.getAllMobiles = async (req, res) => {
    try {
        const mobile = await Mobile.find();
        res.status(201).json({
            status: "success",
            length: mobile.length,
            data: {
                mobile
            }
        })
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }

}
//CREATE MOBILE
exports.createMobile = async (req, res) => {
    try {
        const mobile = await Mobile.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                mobile
            }
        })
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }

}
//GET MOBILE
exports.getMobile = async (req, res) => {
    try {
        // const mobile = await Mobile.find({_id: req.params.id});
        const mobile = await Mobile.findById(req.params.id)
        res.status(201).json({
            status: "success",
            data: {
                mobile
            }
        })
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}
//UPDATE MOBILE
exports.updateMobile = async (req, res) => {
    try {
        const updatedMobile = await Mobile.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        res.status(201).json({
            status: "success",
            data: {
                updatedMobile
            }
        })
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}
//DELETE MOBILE
exports.deleteMobile = async (req, res) => {
    try {
        await Mobile.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: "success",
            message: "File deleted successfully"
        })
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}
require('express').Router();
const { userModel } = require('../models/userModel');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
    try {
        const { userName, email, password, role } = req.body;
        const newPassword = await bcrypt.hash(password, 10);
        let duplicate = await userModel.findOne({ email });
        if (duplicate) {
            throw Error('User Already Exists')
        }

        const newUser = new userModel({ userName, email, password: newPassword, role })
        await newUser.save()
            .then(() => {
                res.status(200).json({ mssg: 'User Added' })
            })
            .catch((err) => {
                res.status(401).json(err)
            })
    }
    catch (err) {
        console.log(err)
        res.status(401).json({ mssg: 'Unable to create a new User' })
    }
    
}

const getAllUsers = async (req, res) => {
    // const { role } = req.body;
    // const userRole = req.params.role;
    await userModel.find()
        .then(studentInfo => res.status(200).json({ studentInfo }))
        .catch((err) => {
            console.log(err)
            res.status(400).json({ error: "Error occurred" })
        })
}

const getOneUser = async (req, res) => {
    const userID = req.params.id;
    await userModel.findOne({ userID })
        .then(studentInfo => res.status(200).json({ studentInfo }))
        .catch((err) => {
            console.log(err)
            res.status(400).json({ error: "Error occurred" })
        })
}

const updateUser = async (req, res) => {
    const userID = req.params.id;
    const { userName, email, password } = req.body;
    const updtPassword = await bcrypt.hash(password, 10);
    const updated = await userModel.findByIdAndUpdate(userID, { userName: userName, email: email, password: updtPassword })
        .then(() => {
            res.status(200).json({ status: "User updated"})
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({ status: "Error occurred", error: err.mssg })
        })
}

const deleteUser = async (req, res) => {
    const userID = req.params.id;
    await userModel.findByIdAndDelete({ userID })
        .then(() => {
            res.status(200).json({ status: "User deleted" })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({ status: "Unable to delete the user", error: err.mssg })
        })
}

module.exports = { getAllUsers, getOneUser, updateUser, deleteUser, createUser };
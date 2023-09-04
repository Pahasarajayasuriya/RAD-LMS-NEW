require('express').Router()
const { userModel } = require('../models/userModel')
const bcrypt = require('bcrypt')

const createUser = async (req, res) => {
    const { name, email, userId, password, userRole } = req.body
    const newPassword = await bcrypt.hash(password, 10);
        let duplicate = await userModel.findOne({ email });
        if (duplicate) 
            return res.json('User already exists')

        const newUser = new userModel({ name, email, userId, password: newPassword, userRole })
        await newUser.save()
            .then(() => {
                res.status(200).json({ mssg: 'User Added' })
            })
            .catch((err) => {
                res.status(401).json(err)
            })
}

const getAllUsers = async (req, res) => {
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
    const { name, email, password } = req.body;
    const updtPassword = await bcrypt.hash(password, 10);
    const updated = await userModel.findByIdAndUpdate(userID, { name: name, email: email, password: updtPassword })
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

module.exports = {
    createUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
}
import express from "express";
const teachers = express.Router();
teachers.get('/', (req, res) => {
    res.send('from teachers router')
});
export default teachers;

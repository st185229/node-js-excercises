import express from "express";
const students = express.Router();
students.get('/', (req, res) => {
    res.send('from students router')
});
export default students;

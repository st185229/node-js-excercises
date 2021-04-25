import express from "express";
const defaulter = express.Router();
defaulter.get('/', (req, res) => {
    res.send('from defaulter router')
});
export default defaulter;

import express from "express";
const api = express.Router();
api.get('/', (req, res) => {
    res.send('from api router')
});
export default api;

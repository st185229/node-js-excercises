import express from "express";

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
    res.send('Server working')
});

app.listen(port, () =>{
    console.log(`Server started working at http://localhost:${port}`);
})

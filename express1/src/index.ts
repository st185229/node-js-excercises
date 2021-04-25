import express from "express";
import api from "./routes/api/api";
import teachers from "./routes/api/teachers";
import students from "./routes/api/students";
import defaulter from "./routes/api/default";

const app = express();
const port = 3000;

app.use('/', defaulter);
app.use('/api', api);
app.use('/api/teachers', teachers);
app.use('/api/students', students);


app.listen(port, () =>{
    console.log(`Server started working at http://localhost:${port}`);
})

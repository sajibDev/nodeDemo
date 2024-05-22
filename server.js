import express from 'express';
import studentController from "./src/controller/StudentController.js";
const port = 8080;
const app = express();
app.get('/', (req, res) => res.send("Welcome to my serverrrrr!"));
app.get('/students', studentController );
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });



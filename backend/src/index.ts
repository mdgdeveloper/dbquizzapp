import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from "helmet";


const app = express();
app.use(express.json())


const port = 3001;

app.get('/', (_req, res) => {
    res.send('DB Quizz App / API version 0.1 alpha');
});


app.listen(port, () => {
    console.log(`API system listening at http://localhost:${port}`)
  })
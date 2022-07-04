require('dotenv').config()
const express = require('express');
const cors = require('cors');

const indRouter = require('./routers/index.router');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/', indRouter);

app.listen(port, () => console.log(`server is running on port ${port}`));
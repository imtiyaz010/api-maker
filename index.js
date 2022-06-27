const express = require('express');
const cors = require('cors');

const indRouter = require('./routers/index.router');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', indRouter);

app.use('/', (req, res) => {
    res.send('hello from heroku!');
});

app.listen(port, () => console.log(`server is running on port ${port}`));
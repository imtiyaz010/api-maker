const dbConnect = require('../mongo/mongodb');
const { ObjectId } = require('mongodb');

module.exports.createApiMaker = async (req, res) => {
    const collection = 'apis';
    let db = await dbConnect(collection);
    const data = await db.insertOne(req.body);
    const id = data.insertedId.toString();
    const url = `https://apis-maker.herokuapp.com/api/apimaker/${id}`
    res.send({ url });
}

module.exports.readApiMaker = async (req, res) => {
    const { id } = req.params;
    const collection = 'apis';
    let db = await dbConnect(collection);
    const data = await db.find({ _id: ObjectId(id) }).toArray();
    res.send(data);
}

module.exports.updateApiMaker = async (req, res) => {
    const { id } = req.params;
    const collection = 'apis';
    let db = await dbConnect(collection);
    await db.updateOne({ _id: ObjectId(id) }, {
        $set: req.body
    });
    const url = `https://apis-maker.herokuapp.com/api/apimaker/${id}`
    res.send({ url });
}
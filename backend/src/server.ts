import express, { json } from 'express';
import { MongoClient, Db } from 'mongodb';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';

const app = express();
const port = 8000;
app.use(express.json())
class User {
  _id!: string;
  username!: string;
  password!: string;
}
const withDB = async (operations: any, res: any) => {
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true })
    const db = client.db('prvn');
    await operations(db);

    client.close();
  }
  catch (err) {
    res.status(500).json({ message: "error connecting to db", err });
  }
}

app.post(`/api/login`, async(req, res) => {
  var body:User = req.body
  if(body){
    withDB(async (db: Db) => {
      const user:User = await db.collection('user').findOne({ _id: body._id})
      await db.collection('user').updateOne({
        _id: body._id
    }, {
        '$set': {
            username: body.username 
        }
    });
    const user1:User = await db.collection('user').findOne({ _id: body._id})
    res.status(200).json(user1);
   }, res);
  }
});

app.get('/api/login',async (req, res) => {
  let x = new User()
  x._id=`${Math.floor(Math.random() * Date.now())}`;
  withDB(async (db: Db) => {
    await db.collection('user').insertOne({ _id: x._id })
    const user: User = await db.collection('user').findOne({ _id: x._id })
    res.status(200).json(user);
  }, res);
});


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

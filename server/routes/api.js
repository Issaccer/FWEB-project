const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
var db;
MongoClient.connect('mongodb+srv://test1:testone1@fweb.zdz0q.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true ,
useUnifiedTopology: true }, (err, database) => {
if (err) return console.log(err);
db = database.db('miniprojectDB');
});
// create new post
router.route('/posts).post(function (req, res) {
db.collection('posts').insertOne(req.body, (err, results) => {
if (err) return console.log(err);
console.log('saved to database');
res.send(results);
}
)
}
);
module.exports = router;
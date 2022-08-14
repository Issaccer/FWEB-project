const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const bcrypt = require('bcryptjs');
const BCRYPT_SALT_ROUNDS = 12;

// declare axios for making http requests
const axios = require('axios');

// get API listing
router.get('/', (req, res) => {
    res.send('api works');
});

var db;
MongoClient.connect('mongodb+srv://test1:testone1@fweb.zdz0q.mongodb.net/miniprojectDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, database) => {
    if (err) return console.log(err);
    db = database.db('miniprojectDB');
});

// get selected post's data by id
router.route('/posts/:_id').get(function(req, res) {
    db.collection('posts').findOne( {"_id": ObjectId(req.params._id)},
     (err, results) => { 
    res.send(results);
    });
  });

// create new post
router.route('/posts').post(function (req, res) {
    db.collection('posts').insertOne(req.body, (err, results) => {
        if (err) return console.log(err);
        console.log('saved to database');
        res.send(results);
    });
});
// retrieve all posts
router.route('/posts').get(function (req, res) {
    db.collection('posts').find().toArray(function (err, results) {
        if (err) return console.log(err);
        console.log(results);
        res.send(results);
    });
});
// delete post based on id
router.route('/posts/:_id').delete(function (req, res) {
    db.collection('posts').deleteOne({ "_id": ObjectId(req.params._id) }, (err,
        results) => {
        res.send(results);
    });
});

// update post based on id
router.route('/posts/:_id').put(function (req, res) {
    db.collection('posts').updateOne({ "_id": ObjectId(req.params._id) }, {
        $set: req.body
    }, (err, results) => {
        res.send(results);
    });
});

router.route('/authuser').post(function (req, res2) {
    var name = req.body.name;
    var password = req.body.password;
    db.collection('users').findOne({ "name": name }, {
        password: 1, role: 1,
        _id: 0
    }, function (err, result) {
        if (result == null) res2.send([{ "auth": false }]);
        else {
            bcrypt.compare(password, result.password, function (err, res) {
                if (err || res == false) {
                    res2.send([{ "auth": false }]);
                } else {
                    res2.send([{ "auth": true, "role": result.role }]);
                }
            });
        }
    });
});
router.route('/reguser').post(function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    bcrypt.hash(password, BCRYPT_SALT_ROUNDS, function (err, hash) {
        db.collection('users').insertOne({
            "name": name, "email": email,
            "password": hash
        }, (err, result) => {
            if (err) return console.log(err)
            console.log('user registered')
            res.send(result);
        });
    });
})
module.exports = router;
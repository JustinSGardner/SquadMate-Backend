const express = require('express');
const router = express.Router();

const User = require('../models/userModel');
const multer = require('multer');
const fs = require('fs');
const { nextTick } = require('process');
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, req.query.userid + '.jpg')
    }
});
let upload = multer({ storage: storage });
const get_picture = (req, res)=> {
    fs.readFile(`../server/uploads/${req.params.userid}.jpg`, (err, data) => {
        if (err) {
            fs.readFile('../uploads/default-user.jpg', (err, data2)=> {
                if(err) {
                    res.json(err);
                }else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write('"data:image/jpeg;base64,')
                    res.write(Buffer.from(data2).toString('base64'));
                    res.end('"');
                }
            })
        }else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('"data:image/jpeg;base64,')
            res.write(Buffer.from(data).toString('base64'));
            res.end('"');
        }
    })
}
const upload_picture = () => {upload.single('file'), async(req, res) => {
    if(req.query.userid) {
        const file = req.file;
        if (!file) {
            const error = new Error("Please upload a file");
            error.httpStatusCode = 400;
            return nextTick(error);
        }else {
            res.send("file uploaded");
        }
    }else {
        res.json("Error uploading");
    }
}
}

// Get All Users
router.get('/', async (req, res) => {
    console.log('test');
    const users = await User.find({});
    res.json(users);
});

// Get User by ID
router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

// Create User
router.post('/', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

// UserLogin
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(email);
    if (user && (await user.comparePassword(password))) {
        const userProfile = await User.findById(user.id).select('-password');
    console.log(userProfile);
        res.json(userProfile);
    }   
});

// Delete User by ID
router.delete(':/id', async (req, res) => {
    const user = await User.findById(req.params.id);
    user.remove();
    res.json(user);
});

// ProfilePicture
router.post('/UserProfile', upload_picture);
router.get('/img/:userid', get_picture);



module.exports = router;

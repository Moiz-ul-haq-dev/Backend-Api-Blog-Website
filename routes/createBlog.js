const express = require('express');
const router = express.Router();
const multer = require('multer');

const connection = require('../database/sql.js');

var storage = multer.diskStorage(
    {
        destination:  './public/images/',
        filename: function(req, file, callback) {
            callback(null, Date.now() + '-' + file.originalname);
        }
    }
);

var upload = multer({storage});

router.post('/',upload.single('image'), (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    const image = req.file.filename;

    console.log(title, content, image);


    const data = {
        title: title,
        content: content,
        image: image
    }

    connection.query('INSERT INTO blogsTable SET ?', data, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            console.log("Blog Created Successfully!");
            result.redirect('https://full-blog-website.vercel.app/Create');
        }
    });
});
    
module.exports = router;
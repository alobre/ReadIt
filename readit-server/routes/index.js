var express = require('express');
var router = express.Router();
var multer = require("multer");
let ocr = require("../models/ocr.js");

/* GET home page. */
// router.get("/ocr", async function(req, res, next) {
//   ocr.convertImgToText('./models/figure-65.png', function(data) {
//     console.log(data);
//     res.send(data);
//   });
//   // console.log(req.body.img);
//   // res.send(req.body)
// });



// const imageStorage = multer.diskStorage({
//   // Destination to store image     
//   destination: (req, file, cb)=>{
//     cb(null, '../uploads')
//   }, 
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + "--" + path.extname(file.originalname))
//           // file.fieldname is name of the field (image)
//           // path.extname get the uploaded file extension
//   }
// });

// const imageUpload = multer({
//   storage: imageStorage,
//   // limits: {
//   //   fileSize: 1000000 // 1000000 Bytes = 1 MB
//   // },
//   // fileFilter(req, file, cb) {
//   //   if (!file.originalname.match(/\.(png|jpg)$/)) { 
//   //      // upload only png and jpg format
//   //      return cb(new Error('Please upload a Image'))
//   //    }
//   //  cb(undefined, true)
//   // }
// })

// router.post('/uploadImage', imageUpload.single('image'), (req, res) => {
//   console.log(req.body);
//   res.send(req.body)
// }, (error, req, res, next) => {
//   res.status(400).send({ error: error.message })
// })
// const storage = multer.diskStorage({
//   destination: function(req, file, callback) {
//     callback(null, '/uploads');
//   },
//   filename: function (req, file, callback) {
//     callback(null, file.fieldname);
//   }
// });
// const upload = multer({ storage: storage, limits: {fileSize: 1000000}});

router.post("/ocr", async function(req, res, next) {
  ocr.convertImgToText(req.body.url, function(data) {
    console.log(data);
    res.send(data);
  });
});

router.post('/upload', (req, res) => {
  console.log(req.file);
  if (!req.file) {
    console.log("No file received");
    return res.send({
      success: req
    });

  } else {
    console.log('file received');
    return res.send({
      success: req
    })
  }
});

module.exports = router;

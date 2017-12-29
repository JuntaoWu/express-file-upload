var express = require('express');
var router = express.Router();
var util = require("util");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', function (req, res, next) {
  var multiparty = require('multiparty');
  var fs = require('fs');
  var form = new multiparty.Form();
  // var size = '';
  // var fileName = '';
  // form.on('part', function (part) {
  //   if (!part.filename) return;
  //   size = part.byteCount;
  //   fileName = part.filename;
  // });
  // form.on('file', function (name, file) {
  //   console.log(file.path);
  //   console.log(__dirname);
  //   console.log('filename: ' + fileName);
  //   console.log('fileSize: ' + (size / 1024));
  //   var tmp_path = file.path
  //   var target_path = __dirname + '/uploads/fullsize/' + fileName;
  //   var thumbPath = __dirname + '/uploads/thumbs/';
  //   fs.renameSync(tmp_path, target_path, function (err) {
  //     if (err) console.error(err.stack);
  //   });
  //   res.redirect('/uploads/fullsize/' + fileName);
  //   console.log(target_path);
  //   /*gm(tmp_path)
  //       .resize(150, 150)
  //       .noProfile()
  //       .write(thumbPath + 'small.png', function(err) {
  //           if(err) console.error(err.stack);       
  //       });*/
  // });
  form.parse(req, function(error, fields, files) {
    console.log(util.inspect({fields: fields, files: files}));
  });
  return res.render('index', { title: 'Express' });
});

module.exports = router;

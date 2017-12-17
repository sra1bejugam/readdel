const readMultipleFiles = require('read-multiple-files');
const writeFiles = require('write-files');
let rimraf =require('rimraf');
let path=require('path');
const fse = require('fs-extra');
fse.outputFileSync('A:/berkp/comp/uploads/file.txt', 'hello!');
fse.outputFileSync('A:/berkp/comp/uploads/file1.txt', 'hey!');
fse.outputFileSync('A:/berkp/comp/uploads/file2.txt', 'guys!');
  const fs  = require('fs');
var uploadsDir = __dirname + '\\uploads';
fs.readdir(uploadsDir, function(err, files) {
  files.forEach(function(file, index) {
    fs.stat(path.join(uploadsDir, file), function(err, stat) {
      var endTime, now;
      if (err) {
        return console.error(err);
      }
      now = new Date().getTime();
        endTime = new Date(stat.ctime).getTime() +400000;//this is certain time given to delete files after that time
       if (now > endTime) {
        return rimraf(path.join(uploadsDir, file), function(err) {
          if (err) {
            return console.error(err);
          }
          console.log('successfully deleted');
          console.log(file);
        });
      }
    });
  });
});

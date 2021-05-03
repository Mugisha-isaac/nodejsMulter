const express = require('express');
const multer = require('multer');
const uploads = multer({dest:"uploads/"})
const app = express();

app.use(express.json());

app.post("/upload_files",uploads.array("files"), uploadFiles);
// for single file use uploads.single

 function  uploadFiles(req,res){
    console.log(req.body);
    console.log(req.files);
    res.json({Message:"successfully uploaded files"});
}

app.listen(5000,()=>{
    console.log('server is running');
})
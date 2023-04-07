const  express = require('express');
const multer = require('multer');

const app =express();
const PORT = 5000;

//url encoder
app.use(express.urlencoded({extended:false}));

// to store the data 
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'uploads/audio');
    },
    filename: function(req,file,cb){
        const date= Date.now();
        cb(null,`${date}` + file.originalname);
    }
});

const upload= multer({
    storage:storage,
    // this to validatation
    // Any file other then .WAV will throw err if sent by the user
    fileFilter: function (req,file,cb){
        const filetype=/wav/;
        const mimetype=filetype.test(file.mimetype);
        const  extname=filetype.test(file.originalname.toLocaleLowerCase());
       if(mimetype && extname){
        return cb(null,true);
       }
       
        cb(new Error('ERROR: WAV files only'));
       
    }
}).single('audio');


app.get('/',(req,res)=>{
    res.status(200).json({
        message: "server is running fine bro"
    });
});

/*
*route : /audio
*method : GET
*description : get uploaded WAV file from server
*/

// app.get('/audio',(req,res)=>{

// })

/*
*route : /audio
*method : POST
*description : Upload WAV file from user
*/

app.post('/upload-audio',async (req,res)=>{
    try{
        await upload(req,res);
        res.status(200).json({
            message: "File uploaded Successfully!"
        });
    }
    catch (err){
        res.status(400).json({
            error: err.message
        });
    }
});


app.listen(PORT,()=>{
    console.log('Server is running.....');
});

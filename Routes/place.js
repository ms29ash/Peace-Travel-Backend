import express from 'express';
const router = express.Router();
import multer from 'multer';
//Import Models
import Place from '../Models/Places.js';
import fs from 'fs';

///set up multer for storing uploaded files
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    // filename: (req, file, cb) => {
    //     cb(null, file.fieldname + '-' + Date.now())
    // },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + file.originalname;
        cb(null, uniqueSuffix)
    }
});




const upload = multer({ storage: storage });


/* ---------------------------------- Route :1   the GET request --------------------------------- */

router.get('/', (req, res) => {
    Place.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.status(200).send({ items: items });
        }
    });
});


/* ------------ Route : 2 POST handler for processing the uploaded file ----------- */

router.post('/upload', upload.single('img'), async (req, res, next) => {

    console.log({ file: req.body.name })
    console.log({ file: req.file })
    // res.send({ file: req.body.name, img: req.file })


    // let img = fs.readFileSync(req.file.path);
    // let encoded_img = img.toString('base64');
    let obj = {
        details: req.body.details,
        name: req.body.name,
        img: {
            data: req.file.filename,
            contentType: req.file.mimetype,
        }
    }
    try {
        let place = await Place.create(obj);
        res.status(200).send(place);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
});

export default router;



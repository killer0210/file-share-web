const express = require("express");
const multer = require("multer");
const crypto = require("crypto");
const path = require("path");
const db = require("./firebaseConfig");
const router = express.Router();

//multer config
const storage = multer.diskStorage({
    destination: "upload/",
    filename: (req, file, cb) => {
        const token = crypto.randomBytes(12).toString("hex");
        const ext = path.extname(file.name)
        cb(null, `${token}${ext}`);
    },
});

const upload = multer({ storage: storage });

router.post("/upload",upload.single("file"), async (req, res) => {
    const file = req.file;
    const email = req.body.recipientEmail;
    const token = path.parse(file.filename).orignalname;
    //timestamp: Date.now()

    const metadata = {
        filename: file.originalname,
        saved_name: file.filename,
        token,
        path: `/upload/${file.filename}`,
        created_at: Date.now(),
        expires_at:Date.now() + 7 *24*60*60*100,
        email_sent_to: email
    };

    await db.ref("upload").child(token).set(metadata);
    res.json({ success: true, downloadUrl:  `http://localhost:5000/files/${token}`});
});

module.exports = router;
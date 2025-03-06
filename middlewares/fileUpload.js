const path = require("node:path");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const filePath = path.join(__dirname, "../uploaded_files");

const storage = multer.diskStorage({
  destination: filePath, //path to store file in hdd/ssd - diskStorage
  filename: (req, file, cb) => {
    const fileExtenstion = path.extname(file.originalname);
    console.log(fileExtenstion);
    const fileName = uuidv4() + fileExtenstion;
    cb(null, fileName); // Multer will be informed about the new file name
  },
});

const upload = multer({
  //Middleware intilization
  storage: storage,
});

module.exports = upload;

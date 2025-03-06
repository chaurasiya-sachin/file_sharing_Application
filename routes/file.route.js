const express = require("express");

const upload  = require("../middlewares/fileUpload")

const fileController =  require("../controllers/file.controllers")

const router = express.Router();


router.post("/api/v1/file/upload",upload.single('file'),fileController.uploadFile)

router.post("/api/v1/file/share",fileController.shareFile)

router.get("/files/download/:id",fileController.downloadFile);

router.post("/api/v1/file/delete",fileController.deleteFile)




module.exports = router
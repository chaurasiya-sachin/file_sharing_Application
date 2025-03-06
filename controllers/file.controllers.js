const FileModel = require("../models/file.models");

const uploadFile = async (req, res, next) => {
  try {
    const fileDetails = {
      originalName: req.file.originalname,
      modifiedame: req.file.filename,
      user: "sachin@gmail.com",
      size: req.file.size,
      path: req.file.path,
    };

    const insertedFileDetails = await FileModel.create(fileDetails);

    res.json({
      success: true,
      message: "File uploaded API",
      fileId: insertedFileDetails._id,
    });
  } catch (error) {
    next(error);
  }
};

const shareFile = async (req, res, next) => {
  try {
    const fileDetails = await FileModel.findById(req.body.fileId);
     
    if(!fileDetails){
        res.status(400).json({
            success:false,
            message:"File with given id does not exists"
        })
        return;
    }
    console.log(fileDetails);
    res.json({
      success: true,
      message: "Share File API",
      data:`/files/download/${req.body.fileId}`
    });
  } catch (error) {
    next(error);
  }
};

const downloadFile =async (req, res, next) => {
    try {
        const fileDetails = await FileModel.findById(req.params.id);

        console.log(fileDetails);
        if(!fileDetails){
            res.end("Invalid URL");
            return;
        }
        
        res.download(fileDetails.path,fileDetails.originalName)
        
    } catch (error) {
        next(error)
    }
  
};
const deleteFile = (req, res, next) => {
  res.json({
    success: true,
    message: "Delete File API",
  });
};

const fileController = {
  uploadFile,
  shareFile,
  downloadFile,
  deleteFile,
};

module.exports = fileController;

const fs = require('fs');
const uuid = require('uuid/v4');
const sharp = require('sharp');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');

module.exports = resizeMiddleware = (
  {fileName,
  folderName,
  format}=options
) =>
  catchAsync(async (req, res, next) => {
    if (!req.file) return next();

    req.file.path = `${fileName}-${uuid()}.${format}`;
    await sharp(req.file.buffer)
      .resize(500, 500)
      .toFormat(format)
      .jpeg({ quality: 90 })
      .toFile(`public/img/${folderName}/${req.file.path}`);

    next();
  });

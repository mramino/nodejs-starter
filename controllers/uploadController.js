const catchAsync = require('./../utils/catchAsync');

exports.profile = catchAsync(async (req, res, next) => {
  console.log(req.file);
  res.status(201).json({
    message: 'با موفقیت اپلود شد',
    path: req.file.path
  });
});

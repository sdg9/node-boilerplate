export default (req, res, next) => {
  req.locals = {
    ...req.locals,
    room: {
      message: yourMessage =>
        console.log('Microsoft teams message: ', yourMessage),
    },
  };
  next();
};

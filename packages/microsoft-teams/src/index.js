export default (req, res, next) => {
  console.log('msteams standalone 5');
  req.locals = {
    ...req.locals,
    room: {
      message: yourMessage =>
        console.log('Microsoft teams message: ', yourMessage),
    },
  };
  next();
};

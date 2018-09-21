export default (req, res, next) => {
  req.locals = {
    ...req.locals,
    room: {
      message: yourMessage => console.log('Slack message: ', yourMessage),
    },
  };
  next();
};

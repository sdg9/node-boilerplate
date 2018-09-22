console.log('One time setup');

export default (req, res, next) => {
  // console.log('in gh bot stuff');
  console.log('hioz');
  req.locals = {
    ...req.locals,
    github: {
      connection: '2342',
      endpoint: '/github',
    },
  };
  next();
};

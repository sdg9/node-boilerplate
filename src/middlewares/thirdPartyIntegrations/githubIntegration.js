console.log('One time setup');

export default (req, res, next) => {
  req.locals = {
    ...req.locals,
    github: {
      connection: '2342',
      endpoint: '/github',
    },
  };
  next();
};

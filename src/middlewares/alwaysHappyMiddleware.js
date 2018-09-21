export default (req, res, next) => {
  res.send(`Hello World! ${process.env.SOME_ENV_VAR}`);
};

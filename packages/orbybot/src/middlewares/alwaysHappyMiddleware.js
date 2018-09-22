export default (req, res, next) => {
  console.log('always happy');
  res.send(`Hello World 2! ${process.env.SOME_ENV_VAR}`);
};

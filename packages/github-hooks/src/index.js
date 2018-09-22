import _ from 'lodash';
export default (req, res, next) => {
  const githubEndpoint = _.get(req, 'locals.github.endpoint');

  if (req.path !== githubEndpoint) {
    return next();
  }

  const githubEvent = req.get('X-GitHub-Event');

  req.locals = {
    ...req.locals,
    githubHook: {
      event: githubEvent,
    },
  };

  next();
};

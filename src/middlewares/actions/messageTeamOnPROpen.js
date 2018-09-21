/**
 * Dependent on Github and external messaging integration
 */

import _ from 'lodash';

export default (req, res, next) => {
  const isPR = _.get(req, 'locals.githubHook.event') === 'pull_request';
  const isOpenedEvent = _.get(req, 'body.action') === 'opened';
  const isOpenedPR = isPR && isOpenedEvent;

  if (!isOpenedPR) {
    return next();
  }

  const room = _.get(req, 'locals.room');
  if (room) {
    room.message('PR Submitted');
    next();
  } else {
    const message = 'Missing chat integration to message';
    console.error(message);
    res.send(message);
  }
};

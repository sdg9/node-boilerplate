import express from 'express';
import bodyParser from 'body-parser';

import githubIntegration from '@orbybot/github';
import microsoftTeamsIntegration from '@orbybot/microsoft-teams';
import githubHookReceiver from '@orbybot/github-hooks';
import alwaysHappyMiddleware from './middlewares/alwaysHappyMiddleware';
import slackIntegration from './middlewares/thirdPartyIntegrations/slackIntegration';
import messageTeamOnPROpen from './middlewares/actions/messageTeamOnPROpen';

const app = express();

// Third party express middleware
app.use(bodyParser.json());

console.log('init');

// app.use([
//   githubIntegration,
//   (req, res, next) => {
//     console.log('hi');
//     next();
//   },
// ]);
// app.get('/', (req, res) => {
//   console.log('got me');
//   res.send('hi');
// });

// Custom Developed Middleware
app.use([
  (req, res, next) => {
    if (req.path === '/') {
      next();
    }
  },
  githubIntegration, // Setup github connectivity to send data to github.com
  // // Let dev choose which chat implementation is desired (Teams vs Slack vs Flowdock)
  microsoftTeamsIntegration, // Setup connectivity to teams chatroom
  // //   slackIntegration, // Setup connectivity to slack chatroom
  // //   flowDockIntegration,
  githubHookReceiver, // Receive and minimally process github hooks
  messageTeamOnPROpen, // Message chat room (based on middleware above) when PR is opened
  alwaysHappyMiddleware, // Return a 2xx if no error received from being called
  githubIntegration,
]);

app.listen(process.env.PORT || 3000);

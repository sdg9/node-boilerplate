import express from 'express';
import bodyParser from 'body-parser';

import githubIntegration from './middlewares/thirdPartyIntegrations/githubIntegration';
import microsoftTeamsIntegration from './middlewares/thirdPartyIntegrations/microsoftTeamsIntegration';
import alwaysHappyMiddleware from './middlewares/alwaysHappyMiddleware';
import githubHookReceiver from './middlewares/thirdPartyIntegrations/githubHookReceiver';
import slackIntegration from './middlewares/thirdPartyIntegrations/slackIntegration';
import messageTeamOnPROpen from './middlewares/actions/messageTeamOnPROpen';

const app = express();

// Third party express middleware
app.use(bodyParser.json());

// Custom Developed Middleware
app.use([
  githubIntegration, // Setup github connectivity to send data to github.com
  // Let dev choose which chat implementation is desired (Teams vs Slack vs Flowdock)
  microsoftTeamsIntegration, // Setup connectivity to teams chatroom
  //   slackIntegration, // Setup connectivity to slack chatroom
  //   flowDockIntegration,
  githubHookReceiver, // Receive and minimally process github hooks
  messageTeamOnPROpen, // Message chat room (based on middleware above) when PR is opened
  alwaysHappyMiddleware, // Return a 2xx if no error received from being called
]);

app.listen(3000);

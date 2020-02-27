import { LSA_ENDPOINT, LSA_SECRET } from '../config';
import { LiveStreamingAPI, getRandomName } from '../lib';
import * as express from 'express';
const router = express.Router();
const lsa = new LiveStreamingAPI(LSA_ENDPOINT, LSA_SECRET);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('live-demo');
});
router.get('/live/:roomId', (req, res, next) => {
  const userName = getRandomName();
  const roomId = req.params.roomId;
  if (!roomId) {
    res.send('roomId is required');
  } else {
    lsa.joinGuest({ roomId: 'LSA_DEMO_' + roomId, userId: Math.random() + '', userName })
      .then(function(result){
        res.send(result.html);
      })
      .catch(function(err) {
        res.status(500).send(err);
      });
  }
});
router.get('/live_host/:roomId', (req, res, next) => {
  const userName = '방장';
  const roomId = req.params.roomId;
  if (!roomId) {
    res.send('roomId is required');
  } else {
    lsa.joinHost({ roomId: 'LSA_DEMO_' + roomId, userName })
      .then(function(result){
        res.send(result.html);
      })
      .catch(function(err) {
        res.status(500).send(err);
      });
  }
});
export { router };

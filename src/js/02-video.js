import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import { saveLocal, loadLocal } from '../helpers/storage';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = loadLocal('videoplayer-current-time') ?? '0';

player.setCurrentTime(Number(currentTime));

player.on(
  'timeupdate',
  throttle(e => {
    console.log('play video', e);
    saveLocal('videoplayer-current-time', e.seconds);
  }, 1000)
);

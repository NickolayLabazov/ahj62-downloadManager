import { stor } from './storageStandard.js';
import { stream } from './streamStandard.js';
import { req } from './XMLHttpRequest Standard.js';
import DownloadManager from './downloadManager.js';

const content = [['Storage Standard', '304 kb', stor], ['Streams Standard', '1655 kb', stream], ['XMLHttpRequest Standard', '814 kb', req]];
const downloadManager = new DownloadManager(document.body, content);
downloadManager.create();

import { stor } from './StorageStandard.js';
import { stream } from './StreamStandard.js';
import { req } from './XMLHttpRequestStandard.js';
import DownloadManager from './downloadManager.js';

const content = [['Storage Standard', '304 kb', stor], ['Streams Standard', '1655 kb', stream], ['XMLHttpRequest Standard', '814 kb', req]];
const downloadManager = new DownloadManager(document.body, content);
downloadManager.create();

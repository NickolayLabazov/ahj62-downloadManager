//import Book from './Book.js';
import {stor} from './storageStandard.js';
//import {doc} from './doc.js';
import { stream } from "./streamStandard.js";
import { req } from "./XMLHttpRequest Standard.js";
import DownloadManager from "./downloadManager.js";

  /*  var reader = new FileReader();
   reader.onload = function(event) {
       let dataURL = event.target.result;
          console.log(dataURL)     
   };
    
   reader.onerror = function(event) {
       console.error("Файл не может быть прочитан! код " + event.target.error.code);
   };
  ;

   let file = new Blob(['hello'], { type: 'text/plain' });
   console.log(window.atob(stream.slice(28)).length)
   console.log(file.size)
   reader.readAsText(file);  */


let content = [['Storage Standard', '304 kb', stor], ['Streams Standard', '1655 kb', stream], ['XMLHttpRequest Standard', '814 kb', req]];
let downloadManager = new DownloadManager(document.body, content)
downloadManager.create();
  







import Book from './Book.js';
import {stor} from './storageStandard.js';
import {doc} from './doc.js';
import { stream } from "./streamStandard.js";

/* const img = document.createElement('img');
img.setAttribute('src', URL.createObjectURL(this.file));
document.body.appendChild(img); */

//var blob1 = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
//saveAs(blob1, "hello world.txt");

//let blob = new Blob([JSON.stringify(dnd)], { type: 'application/json' });
//console.log(window.atob(stor));


//console.log(window.atob(stor));
//let blob = new Blob([stor], { type: 'application/pdf' });

let file = new Blob([stream], { type: 'application/pdf' });
let book = new Book('DOM Standart', '2.94 Mb', document.body , stor);
book.create();
let book1 = new Book('DOM Standart', '3.94 Mb', document.body , stream);
    book1.create();
    console.log(file.size)
    console.log(stream.length)
    console.log(window.btoa(file));
/* let reader = new FileReader(blob); 
reader.readAsDataURL(blob);
reader.onloadend = () => {
    let file = reader.result();
    const book = new Book('DOM Standart', '2.94 Mb', document.body , file);
book.create();
} */
/* 
let book = new Book('DOM Standart', '2.94 Mb', document.body , stor);
    book.create();

var reader = new FileReader();
reader.onload = function(event) {
    let dataURL = event.target.result;
       console.log(dataURL)
    let book = new Book('DOM Standart', '2.94 Mb', document.body , dataURL);
    book.create();
};
 
reader.onerror = function(event) {
    console.error("Файл не может быть прочитан! код " + event.target.error.code);
};
console.log(window.atob(stor));
reader.readAsDataURL(file); */
//let file = reader.readAsDataURL(blob);
//let file = URL.createObjectURL(blob);
















/* function readFile() {
    return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('load', (evt) => {
    resolve(evt.target.result);
    });
    reader.addEventListener('error', (evt) => {
    reject(evt.target.error);
    });
    reader.readAsArrayBuffer(file);
    });
    }

    readFile().then((f) => {console.log(f)}).catch(() => console.log('?'))
         
                  
                  
                  */
          
        

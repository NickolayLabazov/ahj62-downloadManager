import Book from './book.js';
import { maxHeaderSize } from 'http';

export default class DownloadManager {
    constructor(parent, data) {
        this.parent = parent;      
        this.data = data; 
        this.managerDiv = null;    
        this.table = null;
        this.total = 0;
        this.totalDiv = null;
    }
  
    create() {    
      this.managerDiv = document.createElement('div');
      this.managerDiv.setAttribute('class', 'managerDiv');
      let text = document.createElement('p');
      text.innerHTML = 'Available Files';     
      this.managerDiv.appendChild(text);
      this.table = document.createElement('table');
      this.managerDiv.appendChild(this.table);
      this.parent.appendChild(this.managerDiv);
      this.content(); 
      this.addListener();
      this.totalCreate();          
    } 

    content(){
        for(let elem of this.data){
            let book = new Book(elem[0], elem[1], this.table, elem[2]);
            book.create();
        }
    }

    addListener(){
       for(let book of this.managerDiv.querySelectorAll('.download')){
        book.addEventListener('click', (e) => {
            this.total = this.total + book.getAttribute('data-size')/1024;
            this.totalCreate(); 
        })  
       
       }
    }

    totalCreate(){
        try{this.managerDiv.removeChild(this.totalDiv)}catch(e){}
        this.totalDiv = document.createElement('div');
        this.managerDiv.appendChild(this.totalDiv);
        this.totalDiv.innerHTML = `You already download: ${this.total}`;
    }
   
  }
  
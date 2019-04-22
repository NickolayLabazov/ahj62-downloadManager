export default class Book {
  constructor(name, size, parent, url,) {
    this.book = null;
    this.size = size;
    this.name = name;
    this.url = url;
    this.parent = parent;  
    this.download = null;  
  }

  create() {    
    this.book = document.createElement('tr');    
    this.parent.appendChild(this.book);    
    let name = document.createElement('td');
    let size = document.createElement('td');
    this.download = document.createElement('td');
    this.download.innerHTML = `<a href = "${this.url}" rel = "noopener" download >Download</a>`;
    this.download.setAttribute('class', 'download');
    name.innerHTML = this.name;
    size.innerHTML = this.size;
    //download.appendChild(link);
    this.book.appendChild(name);
    this.book.appendChild(size);
    this.book.appendChild(this.download);     
    this.sizeBook();   
  } 

  sizeBook(){
    let size = window.atob(this.url.slice(28)).length;    
    this.download.setAttribute('data-size', size);
    
  }
}

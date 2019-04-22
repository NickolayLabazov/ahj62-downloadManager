export default class Book {
  constructor(name, size, parent, url,) {
    this.book = null;
    this.size = size;
    this.name = name;
    this.url = url;
    this.parent = parent;
    
  }

  create() {    
    this.book = document.createElement('tr');
    //console.log(this.parent)
    this.parent.appendChild(this.book);    
    let name = document.createElement('td');
    let size = document.createElement('td');
    let download = document.createElement('td');
    download.innerHTML = `<a href = "${this.url}" rel = "noopener" download >Download</a>`;
    name.innerHTML = this.name;
    size.innerHTML = this.size;
    //download.appendChild(link);
    this.book.appendChild(name);
    this.book.appendChild(size);
    this.book.appendChild(download);
      
  } 
}

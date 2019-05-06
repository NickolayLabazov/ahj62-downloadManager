export default class Book {
  constructor(name, size, parent, url) {
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
    const name = document.createElement('td');
    const size = document.createElement('td');
    this.download = document.createElement('td');
    this.download.innerHTML = `<a href = "${this.url}" rel = "noopener" download = "${this.name}" >Download</a>`;
    this.download.setAttribute('class', 'download');
    name.innerHTML = this.name;
    size.innerHTML = this.size;
    this.book.appendChild(name);
    this.book.appendChild(size);
    this.book.appendChild(this.download);
    this.sizeBook();
  }

  sizeBook() {
    const size = window.atob(this.url.slice(28)).length;
    this.download.setAttribute('data-size', size);
  }
}

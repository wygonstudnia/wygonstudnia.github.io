const xhr = new XMLHttpRequest();
const url = 'blob:https://assets.adobe.com/2e8421ec-d02f-409c-bd5e-5d5edd4a6cd7ttps://bar.other/resources/public-data/';

xhr.open('GET', url);
xhr.onreadystatechange = someHandler;
xhr.send();

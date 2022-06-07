const xhr = new XMLHttpRequest();
const url = 'blob:https://assets.adobe.com/2e8421ec-d02f-409c-bd5e-5d5edd4a6cd7ttps://bar.other/resources/public-data/';

function displayImage() {
	document.getElementById("logo").src = url;
}
xhr.open('GET', url);
xhr.onreadystatechange = displayImage();
xhr.send();

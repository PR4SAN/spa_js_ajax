function getPage(page, title, url) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('view').innerHTML = this.responseText;
      var obj = { Title: title, Url: url };
      history.pushState(obj, obj.Title, obj.Url);
    }
  };
  xhr.open('GET', page, true);
  xhr.send();
}

function test() {
  document.getElementById('view').innerHTML = 'test success';
}

function getPage(page) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('view').innerHTML = this.responseText;
      console.log(this.responseText);
    }
  };
  xhr.open('GET', page, true);
  xhr.send();
}

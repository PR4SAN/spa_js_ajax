function supports_history_api() {
  return !!(window.history && history.pushState);
}

function swapPhoto(href) {
  var req = new XMLHttpRequest();
  req.open("GET",
           "http://127.0.0.1:5500/pages/" +
             href.split("/").pop(),
           false);
  req.send(null);
  if (req.status == 200) {
    document.getElementById("view").innerHTML = req.responseText;
    setupHistoryClicks();
    return true;
  }
  return false;
}

function addClicker(link) {
  link.addEventListener("click", function(e) {
    if (swapPhoto(link.href)) {
      history.pushState(null, null, link.href);
      e.preventDefault();
    }
  }, false);
}

function setupHistoryClicks() {
  addClicker(document.getElementById("home"));
  addClicker(document.getElementById("about"));
  addClicker(document.getElementById("contact"));
  
}

window.onload = function() {
  if (!supports_history_api()) { return; }
  setupHistoryClicks();
  window.setTimeout(function() {
    window.addEventListener("popstate", function(e) {
      swapPhoto(location.pathname);
    }, false);
  }, 1);
};
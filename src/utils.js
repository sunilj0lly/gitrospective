export function getJSON(url) {
  var xhr = new XMLHttpRequest();
  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr.responseText);
        }
      }
    };
    xhr.open('GET', url);
    xhr.send();
  });
}

export function getCodeFromQueryParam() {
  var hasCode = window.location.href.indexOf('?code') !== -1;
  if (!hasCode) {
    return null;
  }
  var href = window.location.href;
  window.history.pushState({}, '', 'http://' + window.location.host);
  return href.match(/\?code=(.*)/)[1];
}

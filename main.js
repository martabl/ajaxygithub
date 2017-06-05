'use strict';

var inputName = document.getElementById('js-input-name');
var button = document.getElementById('js-button');

button.addEventListener('click', function() {

  getGitUser(inputName.value, renderGitUser);
  show();

});


function renderGitUser(userData) {
  document.getElementById('js-user-name').innerText = userData.name;
  document.getElementById('js-user-image').src = userData.avatar_url;
  document.getElementById('js-user-repositories').innerText  = userData.public_repos;
}


function getGitUser(username, callbackFunction) {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.github.com/users/' + username, true);
  request.onload = function(){
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      if (callbackFunction) {
        callbackFunction(data);
      }
    }else {
      alert('Error del servidor, puede que el archivo no exista o que se haya producido un error')
    }
  };
  request.onerror = function(){
    alert('Error al tratar de conectarse con el servidor');
  }
  request.send();
}
function show(){
  document.getElementById('js-userContainer').style.display = 'block';
}

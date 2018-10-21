fetch('../../rest/vacancies')
  .then(res => res.json())
  .then(data => db = data)
  .then(() => {

window.onload = function() {
  var name = document.querySelector('.position-info__title');
  var posName = localStorage.getItem('positionName');
  name.innerHTML = posName;
}

  })

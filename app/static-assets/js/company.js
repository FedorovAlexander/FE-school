fetch('../../rest/vacancies')
  .then(res => res.json())
  .then(data => db = data)
  .then(() => {

    window.onload = function() {
      var companyName = document.querySelector('.company-info__title');
      var companyDescription = document.querySelector('.company-info__description');
      var posObj = JSON.parse(sessionStorage.getItem('positionObj'));
      companyName.innerText = posObj.companyName;
      companyDescription.innerText = posObj.description;
    }
  })

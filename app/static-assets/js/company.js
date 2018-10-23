fetch('../../rest/vacancies')
  .then(res => res.json())
  .then(data => db = data)
  .then(() => {

    window.onload = function() {
      const companyName = document.querySelector('.company-info__title');
      const companyDescription = document.querySelector('.company-info__description');
      let posObj = JSON.parse(sessionStorage.getItem('positionObj'));
      companyName.innerText = posObj.companyName;
      companyDescription.innerText = posObj.description;
    }
  })

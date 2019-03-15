fetch('../../rest/vacancies')
  .then(res => res.json())
  .then(data => db = data)
  .then(() => {
    window.onload = () => {
      const companyName = document.querySelector('.company-info__title');
      const companyDescription = document.querySelector('.company-info__description');
      const imgCompany = document.querySelector('.company-img');
      const posObj = JSON.parse(sessionStorage.getItem('positionObj'));
      companyName.innerText = posObj.companyName;
      companyDescription.innerText = posObj.description;
      imgCompany.src = posObj.imgLink;
    };
  });

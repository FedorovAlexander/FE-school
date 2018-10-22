fetch('../../rest/vacancies')
  .then(res => res.json())
  .then(data => db = data)
  .then(() => {

    window.onload = function() {
      var name = document.querySelector('.position-info__title');
      var company = document.querySelector('.position-info__company-link');
      var companyDesc = document.querySelector('.position-info__description');
      var salary = document.querySelector('.conditions__list-item--salary .conditions__list-item-value');
      var worktime = document.querySelector('.conditions__list-item--worktime .conditions__list-item-value');
      var roadtime = document.querySelector('.conditions__list-item--roadtime .conditions__list-item-value');
      var interesting = document.querySelector('.conditions__list-item--interesting .conditions__list-item-value');
      var education = document.querySelector('.conditions__list-item--education .conditions__list-item-value');
      var status = document.querySelector('.conditions__list-item--status .conditions__list-item-value');
      var comments = document.querySelector('.comments');
      var posObj = JSON.parse(sessionStorage.getItem('positionObj'));
      name.innerText = posObj.position;
      company.innerText = posObj.companyName;
      companyDesc.innerText = posObj.description;
      salary.innerText = posObj.salary;

      if (posObj.minutes < 60) {
        worktime.innerText = posObj.minutes + ' minutes';
      } else {
        worktime.innerText = Math.floor(posObj.minutes / 60) + ' hours ' + (posObj.minutes % 60) + ' minutes';
      }

      roadtime.innerText = posObj.roadTime + ' minutes';

      if (posObj.interesting === true) {
        interesting.innerText = 'Yes';
      } else {
        interesting.innerText = 'No';
      };

      if (posObj.requiresEducation === true) {
        education.innerText = 'Yes';
      } else {
        education.innerText = 'No';
      };
      status.innerText = posObj.status;

      comments.innerHTML += '<p class="comments__text">' + posObj.comment + '</p>';

    }

  })

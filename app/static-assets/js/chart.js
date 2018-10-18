
fetch('../../rest/vacancies')
  .then(res => res.json())
  .then(data => db = data)
  .then(() => {
    var companies = db.companies;
    var chart = document.querySelector('.chart');
    companies.forEach(function(item) {
      var vacancy = item.vacancies;
      vacancy.forEach(function(vac) {
        return chart.innerHTML +=
        '<div class="position-badge">' +
          '<div class="postion-badge__links">' +
            '<a href="#" class="position-badge__name">' + vac.position + '</a>' +
            '<a href="#" class="position-badge__company">' + vac.companyName + '</a>' +
          '</div>' +
          '<span position-badge__salary>' + vac.salary + '</span>' +
        '</div>';
      })
    })
  }
)

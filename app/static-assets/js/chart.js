fetch('../../rest/vacancies')
  .then(res => res.json())
  .then(data => db = data)
  .then(() => {
    const chart = document.querySelector('.positions-block');
    db.forEach(item => {
      return chart.innerHTML +=
        '<div class="position-badge" data-status="' + item.status + '">' +
          '<div class="postion-badge__links">' +
          '<a href="#" class="position-badge__name">' + item.position + '</a>' +
          '<a href="#" class="position-badge__company">' + item.companyName + '</a>' +
          '</div>' +
          '<span class="position-badge__salary">' + item.salary + '</span>' +
        '</div>';
    })

    const positionLink = document.querySelectorAll('.position-badge__name');
    const companyLink = document.querySelectorAll('.position-badge__company');

    positionLink.forEach((link,index) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        let getName = db[index];
        sessionStorage.setItem('positionObj', JSON.stringify(getName))
        window.location.href = '/position';
      })
    })

    companyLink.forEach((link, index) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        let getCompany = db[index];
        sessionStorage.setItem('positionObj', JSON.stringify(getCompany))
        window.location.href = '/company';
      })
    })
  })

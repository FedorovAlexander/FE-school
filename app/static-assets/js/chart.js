fetch('../../rest/vacancies')
  .then(res => res.json())
  .then(data => db = data)
  .then(() => {
    var chart = document.querySelector('.positions-block');
    db.forEach(item => {
      return chart.innerHTML +=
        '<div class="position-badge">' +
          '<div class="postion-badge__links">' +
          '<a href="#" class="position-badge__name">' + item.position + '</a>' +
          '<a href="#" class="position-badge__company">' + item.companyName + '</a>' +
          '</div>' +
          '<span class="position-badge__salary">' + item.salary + '</span>' +
        '</div>';
    })

    var positionLink = document.querySelectorAll('.position-badge__name');

    positionLink.forEach((link,index) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        var getName = db[index];
        console.log(getName)
        sessionStorage.setItem('positionObj', JSON.stringify(getName))
        window.location.href = '/position';
      })
    })
  })

fetch('../../rest/vacancies')
  .then(res => res.json())
  .then(data => db = data)
  .then(() => {
    const chart = document.querySelector('.positions-block');
    let buttons = document.querySelectorAll('.filters__buttons-item');

      function statusFilter() {
        let offer = db.filter(woof => {
           return woof.status === 'offer';
         })
        let candidate = db.filter(woof => {
           return woof.status === 'candidate';
         })
        let denied = db.filter(woof => {
           return woof.status === 'denied';
         })
        let notInterested = db.filter(woof => {
           return woof.status === 'not interested';
         })

      offer.forEach(item => {
        chart.innerHTML +=
          '<div class="position-badge" data-salary="' + item.salary + '" data-status="' + item.status + '">' +
          '<div class="postion-badge__links">' +
          '<a href="#" class="position-badge__name">' + item.position + '</a>' +
          '<a href="#" class="position-badge__company">' + item.companyName + '</a>' +
          '</div>' +
          '<span class="position-badge__salary">$' + item.salary + '/year</span>' +
          '</div>';
      })
      candidate.forEach(item => {
        chart.innerHTML +=
          '<div class="position-badge" data-salary="' + item.salary + '" data-status="' + item.status + '">' +
          '<div class="postion-badge__links">' +
          '<a href="#" class="position-badge__name">' + item.position + '</a>' +
          '<a href="#" class="position-badge__company">' + item.companyName + '</a>' +
          '</div>' +
          '<span class="position-badge__salary">$' + item.salary + '/year</span>' +
          '</div>';
      })
      denied.forEach(item => {
        chart.innerHTML +=
          '<div class="position-badge" data-salary="' + item.salary + '" data-status="' + item.status + '">' +
          '<div class="postion-badge__links">' +
          '<a href="#" class="position-badge__name">' + item.position + '</a>' +
          '<a href="#" class="position-badge__company">' + item.companyName + '</a>' +
          '</div>' +
          '<span class="position-badge__salary">$' + item.salary + '/year</span>' +
          '</div>';
      })
      notInterested.forEach(item => {
        chart.innerHTML +=
          '<div class="position-badge" data-salary="' + item.salary + '" data-status="' + item.status + '">' +
          '<div class="postion-badge__links">' +
          '<a href="#" class="position-badge__name">' + item.position + '</a>' +
          '<a href="#" class="position-badge__company">' + item.companyName + '</a>' +
          '</div>' +
          '<span class="position-badge__salary">$' + item.salary + '/year</span>' +
          '</div>';
      })
    }
    statusFilter();

    function salaryFilter() {
      let badge = document.querySelectorAll(".position-badge");
      Array.prototype.map.call(badge, e => e.cloneNode(true))
        .sort((p, c) => Date.parse(p.dataset.salary) <= Date.parse(c.dataset.salary) ? 1 : -1)
        .forEach((e, i) => badge[i].parentNode.replaceChild(e, badge[i]));
    }

    const positionLink = document.querySelectorAll('.position-badge__name');
    const companyLink = document.querySelectorAll('.position-badge__company');

    positionLink.forEach((link, index) => {
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

    function salaryFilterActive() {
      const filtersButton = document.querySelectorAll('.filters__buttons-item');
      filtersButton.forEach((item) => {
        item.addEventListener('click', () => {
          if (item.classList.contains('filters__buttons-item--salary')) {
            item.classList.toggle('filters__buttons-item--active')
            salaryFilter();
          }
        })
      })
    }
    salaryFilterActive();

    function colorStatus() {
      const positionBadge = document.querySelectorAll('.position-badge')
      positionBadge.forEach((item) => {
        if (item.getAttribute("data-status") === "offer") {
          item.style.backgroundColor = '#b8ffb8';
        } else if ((item.getAttribute("data-status") === "candidate")) {
          item.style.backgroundColor = '#fffacd';
        } else if ((item.getAttribute("data-status") === "denied")) {
          item.style.backgroundColor = '#ffcccc';
        }
      })
    }
    colorStatus();
  })

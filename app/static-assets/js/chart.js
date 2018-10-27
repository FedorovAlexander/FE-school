fetch('../../rest/vacancies')
  .then(res => res.json())
  .then(data => db = data)
  .then(() => {
    const chart = document.querySelector('.positions-block');

    function statusFilter() {
      createPositionWithStatus('offer')
      createPositionWithStatus('candidate')
      createPositionWithStatus('denied')
      createPositionWithStatus('not interested')
      positionLinkClick();
      companyLinkClick();
    }
    statusFilter();

    function createPositionWithStatus(status) {
      let filter = db.filter(woof => {
        return woof.status === status;
      })
      filter.forEach(item => {
        chart.innerHTML +=
          '<div class="position-badge" data-road="' + item.roadTime + '" data-minutes="' + item.minutes + '" data-salary="' + item.salary + '" data-status="' + item.status + '">' +
          '<div class="postion-badge__links">' +
          '<a href="#" class="position-badge__name">' + item.position + '</a>' +
          '<a href="#" class="position-badge__company">' + item.companyName + '</a>' +
          '</div>' +
          '<span class="position-badge__salary">$' + item.salary + '/year</span>' +
          '</div>';
      })
    }

    function positionLinkClick() {
      const positionLink = document.querySelectorAll('.position-badge__name');
      positionLink.forEach((link, index) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          let getName = db[index];
          sessionStorage.setItem('positionObj', JSON.stringify(getName))
          window.location.href = '/position';
        })
      })
    }

    function companyLinkClick() {
      const companyLink = document.querySelectorAll('.position-badge__company');
      companyLink.forEach((link, index) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          let getCompany = db[index];
          sessionStorage.setItem('positionObj', JSON.stringify(getCompany))
          window.location.href = '/company';
        })
      })
    }

    // salary

    function salaryFilter() {
      let badge = document.querySelectorAll(".position-badge");
      Array.prototype.map.call(badge, e => e.cloneNode(true))
        .sort((p, c) => Date.parse(p.dataset.salary) <= Date.parse(c.dataset.salary) ? 1 : -1)
        .forEach((e, i) => badge[i].parentNode.replaceChild(e, badge[i]));
      positionLinkClick();
      companyLinkClick();

    }
    // worktime

    function workHoursFilter() {
      let badge = document.querySelectorAll(".position-badge");
      Array.prototype.map.call(badge, e => e.cloneNode(true))
        .sort((p, c) => Date.parse(p.dataset.minutes) <= Date.parse(c.dataset.minutes) ? 1 : -1)
        .forEach((e, i) => badge[i].parentNode.replaceChild(e, badge[i]));
      positionLinkClick();
      companyLinkClick();
    }

    // roadTime

    function roadTimeFilter() {
      let badge = document.querySelectorAll(".position-badge");
      Array.prototype.map.call(badge, e => e.cloneNode(true))
        .sort((p, c) => Date.parse(p.dataset.road) <= Date.parse(c.dataset.road) ? 1 : -1)
        .forEach((e, i) => badge[i].parentNode.replaceChild(e, badge[i]));
      positionLinkClick();
      companyLinkClick();
    }

    function filtersActive() {
      const filtersButton = document.querySelectorAll('.filters__buttons-item');
      const buttonSalary = document.querySelector('.filters__buttons-item--salary');
      const buttonRoadtime = document.querySelector('.filters__buttons-item--roadtime');
      const buttonWorktime = document.querySelector('.filters__buttons-item--worktime');
      filtersButton.forEach((item) => {
        item.addEventListener('click', () => {
          item.classList.toggle('filters__buttons-item--active')
          if (item.classList.contains('filters__buttons-item--salary')) {
            buttonRoadtime.classList.remove('filters__buttons-item--active')
            buttonWorktime.classList.remove('filters__buttons-item--active')
            salaryFilter();
          } else if (item.classList.contains('filters__buttons-item--worktime')) {
            buttonRoadtime.classList.remove('filters__buttons-item--active')
            buttonSalary.classList.remove('filters__buttons-item--active')
            workHoursFilter();
          } else if (item.classList.contains('filters__buttons-item--roadtime')) {
            buttonSalary.classList.remove('filters__buttons-item--active')
            buttonWorktime.classList.remove('filters__buttons-item--active')
            roadTimeFilter();
          }
        })
      })
    }
    filtersActive();

    function filtersInActive() {
      const filtersButton = document.querySelectorAll('.filters__buttons-item');
      filtersButton.forEach((item) => {
        item.addEventListener('click', () => {
          if (!item.classList.contains('filters__buttons-item--active')) {
            chart.innerHTML = '';
            chart.innerHMTL = statusFilter();
            colorStatus();
          }
        })
      })
    }
    filtersInActive();

    // color buy status

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

    function search() {
      const input = document.querySelector('#input')
      input.addEventListener('keyup', function() {
        let filter = input.value;
        const badges = document.querySelectorAll('.position-badge')
        badges.forEach(item => {
          if (item.textContent.search(new RegExp(filter, "i")) < 0) {
            item.style.display = 'none';
          } else {
            item.style.display = 'flex';
          }
        })
      })
    }
    search();
  })

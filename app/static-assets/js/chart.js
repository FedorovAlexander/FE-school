fetch('../../rest/vacancies')
  .then(res => res.json())
  .then(data => db = data)
  .then(() => {
    const chart = document.querySelector('.positions-block');

    function createPositionWithStatus() {
      db.forEach((item) => {
        chart.innerHTML
          += `<div class="position-badge" data-road="${item.roadTime}" data-minutes="${item.minutes}" data-salary="${item.salary}" data-status="${item.status}">`
          + '<div class="postion-badge__links">'
          + `<a href="#" class="position-badge__name">${item.position}</a>`
          + `<a href="#" class="position-badge__company">${item.companyName}</a>`
          + '</div>'
          + `<span class="position-badge__salary">$${item.salary}/year</span>`
          + '</div>';
      });
    }

    function setNumAttribute() {
      const elems = chart.querySelectorAll('.position-badge');
      elems.forEach((item, index) => {
        item.setAttribute('data-num', index + 1);
      });
    }

    function positionLinkClick() {
      const positionLink = document.querySelectorAll('.position-badge__name');
      positionLink.forEach((link, index) => {
        link.addEventListener('click', () => {
          const getName = db[index];
          sessionStorage.setItem('positionObj', JSON.stringify(getName));
          window.location.href = '/position';
        });
      });
    }

    function companyLinkClick() {
      const companyLink = document.querySelectorAll('.position-badge__company');
      companyLink.forEach((link, index) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const getCompany = db[index];
          sessionStorage.setItem('positionObj', JSON.stringify(getCompany));
          window.location.href = '/company';
        });
      });
    }

    function superPag(e) {
      const divNum = document.querySelectorAll('.position-badge');
      const cnt = 5;
      const event = e || window.event;
      const { target } = event;
      if (target.tagName.toLowerCase() !== 'span') return;
      const dataPage = +target.dataset.page;
      let j = 0;
      divNum.forEach((i) => {
        const dataNum = divNum[i].dataset.num;
        if (dataNum <= dataPage || dataNum >= dataPage) divNum[i].style.display = 'none';
      });

      for (let i = dataPage; i < divNum.length; i++) {
        if (j >= cnt) break;
        divNum[i].style.display = 'flex';
        j++;
      }
    }

    function showPagination() {
      const divNum = document.querySelectorAll('.position-badge');
      const count = divNum.length;
      const cnt = 5;
      const cntPage = Math.ceil(count / cnt);
      const paginator = document.querySelector('.paginator');
      let page = '';
      for (let i = 0; i < cntPage; i++) {
        page += `<span class='paginator__item' data-page=${i * cnt}  id="page${i + 1}">${i + 1}</span>`;
      }
      paginator.innerHTML = page;
      divNum.forEach((item, i) => {
        if (i < cnt) {
          divNum[i].style.display = 'flex';
        }
        const mainPage = document.getElementById('page1');
        mainPage.classList.add('paginator__item--active');
      });
    }

    function paginationActive() {
      const pagItem = document.querySelectorAll('.paginator__item');
      pagItem.forEach((item) => {
        item.addEventListener('click', () => {
          pagItem.forEach((woof) => {
            woof.classList.remove('paginator__item--active');
          });
          item.classList.toggle('paginator__item--active');
        });
      });
    }

    function paginatorClick() {
      const pag = document.querySelector('.paginator');
      pag.addEventListener('click', () => {
        superPag();
        paginationActive();
      });
    }

    function statusFilter() {
      createPositionWithStatus();
      setNumAttribute();
      positionLinkClick();
      companyLinkClick();
      showPagination();
      paginatorClick();
    }
    statusFilter();

    function colorStatus() {
      const positionBadge = document.querySelectorAll('.position-badge');
      positionBadge.forEach((item) => {
        if (item.getAttribute('data-status') === 'offer') {
          item.style.backgroundColor = '#b8ffb8';
        } else if ((item.getAttribute('data-status') === 'candidate')) {
          item.style.backgroundColor = '#fffacd';
        } else if ((item.getAttribute('data-status') === 'denied')) {
          item.style.backgroundColor = '#ffcccc';
        }
      });
    }

    // salary

    function salaryFilter() {
      const badge = document.querySelectorAll('.position-badge');
      Array.prototype.map.call(badge, e => e.cloneNode(true))
        .sort((p, c) => (Date.parse(p.dataset.salary) <= Date.parse(c.dataset.salary) ? 1 : -1))
        .forEach((e, i) => badge[i].parentNode.replaceChild(e, badge[i]));
      positionLinkClick();
      companyLinkClick();
    }
    // worktime

    function workHoursFilter() {
      const badge = document.querySelectorAll('.position-badge');
      Array.prototype.map.call(badge, e => e.cloneNode(true))
        .sort((p, c) => (Date.parse(p.dataset.minutes) <= Date.parse(c.dataset.minutes) ? 1 : -1))
        .forEach((e, i) => badge[i].parentNode.replaceChild(e, badge[i]));
      positionLinkClick();
      companyLinkClick();
    }

    // roadTime

    function roadTimeFilter() {
      const badge = document.querySelectorAll('.position-badge');
      Array.prototype.map.call(badge, e => e.cloneNode(true))
        .sort((p, c) => (Date.parse(p.dataset.road) <= Date.parse(c.dataset.road) ? 1 : -1))
        .forEach((e, i) => badge[i].parentNode.replaceChild(e, badge[i]));
      positionLinkClick();
      companyLinkClick();
    }

    function filtersActive() {
      const filtersButton = document.querySelectorAll('.filters__buttons-item');
      const buttonSalary = document.querySelector('.filters__buttons-item--salary');
      const buttonRoadtime = document.querySelector('.filters__buttons-item--roadtime');
      const buttonWorktime = document.querySelector('.filters__buttons-item--worktime');
      const buttonStatus = document.querySelector('.filters__buttons-item--status');
      filtersButton.forEach((item) => {
        item.addEventListener('click', () => {
          this.classList.toggle('filters__buttons-item--active');
          if (this.classList.contains('filters__buttons-item--salary')) {
            buttonRoadtime.classList.remove('filters__buttons-item--active');
            buttonWorktime.classList.remove('filters__buttons-item--active');
            buttonStatus.classList.remove('filters__buttons-item--active');
            salaryFilter();
          } else if (this.classList.contains('filters__buttons-item--worktime')) {
            buttonRoadtime.classList.remove('filters__buttons-item--active');
            buttonSalary.classList.remove('filters__buttons-item--active');
            buttonStatus.classList.remove('filters__buttons-item--active');
            workHoursFilter();
          } else if (this.classList.contains('filters__buttons-item--roadtime')) {
            buttonSalary.classList.remove('filters__buttons-item--active');
            buttonWorktime.classList.remove('filters__buttons-item--active');
            buttonStatus.classList.remove('filters__buttons-item--active');
            roadTimeFilter();
          } else if (this.classList.contains('filters__buttons-item--status')) {
            buttonSalary.classList.remove('filters__buttons-item--active');
            buttonWorktime.classList.remove('filters__buttons-item--active');
            buttonRoadtime.classList.remove('filters__buttons-item--active');
            roadTimeFilter();
          }
        });
      });
    }
    filtersActive();

    function filtersInActive() {
      const filtersButton = document.querySelectorAll('.filters__buttons-item');
      filtersButton.forEach((item) => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          if (!item.classList.contains('filters__buttons-item--active')) {
            chart.innerHTML = '';
            chart.innerHMTL = statusFilter();
            superPag(e);
            colorStatus();
          }
        });
      });
    }
    filtersInActive();

    // color buy status

    colorStatus();

    function search() {
      const input = document.querySelector('#input');
      input.addEventListener('keyup', () => {
        const filter = input.value;
        const badges = document.querySelectorAll('.position-badge');
        badges.forEach((item) => {
          if (item.textContent.search(new RegExp(filter, 'i')) < 0) {
            item.style.display = 'none';
          } else {
            item.style.display = 'flex';
          }
        });
      });
    }
    search();

    function buttonsLinkReset() {
      const buttons = document.querySelectorAll('.filters__buttons-link');
      buttons.forEach((foo) => {
        foo.addEventListener('click', (e) => {
          e.preventDefault();
        });
      });
    }
    buttonsLinkReset();
  });

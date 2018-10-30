fetch('../../rest/vacancies')
  .then(res => res.json())
  .then(data => db = data)
  .then(() => {
    const chart = document.querySelector('.positions-block');

    function statusFilter() {
      createPositionWithStatus()
      setNumAttribute()
      positionLinkClick();
      companyLinkClick();
      showPagination();
      paginatorClick();
    }
    statusFilter();

    function createPositionWithStatus() {
      db.forEach(item => {
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

    // // salary
    //
    // function salaryFilter(e) {
    //   let badge = document.querySelectorAll(".position-badge");
    //   Array.prototype.map.call(badge, e => e.cloneNode(true))
    //     .sort((p, c) => Date.parse(p.dataset.salary) <= Date.parse(c.dataset.salary) ? 1 : -1)
    //     .forEach((e, i) => badge[i].parentNode.replaceChild(e, badge[i]));
    //   positionLinkClick();
    //   companyLinkClick();
    //
    // }
    // // worktime
    //
    // function workHoursFilter() {
    //   let badge = document.querySelectorAll(".position-badge");
    //   Array.prototype.map.call(badge, e => e.cloneNode(true))
    //     .sort((p, c) => Date.parse(p.dataset.minutes) <= Date.parse(c.dataset.minutes) ? 1 : -1)
    //     .forEach((e, i) => badge[i].parentNode.replaceChild(e, badge[i]));
    //   positionLinkClick();
    //   companyLinkClick();
    // }
    //
    // // roadTime
    //
    // function roadTimeFilter() {
    //   let badge = document.querySelectorAll(".position-badge");
    //   Array.prototype.map.call(badge, e => e.cloneNode(true))
    //     .sort((p, c) => Date.parse(p.dataset.road) <= Date.parse(c.dataset.road) ? 1 : -1)
    //     .forEach((e, i) => badge[i].parentNode.replaceChild(e, badge[i]));
    //   positionLinkClick();
    //   companyLinkClick();
    // }

    function filtersActive(e) {
      const filtersButton = document.querySelectorAll('.filters__buttons-item');
      const buttonSalary = document.querySelector('.filters__buttons-item--salary');
      const buttonRoadtime = document.querySelector('.filters__buttons-item--roadtime');
      const buttonWorktime = document.querySelector('.filters__buttons-item--worktime');
      const buttonStatus = document.querySelector('.filters__buttons-item--status');
      filtersButton.forEach(function(item) {
        item.addEventListener('click', function(e) {
          this.classList.toggle('filters__buttons-item--active')
          if (this.classList.contains('filters__buttons-item--salary')) {
            buttonRoadtime.classList.remove('filters__buttons-item--active')
            buttonWorktime.classList.remove('filters__buttons-item--active')
            buttonStatus.classList.remove('filters__buttons-item--active')
            // salaryFilter();
          } else if (this.classList.contains('filters__buttons-item--worktime')) {
            buttonRoadtime.classList.remove('filters__buttons-item--active')
            buttonSalary.classList.remove('filters__buttons-item--active')
            buttonStatus.classList.remove('filters__buttons-item--active')
            // workHoursFilter();
          } else if (this.classList.contains('filters__buttons-item--roadtime')) {
            buttonSalary.classList.remove('filters__buttons-item--active')
            buttonWorktime.classList.remove('filters__buttons-item--active')
            buttonStatus.classList.remove('filters__buttons-item--active')
            // roadTimeFilter();
          } else if (this.classList.contains('filters__buttons-item--status')) {
            buttonSalary.classList.remove('filters__buttons-item--active')
            buttonWorktime.classList.remove('filters__buttons-item--active')
            buttonRoadtime.classList.remove('filters__buttons-item--active')
            // roadTimeFilter();
          }
        })
      })
    }
    filtersActive();


    function filtersInActive(e) {
      const filtersButton = document.querySelectorAll('.filters__buttons-item');
      filtersButton.forEach((item) => {
        item.addEventListener('click', (e) => {
          e.preventDefault()
          if (!item.classList.contains('filters__buttons-item--active')) {
            chart.innerHTML = '';
            chart.innerHMTL = statusFilter();
            superPag(e);
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

    function buttonsLinkReset() {
      let buttons = document.querySelectorAll('.filters__buttons-link')
      buttons.forEach(foo => {
        foo.addEventListener('click', (e) => {
          e.preventDefault();
        })
      })
    }
    buttonsLinkReset();

    function setNumAttribute() {
      let elems = chart.querySelectorAll('.position-badge');
      elems.forEach((item, index) => {
        item.setAttribute('data-num', index + 1)
      })
    }

    function showPagination() {
      let div_num = document.querySelectorAll(".position-badge");
      let count = div_num.length;
      let cnt = 5;
      let cnt_page = Math.ceil(count / cnt);
      let paginator = document.querySelector(".paginator");
      let page = "";
      for (let i = 0; i < cnt_page; i++) {
        page += "<span class='paginator__item' data-page=" + i * cnt + "  id=\"page" + (i + 1) + "\">" + (i + 1) + "</span>";
      }
      paginator.innerHTML = page;
      div_num.forEach((item, i) => {
        if (i < cnt) {
          div_num[i].style.display = "flex";
        }
        let main_page = document.getElementById("page1");
        main_page.classList.add("paginator__item--active")
      })
    }

    function paginationActive() {
      let pagItem = document.querySelectorAll('.paginator__item')
      pagItem.forEach(item => {
        item.addEventListener('click', (e) => {
          pagItem.forEach(woof => {
            woof.classList.remove('paginator__item--active')
          })
          item.classList.toggle('paginator__item--active')
        })
      })
    }
    paginationActive();

    function superPag(e) {
      let div_num = document.querySelectorAll(".position-badge");
      let count = div_num.length;
      let cnt = 5;
      let cnt_page = Math.ceil(count / cnt);
      let main_page = document.getElementById("page1");
      let event = e || window.event;
      let target = event.target;
      let id = target.id;
      if (target.tagName.toLowerCase() != "span") return;
      let data_page = +target.dataset.page;
      let j = 0;
      div_num.forEach((item, i) => {
        let data_num = div_num[i].dataset.num;
        if (data_num <= data_page || data_num >= data_page)
          div_num[i].style.display = "none";
      })

      for (let i = data_page; i < div_num.length; i++) {
        if (j >= cnt) break;
        div_num[i].style.display = "flex";
        j++;
      }
    }

    function paginatorClick(e) {
      let pag = document.querySelector('.paginator')
      pag.addEventListener('click', (e) => {
        superPag(e)
        paginationActive(e);
      })
    }
    function nyanIn() {
      const nyan = document.querySelector('.nyan')
      nyan.style.left = '1500px'
    }

    document.onkeydown = function(e) {
      if (e.keyCode === 33) {
        nyanIn();
      }
    }
  })

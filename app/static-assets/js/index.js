
if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
  const img = document.querySelector('.page-header__img');
  img.style.top = '0.12rem';
}

function changeBarIcon() {
  const chartLink = document.querySelector('.page-header__chart-link-block');
  const bar1 = document.querySelector('#bar1');
  const bar2 = document.querySelector('#bar2');
  const bar3 = document.querySelector('#bar3');
  chartLink.addEventListener('mouseenter', () => {
    bar1.style.y = '50';
    bar1.style.transition = 'y 0.1s linear';
    bar2.style.y = '200';
    bar2.style.transition = 'y 0.1s linear';
    bar3.style.y = '0';
    bar3.style.height = '600';
    bar3.style.transition = 'y 0.1s linear';
  });
  chartLink.addEventListener('mouseleave', () => {
    bar1.style.y = '162.2';
    bar1.style.transition = 'y 0.1s linear';
    bar2.style.y = '0';
    bar2.style.transition = 'y 0.1s linear';
    bar3.style.y = '82.4';
    bar3.style.height = '500px';
    bar3.style.transition = 'y 0.1s linear';
  });
}
changeBarIcon();

function changeLogIcon() {
  const logoutLink = document.querySelector('.page-header__logout-link');
  const logoutIcon = document.querySelector('.page-header__logout-img');
  logoutLink.addEventListener('mouseenter', () => {
    logoutIcon.style.transform = 'scale(1.1)';
  });
  logoutLink.addEventListener('mouseleave', () => {
    logoutIcon.style.transform = 'scale(1)';
  });
}
changeLogIcon();

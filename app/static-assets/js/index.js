
if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
     let img = document.querySelector('.page-header__img')
     img.style.top = '0.12rem';
}

function changeBarIcon() {
  let chartLink = document.querySelector('.page-header__chart-link-block')
  let bar1 = document.querySelector('#bar1')
  let bar2 = document.querySelector('#bar2')
  let bar3 = document.querySelector('#bar3')
  chartLink.addEventListener('mouseenter', function() {
    bar1.style.y = '50';
    bar1.style.transition = 'y 0.1s linear';
    bar2.style.y = '200';
    bar2.style.transition = 'y 0.1s linear';
    bar3.style.y = '0';
    bar3.style.height = '600';
    bar3.style.transition = 'y 0.1s linear';
  })
  chartLink.addEventListener('mouseleave', function() {
    bar1.style.y = '162.2';
    bar1.style.transition = 'y 0.1s linear';
    bar2.style.y = '0';
    bar2.style.transition = 'y 0.1s linear';
    bar3.style.y = '82.4';
    bar3.style.height = '500px';
    bar3.style.transition = 'y 0.1s linear';
  })
}
changeBarIcon()

function changeLogIcon() {
  let logoutLink = document.querySelector('.page-header__logout-link');
  let logoutIcon = document.querySelector('.page-header__logout-img')
  logoutLink.addEventListener('mouseenter', function() {
    logoutIcon.style.transform = 'scale(1.1)'
  })
  logoutLink.addEventListener('mouseleave', function() {
    logoutIcon.style.transform = 'scale(1)'
  })
}
changeLogIcon();

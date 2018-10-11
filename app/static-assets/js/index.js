var db = {
  "data": "vacancies",
  "companies": [{
      "name": "Umbrella Corp",
      "description": "The Umbrella Corporation is an international pharmaceutical company.",
      "vacancies": [{
          "companyName": "Umbrella Corp",
          "position": "Evil Scientist",
          "salary": "$200000/year",
          "minutes": 480,
          "roadTime": 15,
          "interesting": true,
          "demandEducation": true,
          "comment": null,
          "status": "candidate"
        },
        {
          "companyName": "Umbrella Corp",
          "position": "Zombie Bites Tester",
          "salary": "$1000000/year",
          "minutes": 10,
          "roadTime": 25,
          "interesting": false,
          "demandEducation": false,
          "comment": null,
          "status": "not interested"
        },
        {
          "companyName": "Umbrella Corp",
          "position": "Zombie Killing Squad Member",
          "salary": "$150000/year",
          "minutes": 600,
          "roadTime": 30,
          "interesting": true,
          "demandEducation": true,
          "comment": null,
          "status": "denied"
        }
      ]
    },
    {
      "companyName": "ACME Corp",
      "description": "A Company Manufacturing Everything.",
      "vacancies": [{
          "companyName": "ACME Corp",
          "position": "Tennis Ball Bomb Maker",
          "salary": "$80000/year",
          "minutes": 540,
          "roadTime": 60,
          "interesting": false,
          "demandEducation": false,
          "comment": null,
          "status": "offer"
        },
        {
          "companyName": "ACME Corp",
          "position": "Rocket Scientist",
          "salary": "$250000",
          "minutes": 540,
          "roadTime": 65,
          "interesting": true,
          "demandEducation": true,
          "comment": null,
          "status": "candidate"
        },
        {
          "companyName": "ACME Corp",
          "position": "Wile E. Coyote Personal Doctor",
          "salary": "$60000",
          "minutes": 420,
          "roadTime": 70,
          "interesting": false,
          "demandEducation": true,
          "comment": null,
          "status": "not interested"
        }
      ]
    },
    {
      "name": "Tyrell Corp",
      "description": "The Tyrell Corporation is a powerful corporation based in Los Angeles in the year AF 19. Tyrell is named after its founder Eldon Tyrell and is a high-tech corporation primarily concerned with the production of androids known as replicants.",
      "vacancies": [{
          "companyName": "Tyrell Corp",
          "position": "Bladerunner",
          "salary": "$156000/year",
          "minutes": 680,
          "roadTime": 40,
          "interesting": true,
          "demandEducation": false,
          "comment": null,
          "status": "offer"
        },
        {
          "companyName": "Tyrell Corp",
          "position": "Android Test Manager",
          "salary": "$115000/year",
          "minutes": 720,
          "roadTime": 35,
          "interesting": false,
          "demandEducation": false,
          "comment": null,
          "status": "denied"
        }
      ]
    }
  ]
}

function chart() {
  var companies = db.companies;
  var chart = document.querySelector('.chart');
  companies.forEach(function(item) {
    var vacancy = item.vacancies;
    vacancy.forEach(function(vac) {
      return chart.innerHTML += '<div class="position">' +
        '<a href="#">' + vac.position + '</a>' +
        '<p class="position__company">' + vac.companyName + '</p>' +
        '<span>' + vac.salary + '</span>'
      '</div>';
    })
  })
}
chart();

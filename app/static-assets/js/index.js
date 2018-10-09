var db = {
  "data": "vacancies",
  "companies": [{
      "name": "Umbrella Corp",
      "description": "The Umbrella Corporation is an international pharmaceutical company.",
      "vacancies": [{
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
      "name": "ACME Corp",
      "description": "A Company Manufacturing Everything.",
      "vacancies": [{
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


console.log(db.companies[0].description)

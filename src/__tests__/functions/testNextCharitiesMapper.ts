import {nextCharitiesMapper} from "../../components/CharitySearch/utils/nextCharitiesMapper";

const emptyData = {
  "data": {
    "projects": {
      "numberFound": 0
    }
  },
  "status": 200,
  "statusText": "",
  "headers": {
    "cache-control": "max-age=43200",
    "content-length": "30",
    "content-type": "application/json;charset=UTF-8"
  },
  "config": {
    "url": "https://api.globalgiving.org/api/public/projectservice/countries/AS/projects?api_key=961c70eb-d43d-4acc-a6eb-5ff2482a02d0&nextProjectId=1",
    "method": "get",
    "headers": {
      "Accept": "application/json, text/plain, */*"
    },
    "transformRequest": [
      null
    ],
    "transformResponse": [
      null
    ],
    "timeout": 0,
    "xsrfCookieName": "XSRF-TOKEN",
    "xsrfHeaderName": "X-XSRF-TOKEN",
    "maxContentLength": -1
  },
  "request": {}
}

const fullData = {
  "data": {
    "projects": {
      "hasNext": true,
      "nextProjectId": 673,
      "project": [
        {
          "id": 12,
          "organization": {
            "id": 372,
            "bridgeId": 3656085010,
            "name": "Afghan Institute of Learning",
            "ein": "38-3288402",
            "addressLine1": "Afghan Institute of Learning",
            "addressLine2": "c/o CHI, PO Box 1058",
            "city": "Dearborn",
            "state": "Michigan",
            "postal": "48121",
            "iso3166CountryCode": "US",
            "url": "http://www.afghaninstituteoflearning.org",
            "logoUrl": "https://www.globalgiving.org/pfil/organ/372/orglogo.jpg",
            "mission": "The Afghan Institute of Learning (AIL) works to empower all Afghans who are needy, especially women and children, providing them the knowledge and skills to care for themselves. AIL is expanding access to quality education and healthcare through community based programming, enabling communities to develop the capacity of their people. The goal is to create a foundation of quality education and health systems throughout Afghanistan which meet the needs of local people now and in the future. AIL was founded by an Afghan woman and is run mainly by women, reaching thousands each year through health facilities, educational centers and training programs.",
            "totalProjects": 108,
            "activeProjects": 14,
            "themes": {
              "theme": [
                {
                  "id": "children",
                  "name": "Children"
                },
                {
                  "id": "democ",
                  "name": "Democracy and Governance"
                },
                {
                  "id": "disaster",
                  "name": "Disaster Recovery"
                },
                {
                  "id": "ecdev",
                  "name": "Economic Development"
                },
                {
                  "id": "edu",
                  "name": "Education"
                },
                {
                  "id": "env",
                  "name": "Environment"
                },
                {
                  "id": "finance",
                  "name": "Microfinance"
                },
                {
                  "id": "gender",
                  "name": "Women and Girls"
                },
                {
                  "id": "health",
                  "name": "Health"
                },
                {
                  "id": "human",
                  "name": "Humanitarian Assistance"
                },
                {
                  "id": "rights",
                  "name": "Human Rights"
                },
                {
                  "id": "tech",
                  "name": "Technology"
                },
                {
                  "id": "hunger",
                  "name": "Hunger"
                },
                {
                  "id": "art",
                  "name": "Arts and Culture"
                }
              ]
            },
            "countries": {
              "country": [
                {
                  "name": "Afghanistan",
                  "iso3166CountryCode": "AF"
                }
              ]
            },
            "country": "United States"
          },
          "active": false,
          "title": "Women's Learning Center in Herat, Afghanistan",
          "summary": "Empowering Afghan women through the provision of education and training opportunities as well as basic health services",
          "contactAddress": "Creating Hope International",
          "contactAddress2": "P. O. Box 1058",
          "contactCity": "Dearborn",
          "contactState": "Michigan",
          "contactPostal": "48121",
          "contactCountry": "United States",
          "contactUrl": "http://www.creatinghope.org",
          "projectLink": "https://www.globalgiving.org/projects/womens-learning-center-in-herat-afghanistan/",
          "progressReportLink": "https://www.globalgiving.org/projects/womens-learning-center-in-herat-afghanistan/updates/",
          "themeName": "Education",
          "country": "Afghanistan",
          "iso3166CountryCode": "AF",
          "region": "Asia and Oceania",
          "goal": 6600,
          "funding": 735,
          "remaining": 5865,
          "numberOfDonations": 3,
          "status": "funded",
          "need": "Herat is the largest city in western Afghanistan and a main trade city for exports. No education has been available to women and girls in Herat for the last decade under the Taliban regime.  Recent patterns of civil strife in Afghanistan have destroyed about 95% of the infrastructure and services.  Established in September 2002, the Herat Women’s Learning Center serves about 425 women and children, with plans for service expansion during 2003.",
          "longTermImpact": "This project will result in the increased education of Afghan women in the region.  The knowledge of income generating skills, as well as leadership skills will help these women to support themselves and their families.",
          "activities": "This center offers teacher training, English, literacy, math, and computer classes. Skills like sewing and carpet weaving are also taught. Leadership and human rights classes teach women how to assert their rights in a culturally sensitive way.",
          "additionalDocumentation": "https://www.globalgiving.org/pfil/12/projdoc.doc",
          "imageLink": "https://www.globalgiving.org/pfil/12/pict.jpg",
          "imageGallerySize": 1,
          "approvedDate": "2003-05-20T18:31:54-04:00",
          "image": {
            "title": "Women's Learning Center in Herat, Afghanistan",
            "id": 0,
            "imagelink": [
              {
                "url": "https://www.globalgiving.org/pfil/12/pict_grid1.jpg",
                "size": "small"
              },
              {
                "url": "https://www.globalgiving.org/pfil/12/pict_thumbnail.jpg",
                "size": "thumbnail"
              },
              {
                "url": "https://www.globalgiving.org/pfil/12/pict_med.jpg",
                "size": "medium"
              },
              {
                "url": "https://www.globalgiving.org/pfil/12/pict_grid7.jpg",
                "size": "large"
              },
              {
                "url": "https://www.globalgiving.org/pfil/12/pict_large.jpg",
                "size": "extraLarge"
              },
              {
                "url": "https://www.globalgiving.org/pfil/12/pict_original.jpg",
                "size": "original"
              }
            ]
          },
          "type": "project"
        },
        {
          "id": 13,
          "organization": {
            "id": 372,
            "bridgeId": 3656085010,
            "name": "Afghan Institute of Learning",
            "ein": "38-3288402",
            "addressLine1": "Afghan Institute of Learning",
            "addressLine2": "c/o CHI, PO Box 1058",
            "city": "Dearborn",
            "state": "Michigan",
            "postal": "48121",
            "iso3166CountryCode": "US",
            "url": "http://www.afghaninstituteoflearning.org",
            "logoUrl": "https://www.globalgiving.org/pfil/organ/372/orglogo.jpg",
            "mission": "The Afghan Institute of Learning (AIL) works to empower all Afghans who are needy, especially women and children, providing them the knowledge and skills to care for themselves. AIL is expanding access to quality education and healthcare through community based programming, enabling communities to develop the capacity of their people. The goal is to create a foundation of quality education and health systems throughout Afghanistan which meet the needs of local people now and in the future. AIL was founded by an Afghan woman and is run mainly by women, reaching thousands each year through health facilities, educational centers and training programs.",
            "totalProjects": 108,
            "activeProjects": 14,
            "themes": {
              "theme": [
                {
                  "id": "children",
                  "name": "Children"
                },
                {
                  "id": "democ",
                  "name": "Democracy and Governance"
                },
                {
                  "id": "disaster",
                  "name": "Disaster Recovery"
                },
                {
                  "id": "ecdev",
                  "name": "Economic Development"
                },
                {
                  "id": "edu",
                  "name": "Education"
                },
                {
                  "id": "env",
                  "name": "Environment"
                },
                {
                  "id": "finance",
                  "name": "Microfinance"
                },
                {
                  "id": "gender",
                  "name": "Women and Girls"
                },
                {
                  "id": "health",
                  "name": "Health"
                },
                {
                  "id": "human",
                  "name": "Humanitarian Assistance"
                },
                {
                  "id": "rights",
                  "name": "Human Rights"
                },
                {
                  "id": "tech",
                  "name": "Technology"
                },
                {
                  "id": "hunger",
                  "name": "Hunger"
                },
                {
                  "id": "art",
                  "name": "Arts and Culture"
                }
              ]
            },
            "countries": {
              "country": [
                {
                  "name": "Afghanistan",
                  "iso3166CountryCode": "AF"
                }
              ]
            },
            "country": "United States"
          },
          "active": false,
          "title": "Women's Learning Center in Mir Bacha Kot",
          "summary": "Empowering rural Afghan women through the provision of education and training opportunities as well as basic health services.",
          "contactAddress": "Creating Hope International",
          "contactAddress2": "P. O. Box 1058",
          "contactCity": "Dearborn",
          "contactState": "Michigan",
          "contactPostal": "48121",
          "contactCountry": "United States",
          "contactUrl": "http://www.creatinghope.org",
          "projectLink": "https://www.globalgiving.org/projects/educate-women-in-afghanistan/",
          "progressReportLink": "https://www.globalgiving.org/projects/educate-women-in-afghanistan/updates/",
          "themeName": "Education",
          "country": "Afghanistan",
          "iso3166CountryCode": "AF",
          "region": "Asia and Oceania",
          "goal": 44000,
          "funding": 3435,
          "remaining": 40565,
          "numberOfDonations": 1,
          "status": "funded",
          "need": "Mir Bacha Kot is a rural community in Afghanistan, north of Kabul. No education has been available to women and girls in Mir Bacha Kot for the last decade under the Taliban regime.  Recent patterns of civil strife in Afghanistan have destroyed about 95% of its infrastructure and services. The Mir Bacha Kot Women's Learning Center is currently operating in homes.",
          "longTermImpact": "This project will result in the increased education of Afghan women in the region.  The knowledge of income generating skills, as well as leadership skills will help these women to support themselves and their families.",
          "activities": "This center offers teacher training, English, literacy, math, and computer classes. Skills like sewing and carpet weaving are also taught. Leadership and human rights classes teach women how to assert their rights in a culturally sensitive way.",
          "additionalDocumentation": "https://www.globalgiving.org/pfil/13/projdoc.doc",
          "imageLink": "https://www.globalgiving.org/pfil/13/pict.jpg",
          "imageGallerySize": 1,
          "approvedDate": "2003-05-20T18:57:15-04:00",
          "image": {
            "title": "Women's Learning Center in Mir Bacha Kot",
            "id": 0,
            "imagelink": [
              {
                "url": "https://www.globalgiving.org/pfil/13/pict_grid1.jpg",
                "size": "small"
              },
              {
                "url": "https://www.globalgiving.org/pfil/13/pict_thumbnail.jpg",
                "size": "thumbnail"
              },
              {
                "url": "https://www.globalgiving.org/pfil/13/pict_med.jpg",
                "size": "medium"
              },
              {
                "url": "https://www.globalgiving.org/pfil/13/pict_grid7.jpg",
                "size": "large"
              },
              {
                "url": "https://www.globalgiving.org/pfil/13/pict_large.jpg",
                "size": "extraLarge"
              },
              {
                "url": "https://www.globalgiving.org/pfil/13/pict_original.jpg",
                "size": "original"
              }
            ]
          },
          "type": "project"
        },
        {
          "id": 14,
          "organization": {
            "id": 372,
            "bridgeId": 3656085010,
            "name": "Afghan Institute of Learning",
            "ein": "38-3288402",
            "addressLine1": "Afghan Institute of Learning",
            "addressLine2": "c/o CHI, PO Box 1058",
            "city": "Dearborn",
            "state": "Michigan",
            "postal": "48121",
            "iso3166CountryCode": "US",
            "url": "http://www.afghaninstituteoflearning.org",
            "logoUrl": "https://www.globalgiving.org/pfil/organ/372/orglogo.jpg",
            "mission": "The Afghan Institute of Learning (AIL) works to empower all Afghans who are needy, especially women and children, providing them the knowledge and skills to care for themselves. AIL is expanding access to quality education and healthcare through community based programming, enabling communities to develop the capacity of their people. The goal is to create a foundation of quality education and health systems throughout Afghanistan which meet the needs of local people now and in the future. AIL was founded by an Afghan woman and is run mainly by women, reaching thousands each year through health facilities, educational centers and training programs.",
            "totalProjects": 108,
            "activeProjects": 14,
            "themes": {
              "theme": [
                {
                  "id": "children",
                  "name": "Children"
                },
                {
                  "id": "democ",
                  "name": "Democracy and Governance"
                },
                {
                  "id": "disaster",
                  "name": "Disaster Recovery"
                },
                {
                  "id": "ecdev",
                  "name": "Economic Development"
                },
                {
                  "id": "edu",
                  "name": "Education"
                },
                {
                  "id": "env",
                  "name": "Environment"
                },
                {
                  "id": "finance",
                  "name": "Microfinance"
                },
                {
                  "id": "gender",
                  "name": "Women and Girls"
                },
                {
                  "id": "health",
                  "name": "Health"
                },
                {
                  "id": "human",
                  "name": "Humanitarian Assistance"
                },
                {
                  "id": "rights",
                  "name": "Human Rights"
                },
                {
                  "id": "tech",
                  "name": "Technology"
                },
                {
                  "id": "hunger",
                  "name": "Hunger"
                },
                {
                  "id": "art",
                  "name": "Arts and Culture"
                }
              ]
            },
            "countries": {
              "country": [
                {
                  "name": "Afghanistan",
                  "iso3166CountryCode": "AF"
                }
              ]
            },
            "country": "United States"
          },
          "active": false,
          "title": "Women's Learning Centers in Kabul, Afghanistan",
          "summary": "Empowering Afghan women through the provision of education and training opportunities as well as basic health services",
          "contactAddress": "Creating Hope International",
          "contactAddress2": "P. O. Box 1058",
          "contactCity": "Dearborn",
          "contactState": "Michigan",
          "contactPostal": "48121",
          "contactCountry": "United States",
          "contactUrl": "http://www.creatinghope.org",
          "projectLink": "https://www.globalgiving.org/projects/womens-learning-centers-in-kabul-afghanistan/",
          "progressReportLink": "https://www.globalgiving.org/projects/womens-learning-centers-in-kabul-afghanistan/updates/",
          "themeName": "Education",
          "country": "Afghanistan",
          "iso3166CountryCode": "AF",
          "region": "Asia and Oceania",
          "goal": 6600,
          "funding": 0,
          "remaining": 6600,
          "numberOfDonations": 23,
          "status": "retired",
          "need": "Kabul is the capital of Afghanistan. No education has been available to women and girls in Kabul for the last decade under the Taliban regime.  Recent patterns of civil strife in Afghanistan have destroyed about 95% of the infrastructure and services.  The Kabul Women’s Learning Center serves about 2,000 women and children, with plans for service expansion during 2003.",
          "longTermImpact": "This project will result in the increased education of Afghan women in the region.  The knowledge of income generating skills, as well as leadership skills will help these women to support themselves and their families.",
          "activities": "This center offers teacher training, English, literacy, math, and computer classes. Skills like sewing and carpet weaving are also taught. Leadership and human rights classes teach women how to assert their rights in a culturally sensitive way.",
          "additionalDocumentation": "https://www.globalgiving.org/pfil/14/projdoc.doc",
          "imageLink": "https://www.globalgiving.org/pfil/14/pict.jpg",
          "imageGallerySize": 1,
          "approvedDate": "2003-05-20T19:04:55-04:00",
          "image": {
            "title": "Women's Learning Centers in Kabul, Afghanistan",
            "id": 0,
            "imagelink": [
              {
                "url": "https://www.globalgiving.org/pfil/14/pict_grid1.jpg",
                "size": "small"
              },
              {
                "url": "https://www.globalgiving.org/pfil/14/pict_thumbnail.jpg",
                "size": "thumbnail"
              },
              {
                "url": "https://www.globalgiving.org/pfil/14/pict_med.jpg",
                "size": "medium"
              },
              {
                "url": "https://www.globalgiving.org/pfil/14/pict_grid7.jpg",
                "size": "large"
              },
              {
                "url": "https://www.globalgiving.org/pfil/14/pict_large.jpg",
                "size": "extraLarge"
              },
              {
                "url": "https://www.globalgiving.org/pfil/14/pict_original.jpg",
                "size": "original"
              }
            ]
          },
          "type": "project"
        },
        {
          "id": 25,
          "organization": {
            "id": 372,
            "bridgeId": 3656085010,
            "name": "Afghan Institute of Learning",
            "ein": "38-3288402",
            "addressLine1": "Afghan Institute of Learning",
            "addressLine2": "c/o CHI, PO Box 1058",
            "city": "Dearborn",
            "state": "Michigan",
            "postal": "48121",
            "iso3166CountryCode": "US",
            "url": "http://www.afghaninstituteoflearning.org",
            "logoUrl": "https://www.globalgiving.org/pfil/organ/372/orglogo.jpg",
            "mission": "The Afghan Institute of Learning (AIL) works to empower all Afghans who are needy, especially women and children, providing them the knowledge and skills to care for themselves. AIL is expanding access to quality education and healthcare through community based programming, enabling communities to develop the capacity of their people. The goal is to create a foundation of quality education and health systems throughout Afghanistan which meet the needs of local people now and in the future. AIL was founded by an Afghan woman and is run mainly by women, reaching thousands each year through health facilities, educational centers and training programs.",
            "totalProjects": 108,
            "activeProjects": 14,
            "themes": {
              "theme": [
                {
                  "id": "children",
                  "name": "Children"
                },
                {
                  "id": "democ",
                  "name": "Democracy and Governance"
                },
                {
                  "id": "disaster",
                  "name": "Disaster Recovery"
                },
                {
                  "id": "ecdev",
                  "name": "Economic Development"
                },
                {
                  "id": "edu",
                  "name": "Education"
                },
                {
                  "id": "env",
                  "name": "Environment"
                },
                {
                  "id": "finance",
                  "name": "Microfinance"
                },
                {
                  "id": "gender",
                  "name": "Women and Girls"
                },
                {
                  "id": "health",
                  "name": "Health"
                },
                {
                  "id": "human",
                  "name": "Humanitarian Assistance"
                },
                {
                  "id": "rights",
                  "name": "Human Rights"
                },
                {
                  "id": "tech",
                  "name": "Technology"
                },
                {
                  "id": "hunger",
                  "name": "Hunger"
                },
                {
                  "id": "art",
                  "name": "Arts and Culture"
                }
              ]
            },
            "countries": {
              "country": [
                {
                  "name": "Afghanistan",
                  "iso3166CountryCode": "AF"
                }
              ]
            },
            "country": "United States"
          },
          "active": false,
          "title": "Training of Afghan Women Health Professionals",
          "summary": "Improving the health of Afghan families today through health education and investing in a healthier tomorrow for Afghanistan by training women to be health professionals, midwives, and vaccinators",
          "contactAddress": "Creating Hope International",
          "contactAddress2": "P. O. Box 1058",
          "contactCity": "Dearborn",
          "contactState": "Michigan",
          "contactPostal": "48121",
          "contactCountry": "United States",
          "contactUrl": "http://www.creatinghope.org",
          "projectLink": "https://www.globalgiving.org/projects/training-of-afghan-women-health-professionals/",
          "progressReportLink": "https://www.globalgiving.org/projects/training-of-afghan-women-health-professionals/updates/",
          "themeName": "Health",
          "country": "Afghanistan",
          "iso3166CountryCode": "AF",
          "region": "Asia and Oceania",
          "goal": 6600,
          "funding": 1471.4,
          "remaining": 5128.6,
          "numberOfDonations": 61,
          "status": "funded",
          "need": "During the last 24 years of war, pressing health needs of 8 million refugees and 10 million in Afghanistan have been unmet, with women and children at most risk. Creating Hope International's project partner, the Afghan Institute of Learning (AIL), has been working to meet the health needs of 100,000 Afghan women and children annually in Afghanistan.",
          "longTermImpact": "Outcomes include lessening the severe shortage of Afghan female health professionals.  Graduates of the program will work in clinics for Afghan women and children, examining patients, providing midwifery and nursing services.",
          "activities": "To train 30 Afghan women as health professionals.",
          "additionalDocumentation": "https://www.globalgiving.org/pfil/25/projdoc.doc",
          "imageLink": "https://www.globalgiving.org/pfil/25/pict.jpg",
          "imageGallerySize": 1,
          "approvedDate": "2003-05-22T16:42:00-04:00",
          "image": {
            "title": "Training of Afghan Women Health Professionals",
            "id": 0,
            "imagelink": [
              {
                "url": "https://www.globalgiving.org/pfil/25/pict_grid1.jpg",
                "size": "small"
              },
              {
                "url": "https://www.globalgiving.org/pfil/25/pict_thumbnail.jpg",
                "size": "thumbnail"
              },
              {
                "url": "https://www.globalgiving.org/pfil/25/pict_med.jpg",
                "size": "medium"
              },
              {
                "url": "https://www.globalgiving.org/pfil/25/pict_grid7.jpg",
                "size": "large"
              },
              {
                "url": "https://www.globalgiving.org/pfil/25/pict_large.jpg",
                "size": "extraLarge"
              },
              {
                "url": "https://www.globalgiving.org/pfil/25/pict_original.jpg",
                "size": "original"
              }
            ]
          },
          "type": "project"
        },
        {
          "id": 337,
          "organization": {
            "id": 172,
            "bridgeId": 3567856904,
            "name": "APROSAR",
            "addressLine1": "C. Justo Flores Nº 100 entre Pedro Barrau y Olivos Zona Sud",
            "addressLine2": "",
            "city": "La Paz",
            "state": "",
            "postal": "",
            "iso3166CountryCode": "BO",
            "url": "",
            "mission": "To preserve the health in the communities of scarce resources respecting their customs and culture, making emphasis in the taken care of the health to cooperate in the communal development.",
            "totalProjects": 2,
            "activeProjects": 0,
            "themes": {
              "theme": [
                {
                  "id": "democ",
                  "name": "Democracy and Governance"
                },
                {
                  "id": "health",
                  "name": "Health"
                }
              ]
            },
            "countries": {
              "country": [
                {
                  "name": "Afghanistan",
                  "iso3166CountryCode": "AF"
                },
                {
                  "name": "Bolivia",
                  "iso3166CountryCode": "BO"
                }
              ]
            },
            "country": "Bolivia"
          },
          "active": false,
          "title": "pet pangolin project providing fungal relief",
          "summary": "fungal growth on the moon",
          "contactAddress": "1000 Centaur Street",
          "contactCity": "Elbonia",
          "contactState": "Vermont",
          "contactPostal": "10904",
          "contactCountry": "Andorra",
          "contactUrl": "http://www.subservientchicken.com/ninjinjknnadsji",
          "projectLink": "https://www.globalgiving.org/projects/pet-pangolin-project-providing-fungal-relief/",
          "progressReportLink": "https://www.globalgiving.org/projects/pet-pangolin-project-providing-fungal-relief/updates/",
          "themeName": "Democracy and Governance",
          "country": "Afghanistan",
          "iso3166CountryCode": "AF",
          "region": "Asia and Oceania",
          "goal": 1000000,
          "funding": 40,
          "remaining": 999960,
          "numberOfDonations": 4,
          "status": "retired",
          "need": "itenerant pangolins bent on transdimensional destruction",
          "longTermImpact": "nausea, death",
          "activities": "relief of Silurian glacial metlwaterstemporal",
          "additionalDocumentation": "https://www.globalgiving.org/pfil/337/projdoc.doc",
          "imageLink": "https://www.globalgiving.org/share/dfltpict.jpg",
          "imageGallerySize": 1,
          "approvedDate": "2004-04-19T14:42:40-04:00",
          "image": {
            "title": "pet pangolin project providing fungal relief",
            "id": 0,
            "imagelink": [
              {
                "url": "https://www.globalgiving.org/share/dfltpict.jpg",
                "size": "small"
              },
              {
                "url": "https://www.globalgiving.org/share/dfltpict.jpg",
                "size": "thumbnail"
              },
              {
                "url": "https://www.globalgiving.org/share/dfltpict.jpg",
                "size": "medium"
              },
              {
                "url": "https://www.globalgiving.org/share/dfltpict.jpg",
                "size": "large"
              },
              {
                "url": "https://www.globalgiving.org/share/dfltpict.jpg",
                "size": "extraLarge"
              },
              {
                "url": "https://www.globalgiving.org/share/dfltpict.jpg",
                "size": "original"
              }
            ]
          },
          "type": "project"
        },
        {
          "id": 354,
          "organization": {
            "id": 372,
            "bridgeId": 3656085010,
            "name": "Afghan Institute of Learning",
            "ein": "38-3288402",
            "addressLine1": "Afghan Institute of Learning",
            "addressLine2": "c/o CHI, PO Box 1058",
            "city": "Dearborn",
            "state": "Michigan",
            "postal": "48121",
            "iso3166CountryCode": "US",
            "url": "http://www.afghaninstituteoflearning.org",
            "logoUrl": "https://www.globalgiving.org/pfil/organ/372/orglogo.jpg",
            "mission": "The Afghan Institute of Learning (AIL) works to empower all Afghans who are needy, especially women and children, providing them the knowledge and skills to care for themselves. AIL is expanding access to quality education and healthcare through community based programming, enabling communities to develop the capacity of their people. The goal is to create a foundation of quality education and health systems throughout Afghanistan which meet the needs of local people now and in the future. AIL was founded by an Afghan woman and is run mainly by women, reaching thousands each year through health facilities, educational centers and training programs.",
            "totalProjects": 108,
            "activeProjects": 14,
            "themes": {
              "theme": [
                {
                  "id": "children",
                  "name": "Children"
                },
                {
                  "id": "democ",
                  "name": "Democracy and Governance"
                },
                {
                  "id": "disaster",
                  "name": "Disaster Recovery"
                },
                {
                  "id": "ecdev",
                  "name": "Economic Development"
                },
                {
                  "id": "edu",
                  "name": "Education"
                },
                {
                  "id": "env",
                  "name": "Environment"
                },
                {
                  "id": "finance",
                  "name": "Microfinance"
                },
                {
                  "id": "gender",
                  "name": "Women and Girls"
                },
                {
                  "id": "health",
                  "name": "Health"
                },
                {
                  "id": "human",
                  "name": "Humanitarian Assistance"
                },
                {
                  "id": "rights",
                  "name": "Human Rights"
                },
                {
                  "id": "tech",
                  "name": "Technology"
                },
                {
                  "id": "hunger",
                  "name": "Hunger"
                },
                {
                  "id": "art",
                  "name": "Arts and Culture"
                }
              ]
            },
            "countries": {
              "country": [
                {
                  "name": "Afghanistan",
                  "iso3166CountryCode": "AF"
                }
              ]
            },
            "country": "United States"
          },
          "active": true,
          "title": "Learning Centers for Rural Afghan Women in Herat",
          "summary": "This project supports rural Learning Centers for Afghan Women in Herat Province, Afghanistan. The centers provide educational classes and income generating skills instruction, as well as giving students information on topics such as health, democracy, elections, self- care both physical and mental and leadership skills. The centers also provide opportunities to attend workshops on such things as children's rights and violence against women.",
          "contactName": "Sakena Yacoobi",
          "contactTitle": "Founder & CEO",
          "contactAddress": "Creating Hope International",
          "contactAddress2": "P. O. Box 1058",
          "contactCity": "Dearborn",
          "contactState": "Michigan",
          "contactPostal": "48121",
          "contactCountry": "United States",
          "contactUrl": "http://www.creatinghope.org",
          "projectLink": "https://www.globalgiving.org/projects/learning-centers-afghan-women/",
          "progressReportLink": "https://www.globalgiving.org/projects/learning-centers-afghan-women/updates/",
          "themeName": "Education",
          "country": "Afghanistan",
          "iso3166CountryCode": "AF",
          "region": "Asia and Oceania",
          "goal": 70000,
          "funding": 57412.29,
          "remaining": 12587.71,
          "numberOfDonations": 1428,
          "status": "active",
          "need": "During the time of the Taliban regime in Afghanistan, education for women and girls was banned. AIL ran underground schools nonetheless, and then in 2003 opened Learning Centers to help make up for \"the lost education years\". Education services include: literacy, math, language and skills training classes. This project will ensure continuation of these urgently needed, accessible, culturally appropriate educational opportunities.",
          "longTermImpact": "A full array of educational services are provided to rural women and girls through Learning Centers in Herat Province, Afghanistan. These centers improve the education of Afghan women in the region giving them more options in life.",
          "activities": "Literacy, math, computers, English, and income-generating skills classes such as tailoring are offered at Learning Centers in Herat Province, Afghanistan. Each year over 18,000 students benefit from educational opportunities that include classes and workshops.",
          "imageLink": "https://www.globalgiving.org/pfil/354/pict.jpg",
          "imageGallerySize": 8,
          "longitude": 62.16064453125,
          "latitude": 34.56085968017578,
          "approvedDate": "2008-08-05T15:10:59-04:00",
          "donationOptions": {
            "donationOption": [
              {
                "amount": 25,
                "description": "15 women will learn to read."
              },
              {
                "amount": 50,
                "description": "5 women have cloth and tools for the tailoring course."
              },
              {
                "amount": 75,
                "description": "1 month of a teacher's salary for 30 literacy students"
              }
            ]
          },
          "image": {
            "title": "Learning Centers for Rural Afghan Women in Herat",
            "id": 0,
            "imagelink": [
              {
                "url": "https://www.globalgiving.org/pfil/354/pict_grid1.jpg",
                "size": "small"
              },
              {
                "url": "https://www.globalgiving.org/pfil/354/pict_thumbnail.jpg",
                "size": "thumbnail"
              },
              {
                "url": "https://www.globalgiving.org/pfil/354/pict_med.jpg",
                "size": "medium"
              },
              {
                "url": "https://www.globalgiving.org/pfil/354/pict_grid7.jpg",
                "size": "large"
              },
              {
                "url": "https://www.globalgiving.org/pfil/354/pict_large.jpg",
                "size": "extraLarge"
              },
              {
                "url": "https://www.globalgiving.org/pfil/354/pict_original.jpg",
                "size": "original"
              }
            ]
          },
          "type": "project"
        },
        {
          "id": 358,
          "organization": {
            "id": 372,
            "bridgeId": 3656085010,
            "name": "Afghan Institute of Learning",
            "ein": "38-3288402",
            "addressLine1": "Afghan Institute of Learning",
            "addressLine2": "c/o CHI, PO Box 1058",
            "city": "Dearborn",
            "state": "Michigan",
            "postal": "48121",
            "iso3166CountryCode": "US",
            "url": "http://www.afghaninstituteoflearning.org",
            "logoUrl": "https://www.globalgiving.org/pfil/organ/372/orglogo.jpg",
            "mission": "The Afghan Institute of Learning (AIL) works to empower all Afghans who are needy, especially women and children, providing them the knowledge and skills to care for themselves. AIL is expanding access to quality education and healthcare through community based programming, enabling communities to develop the capacity of their people. The goal is to create a foundation of quality education and health systems throughout Afghanistan which meet the needs of local people now and in the future. AIL was founded by an Afghan woman and is run mainly by women, reaching thousands each year through health facilities, educational centers and training programs.",
            "totalProjects": 108,
            "activeProjects": 14,
            "themes": {
              "theme": [
                {
                  "id": "children",
                  "name": "Children"
                },
                {
                  "id": "democ",
                  "name": "Democracy and Governance"
                },
                {
                  "id": "disaster",
                  "name": "Disaster Recovery"
                },
                {
                  "id": "ecdev",
                  "name": "Economic Development"
                },
                {
                  "id": "edu",
                  "name": "Education"
                },
                {
                  "id": "env",
                  "name": "Environment"
                },
                {
                  "id": "finance",
                  "name": "Microfinance"
                },
                {
                  "id": "gender",
                  "name": "Women and Girls"
                },
                {
                  "id": "health",
                  "name": "Health"
                },
                {
                  "id": "human",
                  "name": "Humanitarian Assistance"
                },
                {
                  "id": "rights",
                  "name": "Human Rights"
                },
                {
                  "id": "tech",
                  "name": "Technology"
                },
                {
                  "id": "hunger",
                  "name": "Hunger"
                },
                {
                  "id": "art",
                  "name": "Arts and Culture"
                }
              ]
            },
            "countries": {
              "country": [
                {
                  "name": "Afghanistan",
                  "iso3166CountryCode": "AF"
                }
              ]
            },
            "country": "United States"
          },
          "active": false,
          "title": "Give Afghans a University Degree",
          "summary": "Afghan youth, who studied in refugee schools and graduated from high school, now want to attend college. Make this dream a reality for 120 computer science and business administration students.",
          "contactName": "carolyn dunlap",
          "contactAddress": "Creating Hope International",
          "contactAddress2": "P. O. Box 1058",
          "contactCity": "Dearborn",
          "contactState": "Michigan",
          "contactPostal": "48121",
          "contactCountry": "United States",
          "contactUrl": "http://www.creatinghope.org",
          "projectLink": "https://www.globalgiving.org/projects/give-afghan-universities-degree/",
          "progressReportLink": "https://www.globalgiving.org/projects/give-afghan-universities-degree/updates/",
          "themeName": "Education",
          "country": "Afghanistan",
          "iso3166CountryCode": "AF",
          "region": "Asia and Oceania",
          "goal": 76000,
          "funding": 6777,
          "remaining": 69223,
          "numberOfDonations": 112,
          "status": "retired",
          "need": "Due to war in Afghanistan, university education has been almost non-existent for Afghans. In September 2002, CHI’s partner, the Afghan Institute of Learning, opened Gawhar Shad University to provide post-secondary education for Afghans. The University prepares young Afghans, especially women, in the fields of pedagogy, health and computer science. To date 140 men and women, have graduated, including 65 graduates from the College of Math and Computer Science and 75 from the Nurse Training Program",
          "longTermImpact": "Students in all curriculum tracks will be highly employable upon graduation and will have the tools that they need to take local, regional, and national decision-making positions.",
          "activities": "120 students will study math and computer science at the University, which offers classes to Afghan refugees in Pakistan. These students are learning technical and leadership skills in these fields.",
          "additionalDocumentation": "https://www.globalgiving.org/pfil/358/projdoc.doc",
          "imageLink": "https://www.globalgiving.org/pfil/358/pict.jpg",
          "imageGallerySize": 7,
          "longitude": 71.455078125,
          "latitude": 33.90689468383789,
          "approvedDate": "2008-08-05T17:12:13-04:00",
          "donationOptions": {
            "donationOption": [
              {
                "amount": 17,
                "description": "60 university students have a software engineering professor for one month."
              },
              {
                "amount": 34,
                "description": "120 university students have a computer operating systems professor for one month."
              },
              {
                "amount": 650,
                "description": "The University computer lab buys one more computer"
              }
            ]
          },
          "image": {
            "title": "Give Afghans a University Degree",
            "id": 0,
            "imagelink": [
              {
                "url": "https://www.globalgiving.org/pfil/358/pict_grid1.jpg",
                "size": "small"
              },
              {
                "url": "https://www.globalgiving.org/pfil/358/pict_thumbnail.jpg",
                "size": "thumbnail"
              },
              {
                "url": "https://www.globalgiving.org/pfil/358/pict_med.jpg",
                "size": "medium"
              },
              {
                "url": "https://www.globalgiving.org/pfil/358/pict_grid7.jpg",
                "size": "large"
              },
              {
                "url": "https://www.globalgiving.org/pfil/358/pict_large.jpg",
                "size": "extraLarge"
              },
              {
                "url": "https://www.globalgiving.org/pfil/358/pict_original.jpg",
                "size": "original"
              }
            ]
          },
          "type": "project"
        },
        {
          "id": 365,
          "organization": {
            "id": 372,
            "bridgeId": 3656085010,
            "name": "Afghan Institute of Learning",
            "ein": "38-3288402",
            "addressLine1": "Afghan Institute of Learning",
            "addressLine2": "c/o CHI, PO Box 1058",
            "city": "Dearborn",
            "state": "Michigan",
            "postal": "48121",
            "iso3166CountryCode": "US",
            "url": "http://www.afghaninstituteoflearning.org",
            "logoUrl": "https://www.globalgiving.org/pfil/organ/372/orglogo.jpg",
            "mission": "The Afghan Institute of Learning (AIL) works to empower all Afghans who are needy, especially women and children, providing them the knowledge and skills to care for themselves. AIL is expanding access to quality education and healthcare through community based programming, enabling communities to develop the capacity of their people. The goal is to create a foundation of quality education and health systems throughout Afghanistan which meet the needs of local people now and in the future. AIL was founded by an Afghan woman and is run mainly by women, reaching thousands each year through health facilities, educational centers and training programs.",
            "totalProjects": 108,
            "activeProjects": 14,
            "themes": {
              "theme": [
                {
                  "id": "children",
                  "name": "Children"
                },
                {
                  "id": "democ",
                  "name": "Democracy and Governance"
                },
                {
                  "id": "disaster",
                  "name": "Disaster Recovery"
                },
                {
                  "id": "ecdev",
                  "name": "Economic Development"
                },
                {
                  "id": "edu",
                  "name": "Education"
                },
                {
                  "id": "env",
                  "name": "Environment"
                },
                {
                  "id": "finance",
                  "name": "Microfinance"
                },
                {
                  "id": "gender",
                  "name": "Women and Girls"
                },
                {
                  "id": "health",
                  "name": "Health"
                },
                {
                  "id": "human",
                  "name": "Humanitarian Assistance"
                },
                {
                  "id": "rights",
                  "name": "Human Rights"
                },
                {
                  "id": "tech",
                  "name": "Technology"
                },
                {
                  "id": "hunger",
                  "name": "Hunger"
                },
                {
                  "id": "art",
                  "name": "Arts and Culture"
                }
              ]
            },
            "countries": {
              "country": [
                {
                  "name": "Afghanistan",
                  "iso3166CountryCode": "AF"
                }
              ]
            },
            "country": "United States"
          },
          "active": false,
          "title": "Training Afghan Women Health Professionals",
          "summary": "Trains 30 female health professionals in Afghanistan or in a refugee camp in Pakistan, which will allow more Afghan women to access quality healthcare, including reproductive healthcare.",
          "contactAddress": "Creating Hope International",
          "contactAddress2": "P. O. Box 1058",
          "contactCity": "Dearborn",
          "contactState": "Michigan",
          "contactPostal": "48121",
          "contactCountry": "United States",
          "contactUrl": "http://www.creatinghope.org",
          "projectLink": "https://www.globalgiving.org/projects/job-training-for-afghan-women/",
          "progressReportLink": "https://www.globalgiving.org/projects/job-training-for-afghan-women/updates/",
          "themeName": "Health",
          "country": "Afghanistan",
          "iso3166CountryCode": "AF",
          "region": "Asia and Oceania",
          "goal": 1800,
          "funding": 4340.4,
          "remaining": 0,
          "numberOfDonations": 70,
          "status": "funded",
          "need": "Taliban restrictions and war made healthcare unavailable to Afghan women—with deadly consequences. Today, Afghan women suffer the world’s highest maternal mortality rate as the country struggles through a period of reconstruction. Because Afghans have a strong preference that women receive healthcare from women, training female traditional birth attendants (TBA) and nurse/health educators (NHE) increases women’s access to quality healthcare, especially reproductive healthcare, and saves lives.",
          "longTermImpact": "This project will train 30 Afghan women as health professionals and will ease shortages of trained Afghan female health workers. Graduates will either work in clinics for Afghan women and children or assist in home baby deliveries.",
          "activities": "TBAs learn how to deliver babies safely and about pregnancy disorders and signs of danger during delivery. NHEs learn over 100 medical subjects and perform practical work as part of their program. They provide vaccinations and other medical care.",
          "additionalDocumentation": "https://www.globalgiving.org/pfil/365/projdoc.doc",
          "imageLink": "https://www.globalgiving.org/pfil/365/pict.jpg",
          "imageGallerySize": 6,
          "approvedDate": "2004-06-01T12:43:30-04:00",
          "image": {
            "title": "Training Afghan Women Health Professionals",
            "id": 0,
            "imagelink": [
              {
                "url": "https://www.globalgiving.org/pfil/365/pict_grid1.jpg",
                "size": "small"
              },
              {
                "url": "https://www.globalgiving.org/pfil/365/pict_thumbnail.jpg",
                "size": "thumbnail"
              },
              {
                "url": "https://www.globalgiving.org/pfil/365/pict_med.jpg",
                "size": "medium"
              },
              {
                "url": "https://www.globalgiving.org/pfil/365/pict_grid7.jpg",
                "size": "large"
              },
              {
                "url": "https://www.globalgiving.org/pfil/365/pict_large.jpg",
                "size": "extraLarge"
              },
              {
                "url": "https://www.globalgiving.org/pfil/365/pict_original.jpg",
                "size": "original"
              }
            ]
          },
          "type": "project"
        },
        {
          "id": 663,
          "organization": {
            "id": 372,
            "bridgeId": 3656085010,
            "name": "Afghan Institute of Learning",
            "ein": "38-3288402",
            "addressLine1": "Afghan Institute of Learning",
            "addressLine2": "c/o CHI, PO Box 1058",
            "city": "Dearborn",
            "state": "Michigan",
            "postal": "48121",
            "iso3166CountryCode": "US",
            "url": "http://www.afghaninstituteoflearning.org",
            "logoUrl": "https://www.globalgiving.org/pfil/organ/372/orglogo.jpg",
            "mission": "The Afghan Institute of Learning (AIL) works to empower all Afghans who are needy, especially women and children, providing them the knowledge and skills to care for themselves. AIL is expanding access to quality education and healthcare through community based programming, enabling communities to develop the capacity of their people. The goal is to create a foundation of quality education and health systems throughout Afghanistan which meet the needs of local people now and in the future. AIL was founded by an Afghan woman and is run mainly by women, reaching thousands each year through health facilities, educational centers and training programs.",
            "totalProjects": 108,
            "activeProjects": 14,
            "themes": {
              "theme": [
                {
                  "id": "children",
                  "name": "Children"
                },
                {
                  "id": "democ",
                  "name": "Democracy and Governance"
                },
                {
                  "id": "disaster",
                  "name": "Disaster Recovery"
                },
                {
                  "id": "ecdev",
                  "name": "Economic Development"
                },
                {
                  "id": "edu",
                  "name": "Education"
                },
                {
                  "id": "env",
                  "name": "Environment"
                },
                {
                  "id": "finance",
                  "name": "Microfinance"
                },
                {
                  "id": "gender",
                  "name": "Women and Girls"
                },
                {
                  "id": "health",
                  "name": "Health"
                },
                {
                  "id": "human",
                  "name": "Humanitarian Assistance"
                },
                {
                  "id": "rights",
                  "name": "Human Rights"
                },
                {
                  "id": "tech",
                  "name": "Technology"
                },
                {
                  "id": "hunger",
                  "name": "Hunger"
                },
                {
                  "id": "art",
                  "name": "Arts and Culture"
                }
              ]
            },
            "countries": {
              "country": [
                {
                  "name": "Afghanistan",
                  "iso3166CountryCode": "AF"
                }
              ]
            },
            "country": "United States"
          },
          "active": false,
          "title": "Afghan Women Learn Traditional Carpet Weaving",
          "summary": "Women learn to weave beautiful carpets, preserving their ancient Persian traditions. Carpet sales earn women income to support themselves and their families.",
          "contactName": "carolyn dunlap",
          "contactAddress": "Creating Hope International",
          "contactAddress2": "PO Box 1058",
          "contactCity": "Dearborn",
          "contactState": "Michigan",
          "contactPostal": "48121",
          "contactCountry": "United States",
          "contactUrl": "http://www.creatinghope.org",
          "projectLink": "https://www.globalgiving.org/projects/develop-women-jobs-in-afghanistan/",
          "progressReportLink": "https://www.globalgiving.org/projects/develop-women-jobs-in-afghanistan/updates/",
          "themeName": "Economic Development",
          "country": "Afghanistan",
          "iso3166CountryCode": "AF",
          "region": "Asia and Oceania",
          "goal": 15000,
          "funding": 9613.94,
          "remaining": 5386.06,
          "numberOfDonations": 231,
          "status": "funded",
          "need": "Herat, Afghanistan, has been a center of fine carpet weaving for thousands of years. However, this ancient art is in danger of extinction because of the last quarter-century of civil strife in Afghanistan, which claimed the lives of thousands of skilled people and destroyed infrastructure, homes, and necessary resources. This project seeks to revitalize this ancient art by supporting women to be carpet weavers with training, supervision, equipment, and supplies.",
          "longTermImpact": "Many Afghan women today experience cultural barriers to employment. But carpet weaving is a traditional income-earning occupation for women in Afghanistan. Therefore, women can easily use this skill to support themselves and their families.",
          "activities": "A dozen women will learn a skill and earn a living wage. Carpet sale income provides funding for health care and education, literacy, computer classes, and teacher training for about 350 people in Herat per month through project partner, AIL.",
          "additionalDocumentation": "https://www.globalgiving.org/pfil/663/projdoc.doc",
          "imageLink": "https://www.globalgiving.org/pfil/663/pict.jpg",
          "imageGallerySize": 8,
          "longitude": 62.1826171875,
          "latitude": 34.39784622192383,
          "approvedDate": "2008-08-05T17:17:47-04:00",
          "donationOptions": {
            "donationOption": [
              {
                "amount": 33,
                "description": "10 family members have food for 2 weeks because of a weaver's income."
              },
              {
                "amount": 58,
                "description": "One carpet weaver's child can go to school for a year because of a weaver's income."
              },
              {
                "amount": 66,
                "description": "20 people have a place to live for one month because of a weaver's income."
              },
              {
                "amount": 700,
                "description": "350 women and children have healthcare and education through AIL because of carpet sales."
              }
            ]
          },
          "image": {
            "title": "Afghan Women Learn Traditional Carpet Weaving",
            "id": 0,
            "imagelink": [
              {
                "url": "https://www.globalgiving.org/pfil/663/pict_grid1.jpg",
                "size": "small"
              },
              {
                "url": "https://www.globalgiving.org/pfil/663/pict_thumbnail.jpg",
                "size": "thumbnail"
              },
              {
                "url": "https://www.globalgiving.org/pfil/663/pict_med.jpg",
                "size": "medium"
              },
              {
                "url": "https://www.globalgiving.org/pfil/663/pict_grid7.jpg",
                "size": "large"
              },
              {
                "url": "https://www.globalgiving.org/pfil/663/pict_large.jpg",
                "size": "extraLarge"
              },
              {
                "url": "https://www.globalgiving.org/pfil/663/pict_original.jpg",
                "size": "original"
              }
            ]
          },
          "type": "project"
        },
        {
          "id": 669,
          "organization": {
            "id": 372,
            "bridgeId": 3656085010,
            "name": "Afghan Institute of Learning",
            "ein": "38-3288402",
            "addressLine1": "Afghan Institute of Learning",
            "addressLine2": "c/o CHI, PO Box 1058",
            "city": "Dearborn",
            "state": "Michigan",
            "postal": "48121",
            "iso3166CountryCode": "US",
            "url": "http://www.afghaninstituteoflearning.org",
            "logoUrl": "https://www.globalgiving.org/pfil/organ/372/orglogo.jpg",
            "mission": "The Afghan Institute of Learning (AIL) works to empower all Afghans who are needy, especially women and children, providing them the knowledge and skills to care for themselves. AIL is expanding access to quality education and healthcare through community based programming, enabling communities to develop the capacity of their people. The goal is to create a foundation of quality education and health systems throughout Afghanistan which meet the needs of local people now and in the future. AIL was founded by an Afghan woman and is run mainly by women, reaching thousands each year through health facilities, educational centers and training programs.",
            "totalProjects": 108,
            "activeProjects": 14,
            "themes": {
              "theme": [
                {
                  "id": "children",
                  "name": "Children"
                },
                {
                  "id": "democ",
                  "name": "Democracy and Governance"
                },
                {
                  "id": "disaster",
                  "name": "Disaster Recovery"
                },
                {
                  "id": "ecdev",
                  "name": "Economic Development"
                },
                {
                  "id": "edu",
                  "name": "Education"
                },
                {
                  "id": "env",
                  "name": "Environment"
                },
                {
                  "id": "finance",
                  "name": "Microfinance"
                },
                {
                  "id": "gender",
                  "name": "Women and Girls"
                },
                {
                  "id": "health",
                  "name": "Health"
                },
                {
                  "id": "human",
                  "name": "Humanitarian Assistance"
                },
                {
                  "id": "rights",
                  "name": "Human Rights"
                },
                {
                  "id": "tech",
                  "name": "Technology"
                },
                {
                  "id": "hunger",
                  "name": "Hunger"
                },
                {
                  "id": "art",
                  "name": "Arts and Culture"
                }
              ]
            },
            "countries": {
              "country": [
                {
                  "name": "Afghanistan",
                  "iso3166CountryCode": "AF"
                }
              ]
            },
            "country": "United States"
          },
          "active": false,
          "title": "Building a Nutrition Clinic in Rural Afghanistan",
          "summary": "Builds a needed nutrition clinic to function as part of a larger clinic serving 8,000 rural Afghans per month. The clinic will treat nutrition-related health problems, especially in children.",
          "contactAddress": "Creating Hope International",
          "contactAddress2": "PO Box 1058",
          "contactCity": "Dearborn",
          "contactState": "Michigan",
          "contactPostal": "48121",
          "contactCountry": "United States",
          "contactUrl": "http://www.creatinghope.org",
          "projectLink": "https://www.globalgiving.org/projects/fight-malnutrition-afghanistan/",
          "progressReportLink": "https://www.globalgiving.org/projects/fight-malnutrition-afghanistan/updates/",
          "themeName": "Health",
          "country": "Afghanistan",
          "iso3166CountryCode": "AF",
          "region": "Asia and Oceania",
          "goal": 1950,
          "funding": 2174.4,
          "remaining": 0,
          "numberOfDonations": 67,
          "status": "funded",
          "need": "Twenty-five years of war have devastated Afghanistan. Homes, farms, and orchards were destroyed and have resulted in food shortages that have been worsened by a long drought. Project partner the Afghan Institute of Learning has opened a clinic in a rural area of Kabul province called Mir Bacha Kot. Over 8,000 people per month are served through this clinic and its mobile units. Patients especially need a nutrition clinic to help them recover from health problems related to poor nutrition.",
          "longTermImpact": "The nutrition clinic will treat nutrition-related health problems and educate mothers about proper nutrition for their children, caring for a child’s health and growth, using food, breastfeeding, and measuring height and weight.",
          "activities": "Clinic staff is hampered by lack of space to adequately focus on nutrition-related health problems, especially for children. Funding to build a small nutrition clinic that would function as a unit of the larger clinic is needed.",
          "additionalDocumentation": "https://www.globalgiving.org/pfil/669/projdoc.doc",
          "imageLink": "https://www.globalgiving.org/pfil/669/pict.jpg",
          "imageGallerySize": 7,
          "approvedDate": "2004-07-26T14:20:04-04:00",
          "image": {
            "title": "Building a Nutrition Clinic in Rural Afghanistan",
            "id": 0,
            "imagelink": [
              {
                "url": "https://www.globalgiving.org/pfil/669/pict_grid1.jpg",
                "size": "small"
              },
              {
                "url": "https://www.globalgiving.org/pfil/669/pict_thumbnail.jpg",
                "size": "thumbnail"
              },
              {
                "url": "https://www.globalgiving.org/pfil/669/pict_med.jpg",
                "size": "medium"
              },
              {
                "url": "https://www.globalgiving.org/pfil/669/pict_grid7.jpg",
                "size": "large"
              },
              {
                "url": "https://www.globalgiving.org/pfil/669/pict_large.jpg",
                "size": "extraLarge"
              },
              {
                "url": "https://www.globalgiving.org/pfil/669/pict_original.jpg",
                "size": "original"
              }
            ]
          },
          "type": "project"
        }
      ],
      "numberFound": 554
    }
  },
  "status": 200,
  "statusText": "",
  "headers": {
    "cache-control": "max-age=43200",
    "content-length": "43193",
    "content-type": "application/json;charset=UTF-8"
  },
  "config": {
    "url": "https://api.globalgiving.org/api/public/projectservice/countries/AF/projects?api_key=961c70eb-d43d-4acc-a6eb-5ff2482a02d0&nextProjectId=1",
    "method": "get",
    "headers": {
      "Accept": "application/json, text/plain, */*"
    },
    "transformRequest": [
      null
    ],
    "transformResponse": [
      null
    ],
    "timeout": 0,
    "xsrfCookieName": "XSRF-TOKEN",
    "xsrfHeaderName": "X-XSRF-TOKEN",
    "maxContentLength": -1
  },
  "request": {}
}

const tenGoodReponse = {
  "hasNext": true,
  "nextId": 673,
  "totalNumberOfCharities": 554,
  "projects": [
    {
      "id": 12,
      "title": "Women's Learning Center in Herat, Afghanistan",
      "country": "Afghanistan",
      "organizationCountries": [
        "Afghanistan"
      ],
      "logoImage": "https://www.globalgiving.org/pfil/12/pict.jpg",
      "addressCountry": "United States",
      "addressCity": "Dearborn",
      "addressLine1": "Afghan Institute of Learning",
      "addressLine2": "c/o CHI, PO Box 1058",
      "contactUrl": "http://www.creatinghope.org"
    },
    {
      "id": 13,
      "title": "Women's Learning Center in Mir Bacha Kot",
      "country": "Afghanistan",
      "organizationCountries": [
        "Afghanistan"
      ],
      "logoImage": "https://www.globalgiving.org/pfil/13/pict.jpg",
      "addressCountry": "United States",
      "addressCity": "Dearborn",
      "addressLine1": "Afghan Institute of Learning",
      "addressLine2": "c/o CHI, PO Box 1058",
      "contactUrl": "http://www.creatinghope.org"
    },
    {
      "id": 14,
      "title": "Women's Learning Centers in Kabul, Afghanistan",
      "country": "Afghanistan",
      "organizationCountries": [
        "Afghanistan"
      ],
      "logoImage": "https://www.globalgiving.org/pfil/14/pict.jpg",
      "addressCountry": "United States",
      "addressCity": "Dearborn",
      "addressLine1": "Afghan Institute of Learning",
      "addressLine2": "c/o CHI, PO Box 1058",
      "contactUrl": "http://www.creatinghope.org"
    },
    {
      "id": 25,
      "title": "Training of Afghan Women Health Professionals",
      "country": "Afghanistan",
      "organizationCountries": [
        "Afghanistan"
      ],
      "logoImage": "https://www.globalgiving.org/pfil/25/pict.jpg",
      "addressCountry": "United States",
      "addressCity": "Dearborn",
      "addressLine1": "Afghan Institute of Learning",
      "addressLine2": "c/o CHI, PO Box 1058",
      "contactUrl": "http://www.creatinghope.org"
    },
    {
      "id": 337,
      "title": "pet pangolin project providing fungal relief",
      "country": "Afghanistan",
      "organizationCountries": [
        "Afghanistan",
        "Bolivia"
      ],
      "logoImage": "https://www.globalgiving.org/share/dfltpict.jpg",
      "addressCountry": "Bolivia",
      "addressCity": "La Paz",
      "addressLine1": "C. Justo Flores Nº 100 entre Pedro Barrau y Olivos Zona Sud",
      "addressLine2": "",
      "contactUrl": "http://www.subservientchicken.com/ninjinjknnadsji"
    },
    {
      "id": 354,
      "title": "Learning Centers for Rural Afghan Women in Herat",
      "country": "Afghanistan",
      "organizationCountries": [
        "Afghanistan"
      ],
      "logoImage": "https://www.globalgiving.org/pfil/354/pict.jpg",
      "addressCountry": "United States",
      "addressCity": "Dearborn",
      "addressLine1": "Afghan Institute of Learning",
      "addressLine2": "c/o CHI, PO Box 1058",
      "contactUrl": "http://www.creatinghope.org"
    },
    {
      "id": 358,
      "title": "Give Afghans a University Degree",
      "country": "Afghanistan",
      "organizationCountries": [
        "Afghanistan"
      ],
      "logoImage": "https://www.globalgiving.org/pfil/358/pict.jpg",
      "addressCountry": "United States",
      "addressCity": "Dearborn",
      "addressLine1": "Afghan Institute of Learning",
      "addressLine2": "c/o CHI, PO Box 1058",
      "contactUrl": "http://www.creatinghope.org"
    },
    {
      "id": 365,
      "title": "Training Afghan Women Health Professionals",
      "country": "Afghanistan",
      "organizationCountries": [
        "Afghanistan"
      ],
      "logoImage": "https://www.globalgiving.org/pfil/365/pict.jpg",
      "addressCountry": "United States",
      "addressCity": "Dearborn",
      "addressLine1": "Afghan Institute of Learning",
      "addressLine2": "c/o CHI, PO Box 1058",
      "contactUrl": "http://www.creatinghope.org"
    },
    {
      "id": 663,
      "title": "Afghan Women Learn Traditional Carpet Weaving",
      "country": "Afghanistan",
      "organizationCountries": [
        "Afghanistan"
      ],
      "logoImage": "https://www.globalgiving.org/pfil/663/pict.jpg",
      "addressCountry": "United States",
      "addressCity": "Dearborn",
      "addressLine1": "Afghan Institute of Learning",
      "addressLine2": "c/o CHI, PO Box 1058",
      "contactUrl": "http://www.creatinghope.org"
    },
    {
      "id": 669,
      "title": "Building a Nutrition Clinic in Rural Afghanistan",
      "country": "Afghanistan",
      "organizationCountries": [
        "Afghanistan"
      ],
      "logoImage": "https://www.globalgiving.org/pfil/669/pict.jpg",
      "addressCountry": "United States",
      "addressCity": "Dearborn",
      "addressLine1": "Afghan Institute of Learning",
      "addressLine2": "c/o CHI, PO Box 1058",
      "contactUrl": "http://www.creatinghope.org"
    }
  ]
}

describe('nextCharitiesMapper', () => {
  it('No charities', () => {
    expect(nextCharitiesMapper(emptyData)).toHaveProperty("totalNumberOfCharities", 0)
    expect(nextCharitiesMapper(emptyData).projects).toHaveLength(0)
  });
  it('Ten charities in response', () => {
    expect(nextCharitiesMapper(fullData)).toHaveProperty("projects")
    expect(nextCharitiesMapper(fullData).projects).toHaveLength(10)
    expect(nextCharitiesMapper(fullData).projects[0]).toHaveProperty("id")
    expect(nextCharitiesMapper(fullData).projects[0]).toHaveProperty("title")
    expect(nextCharitiesMapper(fullData).projects[0]).toHaveProperty("country")
    expect(nextCharitiesMapper(fullData).projects[0]).toHaveProperty("organizationCountries")
    expect(nextCharitiesMapper(fullData).projects[0]).toHaveProperty("logoImage")
    expect(nextCharitiesMapper(fullData).projects[0]).toHaveProperty("addressCountry")
    expect(nextCharitiesMapper(fullData).projects[0]).toHaveProperty("addressCity")
    expect(nextCharitiesMapper(fullData).projects[0]).toHaveProperty("addressLine1")
    expect(nextCharitiesMapper(fullData).projects[0]).toHaveProperty("addressLine2")
    expect(nextCharitiesMapper(fullData).projects[0]).toHaveProperty("contactUrl")
  });
  it('Ten charities in response - full response', () => {
    expect(nextCharitiesMapper(fullData)).toEqual(tenGoodReponse)
  });
});

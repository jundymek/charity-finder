import { filterByCountriesOrganizationServes } from "../../helpers/filterByCountriesOrganizationServes";


const data = [
  {
    "id": 696,
    "title": "Protecting old crafts we protect monuments!",
    "country": "Poland",
    "organizationCountries": [
      "Poland"
    ]
  },
  {
    "id": 733,
    "title": "Kids change the world - protecting the family",
    "country": "Poland",
    "organizationCountries": [
      "Poland"
    ]
  },
  {
    "id": 1178,
    "title": "Help Move 5,000 Kids Closer to Family and Nature",
    "country": "Poland",
    "organizationCountries": [
      "Poland"
    ]
  },
  {
    "id": 1217,
    "title": "Educate 150 Disadvantaged Young People in Poland",
    "country": "Poland",
    "organizationCountries": [
      "Poland"
    ]
  },
  {
    "id": 1289,
    "title": "Life Skills for Children With Learning Disability",
    "country": "Poland",
    "organizationCountries": [
      "Poland"
    ]
  },
  {
    "id": 2711,
    "title": "Helping young people to let them help themselves",
    "country": "Poland",
    "organizationCountries": [
      "Poland"
    ]
  },
  {
    "id": 5280,
    "title": "Training 73 volunteers to work in Poland",
    "country": "Poland",
    "organizationCountries": [
      "India",
      "Poland"
    ]
  },
  {
    "id": 7595,
    "title": "10 000 Polish Girls as Engineers!",
    "country": "Poland",
    "organizationCountries": [
      "Poland"
    ]
  },
  {
    "id": 14562,
    "title": "Four Rescue Wheels",
    "country": "Poland",
    "organizationCountries": [
      "Armenia",
      "Moldova, Republic of",
      "Poland"
    ]
  },
  {
    "id": 14793,
    "title": "Help Kids from Wroclaw Hospice Foundation",
    "country": "Poland",
    "organizationCountries": [
      "Poland"
    ]
  }
]

describe('compare countries', () => {
  it('no selected countries', () => {
    expect(filterByCountriesOrganizationServes(data, [])).toEqual(data);
  });
  it('selected one country existing in each project', () => {
    expect(filterByCountriesOrganizationServes(data, [{ 'value': 'PL', "label": "Poland" }])).toEqual(data);
  });
  it('selected not existing country', () => {
    expect(filterByCountriesOrganizationServes(data, [{ 'value': 'AS', "label": "American Samoa" }])).toEqual([]);
  });
  it('selected one country existing in some projects', () => {
    expect(filterByCountriesOrganizationServes(data, [{ 'value': 'AM', "label": "Armenia" }])).toEqual([{
      "id": 14562,
      "title": "Four Rescue Wheels",
      "country": "Poland",
      "organizationCountries": [
        "Armenia",
        "Moldova, Republic of",
        "Poland"
      ]
    }]);
  });
  it('selected two countries existing in some projects', () => {
    expect(filterByCountriesOrganizationServes(data, [{ 'value': 'AM', "label": "Armenia" }, { 'value': 'IN', "label": "India" }])).toEqual([{
      "id": 5280,
      "title": "Training 73 volunteers to work in Poland",
      "country": "Poland",
      "organizationCountries": [
        "India",
        "Poland"
      ]
    }, {
      "id": 14562,
      "title": "Four Rescue Wheels",
      "country": "Poland",
      "organizationCountries": [
        "Armenia",
        "Moldova, Republic of",
        "Poland"
      ]
    },]);
  });
});

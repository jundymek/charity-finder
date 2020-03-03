import { MappedResponse, RawResponse, Project, CountryArray } from "./types";

export function propsMaper(resData: RawResponse): MappedResponse {
  console.log(resData.data.projects)
  return {
    hasNext: resData.data.projects.hasNext,
    nextId: resData.data.projects.nextProjectId,
    totalNumberOfCharities: resData.data.projects.numberFound,
    projects: resData.data.projects.project ? resData.data.projects.project.map((item: Project) =>
      ({
        id: item.id,
        title: item.title,
        country: item.country,
        organizationCountries: item.organization.countries.country ? item.organization.countries.country.map((item: CountryArray) => item.name) : [],
        logoImage: item.imageLink,
        address: {'country': item.organization.country, 'city': item.organization.city, 'addressLine1': item.organization.addressLine1, 'addressLine2': item.organization.addressLine2},
        contactUrl: item.contactUrl.length ? item.contactUrl : item.projectLink
      })) : [],
  }
}

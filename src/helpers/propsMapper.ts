import { MappedResponse, RawResponse, Project, CountryArray } from "./types";

export function propsMaper(resData: RawResponse): MappedResponse {
  // console.log(resData.data.projects)
  return {
    hasNext: resData.data.projects.hasNext,
    nextId: resData.data.projects.nextProjectId,
    projects: resData.data.projects.project ? resData.data.projects.project.map((item: Project) =>
      ({
        id: item.id,
        title: item.title,
        country: item.country,
        organizationCountries: item.organization.countries.country ? item.organization.countries.country.map((item: CountryArray) => item.name) : []
      })) : []
  }
}

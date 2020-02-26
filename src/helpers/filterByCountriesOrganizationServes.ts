import { Charity, SelectedCountry } from "./types";


export const filterByCountriesOrganizationServes = (data: Charity[], countries: SelectedCountry[]) => {
  if (countries.length) {
    return data.filter((project: any) =>
      project.organizationCountries.some((item: any) =>
        countries.map(item => item.label).includes(item)
      )
    );
  }
  return data
};

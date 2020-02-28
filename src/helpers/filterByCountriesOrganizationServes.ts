import { Charity, SelectedCountry } from "./types";

export const filterByCountriesOrganizationServes = (data: Charity[], countries: SelectedCountry[]) => {
  if (countries.length) {
    return data.filter((project: Charity) =>
      project.organizationCountries.some((item: string) =>
        countries.map(item => item.label).includes(item)
      )
    );
  }
  return data
};

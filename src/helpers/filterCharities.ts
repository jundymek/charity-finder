import { filterByCountriesOrganizationServes } from "./filterByCountriesOrganizationServes"
import { Charity, SelectedCountry } from "./types";

export const filterCharities = (data: Charity[], inputValue: string = "", countries: SelectedCountry[]) => {
  return filterByCountriesOrganizationServes(data, countries).filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase()));
};

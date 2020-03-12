import { filterByCountriesOrganizationServes } from "./filterByCountriesOrganizationServes"
import { Charity, SelectedCountry } from "../../../types/types";

export const filterCharities = (data: Charity[], inputValue: string = "", countries: SelectedCountry[]): Charity[] => {
  return filterByCountriesOrganizationServes(data, countries).filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase()));
};

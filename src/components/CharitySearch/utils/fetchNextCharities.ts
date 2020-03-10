import { RawResponse, SelectedCountry } from "../../../helpers/types";
import {fetchCharitiesByCountry} from "./fetchCharitiesByCountry";
import {fetchAllCharities} from "./fetchAllCharities";

export function fetchNextCharities(id: number, selectedCountry: SelectedCountry): Promise<RawResponse> {
  if (selectedCountry && selectedCountry["value"].length > 0) {
    return fetchCharitiesByCountry(selectedCountry, id);
  }
  return fetchAllCharities(id);
};

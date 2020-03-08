export interface Selected {
  value: string;
  label: string;
}

export type SelectedCountry = { value: string; label: string };

export type CountryArray = {
  name: string;
}

export interface MappedResponse {
  hasNext: boolean;
  nextId: number;
  totalNumberOfCharities: number;
  projects: Charity[]
}

export interface Charity {
  id: number;
  title: string;
  country: string;
  organizationCountries: string[];
  logoImage: string,
  addressCountry: string,
  addressCity: string,
  addressLine1: string;
  addressLine2: string;
  contactUrl: string;
}

export interface RawResponse {
  data: Data;
  status: number;
  statusText: string;
  headers: RawResponseHeaders;
}

export interface ConfigHeaders {
  Accept: string;
}

export interface Data {
  projects: Projects;
}

export interface Projects {
  project: Project[];
  numberFound: number;
  hasNext: boolean;
  nextProjectId: number;
}

export interface Project {
  id: number;
  organization: Organization;
  active: boolean;
  title: string;
  summary: string;
  contactName: string;
  contactAddress: string;
  contactCity: string;
  contactState: string;
  contactPostal: string;
  contactCountry: string;
  contactUrl: string;
  projectLink: string;
  progressReportLink: string;
  themeName: string;
  country: string;
  iso3166CountryCode: string;
  region: string;
  goal: number;
  funding: number;
  remaining: number;
  numberOfDonations: number;
  status: string;
  need: string;
  longTermImpact: string;
  activities: string;
  additionalDocumentation: string;
  imageLink: string;
  imageGallerySize: number;
  longitude?: number;
  latitude?: number;
  approvedDate: Date;
  donationOptions: DonationOptions;
  image: Image;
  type: string;
  videos?: Videos;

}

export interface DonationOptions {
  donationOption: DonationOption[];
}

export interface DonationOption {
  amount: number;
  description: string;
}

export interface Image {
  title: string;
  id: number;
  imagelink: Imagelink[];
}

export interface Imagelink {
  url: string;
  size: string;
}

export interface Organization {
  id: number;
  bridgeId?: number;
  name: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postal: string;
  iso3166CountryCode: string;
  url: string;
  logoUrl: string;
  mission: string;
  totalProjects: number;
  activeProjects: number;
  themes: Themes;
  countries: Countries;
  country: string;
}

export interface Countries {
  country: Country[];
}

export interface Country {
  name: string;
  iso3166CountryCode: string;
}

export interface Themes {
  theme: Theme[];
}

export interface Theme {
  id: string;
  name: string;
}

export interface Videos {
  video: Video[];
}

export interface Video {
  url: string;
}

export interface RawResponseHeaders {
  "cache-control": string;
  "content-length": string;
  "content-type": string;
}

export interface Request {
}

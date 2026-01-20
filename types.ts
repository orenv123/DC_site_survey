
export interface SiteData {
  location: string;
  region: string;
  coordinates: {
    lat: string;
    lng: string;
    decimal: string;
  };
  description: string;
  elevation: {
    exact: string;
    range: string;
    topography: string;
    significance: string;
  };
  soil: {
    type: string;
    stratigraphy: string[];
    bearingCapacity: string;
    requiredAction: string;
  };
  waterTable: {
    depth: string;
    significance: string;
  };
  seismic: {
    hazard: string;
    historical: string;
    standards: string;
  };
  climate: {
    avgTemp: string;
    extremes: string;
    annualRain: string;
    humidity: string;
    potential: string;
    snow: string;
    floodRisk: string;
    risks: string[];
  };
}

export interface ChartData {
  month: string;
  temp: number;
  rain: number;
}


import { SiteData, ChartData } from './types';

export const SITE_INFO: SiteData = {
  location: "Kashar / Mëzez zone, Tirana Plain",
  region: "West of Tirana, Albania",
  coordinates: {
    lat: "41°20′04.1″ N",
    lng: "19°44′38.2″ E",
    decimal: "41.33447, 19.74394"
  },
  description: "Strategically located within the Tirana-Durrës industrial corridor on the flat alluvial plain.",
  elevation: {
    exact: "~94m ASL",
    range: "90m to 100m",
    topography: "Flat to very gently undulating (<3% slope)",
    significance: "Moderate elevation; situated above sea-level floodplains but prone to pluvial rainfall accumulation."
  },
  soil: {
    type: "Tirana Depression Sedimentary Basin",
    stratigraphy: [
      "Holocene Alluvial gravels/sands",
      "Pliocene Plastic Clays",
      "Miocene Sandstones",
      "Oligocene Flysch (Deep bearing layer)"
    ],
    bearingCapacity: "Variable (Low to Moderate)",
    requiredAction: "Deep foundations (piles) or significant soil improvement to reach 250+ kPa target."
  },
  waterTable: {
    depth: "2.0m to 6.0m (Seasonal)",
    significance: "Influenced by winter rainfall. Requires robust perimeter drainage and sub-slab waterproofing."
  },
  seismic: {
    hazard: "Moderate to High",
    historical: "Mw 5.4 – 6.4 events recorded",
    standards: "Strict Eurocode 8 Type D compliance required for structural resilience."
  },
  climate: {
    avgTemp: "17°C",
    extremes: "-10°C to 43°C",
    annualRain: "1,300 - 1,400 mm",
    humidity: "Moderate to High (Humid winters)",
    potential: "Free cooling viable during winter/shoulder seasons.",
    snow: "While rare, winter temperatures can drop to -10°C. HVAC systems and roof structures must be designed for intermittent snow loading and icing risks during extreme cold snaps.",
    floodRisk: "Pluvial (rainfall) flooding is a primary risk factor during heavy Mediterranean storms. The flat terrain leads to slow drainage rather than flash floods. Mandatory mitigation includes elevated site grading, retention basins, and redundant high-capacity stormwater outlets.",
    risks: [
      "High peak summer cooling loads (40°C+)",
      "Corrosion control for humidity cycles",
      "Pluvial flooding during extreme storms",
      "Intermittent winter snow and icing"
    ]
  }
};

export const CLIMATE_CHART_DATA: ChartData[] = [
  { month: 'Jan', temp: 7, rain: 150 },
  { month: 'Feb', temp: 8, rain: 130 },
  { month: 'Mar', temp: 11, rain: 110 },
  { month: 'Apr', temp: 14, rain: 100 },
  { month: 'May', temp: 18, rain: 85 },
  { month: 'Jun', temp: 23, rain: 60 },
  { month: 'Jul', temp: 26, rain: 30 },
  { month: 'Aug', temp: 26, rain: 35 },
  { month: 'Sep', temp: 21, rain: 90 },
  { month: 'Oct', temp: 16, rain: 120 },
  { month: 'Nov', temp: 11, rain: 160 },
  { month: 'Dec', temp: 8, rain: 155 },
];

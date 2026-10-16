export interface UKPostcodeItem {
  postcode: string;
  area: string;
  city: string;
  region: string;
}

export const POPULAR_UK_POSTCODES: readonly UKPostcodeItem[] = [
  // London Boroughs & Districts
  {
    postcode: "SW1A 1AA",
    area: "Westminster & Whitehall",
    city: "London",
    region: "Greater London",
  },
  {
    postcode: "SW11 1BB",
    area: "Battersea & Clapham",
    city: "London",
    region: "Greater London",
  },
  {
    postcode: "SW6 1AA",
    area: "Fulham & Chelsea",
    city: "London",
    region: "Greater London",
  },
  {
    postcode: "E16 1EA",
    area: "Docklands & Silvertown",
    city: "London",
    region: "Greater London",
  },
  {
    postcode: "E1 6AN",
    area: "Shoreditch & Whitechapel",
    city: "London",
    region: "Greater London",
  },
  {
    postcode: "EC1A 1BB",
    area: "City of London Core",
    city: "London",
    region: "Greater London",
  },
  {
    postcode: "W1D 4FA",
    area: "Soho & Oxford Street",
    city: "London",
    region: "Greater London",
  },
  {
    postcode: "W8 4PT",
    area: "Kensington & High Street",
    city: "London",
    region: "Greater London",
  },
  {
    postcode: "N1 9AL",
    area: "Islington & King's Cross",
    city: "London",
    region: "Greater London",
  },
  {
    postcode: "NW1 8UR",
    area: "Camden Town & Regent's Park",
    city: "London",
    region: "Greater London",
  },
  {
    postcode: "SE1 7PB",
    area: "Waterloo & Southwark",
    city: "London",
    region: "Greater London",
  },
  {
    postcode: "SE10 9HT",
    area: "Greenwich Peninsula",
    city: "London",
    region: "Greater London",
  },
  {
    postcode: "WC1A 1AA",
    area: "Bloomsbury & Holborn",
    city: "London",
    region: "Greater London",
  },

  // Birmingham & West Midlands
  {
    postcode: "B1 1BB",
    area: "New Street & City Centre",
    city: "Birmingham",
    region: "West Midlands",
  },
  {
    postcode: "B15 2TT",
    area: "Edgbaston & University",
    city: "Birmingham",
    region: "West Midlands",
  },
  {
    postcode: "B33 8TH",
    area: "Stechford & Yardley",
    city: "Birmingham",
    region: "West Midlands",
  },
  {
    postcode: "B90 4AA",
    area: "Solihull & Shirley",
    city: "Birmingham",
    region: "West Midlands",
  },
  {
    postcode: "CV1 2FL",
    area: "Coventry City Centre",
    city: "Coventry",
    region: "West Midlands",
  },
  {
    postcode: "WV1 1LY",
    area: "Wolverhampton Centre",
    city: "Wolverhampton",
    region: "West Midlands",
  },

  // Manchester & North West
  {
    postcode: "M1 1AE",
    area: "Piccadilly & Northern Quarter",
    city: "Manchester",
    region: "Greater Manchester",
  },
  {
    postcode: "M3 3BE",
    area: "Deansgate & Salford",
    city: "Manchester",
    region: "Greater Manchester",
  },
  {
    postcode: "M20 2RN",
    area: "Didsbury & Withington",
    city: "Manchester",
    region: "Greater Manchester",
  },
  {
    postcode: "L1 8JQ",
    area: "Liverpool One & Baltic Triangle",
    city: "Liverpool",
    region: "North West",
  },
  {
    postcode: "L8 7PF",
    area: "Toxteth & Princes Park",
    city: "Liverpool",
    region: "North West",
  },

  // Yorkshire & North East
  {
    postcode: "LS1 1UR",
    area: "Leeds City Station & Core",
    city: "Leeds",
    region: "Yorkshire",
  },
  {
    postcode: "LS6 1AY",
    area: "Headingley & Hyde Park",
    city: "Leeds",
    region: "Yorkshire",
  },
  {
    postcode: "S1 2HE",
    area: "Sheffield Peace Gardens",
    city: "Sheffield",
    region: "Yorkshire",
  },
  {
    postcode: "S10 2TN",
    area: "Broomhill & Ranmoor",
    city: "Sheffield",
    region: "Yorkshire",
  },
  {
    postcode: "YO1 7DT",
    area: "York Historic Centre",
    city: "York",
    region: "Yorkshire",
  },
  {
    postcode: "NE1 7RU",
    area: "Newcastle Quayside & Central",
    city: "Newcastle",
    region: "North East",
  },

  // South West & Wales
  {
    postcode: "BS1 5AH",
    area: "Bristol Harbourside & Centre",
    city: "Bristol",
    region: "South West",
  },
  {
    postcode: "BS8 4AA",
    area: "Clifton & Clifton Village",
    city: "Bristol",
    region: "South West",
  },
  {
    postcode: "BA1 1EE",
    area: "Bath Royal Crescent",
    city: "Bath",
    region: "South West",
  },
  {
    postcode: "CF10 1EP",
    area: "Cardiff Castle & Bay",
    city: "Cardiff",
    region: "Wales",
  },
  {
    postcode: "CF14 3AA",
    area: "Birchgrove & Whitchurch",
    city: "Cardiff",
    region: "Wales",
  },
  {
    postcode: "PL1 2AA",
    area: "Plymouth Hoe & Barbican",
    city: "Plymouth",
    region: "South West",
  },

  // South East & East Anglia
  {
    postcode: "BN1 1EE",
    area: "Brighton Lanes & Seafront",
    city: "Brighton",
    region: "South East",
  },
  {
    postcode: "BN3 2WW",
    area: "Hove & Seafront",
    city: "Brighton",
    region: "South East",
  },
  {
    postcode: "OX1 1ND",
    area: "Oxford Historic Broad St",
    city: "Oxford",
    region: "South East",
  },
  {
    postcode: "CB1 1AA",
    area: "Cambridge Station & Hills Rd",
    city: "Cambridge",
    region: "East of England",
  },
  {
    postcode: "CB2 1TJ",
    area: "Trumpington & Addenbrooke's",
    city: "Cambridge",
    region: "East of England",
  },
  {
    postcode: "SO14 7SJ",
    area: "Southampton Docks & Ocean Village",
    city: "Southampton",
    region: "South East",
  },
  {
    postcode: "PO1 2ER",
    area: "Portsmouth Historic Dockyard",
    city: "Portsmouth",
    region: "South East",
  },
  {
    postcode: "RG1 1DN",
    area: "Reading Oracle & Station",
    city: "Reading",
    region: "South East",
  },
  {
    postcode: "MK9 1BE",
    area: "Milton Keynes Central Station",
    city: "Milton Keynes",
    region: "South East",
  },
  {
    postcode: "NR1 1AA",
    area: "Norwich Riverside & Cathedral",
    city: "Norwich",
    region: "East of England",
  },

  // East Midlands
  {
    postcode: "NG1 1AA",
    area: "Nottingham Old Market Square",
    city: "Nottingham",
    region: "East Midlands",
  },
  {
    postcode: "LE1 1UT",
    area: "Leicester Highcross & City",
    city: "Leicester",
    region: "East Midlands",
  },

  // Scotland
  {
    postcode: "EH1 1YZ",
    area: "Edinburgh Princes Street & Old Town",
    city: "Edinburgh",
    region: "Scotland",
  },
  {
    postcode: "EH12 5XQ",
    area: "Haymarket & Murrayfield",
    city: "Edinburgh",
    region: "Scotland",
  },
  {
    postcode: "G1 1XQ",
    area: "Glasgow George Square",
    city: "Glasgow",
    region: "Scotland",
  },
  {
    postcode: "G12 8QQ",
    area: "Glasgow West End & Byres Rd",
    city: "Glasgow",
    region: "Scotland",
  },
  {
    postcode: "AB10 1XG",
    area: "Aberdeen Union Street",
    city: "Aberdeen",
    region: "Scotland",
  },
];

/**
 * Searches UK postcode database by postcode prefix or city/district name.
 */
export function searchUkPostcodes(
  query: string,
  maxResults = 6,
): UKPostcodeItem[] {
  if (!query || query.trim().length === 0) return [];
  const q = query.trim().toUpperCase().replace(/\s+/g, " ");

  return POPULAR_UK_POSTCODES.filter((item) => {
    const cleanPostcode = item.postcode.replace(/\s+/g, "").toUpperCase();
    const cleanQuery = q.replace(/\s+/g, "");

    return (
      cleanPostcode.startsWith(cleanQuery) ||
      item.postcode.toUpperCase().includes(q) ||
      item.city.toUpperCase().includes(q) ||
      item.area.toUpperCase().includes(q)
    );
  }).slice(0, maxResults);
}

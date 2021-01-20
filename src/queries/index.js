import {gql} from '@apollo/client';

export const GET_COUNTRIES = gql`
  query GetCountries($order: [_CountryOrdering], $searchText: String!) {
    Country(
      orderBy: $order
      filter: {
        OR: [{name_contains: $searchText}, {capital_contains: $searchText}]
      }
    ) {
      name
      population
      capital
      subregion {
        name
      }
      flag {
        svgFile
      }
      area
    }
  }
`;

import { gql } from '@apollo/client';

export const GET_AREAS = gql`
  query GetAreas {
    areas {
      id
      name
    }
  }
`;

export const GET_SPECTRUM = gql`
  query GetSpectrum($id: ID!) {
    spectrum(id: $id) {
      x
      y
    }
  }
`;
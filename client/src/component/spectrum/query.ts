import gql from "graphql-tag";

export const SPECTRUM_QUERY = gql`
    query Spectrum($id: ID) {
        spectrum(id: $id) {
            x,
            y
        }
    }
`;
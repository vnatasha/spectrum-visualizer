import gql from "graphql-tag";

export const AREAS_QUERY = gql`
    {
        areas {
            id,
            name
        }
    }
`;
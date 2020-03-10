import gql from "graphql-tag";

const COUNTRIES_QUERY = gql`
    query Countries {
        countries {
            id
            name
            slug
        }
    }
`;

export default COUNTRIES_QUERY;
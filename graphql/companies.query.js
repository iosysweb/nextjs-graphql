import gql from "graphql-tag";

const COMPANIES_QUERY = gql`
    query Companies {
        companies {
            id
            name
            slug
            jobs {
                id
                title
                slug
                applyUrl
            }
        }
    }
`;

export default COMPANIES_QUERY;
import { gql } from 'apollo-boost';

const addImpressionQuery = gql`
    mutation($date: String!, $productId: String!) {
        addImpression(date: $date, productId: $productId) {
            date
            id
        }
    }
`

export { addImpressionQuery };
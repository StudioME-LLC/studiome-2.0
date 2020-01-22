import { gql } from 'apollo-boost';

const addImpression = gql`
    mutation($date: String!, $productId: String!) {
        addImpression(date: $date, productId: $productId) {
            date
            id
        }
    }
`

export { addImpression };
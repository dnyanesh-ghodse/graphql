import {gql} from 'apollo-boost';



const getBookQuery = gql`
    {
        books{
            name
            genre
            id
        }
    }
`


const getAuthorsQuery = gql`
    {
        authors{
            name
            age
        }
    }
`


export {getAuthorsQuery , getBookQuery};  
import React from 'react';
import { graphql } from 'react-apollo';
import {getBookQuery} from "../queries/queries";


function Booklist(props) {
    let loading = props.data.loading; //data loading 
    let data = props.data.books;    // data books author
    console.log(data);
    return (
        <div>
            {loading ? <h2>Loading..</h2> : data.map(book => {
                return <article key={book.id}>
                    <li>Name :  {book.name}
                        <p>Genre : {book.genre}</p>
                    </li>
                </article>
            })}
        </div>
    )
}

export default graphql(getBookQuery)(Booklist)

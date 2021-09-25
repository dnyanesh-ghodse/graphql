import React from 'react';
import { graphql } from 'react-apollo';

import {getAuthorsQuery} from "../queries/queries";

function AuthorList(props) {
    let loading = props.data.loading;
    let authors = props.data.authors;
    return (
        <div>
            { loading ? <h4>Loading...</h4> : <ul>
                {authors.map(author => {
                    return <article key={author.id}>
                        <h3>{author.name} <span>{author.age}</span></h3>
                    </article>
                })}
            </ul> }
        </div>
    )
}

export default graphql(getAuthorsQuery)(AuthorList)

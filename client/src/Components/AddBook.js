import React,{useState} from 'react';
import { graphql } from 'react-apollo';
import {getAuthorsQuery} from "../queries/queries"


function AddBook(props) {
    let loading = props.data.loading;
    let authors = props.data.authors;

    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [authorId, setAuthorId] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();

        const data = {
            name,
            genre,
            authorId
        }
        console.log(data);
    }
    
    return (   
        <form action="" id="add-book" onSubmit={submitHandler}>
            <div className="field">
                <label htmlFor="">Book Name:</label>
                <input type="text"  onChange={e => setName(e.target.value)}/>
            </div>

            <div className="field">
                <label htmlFor="">Genre :</label>
                <input type="text"  onChange={e => setGenre(e.target.value)}/>
            </div>

            <div className="field">
                <label htmlFor="">Author :</label>
                <select name="" id="" onChange={e => setAuthorId(e.target.value)}> 
                {loading ? <option disabled>Loading Authors...</option> : authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)}
                </select>
            </div>

            <button>+</button>
        </form>
    )
}

export default graphql(getAuthorsQuery)(AddBook)

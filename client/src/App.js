import Booklist from "./Components/BookList";
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import AuthorList from "./Components/AuthorList";
import AddBook from "./Components/AddBook";

//apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})



function App() {

  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Reading List</h1>
        <Booklist />
        <AddBook/>
        <AuthorList />
      </div>
    </ApolloProvider>

  );
}

export default App;
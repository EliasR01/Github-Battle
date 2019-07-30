import React from 'react';
import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Home from '../components/home/Home';
import PlayerContainer from './PlayerContainer';
import { Router, Route} from 'react-router-dom';
import history from '../History';

const link = new HttpLink({ 
  uri: 'https://api.github.com/graphql',
  credentials: 'same-origin',
  headers: {
    authorization: `Bearer bcde280196a0508ed804d5652e4433bf1bed039b`,
  }
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <Route path="/" exact component={Home} />
        <Route path="/Battle" component={PlayerContainer} />
      </Router>
    </ApolloProvider>
  );
}

export default App;

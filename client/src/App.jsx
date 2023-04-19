import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Homepage from "./components/homepage/Homepage"
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <Homepage />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;

import React from 'react';
import { useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import Header from './components/header/Header';
import Footer from './components/Footer';
import Homepage from './components/homepage/Homepage';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Twit from './twit/Twit';
import NavigationBar from './components/pages/NavigationBar';
import Comment from './components/comments/comment';
import commentsList from "./utils/commentsList";
import ManyComments from './components/comments/manyComments';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            {/* <Route
          path="/timeline/:id"
          element={<Timeline />}
        /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/twit/:id" element={<Twit />} />
          </Routes>
          <ManyComments comments ={commentsList} />
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {ApolloProvider} from '@apollo/client';

import client from './src/apis/graphql';
import HomePage from './src/components/HomePage';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ApolloProvider client={client}>
          <HomePage />
        </ApolloProvider>
      </SafeAreaView>
    </>
  );
};

export default App;

import React from  'react'
import { StyleSheet,SafeAreaView } from 'react-native';
import Router from "./navigation/router"
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)
import { withAuthenticator } from 'aws-amplify-react-native';


const App = () => {
  return (
      <SafeAreaView style={styles.container}>
        <Router />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default withAuthenticator(App)

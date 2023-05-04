import { ApolloProvider } from 'react-apollo';
import client from './apollo';
import Launches from './Launches';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <ApolloProvider client={client} style={styles.container}>
      <Launches />
    </ApolloProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }

});





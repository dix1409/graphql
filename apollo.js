import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'https://spacex-production.up.railway.app/graphql',
});

export default client;

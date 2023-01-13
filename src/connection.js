import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const authLink = setContext((_, { headers }) => {
    return {
    headers: {
         ...headers, 'x-hasura-admin-secret': 'Mz1DOAmn1pjKQNl3m1VsXRo1YAQFzmVGxUErGoPu39NyWjRDRylwquAv2Xn5tQPO'
       }
     }
   });
   //instantiate ApolloClient
   const httpLink = createHttpLink({
     uri: 'https://u-space.hasura.app/v1/graphql',
    });
    
    export default new ApolloClient({
     link: authLink.concat(httpLink),
     cache: new InMemoryCache()
    });
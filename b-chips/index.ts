import { ApolloServer } from 'apollo-server';

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({ typeDefs, resolvers, csrfPrevention: true });
  const { url } = await server.listen();
  console.log(`🚀 Server ready at ${url}`);
}
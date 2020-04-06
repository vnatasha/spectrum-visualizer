import { ApolloServer } from 'apollo-server';
import 'graphql-import-node';
import * as typeDefs from './graphql/schema.graphql';
import { resolvers } from './graphql/resolver';

export class Server {
    private readonly server: ApolloServer;
    private readonly port: string | number;

    constructor() {
        this.server = new ApolloServer({typeDefs, resolvers});
    }

    run() {
        this.server.listen(4000).then(({ url }) => {
            console.log(`🚀  Server ready at ${url}`);
        });
    }
}
import { ApolloServer } from 'apollo-server';
import 'graphql-import-node';
import * as typeDefs from './graphql/schema.graphql';
import { resolvers } from './graphql/resolver';

interface IServerConfig {
    port: string | number;
}

export class Server {
    private readonly server: ApolloServer;
    private readonly port: string | number;

    constructor({ port }: IServerConfig) {
        this.port = port;
        this.server = new ApolloServer({ typeDefs, resolvers });
    }

    run() {
        this.server.listen(this.port).then(({ url }) => {
            console.log(`🚀 Server ready at ${url}`);
        });
    }
}
import { ApolloError } from 'apollo-server';

export class NotFoundAreaError extends ApolloError {
    constructor(message: string) {
        super(message, 'NOT_FOUND');
    }
}
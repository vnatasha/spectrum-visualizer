import { Server } from './server';
import dotenv from 'dotenv';

dotenv.config();

const server = new Server({ port: process.env.PORT || 4000 });
server.run();

export { server };
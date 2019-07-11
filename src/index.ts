import { importSchema } from "graphql-import";
import { GraphQLServer } from "graphql-yoga";
import "reflect-metadata";
import { resolvers } from "./resolvers";

const typeDefs = importSchema("schema.graphql");

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running on localhost:4000"));

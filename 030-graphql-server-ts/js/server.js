"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var resolvers_1 = require("./resolvers");
var fs_1 = __importDefault(require("fs"));
var typeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), fs_1.default.readFileSync(__dirname.concat('/../schema.graphql'), 'utf8'));
var server = new apollo_server_1.ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers_1.resolvers
});
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("Server running at " + url);
});
var templateObject_1;

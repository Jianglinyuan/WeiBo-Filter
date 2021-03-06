import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID
} from 'graphql';

import User from './UserSchema.js';

export default new GraphQLObjectType({
    name: 'User',
    description: 'A user',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        // products: {
        //
        // },
        // contacts: {
        //
        // },
        photo: {
            type: GraphQLString
        }
        // friends:{
        //   type: new GraphQLList()
        // }
    })
});

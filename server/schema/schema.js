const graphql=require("qraphql");

const {GrapQLObjectType,GrapQLString}=graphql

const BookType=new GraphQLObjectType({
    name:"Book",
    fields:()=>({
        id:{type:GrapQLString},
        name:{type:GrapQLString},
        genre:{type:GrapQLString},
    })
})

const RootQuery=new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        type:BookType,
        args:{id:{type:GrapqlHTTP}},
    }
})
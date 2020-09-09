const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const app = express()
const schema = buildSchema(`
    type Query {
        artist: String
    }

    type Artist {
        id: Int
        name: String
        photo: String
        followers: Int
    }
`)

const root = {
    artist: () => 'Drake'
}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), () => {
    console.log(`GraphQL server is running on PORT: ${app.get('port')}`)
})
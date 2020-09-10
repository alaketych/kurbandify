const cors = require('cors')
const { readFileSync } = require('fs')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const app = express()
app.use(cors())

const schemaString = readFileSync('./schema.graphql', { encoding: 'utf8' })
const schema = buildSchema(schemaString)

const Artists = [
    { id: 1, name: 'Drake',          followers: 34560023 },
    { id: 2, name: 'Logic',          followers: 22105940 },
    { id: 3, name: 'Postmalone',     followers: 20056971 },
    { id: 4, name: 'Kendrick Lamar', followers: 12752367 },
]

const Albums = [
    { id: 1, name: 'More Life', artistID: 1 },
    { id: 2, name: 'Views',     artistID: 1 },
    { id: 3, name: 'Scorpion',  artistID: 1 },
    { id: 4, name: 'Dark Lane', artistID: 1 },

    { id: 5, name: 'Under Pressure', artistID: 2 },
    { id: 6, name: 'Everybody',      artistID: 2 },
    { id: 7, name: 'No Pressure',    artistID: 2 },
    { id: 8, name: 'YSIV',           artistID: 2 },


    { id: 9,  name: 'Stoney',               artistID: 3 },
    { id: 10, name: 'Beerbongs & Bentleys', artistID: 3 },
    { id: 11, name: 'Hollywoods Bleeding',  artistID: 3 },
    { id: 12, name: 'August 26th',          artistID: 3 },


    { id: 13, name: 'DAMN.',            artistID: 4 },
    { id: 14, name: 'Finessed in Red',  artistID: 4 },
    { id: 15, name: 'Overly Dedicated', artistID: 4 },
    { id: 16, name: 'C4',               artistID: 4 },
]

const root = {
    getArtists: () => Artists,
    getAlbums:  () => Albums,
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
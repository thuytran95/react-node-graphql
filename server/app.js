const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross origin request
app.use(cors());

const uri =
	'mongodb+srv://admin:xJV6N17pEqX1icvJ@cluster0.vefao.mongodb.net/myFirstDatabase?retryWrites=true';

mongoose.connect(uri)
mongoose.connection.once('open', () => {
	console.log('connected database')
})

// su dung middle point to interact with our grapgql data
// /graphql: endpoint, callback function: handle graphql request
app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true
	})
);

app.listen(4000, () => {
	console.log(`Listening on port ${4000}`);
});

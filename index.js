const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');
const { Text } = require('@keystonejs/fields');

const keystone = new Keystone({
  name: 'test',
  adapter: new MongooseAdapter(),
});

keystone.createList('foo', { fields: { name: {type: Text }}});

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ enableDefaultRoute: true })],
};

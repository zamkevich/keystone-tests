const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');


const keystone = new Keystone({
  name: 'test_content',
  adapter: new MongooseAdapter(),
});


const { Content } = require('/Users/Z/Documents/Web-project/keystone/packages/field-content');

keystone.createList('foo', { fields: { text: { type: Content }}});
keystone.createList('bar', { fields: { text: { type: Content }}});

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ enableDefaultRoute: true })],
};

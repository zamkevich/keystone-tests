const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');
const { Text, Relationship } = require('@keystonejs/fields');

const keystone = new Keystone({
  name: 'test_relationship_flow_work',
  adapter: new MongooseAdapter(),
});


keystone.createList('foo', {
  fields: {
    ref: {
      type: Relationship,
      ref: 'bar.ref'
    },
    text: { type: Text },
  }
});
keystone.createList('bar', {
  fields: {    
    ref: {
      type: Relationship,
      ref: 'foo.ref'
    },
    text: { type: Text },
  }
});

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ enableDefaultRoute: true })],
};

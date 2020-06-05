const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');
const { Relationship } = require('@keystonejs/fields');

const keystone = new Keystone({
  name: 'test_content',
  adapter: new MongooseAdapter(),
});


//const { Content } = require('@keystonejs/field-content');
//TODO Change path to your package directory
const { Content } = require('/Users/Z/Documents/Web-project/keystone/packages/field-content');


keystone.createList('foo', {
  fields: {
    ref: {
      type: Relationship,
      ref: 'bar.ref'
    },
    text: { type: Content },
  }
});
keystone.createList('bar', {
  fields: {    
    ref: {
      type: Relationship,
      ref: 'foo.ref'
    },
    text: { type: Content },
  }
});

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ enableDefaultRoute: true })],
};

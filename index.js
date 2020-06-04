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
const { Content } = require('/Users/Z/Documents/Web-project/keystone/packages/field-content');



keystone.createList('foo', {
  fields: {
    ref: {
      type: Relationship,
      ref: 'bar.ref'
    },
    text: {
      type: Content,
      blocks: [
        Content.blocks.link,
      ],
    },

  }
});
keystone.createList('bar', {
  fields: {    
    ref: {
      type: Relationship,
      ref: 'foo.ref'
    },
    text: {
      type: Content,
      blocks: [
        Content.blocks.link,
      ],
    },

  }
});

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ enableDefaultRoute: true })],
};

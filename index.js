const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');
const { Text, Relationship } = require('@keystonejs/fields');

const keystone = new Keystone({
  name: 'test_relationship_flow_work',
  adapter: new MongooseAdapter(),
});


keystone.createList('L_1', {
  fields: {
    ref: {
      type: Relationship,
      ref: 'L_2.ref'
    },
    text: { type: Text },
  }
});
keystone.createList('L_2', {
  fields: {    
    ref: {
      type: Relationship,
      ref: 'L_1.ref'
    },    
    ref_2: {
      type: Relationship,
      ref: 'L_3.ref'
    },
    text: { type: Text },
  }
});
keystone.createList('L_3', {
  fields: {    
    ref: {
      type: Relationship,
      ref: 'L_2.ref_2'
    },    
    ref_2: {
      type: Relationship,
      ref: 'L_4.ref'
    },
    text: { type: Text },
  }
});
keystone.createList('L_4', {
  fields: {    
    ref: {
      type: Relationship,
      ref: 'L_3.ref_2'
    },
    text: { type: Text },
  }
});

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ enableDefaultRoute: true })],
};

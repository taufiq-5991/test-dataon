import DS from 'ember-data';
//import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import { inject as service } from '@ember/service';
import axios from 'axios';
// import Inflector from 'ember-inflector';

export default DS.RESTAdapter.extend({
  // buildURL: function(root, suffix, record) {
  //   console.log('buildURL');
  //   var url = this._super();
  //   console.log(url);
  //   console.log(root);
  //   console.log(suffix);
  //   console.log(record);


  //   if (url.toString().indexOf('/api/v1') === -1) {
  //     alert('NO /api/v1');
  //   }

  //   let modelName = Inflector.inflector.pluralize(root);
  // //   return `${url}/${modelName}`;
  // // },
  // urlForFindHasMany(id, modelName, snapshot) {
  //   console.log('urlForFindHasMany');
  //   let baseUrl = this.buildURL(id, modelName);
  //   console.log(baseUrl);
  //   console.log(id);
  //   console.log(modelName);
  //   console.log(snapshot);
  //   console.log(`${baseUrl}/relationships`);
  //   return `${baseUrl}`;
  // },
  /*
    temporary-fix because sails-ember-rest doesn't provide the namespace in the link
  */
  findHasMany(store, snapshot, link, relationship) {
    return this.ajax(this.get('namespace')+link, 'GET');
  },
  /*
    Override the updateRecord(), so can change the default HTTP's Method, from "PUT" to "PATCH"
    https://stackoverflow.com/a/31300911
    https://github.com/emberjs/data/blob/e89732a5aefb6a81b46927da1c6f048f4aede85e/packages/ember-data/lib/adapters/rest-adapter.js#L621
  */
  updateRecord(store, type, snapshot) {
    var data = {};
    var serializer = store.serializerFor(type.modelName);

    serializer.serializeIntoHash(data, type, snapshot);

    var id = snapshot.id;
    var url = this.buildURL(type.modelName, id, snapshot, 'updateRecord');

    return this.ajax(url, "PATCH", { data: data });
  },
  coalesceFindRequests: true,
  namespace: '/api/v1',
  //session: service('session'), 
  //this is dependent on production/development environment
  //It is configured in config/environment.js
  //host: ClientENV.hostUrl
  //add IP from $DOCKER_HOST if --docker flag is set
  /*
    change host to your IP Address if you want to make it available on LAN
  */
  host: 'http://localhost:4200',
  serverHost: 'http://localhost:8080',
  mainHost: 'http://localhost:4200',
  econmainHost: 'http://localhost:1339/api/v1',
  imagedomainHost: 'http://localhost',
  recaptchaSiteKey: '6Lck5B0UAAAAALQMYJwzAWLQW7ryfwoZAYXdJsBO',
  recaptchaSecretKey: '6Lck5B0UAAAAAFRiZERSs4t4KXvhZTtbQG7_8HuB',
  inactivityDuration: 20 // in minutes
  /*host: 'http://192.168.1.115:4200',
  serverHost: 'http://192.168.1.115:1337'*/
});

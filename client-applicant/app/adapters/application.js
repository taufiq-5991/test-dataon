import DS from 'ember-data';
import { inject as service } from '@ember/service';
import axios from 'axios';
// import Inflector from 'ember-inflector';

export default DS.RESTAdapter.extend({
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
  host: 'http://localhost:4200',
  serverHost: 'http://localhost:8080',
  mainHost: 'http://localhost:4200',
  econmainHost: 'http://localhost:1339/api/v1',
  imagedomainHost: 'http://localhost',
  inactivityDuration: 20 // in minutes
});

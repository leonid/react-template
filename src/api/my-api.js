/**
 *
 * API resource client
 *
 * List methods: "get", "post", "put", "patch", "delete"
 * Details methods: "get", "put", "patch", "delete"
 *
 */

import axios from 'axios';
import store from '../store';

class MyAPI {
  constructor( route, dispatchers ) {
    this.http  = axios;
    this.route = route;

    this.dispatchers = dispatchers;
  }

  getItem( id, data ) {
    if ( !id ) {
      return;
    }

    return this.http.get( `/${this.route}/${id}`, data ).then(
      response => {
        store.dispatch( this.dispatchers.get( response.data ) );
        return response;
      }
    );
  }

  getCollection( params, data ) {

    return this.http.get( `/${this.route}`, data ).then(
      response => {
        store.dispatch( this.dispatchers.list( response.data ) );
        return response;
      }
    );
  }

  create( newResource ) {
    return this.http.post( `/${this.route}`, newResource ).then(
      response => {
        store.dispatch( this.dispatchers.create( response.data ) );
        return response;
      }
    );
  }

  update( updatedResource ) {
    return this.http.patch( `/${this.route}/${updatedResource.id}`, updatedResource );
  }

  deleteItem( id ) {
    return this.http.delete( `/${this.route}/${id}` );
  }
}

export default MyAPI;

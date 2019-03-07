import { action, extendObservable } from 'mobx'
import { createContext } from 'react'
//import * as API from '../api'

class AuthStore {
  constructor() {
    extendObservable(this, {
      user: null,
      isInitialized: false,
      setUser: action((user) => {
        this.user = user
        this.isInitialized = true;
      }),
      login: action((email, password) => {
        return new Promise(function(resolve, reject) {
          setTimeout(function() {
            this.user = {
              'name': "Santhosh",
              'email': 'me@santbob.com'
            };
            resolve();
          }, 300);
        });
      }),
      register: action((email, password) => {
        return new Promise(function(resolve, reject) {
          setTimeout(function() {
            this.user = {
              'name': "Santhosh",
              'email': 'me@santbob.com'
            };
            resolve();
          }, 300);
        });
      }),
      authorize: action(() => {
        var self = this;
        return new Promise(function(resolve, reject) {
          setTimeout(function() {
            console.log('authorize is getting resolved')
            const user = {
              'name': "Santhosh",
              'email': 'me@santbob.com'
            };
            self.setUser(user)
            resolve(user);
          }, 300);
        });
      }),
      logout: action(() => {
        this.setUser(null)
      })
    });
  }
  // @observable user = null;
  // @observable isAuthenticated = false
  //
  // @action setUser(user) {
  //   this.user = user;
  // }
  //
  // @action setAuthenticated(isAuthed) {
  //   this.isAuthenticated = isAuthed;
  // }
}

export const AuthStoreContext = createContext(new AuthStore())

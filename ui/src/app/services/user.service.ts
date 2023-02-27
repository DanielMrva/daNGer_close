import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { User } from '../../../schemas/typeInterfaces';
import { ADD_USER, LOGIN_USER } from 'schemas/mutations';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private apollo: Apollo) { }

  addUser(username: string, email: string, password: string) {
    return this.apollo.mutate({
      mutation: ADD_USER,
      variables: {
        username,
        email,
        password
      }
    });
  }

  loginUser(username: string, password: string) {
    return this.apollo.mutate({
      mutation: LOGIN_USER,
      variables: {
        username,
        password
      }
    });
  }
}

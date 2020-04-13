import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {

  private username = 'Samuel-dot-cloud';
  // tslint:disable-next-line:variable-name
  private client_id = 'c022e9bf06a4b63e3dce';
  // tslint:disable-next-line:variable-name
  private client_secret = '8a5d35ec1b009f3f44fc3c08ef4310f58a5c7280';

  constructor(private http: HttpClient) {
    console.log('Github Component Init...');
  }

getUser() {
return this.http.get('https://api.github.com/users/' + this.username);
// tslint:disable-next-line:align
    //  .map(res => res.json());
}

getRepos() {
  return this.http.get('https://api.github.com/users/' + this.username + '/repos');
  // tslint:disable-next-line:align
      //  .map(res => res.json());
  }
}

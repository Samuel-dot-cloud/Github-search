import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {

  key = environment.apiKey;
  url = 'https://api.github.com/';


  constructor(private http: HttpClient) { }


  getUser(username) {
    return this.http.get(`${this.url}users/${username}?access_token=${this.key}`).toPromise();
   }
   getUserRepos(username) {
     return this.http.get(`${this.url}users/${username}/repos?access_token=${this.key}`).toPromise();
    }
 }

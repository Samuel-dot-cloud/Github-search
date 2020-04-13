import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from './../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {

  private username = 'Samuel-dot-cloud';
  // tslint:disable-next-line:variable-name
  private client_id = 'c022e9bf06a4b63e3dce';
  // tslint:disable-next-line:variable-name
  private client_secret = '8a5d35ec1b009f3f44fc3c08ef4310f58a5c7280';

  constructor(private http: HttpClient) { }


}

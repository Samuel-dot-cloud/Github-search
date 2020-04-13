import { Component, OnInit } from '@angular/core';
import {GithubRequestService} from '../github-http/github-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user: any;
repos: any;

  // tslint:disable-next-line:variable-name
  constructor(private _GithubRequestService: GithubRequestService) {
    this._GithubRequestService.getUser().subscribe(user => {
      // console.log(users);
      this.user = user;
    });

    this._GithubRequestService.getRepos().subscribe(Repos => {
      // console.log(users);
      this.repos = Repos;
    });

   }

  ngOnInit() {
  }

}

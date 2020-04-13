import { Component, OnInit } from '@angular/core';
import {GithubRequestService} from '../github-http/github-request.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user: any;
repos: any;
username: any;

  // tslint:disable-next-line:variable-name
  constructor(private _GithubRequestService: GithubRequestService) {


   }


   search() {

this._GithubRequestService.updateUsername(this.username);

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

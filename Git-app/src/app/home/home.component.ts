import { Component, OnInit } from '@angular/core';
import {GithubRequestService} from '../github-http/github-request.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { NgxSpinnerService } from 'ngx-spinner';

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
  constructor(private _GithubRequestService: GithubRequestService, private spinner: NgxSpinnerService) {


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
  /** spinner starts on init */
  this.spinner.show();

  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 5000);
}

  }



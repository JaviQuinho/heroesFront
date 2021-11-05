import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  stage: number;
  title: string;
  notThanos: boolean;
  msgNot: string;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.stage = 1;
    this.title = 'Who dare to bother me?';
    this.notThanos = false;
  }

  iAmThanos(stage: number): void{
    switch (stage) {
      case 0: {
        this.stage = stage;
        this.title = 'Ok, ok... If you say so... Enjoy preciozo!';
        this.notThanos = false;
        // this.authenticationService.youAreThanos = true;
        this.router.navigateByUrl('/');
        break;
      }
      case 1: {
        this.stage = stage;
        this.title = 'Who dare to bother me, again!?';
        this.notThanos = false;
        break;
      }
      case 2: {
        this.stage = stage;
        this.title = "Sure? You don't look like him";
        this.notThanos = false;
        break;
      }
    }
  }

  youAreNotThanos(notThanos: boolean, msg: number): void{
    this.notThanos = notThanos;
    switch (msg) {
      case 1: {
        this.msgNot = 'I care!';
        break;
      }
      case 2: {
        this.msgNot = 'Sorry, but you are not thanos';
        break;
      }
      case 3: {
        this.msgNot = 'Batman!?!? Get out of my house!!!!';
        break;
      }
    }
  }

}

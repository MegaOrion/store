import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


const LOGIN = "admin";
const PASSWORD = "123";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public isLoggedIn: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public login(log: string, pass: string): boolean {
    return this.isLoggedIn = LOGIN === log && PASSWORD === pass;
  }

}

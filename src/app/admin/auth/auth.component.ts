import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public authForm: FormGroup;
  public hasError: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.authForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'pass': new FormControl('', Validators.required)
    })
  }

  public login() {
    this.hasError = false;

    const isAuth = this.authService.login(
      this.authForm.get('name').value,
      this.authForm.get('pass').value
    );

    if (isAuth) {
      this.router.navigate(['admin','main'])
    } else {
      this.hasError = true;
    }
  }
}

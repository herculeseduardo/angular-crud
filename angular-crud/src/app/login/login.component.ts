import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  appTitle: string = 'Minha application';
  loginForm: FormGroup;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const payload = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }
    this.apiService.login(payload).subscribe(data => {
      if (data.status === 200) {
        window.localStorage.setItem('token', data.result.token);
        this.router.navigate(['home']);
      } else {
        this.invalidLogin = true;
      }
    })
  }

  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

}

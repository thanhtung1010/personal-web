import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      mail: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

}
